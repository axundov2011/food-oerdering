import User from "@/models/User";
import dbConnect from "@/util/dbConnect";
import bcrypt from "bcryptjs";

const handle = async(req, res) => {
    dbConnect();
    const { method, query: {id} } = req;
    if(method === "GET") {
        try {
            const user = await User.findById(id);
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    }
    if(method === "PUT") {
        try {
            if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
                req.body.confirmPassword = await bcrypt.hash(
                  req.body.confirmPassword,
                  10
                );
              }
              const users = await User.findByIdAndUpdate(id, req.body, {
                new: true,
              });
              res.status(200).json(users);
        } catch (error) {
            console.log(error);
        }
    }
}

export default handle