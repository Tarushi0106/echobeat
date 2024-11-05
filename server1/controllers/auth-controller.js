const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).json({ msg: "Welcome to the home page" });
    } catch (error) {
        console.log("ERROR IN HOME PAGE");
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const register = async (req, res) => {
    try {
        console.log("inside register controller")
        const { username, email, password, phone } = req.body;
        
        console.log(req.body);

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email ID already exists" });
        }

        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, password: hash_password, phone });
        return res.status(201).json({ userCreated , token :await userCreated.generateToken() });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "User does not exist!" });
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);
        if (isPasswordValid) {
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ message: "Invalid password" });
        }

    } catch (error) {
        console.log("ERROR IN LOGIN PAGE");
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(`Error in user route: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { home, register, login, user };
