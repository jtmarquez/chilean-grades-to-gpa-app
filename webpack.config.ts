import path from "path";
import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import DotEnv from "dotenv-webpack";

interface WebpackConfig extends Configuration {
    devServer?: {historyApiFallback: boolean}
}

const webpackConfig = (env): WebpackConfig => ({
    entry: "./src/index.tsx",
    ...(env.production || !env.development ? {} : {devtool: "eval-source-map"}),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
        //TODO waiting on https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/61
        //@ts-ignore
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js",
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ["@svgr/webpack"],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            publicPath: "/",
        }),
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
        new ForkTsCheckerWebpackPlugin(),
        new DotEnv({
            ignoreStub: env.production ? true : false,
            path: env.production ? "./.env" : "./.env.local",
        }),
    ],
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        historyApiFallback: true,
    },
});

export default webpackConfig;