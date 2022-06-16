import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const Account = mongoose.model("accounts", AccountSchema);

export default Account;
