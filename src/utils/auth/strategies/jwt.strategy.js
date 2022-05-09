import { Strategy, ExtractJwt } from "passport-jwt";
import config from "../../../database/config.js";

    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt_secret
    }
    
    const jwtStrategy = new Strategy(options, (payload, done) =>{
        return done(null, payload)
    });


export default jwtStrategy;