import * as mongoose from "mongoose";
(mongoose as any).Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1:27017/typescript_mongoose");
export {mongoose}

