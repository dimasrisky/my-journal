import jwt from 'jsonwebtoken'

function isTokenHaveBearer(authorizationString){
    const splittingToken = authorizationString.split(' ')
    const isBearer = splittingToken[0] == 'Bearer' && splittingToken.length === 2 ? true : false
    return isBearer
}

export function VerifyToken(request, response, next) {
    const { authorization } = request.headers
    if(!authorization) response.sendStatus(401)
    if(!isTokenHaveBearer(authorization)) response.json({ status: 'failed', message: 'Bearer token is required'})
    const token = authorization.split(' ')[1]
    try{
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        response.locals.payload = verifyToken
        next()
    }catch(error){
        response.json({status: 'failed', message: error})
    }
}