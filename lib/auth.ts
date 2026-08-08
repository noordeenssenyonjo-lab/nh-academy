import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'please-set-a-secret-in-env'
const TOKEN_EXPIRY = '7d'

export function signToken(payload: object){
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY })
}

export function verifyToken(token: string){
  try{
    return jwt.verify(token, JWT_SECRET)
  }catch(e){
    return null
  }
}
