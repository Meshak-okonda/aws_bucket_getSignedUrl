const AWS = require('aws-sdk');
require('dotenv').config();

const s3Client = new AWS.S3({
  accessKeyId: process.env.AccessKey,
  secretAccessKey: process.env.secretKey,
  region: 'eu-west-2',
  signatureVersion: 'v4'
});
const s3BucketName = process.env.S3_NAME;

const getS3UrlSigned = (nameFile) => {

  const url = s3Client.getSignedUrl('putObject', {
    Bucket: s3BucketName,
    Key: nameFile,
    Expires: 300,
  })

  return url;
}

module.exports = {
  getS3UrlSigned
}