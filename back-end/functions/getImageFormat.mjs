export function getImageFormat(image){
    const imageFormat = image.mimetype.split('/')[1]
    return imageFormat
}
