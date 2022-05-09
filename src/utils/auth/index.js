import jwtStrategy from "./strategies/jwt.strategy.js";
import passport from "passport";

passport.use(jwtStrategy);