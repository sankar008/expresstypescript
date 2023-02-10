import express, { Request, Response, Router, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
const router: Router = express.Router();
import userController from './UserController'
const User = new userController;
router.get('/', User.getUsers);
const Validation = [
  check('name', 'Name is a required filed').notEmpty(),
  check('emailId', "Email id is a required filed").notEmpty().isEmail().withMessage("Require a valid email id!!")
];
router.post('/', Validation, User.createUser);

export const usersRouter: Router = router;
