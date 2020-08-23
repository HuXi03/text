<template>
	<div class="ho_bottom">
		<div class="footer_cen">
			<div class="ho_bot">
				<ul>
					<li style="float: left;"><img width="40" height="40" src="../assets/images/letter.png" /></li>
					<li style="float: left;padding-left: 10px;padding-top: 10px;">
						<p>意见反馈</p>
					</li>
				</ul>

				<ul style="float: left;margin-top: 20px;">
					<li style="float: left;"><img width="40" height="40" src="../assets/images/phone.png" /></li>
					<li style="float: left;padding-left: 10px;">
						<p>24小时服务热线</p>95711
					</li>
				</ul>
			</div>
			<div class="ho_bot1">
				<ul>
					<li>
						<p style="color: black;font-size: 18px;">关于同程</p>
					</li>
					<li>同程简介</li>
					<li>可信网站</li>
					<li>法律声明</li>
					<li>网站地图</li>
					<li>旅游度假资质</li>
					<li>用户协议与隐私条款</li>
				</ul>
			</div>
			<div class="ho_bot1">
				<ul>
					<li>
						<p style="color: black;font-size: 18px;">加盟合作</p>
					</li>
					<li>合作加盟</li>
					<li>商旅合作</li>
					<li>网站联盟</li>
					<li>友情链接</li>
				</ul>
			</div>
			<div class="ho_bot1">
				<ul>
					<li>
						<p style="color: black;font-size: 18px;">联系我们</p>
					</li>
					<li>联系我们</li>
					<li>投诉建议</li>
					<li>诚聘英才</li>
				</ul>
			</div>
			<div class="ho_bot1">
				<ul>
					<li>
						<p style="color: black;font-size: 18px;">出行客合作网站</p>
					</li>
					<li><img width="120" style="border: 1px solid grey;border-radius: 4px;" height="40px" src="../assets/images/tongcheng.jpg"></li>
					<li><img width="120" style="border: 1px solid grey;border-radius: 4px;" height="40px" src="../assets/images/xiecheng.jpg"></li>
				</ul>
			</div>
			<div class="ho_bot1">
				<ul>
					<li>
						<p style="color: black;font-size: 18px;">出行客APP</p>
					</li>
					<li><img width="100" height="100" src="../assets/images/2wm.png"></li>
					<li>手机预订更优惠</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	ul li{
		list-style: none;
	}
	.ho_bottom {
		width: 100%;
		height: 100%;
		background-color: #DDDDDD;
		min-width: 1200px;
	}

	.footer_cen {
		width: 80%;
		height: 220px;
		/* border: 1px solid firebrick; */
		margin: 0 auto;
		min-width: 1000px;
		display: flex;
		justify-content: space-between
	}

	.ho_bot {
		height: 220px;
		width: 16%;
	}

	.ho_bot1 {
		height: 220px;
		width: 13%;
		/* border: 1px solid firebrick; */
	}
	
	.ho_bot>ul,.ho_bot1>ul{
		margin-top: 20px;
	}
	.ho_bot1 ul li {
		font-size: 14px;
		color: gray;
		margin-top: 3px;
	}
</style>
