
sudo apt-get update -y

# Install apt HTTPS transport
sudo apt-get install apt-transport-https -y



# Nodejs
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get update -y
sudo apt-get install  nodejs -y
sudo npm install -g pm2
sudo npm install -g nodemon
sudo npm install -g @vue/cli @vue/cli-service
pm2 startup | bash -
# Gives user access to pm2 without sudo
sudo chown ruby:ruby /home/ruby/.pm2/rpc.sock /home/ruby/.pm2/pub.sock


# Mongodb
wget -qO - https://www.mongodb.org/static/pgp/server-4.0.asc | sudo apt-key add -
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install -y libcurl3 
sudo apt-get install -y mongodb-org 
sudo mkdir /data/db -p
sudo chown ruby /data/ -R
sudo systemctl enable mongod.service
sudo service mongod start


# Log into github
sudo chown ruby /home/ruby/.config/ -R
git config --global user.name "rubyrubenstahl"
git config --global user.email "ruby@ruby-lighting.com"

# Create an SSH key
ssh-keygen -q -t rsa -N '' -f ~/.ssh/id_rsa 2>/dev/null <<< y >/dev/null
sudo chown ruby ~/.ssh/id_rsa
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa


# Install & configure nginx
sudo apt-get install nginx -y
sudo tee  /etc/nginx/sites-available/default <<EOT



server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;
        server_name _;

        location / {
        proxy_pass http://localhost:3030;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        }
}
EOT


sudo tee  /etc/nginx/sites-enabled/cd.kroh.tech <<EOT

upstream gocd {
    server 127.0.0.1:8153;
}

server {
    server_name cd.kroh.tech
    location / {
        #try_files $uri $uri/ =404;
        proxy_pass http://gocd;
        include proxy_params;
    }
}
EOT


# Install certbot
sudo apt-get install software-properties-common -y
sudo add-apt-repository universe -y
sudo add-apt-repository ppa:certbot/certbot -y
sudo apt-get install certbot python-certbot-nginx -y


echo "deb https://download.gocd.org /" | sudo tee /etc/apt/sources.list.d/gocd.list
curl https://download.gocd.org/GOCD-GPG-KEY.asc | sudo apt-key add -
sudo apt-get update

sudo apt-get install go-server