import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function createUser(req, res) {

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword
    });

    user.save()
        .then(() => {
            res.status(200).json({
                message: "user saved successfully"
            });
        })
        .catch(() => {
            res.status(500).json({
                message: "user creation failed"
            });
        });
}

export function loginUser(req, res) {

    User.findOne({
        email: req.body.email
    })
    .then((user) => {

        if (user == null) {
            res.status(404).json({
                message: "user not found"
            });
            console.log("user not found...");
        } 
        else {
            const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

            if (isPasswordValid) {

                const token = jwt.sign({
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    image: user.image,
                    isEmailVerified: user.isEmailVerified
                }, "i-computers-54!");

                console.log(token);

                res.json({
                    message: "login successful.correct password"
                });
            } 
            else {
                console.log("login unsuccessful.wrong password");
            }
        }
    });
}
