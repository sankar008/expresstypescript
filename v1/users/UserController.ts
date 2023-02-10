import { NextFunction, Request, Response, Router } from 'express';
import { User } from "./UserService";
import { check, validationResult } from 'express-validator';

class UserController {        
    public getUsers = async (req:Request, res:Response, next:NextFunction) => {
       return res.status(200).json({
        success: 1,
        message: "Test"
       })
    }
    public createUser =  async (req: Request, res:Response) => {  
        const body = req.body;

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() })
        }

        try{
            const user = new User({
                emailId: body.emailId,
                name: body.name
            });

            user.save((err) => {
                if (err) {
					return res.json({
						error: err
					});
				}
                return res.json({
					message: 'You have been successfully registered with us!'
				});
            })
        }catch(e){
            return res.status(200).json({
                success: 0,
                msg: e
            })
        }      
        
    }
}
export default UserController;