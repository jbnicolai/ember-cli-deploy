'use strict';

module.exports = {
  name: 'deploy:assets',
  description: 'Deploys assets to S3',
  works: 'insideProject',

  availableOptions: [
    { name: 'aws-key', type: String },
    { name: 'aws-secret', type: String },
    { name: 'aws-bucket', type: String },
    { name: 'aws-region', type: String, default: 'us-east-1' }
  ],

  run: function(commandOptions, rawArgs) {
    console.log(commandOptions);
    console.log(rawArgs);
    console.log('Run');
  }
};