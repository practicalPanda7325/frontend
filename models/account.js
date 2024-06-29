import mongoose, {Schema} from "mongoose";

const accountSchema = new Schema (
    {
        accountAddress: String,
        accountName: String,
        assets: mapping(string,int)
    },
);

const Account =  mongoose.model.Account || mongoose.model("Account", accountSchema);

export default Account

