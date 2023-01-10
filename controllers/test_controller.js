const AWS = require('aws-sdk');
// AWS.config.update({
//   aws_access_key_id : 'AKIAY74DF3JTFUGFP5OT',
//   aws_secret_access_key: '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',
//   region: 'us-west-2'
// });

exports.test = async (req, res) => {

  // Create S3 service object
  s3 = new AWS.S3({apiVersion: '2006-03-01'});
  AWS.config.loadFromPath('C:/Users/Drt_m/Projects/aws_nodejs/controllers/config.json');

  // Call S3 to list the buckets
  await s3.listBuckets(function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Buckets);
    }
  });

  return res.send('hello world');
}