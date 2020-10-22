const { s3 } = require("../config/AWS");

module.exports = class S3 {
    constructor(key) {
        this.Bucket = process.env.AWS_BUCKET_NAME;
        this.Key = key;
    }

    getFromS3 = async (respondFn) => {
        // NO try catch block here, because we want to have
        // customized try catch block outside to catch error  
        const result = await s3.getObject({Bucket: this.Bucket, Key: this.Key}).promise();
        // return response if we got the object
        console.log("we are fine in getFromS3")
        return respondFn(result.Body);
    }
}

// exports.getFromS3 = async (key, respondFn) => {
//     // NO try catch block here, because we want to have
//     // customized try catch block outside to catch error
//     const params = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: key,
//     };

//     const result = await s3.getObject(params).promise();
//     // return response if we got the object
//     console.log("we are fine in getFromS3")
//     return respondFn(result.Body);
// }