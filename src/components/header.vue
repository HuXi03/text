<template>
	<div>
		<div class="ho_top">
			<div class="ho_top_img">
				<img src="../assets/images/travelerslogo.png" />
			</div>
			<div class="ho_nav">
				<ul>
					<li>首页</li>
					<li>预定</li>
					<li>主题游</li>
					<li>攻略</li>
					<li>商城</li>
					<li>关于我们</li>
				</ul>
			</div>
			<div class="ho_login">
				<ul>
					<li style="padding-left: 15px;"><img width="22" height="22" src="../assets/images/taobao.png"></li>
					<li style="padding-left: 15px;"><img width="18" height="18" src="../assets/images/QQ.png"></li>
					<li style="padding-left: 15px;"><img width="20" height="20" src="../assets/images/weixin.png"></li>
					<li style="padding-left: 15px;"><img width="20" height="20" src="../assets/images/weibo.png"></li>
					<li style="padding-left: 15px;color: #FFFFFF;">您好,请<span style="color: #FFFFFF;font-weight: bold;margin-left: 5px;">登录</span></li>
					<li style="padding-left: 15px;color: #FFFFFF;font-weight: bold;">免费注册</li>
				</ul>
			</div>
		</div>



	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: 0
			}
		}
	}
</script>

<style>
	* {
		padding: 0 0;
		margin: 0 0;
	}

	ul li {
		list-style-type: none;
	}

	a {
		text-decoration: none;
	}

	.ho_top {
		padding-top: 10px;
		width: 100%;
		height: 80px;
		color: white;
		/* background: rgba(17, 17, 17, 0.5)none repeat scroll !important; */
		-webkit-font-smoothing: antialiased;
		min-width: 1200px;
		background: rgba(207, 219, 225, 0.5) none repeat scroll !important; 
		background-color: #c6c6c6;
		/* opacity: 0.5; */
		filter: Alpha(opacity=100); 
		position: absolute;
		z-index: 999;
	}

	.ho_top_img {
		width: 150px;
		height: 50px;
		/* background-color: aquamarine; */
		float: left;
		margin-left: 30px;
	}

	.ho_nav {
		padding-top: 10px;
		width: 40%;
		height: 50px;
		/* background-color: aqua; */
		float: left;
		margin-left: 20px;
	}

	.ho_nav ul li {
		float: left;
		margin-left: 20px;
		/* width: 10%; */
		text-align: center;
		font-size: 18px;
		color: white;
		font-weight: bold;
		/* background-color: #FFC0CB; */
	}

	.ho_nav ul li:hover {
		border-bottom: 3px solid white;
	}

	.ho_login {
		padding-top: 15px;
		width: 30%px;
		height: 50px;
		/* background-color: blue; */
		float: right;
		margin-right: 30px;
	}

	.ho_login ul li {
		float: left;
		/* text-align: center; */
		font-size: 14px;
	}

	.swipe {
		width: 100%;
		min-width: 1200px;
	}

	.ho_bottom {
		padding-top: 20px;
		margin-top: 500px; 
		width: 100%;
		height: 240px;
		background-color: #DDDDDD;
		min-width: 1200px;
	}

	.ho_bot {
		/* background-color: aquamarine; */
		width: 12%;
		float: left;
		margin-left: 180px;
	}

	.ho_bot1 {
		/* background-color: aquamarine; */
		width: 10%;
		float: left;
		margin-left: 50px;
	}

	.ho_bot1 ul li {
		font-size: 14px;
		color: gray;
		margin-top: 3px;
	}

	/* .ho_ser{
		width: 800px;
		height: 120px;
		background-color: aquamarine;
		position: absolute;
		top: 240px;
		left: 350px;
	} */
</style>
