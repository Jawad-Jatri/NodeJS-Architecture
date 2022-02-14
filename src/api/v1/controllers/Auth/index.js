import { makeLogin } from "./login.js";
import { makeRefreshToken } from "./refreshToken.js";
import { makeInitialUser } from "./initialUser.js";

import {
  loginService,
  refreshTokenService,
  initialUserService,
} from "../../services/Auth/index.js";

export const login = makeLogin({ loginService });
export const refreshToken = makeRefreshToken({ refreshTokenService });
export const initialUser = makeInitialUser({ initialUserService });


