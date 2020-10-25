export function* populatePexelPhotos(pexelPhotos) {
    try {
        const photoArray = [];
        yield pexelPhotos.forEach((photo) => {
            const photoObj = {};

            // get preview img url (smaller size)
            photoObj.previewUrl = photo.src.medium;
            // get preview src url (biggest size)
            photoObj.srcUrl = photo.src.original;

            photoArray.push(photoObj);
        })

        return photoArray;
    } catch (error) {
        
    }
}