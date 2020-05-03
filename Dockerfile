
FROM node AS buildenv
WORKDIR /frontend-build

ENV projectName "kt-partner-manager-frontend"
# restore

# copy src

COPY ./frontend/package**.json ./
COPY ./frontend ./

# Mark production as false so the build tools get installed
RUN npm install node-gyp
RUN npm install --production=false
RUN npx quasar build spa
RUN npx modclean -n default:safe -r

# Runtime stage

FROM nginx
ENV projectName "kt-partner-manager-frontend"
COPY --from=buildenv /frontend-build/dist/spa /usr/share/nginx/html
COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf
RUN service nginx start
EXPOSE 80