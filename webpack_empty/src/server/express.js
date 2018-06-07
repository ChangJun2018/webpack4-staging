// 启动一个服务器
import express from "express";
import path from "path";

// 创建服务器

const server=express()

// 配置启动路径
const staticMiddleware=express.static("dist");

// 监听代码
const webpack=require("webpack");
const config=require("../../config/webpack.dev.js");
const compiler=webpack(config)


const webpackDevMiddlewara=require("webpack-dev-middleware")(compiler,config.devServer)

// 实现热更新
const webpackHotMiddlewara=require("webpack-hot-middleware")(compiler)

server.use(webpackDevMiddlewara);
server.use(webpackHotMiddlewara)
server.use(staticMiddleware)


server.listen(8080,()=>{
    console.log("Server is running ...")
})