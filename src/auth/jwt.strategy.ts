import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { jwtConstants } from "./constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),// v insomnii -> header -> Authorization , druhy policko: bearer tvuj-jwt-access-token //bacha expiruje po minute
            ignoreExpiration:false,
            secretOrKey:jwtConstants.secret
        })
    }

    async validate(payload:any){
        return {
            username:payload.username
        }
    }
}