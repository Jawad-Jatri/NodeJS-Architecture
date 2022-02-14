import {makeLoginService} from "./login.js"
import {makeInitialUserService} from "./initialUser.js"
import {makeRefreshTokenService} from "./refreshToken.js"
import {User} from "../../repositories/index.js"


export const loginService = makeLoginService({User})
export const initialUserService = makeInitialUserService({User})
export const refreshTokenService = makeRefreshTokenService({User})


