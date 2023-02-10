import express, { Application, NextFunction, Request, Response } from 'express';
const PORT = 3001;
const app:Application = express();
import { json, urlencoded } from "body-parser";
import * as http from "http";
const httpsServer = http.createServer(app);
import multer, { FileFilterCallback } from 'multer'
import {usersRouter} from "./v1/users/UserRouter"
import cors from 'cors'




app.use(cors());
const upload = multer({
	limits: { fieldSize: 25 * 1024 * 1024 }
});
app.use(upload.none());
app.use(json({ limit: '500000mb' }));
app.use(urlencoded({ limit: '500000mb', extended: true }));

app.use("/v1/user", usersRouter);

httpsServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
