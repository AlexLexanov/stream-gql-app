module.exports = {
  apps : [{
    script: 'main.js',
    instances : "max",
    exec_mode : "cluster",
    watch: '.'
  }, {
    script: './dist/',
    watch: ['./dist']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
