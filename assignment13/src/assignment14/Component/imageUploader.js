import {RNS3} from 'react-native-aws3';

const options = {
  keyPrefix: 'uploads/',
  bucket: 'appinventiv-development',
  region: 'us-east-1',
  accessKey: 'AKIAJ3UHQTWRRT2AH3RA',
  secretKey: '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',
  successActionStatus: 201,
};

export default upLoadImage = (file, callback) => {
  //   console.warn('ghfhgfghfgf');
  RNS3.put(file, options)
    .progress(e => console.warn(e.loaded / e.total))
    .then(response => {
      if (response.status !== 201)
        throw new Error('Failed to upload image to S3');
      //       console.log('response arte');
      console.warn(response);
      callback(response.body);
    });
};

// S3_BUCKET = 'appinventiv-development';
// S3_REGION = 'us-east-1';
// S3_ACCESS_KEY_ID = 'AKIAJ3UHQTWRRT2AH3RA';
// S3_SECRET_ACCESS_KEY = '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';
