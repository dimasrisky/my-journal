export function VerifyImage(request, response, next){
    const allowedFormatImage = ['image/png', 'image/jpeg', 'image/jpg']
    const { image } = request.files
    allowedFormatImage.includes(image.mimetype) === true ? next() : response.status(500).json({ status: 'failed', message: 'invalid image format'})
}