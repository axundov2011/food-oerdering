import User from "@/models/User";
import dbConnect from "@/util/dbConnect";
import bcrypt from "bcryptjs";
const handle = async (req, res) => {
    await dbConnect();
    const body = req.body
    const user =  await User.findOne({email: body.email});
    if(user) {
        res.status(400).json({message: "User already exists"});
        return
    }

    try {
        const newUser  = await new User(body);
        // generate salt to has password
        const salt = await bcrypt.genSalt(10);
        // create hash
        const password = await bcrypt.hash(newUser.password, salt);
        const confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt);
        newUser.password = password;
        newUser.confirmPassword = confirmPassword; 
        await newUser.save();
        res.status(200).json(newUser);
        // set password to hashed  
    } catch (err) {
        console.log(err);
        
    }
}

export default handle;