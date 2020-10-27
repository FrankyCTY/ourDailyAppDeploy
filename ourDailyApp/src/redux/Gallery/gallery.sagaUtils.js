export function* populatePexelPhotos(pexelPhotos) {
    try {
        const photoArray = [];
        yield pexelPhotos.forEach((photo) => {
            const photoObj = {};

            // get preview img url (smaller size)
            const oriUrl = photo.src.medium;
            const oriUrlqueryStartIndex = oriUrl.lastIndexOf("?");
            const srcUrl = oriUrl.substring(0, oriUrlqueryStartIndex + 1) + "auto=compress&cs=tinysrgb&h=1800&w=3060";

            console.log({srcUrl})

            photoObj.previewUrl = photo.src.medium;
            // get preview src url (biggest size)
            photoObj.srcUrl = srcUrl;

            photoArray.push(photoObj);
        })

        return photoArray;
    } catch (error) {
        
    }
}