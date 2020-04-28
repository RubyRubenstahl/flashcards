module.exports = {
  apps: [
    {
      name: "kt-partner-mgr-production",
      script: "src/index.js",
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name: "kt-partner-mgr-staging",
      script: "src/index.js",
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "staging"
      },
      env_production: {
        NODE_ENV: "staging"
      }
    },
    {
      name: "kt-partner-mgr-development",
      script: "src/index.js",
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "development"
      }
    }
  ]
};
