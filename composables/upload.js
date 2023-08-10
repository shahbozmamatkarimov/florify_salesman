// const {Storage} = require('@google-cloud/storage');

// const storage = new Storage({
//   projectId: 'fileupload-393404',
// });

// const bucketName = 'florify';
// const bucket = storage.bucket(bucketName);


// async function uploadFileToGCS(filePath) {
//   const uploadResponse = await bucket.upload(filePath, {
//     destination: "file-destination-path.jpg",
//     metadata: {
//       cacheControl: "public, max-age=31536000",
//     },
//   });
//   console.log(`Upload complete for ${filePath}.`);
//   return uploadResponse;
// }
