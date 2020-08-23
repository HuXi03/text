module.exports = {


	// 我是添加的代码  start
	publicPath: './', // 相对路径
	outputDir: './dist', // 构建输出目录    
	assetsDir: 'static', // 静态资源目录
	productionSourceMap: false,
	lintOnSave: false, // 是否开启 eslint 保存检测  
	// vue  跨域访问设置
	devServer: {
		https: false, // 是否启用 https 访问
		open: false, //配置自动启动浏览器
		proxy: {
			'/apis': {
				target: 'http://192.168.1.101:8070', // 要请求的代理地址
				ws: true, // 是否跨域
				changeOrigin: true, // needed for virtual hosted sites
				pathRewrite: {
					'^/apis': '' // rewrite path
				}
			},
		}
	},

	// 我是添加的代码  end


}
