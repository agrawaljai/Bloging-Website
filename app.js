require("dotenv").config();


const path = require("path");
const express = require("express");
const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/auth");
const Blog = require("./models/blog");


const app = express();
const PORT = process.env.PORT || 8000;

// mongodb://127.0.0.1:27017/blogifyer
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Mongo database connected successfully!"));

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')));

app.get("/", async (req, res) => {
    const allBlogs = await Blog.find({});
    return res.render('home', {
        user: req.user,
        blogs: allBlogs,
    });
});

app.use('/user', userRoute);
app.use('/blog', blogRoute);


app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
