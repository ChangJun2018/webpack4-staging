const path=require("path")
const webpack=require("webpack")
const HTMLWebpackPlugin=require("html-webpack-plugin")
module.exports={
    //入口:有并且可以有多个
    entry:{
        main:["./src/main.js"]
    },
    //打包环境：开发&生产
    mode:"development",
    //出口，有且只能有一个
    output:{
        //打包之后的文件名
        filename:"[name]-bundle.js",
        //打包之后路径
        path:path.resolve(__dirname,"../dist"),
        //公开的引入路径
        publicPath:"/"
    },
    //本地服务器
    devServer:{
        contentBase:"dist",
        hot:true,
        overlay:true
    },
    // 本地调试工具
    devtool:"source-map",
    module:{
        rules:[
            // js loader
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ],
                exclude:/node_modules/
            },
            // css loader
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"postcss-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
            // sass loader
            {
                test:/\.sass$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader"
                    },
                    {
                        loader:"sass-loader"
                    }
                ]
            },
            // less loader
            {
                test:/\.less$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader"
                    },
                    {
                        loader:"less-loader"
                    }
                ]
            },
            //stylus loader
            {
                test:/\.stylus$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader"
                    },
                    {
                        loader:"stylus-loader"
                    }
                ]
            },
            // html loader
            {
                test:/\.html$/,
                use:[
                    // {
                    //     loader:"file-loader",
                    //     options:{
                    //         name:"[name].html"
                    //     }
                    // },
                    // {
                    //     loader:"extract-loader",
                    // },
                    {
                        loader:"html-loader",
                        options:{
                            attrs:["img:src"]
                        }
                    }
                ]
            },
            // img loader
            {
                test:/\.(bmp|jpg|png|tiff|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: 
    [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        })
    ]
}