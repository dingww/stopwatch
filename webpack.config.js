var webpack = require('webpack');
module.exports = { //注意这里是exports不是export
	devtool: 'eval-source-map', //生成Source Maps,这里选择eval-source-map
	entry: __dirname + "/app/stopWatch.js", //唯一入口文件，就像Java中的main方法
	output: { //输出目录
		path: __dirname + "/build", //打包后的js文件存放的地方
		filename: "bundle.js" //打包后的js文件名
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style!css'
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	]
};