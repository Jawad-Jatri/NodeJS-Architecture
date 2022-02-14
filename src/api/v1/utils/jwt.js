import jwt from 'jsonwebtoken'

export const createToken = ({payload}) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_VALIDITY});
};

const createRefreshToken = ({payload}) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: process.env.REFRESH_TOKEN_VALIDITY});
};

export const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

export const  authenticationToken = (token, refreshToken) => {
  const accessTokenJWT = createToken({payload: token});
  const refreshTokenJWT = createRefreshToken({payload: refreshToken});

  const oneDay = 1000 * 60 * 60 * 24; //1 day
  const longerExp = 1000 * 60 * 60 * 24 * 2; //2 days

  return {
    accessToken: accessTokenJWT,
    refreshToken: refreshTokenJWT,
    cookies: [
      {
        key: 'accessToken',
        value: accessTokenJWT,
        options: {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          signed: true,
          expires: new Date(Date.now() + oneDay),
        }
      },
      {
        key: 'refreshToken',
        value: refreshTokenJWT,
        options: {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          signed: true,
          expires: new Date(Date.now() + longerExp),
        }
      }
    ]
  }
};

