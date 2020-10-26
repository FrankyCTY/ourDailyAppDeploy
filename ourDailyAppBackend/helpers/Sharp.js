const sharp = require("sharp");

module.exports = class Sharp {
    constructor(imgBuffer) {
        this.imgBuffer = imgBuffer
    }

    async formatAvatar() {
        return await sharp(this.imgBuffer)
        .toFormat("jpeg")
        .resize(250, 250)
        .jpeg({ quality: 80 })
        .toBuffer();
    }
}