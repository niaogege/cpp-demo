/*
 * @Author: Chendapeng
 * @Date: 2021-10-05 17:26:49
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-05 17:35:22
 * @Description: 
 */
module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.',
    instances : "1",
    exec_mode : "cluster" 
  }],

  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
