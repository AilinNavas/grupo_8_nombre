const express = require ("express");

const path = require("path");

const app = express();

const mainRoutes = require("./routes/main");

const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));

// app.get('/',(req, res)=>{
// res.sendFile(path.join(__dirname, './views/index.ejs'));
// });

// app.get('/productDetail',(req, res)=>{
//     res.sendFile(path.join(__dirname, './views/productDetail.html'));
// });
// app.get('/register',(req, res)=>{
//     res.sendFile(path.join(__dirname, './views/register.html'));
// });
// app.get('/productCart',(req, res)=>{
//     res.sendFile(path.join(__dirname, './views/productCart.html'));
// });

// app.get('/login',(req, res)=>{
//     res.sendFile(path.join(__dirname, './views/login.html'));
// });

app.set ("view engine" , "ejs");
app.set("views", path.join(__dirname, "views"));


app.use("/", mainRoutes);
app.use("/register", mainRoutes);
app.use("/login", mainRoutes);
app.use("/productCart", mainRoutes);
app.use("/productCreation" , mainRoutes);
app.use("/productoCompra" , mainRoutes);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
});

