const sharp = require("sharp");

module.exports = class Sharp {
    constructor(imgBuffer) {
        this.imgBuffer = imgBuffer
    }

    async formatAvatar() {
        return await sharp(this.imgBuffer)
        .resize(500, 500)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toBuffer();
    }
}