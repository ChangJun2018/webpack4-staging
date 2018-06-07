require("babel-runtime/regenerator");
require("webpack-hot-middleware/client?reload=true");
// require("./main.sass")
// require("./main.css");
require("./main.less");
require("./index.html");


let a= async ()=>{
    await console.log("Hello ChangJun");
}