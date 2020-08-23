<template>
	<div class="travelersShop">
		<div class="header">
			<shop-header></shop-header>
		</div>
		<!-- 美食、小神器海报 -->
		<div class="poster">
			<div class="posterCon">
				<div class="foodPoster">
					<img src="../assets/images/foodban1.png"/>
				</div>
				<div class="artifactPoster">
					<div class="artifactPostercon">
						<img src="../assets/images/nuomifan.jpg" />
					</div>
					<div class="artifactPostercon">
						<img src="../assets/images/bibeihaowu.jpg" />
					</div>
					<div class="artifactPostercon">
						<img src="../assets/images/travelban2.jpg" />
					</div>
				</div>
			</div>
		</div>
		<!-- 出行必备 -->
		<div class="travelNecessity">

			<i-col span="24" class="tabsStyle1" style="padding:16px;">
				<div class="tNsity">出行必备</div>
				<Tabs type="card">
					<!-- <Tab-pane label="出行必备"></Tab-pane> -->
					<Tab-pane label="热卖随身WiFi">
						<div class="take1">
							<img src="../assets/images/nessbaner.jpg" />
						</div>
						<div class="take1List">
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/wifi1.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">【全国极速】无限流量漫游超人4G网络随身WIFI（....</div>
									<span id="taPrice">￥155起</span><span id="taShop">供应商：中国移动</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/wifi2.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">【台湾高速】通用高速WIFI租赁 4G极速上网（....</div>
									<span id="taPrice">￥199起</span><span id="taShop">供应商：中国电信</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/wifi3.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">多地区高速通用移动WIFI（30天起订）自取（....</div>
									<span id="taPrice">￥99起</span><span id="taShop">供应商：中国电信</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/wifi4.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">【全国极速】无限流量多城市自取随身WIFI（....</div>
									<span id="taPrice">￥119起</span><span id="taShop">供应商：中国联通</span>
								</div>
							</div>
						</div>
					</Tab-pane>
					<Tab-pane label="必备神器">
						<div class="take1">
							<img src="../assets/images/artifact.jpg" />
						</div>
						<div class="take1List">
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/storageBag.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">防水旅游收纳袋衣服鞋子化妆品，超大容量....</div>
									<span id="taPrice">￥25起</span><span id="taShop">店铺：梨花多多旅行</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/kettle.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">折叠便携式电热水壶旅行必备，到哪都可以喝干净热水....</div>
									<span id="taPrice">￥25起</span><span id="taShop">店铺：梨花多多旅行</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<!-- <img src="../assets/images/alarm.jpg" /> -->
								</div>
								<div class="taListText">
									<div class="taListTextTitle">女孩子一个人外出旅行必备一个旅行报警器，遇险方便拉开求助....</div>
									<span id="taPrice">￥25起</span><span id="taShop">店铺：梨花多多旅行</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/selfie.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">自拍杆简直就是自拍党的必备神器，出门怎能没....</div>
									<span id="taPrice">￥25起</span><span id="taShop">店铺：梨花多多旅行</span>
								</div>
							</div>
						</div>
					</Tab-pane>
					<Tab-pane label="安心保险">
						<div class="take1">
							<img src="../assets/images/artifact2.jpg" />
						</div>
						<div class="take1List">
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/travlinsurance1.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">自助游保险保障90天保额约50万</div>
									<span id="taPrice">￥2124</span><span id="taShop">保险公司：中国平安</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/travlinsurance2.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">交通意外保险30天保额约40万</div>
									<span id="taPrice">￥2124</span><span id="taShop">保险公司：中国平安</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/travlinsurance3.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">旅游救助保险60天保额约25万</div>
									<span id="taPrice">￥2124</span><span id="taShop">保险公司：中国平安</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/travlinsurance4.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">旅游户外景点保险30天保额约10万</div>
									<span id="taPrice">￥2124</span><span id="taShop">保险公司：中国平安</span>
								</div>
							</div>
						</div>
					</Tab-pane>
					<Tab-pane label="万能交通卡">
						<div class="take1">
							<img src="../assets/images/artifact3.jpg" />
						</div>
						<div class="take1List">
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/transportationCard1.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">“全国一卡通”在广州上线，全国210个城市通用</div>
									<span id="taPrice">￥99</span><span id="taShop">适用范围：210个城市</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/transportationCard4.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">贵州旅游贵阳黄果树瀑布西江千户苗寨荔波梵净山旅游包车</div>
									<span id="taPrice">￥850起</span><span id="taShop">适用范围：贵州</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/transportationCard2.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">广西交通一卡通支持NFC功能的手机软件</div>
									<span id="taPrice">￥119</span><span id="taShop">适用范围：广西省内</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/transportationCard3.png" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">上海房车租赁 周边自驾游 亲子度假游 支持异地还车</div>
									<span id="taPrice">￥150起</span><span id="taShop">适用范围：上海等城市</span>
								</div>
							</div>
						</div>
					</Tab-pane>
				</Tabs>
			</i-col>
		</div>
		<!-- 各地特产 -->
		<div class="travelNecessity">
			<i-col span="24" class="tabsStyle1" style="padding:16px;">
				<div class="tNsity">各地特产</div>
				<Tabs type="card">
					<!-- <Tab-pane label="出行必备"></Tab-pane> -->
					<Tab-pane label="热门伴手礼">
						<div class="take1">
							<img src="../assets/images/souvenir1.jpg" />
						</div>
						<div class="take1List">
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/embroidery.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">湘绣是湖南的传统特色手工艺品 中国四大名绣之一</div>
									<span id="taPrice">￥399</span><span id="taShop">发货地：湖南沙坪</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/brocade.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">广西壮锦历史悠久，带着百年沿传的民族风格</div>
									<span id="taPrice">￥888起</span><span id="taShop">适用范围：广西</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/xiantea.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">泾阳茯茶很受欢迎，属于黑茶 消食化滞 和胃润肠</div>
									<span id="taPrice">￥199起</span><span id="taShop">发货地：西安</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/carving.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">椰雕是海南特有的工艺品，地方特色浓厚 好看且带有海南风情</div>
									<span id="taPrice">￥99起</span><span id="taShop">适用范围：海南</span>
								</div>
							</div>
						</div>
					</Tab-pane>
					<Tab-pane label="必带特产">
						<div class="take1">
							<img src="../assets/images/souvenir2.jpg" />
						</div>
						<div class="take1List">
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/san-hua-jiu.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">桂林三花酒 入坛堆花 入瓶要堆花 入杯也要堆花 故又名为“三花酒”</div>
									<span id="taPrice">￥39</span><span id="taShop">发货地：广西桂林</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/niurougan.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">西藏耗牛肉旅行必带，营养丰富 蛋白质含量高</div>
									<span id="taPrice">￥88起</span><span id="taShop">适用范围：西藏</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/nanputuo.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">南普陀素饼是厦门的特色小吃，“厦门素饼之首”的美称</div>
									<span id="taPrice">￥19起</span><span id="taShop">发货地：厦门</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/longxusu.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">西安龙须酥为中国民间特色传统小吃 营养丰富 入口及松</div>
									<span id="taPrice">￥59起</span><span id="taShop">适用范围：西安</span>
								</div>
							</div>
						</div>
					</Tab-pane>
					<Tab-pane label="爆款纪念品">
						<div class="take1">
							<img src="../assets/images/souvenir3.jpg" />
						</div>
						<div class="take1List">
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/tanzi.png" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">丽江东巴挂毯是云南少数民族纳西族的民族工艺品，富有吉祥美好寓意</div>
									<span id="taPrice">￥299</span><span id="taShop">发货地：云南丽江</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/panda.png" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">成都必带熊猫主题系列礼物 四川是熊猫的故乡</div>
									<span id="taPrice">￥19起</span><span id="taShop">发货地：成都</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/menggubao.jpeg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">呼伦贝尔特色纪念品——蒙古包，朴素典雅又具现代气息</div>
									<span id="taPrice">￥69起</span><span id="taShop">发货地：呼伦贝尔</span>
								</div>
							</div>
							<div class="taList">
								<div class="taListImg">
									<img src="../assets/images/yangpihua.jpg" />
								</div>
								<div class="taListText">
									<div class="taListTextTitle">西藏羊皮画由完整羊皮和纯木头手工制作组成，以纯天然石彩手绘藏族生活和文化</div>
									<span id="taPrice">￥699起</span><span id="taShop">发货地：西藏</span>
								</div>
							</div>
						</div>
					</Tab-pane>
				</Tabs>
			</i-col>
		</div>
		<!-- 景点票类 -->
		<div class="scenicTickets">
				<i-col span="24" class="tabsStyle1" style="padding:16px;">
					<div class="tNsity">热门门票</div>
					<Tabs type="card">
						<Tab-pane label="精选">
							<div class="sliSelected">
								<div class="sliSelectedTheme">
									<div class="sliSelectedTheme1">赏花田园</div>
									<div class="sliSelectedTheme2">水上乐园</div>
									<div class="sliSelectedTheme3">演出表演</div>
									<div class="sliSelectedTheme4">名胜古迹</div>
									<div class="sliSelectedTheme5">家庭旅游</div>
									<div class="sliSelectedTheme6"><span>查看更多</span></div>
								</div>
								<div class="scenicSpot">
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/liuhang.jpg" />
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">柳州柳航游船</span><span id="scenicSpotMoney">￥70起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/ludiyan.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">芦笛岩</span><span id="scenicSpotMoney">￥50起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/wangcheng.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">独秀峰王城</span><span id="scenicSpotMoney">￥50起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/liangjiangsihu.jpg" />
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">桂林两江四湖</span><span id="scenicSpotMoney">￥45起</span>
										</div>
									</div>
									
								</div>
							</div>
						</Tab-pane>
						<Tab-pane label="桂林">
							<div class="sliSelected">
								<div class="sliSelectedTheme">
									<div class="sliSelectedTheme1">赏花田园</div>
									<div class="sliSelectedTheme2">水上乐园</div>
									<div class="sliSelectedTheme3">演出表演</div>
									<div class="sliSelectedTheme4">名胜古迹</div>
									<div class="sliSelectedTheme5">家庭旅游</div>
									<div class="sliSelectedTheme6"><span>查看更多</span></div>
								</div>
								<div class="scenicSpot">
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/xiangbishan.png" />
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">象山景区</span><span id="scenicSpotMoney">￥55起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/fengyuyan.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">丰鱼岩景区</span><span id="scenicSpotMoney">￥45起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/xiaoyaohu.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">漓江逍遥湖</span><span id="scenicSpotMoney">￥50起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/wangcheng.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">独秀峰王城</span><span id="scenicSpotMoney">￥50起</span>
										</div>
									</div>
									
								</div>
							</div>
						</Tab-pane>
						<Tab-pane label="南宁">
							<div class="sliSelected">
								<div class="sliSelectedTheme">
									<div class="sliSelectedTheme1">赏花田园</div>
									<div class="sliSelectedTheme2">水上乐园</div>
									<div class="sliSelectedTheme3">演出表演</div>
									<div class="sliSelectedTheme4">名胜古迹</div>
									<div class="sliSelectedTheme5">家庭旅游</div>
									<div class="sliSelectedTheme6"><span>查看更多</span></div>
								</div>
								<div class="scenicSpot">
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/detianpubu.jpg" />
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">德天跨国瀑布景区</span><span id="scenicSpotMoney">￥0起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/mingshitianyuan.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">明仕田园</span><span id="scenicSpotMoney">￥100起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/fangte.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">南宁方特东盟神话</span><span id="scenicSpotMoney">￥199起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/tiankeng.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">大石围天坑</span><span id="scenicSpotMoney">￥65起</span>
										</div>
									</div>
									
								</div>
							</div>
						</Tab-pane>
						<Tab-pane label="三亚">
							<div class="sliSelected">
								<div class="sliSelectedTheme">
									<div class="sliSelectedTheme1">赏花田园</div>
									<div class="sliSelectedTheme2">水上乐园</div>
									<div class="sliSelectedTheme3">演出表演</div>
									<div class="sliSelectedTheme4">名胜古迹</div>
									<div class="sliSelectedTheme5">家庭旅游</div>
									<div class="sliSelectedTheme6"><span>查看更多</span></div>
								</div>
								<div class="scenicSpot">
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/qianguqing.jpg" />
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">三亚千古情</span><span id="scenicSpotMoney">￥99起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/wuzhizhoudao.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">蜈支洲岛</span><span id="scenicSpotMoney">￥99起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/nanshan.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">南山文化旅游区</span><span id="scenicSpotMoney">￥103起</span>
										</div>
									</div>
									<div class="scenicSpotList">
										<div class="scenicSpotImg">
											<img src="../assets/images/dongtian.jpg"/>
										</div>
										<div class="scenicSpotName">
											<span id="scenicSpotN">大小洞天</span><span id="scenicSpotMoney">￥38起</span>
										</div>
									</div>
									
								</div>
							</div>
						</Tab-pane>
					</Tabs>
				</i-col>
		</div>
		<div class="footer">
			<shop-footer></shop-footer>
		</div>
	</div>
</template>

<script>
	// import {
	// 	Button,
	// 	Table
	// } from 'view-design';
	import ShopHeader from '../components/header.vue';
	import ShopFooter from '../components/footer.vue'
	export default {
		components: {
			// [Button.name]: Button,
			// [Table.name]: Table,
			ShopHeader,
			ShopFooter
		},

	}
</script>

<style>
	.travelersShop {
		width: 100%;
		height: 100%;
		min-width: 1200px;
		background-color: #F5F5FF;
		
	}
	/* .footer{
		width: 100%;
		height: 100%;
	} */
	.poster {
		width: 100%;
		height: 30rem;
		min-width: 1200px;
		
	}

	.posterCon {
		width: 80%;
		height: 100%;
		margin: 0 auto;
		border-radius: 0.3rem;
		/* box-shadow: 1px 1px 5px 5px rgba(191, 191, 191, 0.5); */
	}

	.foodPoster {
		width: 100%;
		height: 60%;
	}
	.foodPoster img{
		width: 100%;
		height: 100%;
	}
	.artifactPoster {
		width: 100%;
		height: 36%;
		margin-top: 0.625rem;
		display: flex;
		float: left;
		min-width: 1000px;
		justify-content: space-between;
	}

	.artifactPostercon {
		width: 32.5%;
		height: 100%;
		background-color: #aaaaff;

	}
	.artifactPostercon img{
		width: 100%;
		height: 100%;
	}
	/* 出行必备 */
	.travelNecessity {
		width: 80%;
		height: 24rem;
		background-color: #ffffff;
		box-shadow: 1px 1px 5px 5px rgba(191, 191, 191, 0.5);
		margin: 1% 10%;
	}

	.tabsStyle1>.ivu-tabs-card>.ivu-tabs-content {
		height: 17rem;
	}
	.tabsStyle1>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
		border-color: transparent;
		margin-right: 1.5rem
	}
	.travelNecessity .ivu-tabs-nav-scroll {
		width: 36rem;
		height: 4rem;
	}

	.tNsity {
		width: 5rem;
		height: 2rem;
		font-size: 1.125rem;
		color: #87C9EF;
	}
	/*随身WiFi*/
	.take1{
		width: 15%;
		height: 100%;
		float: left;
	}
	.take1 img{
		width: 100%;
		height: 100%;
	}
	.take1List{
		width: 83%;
		height: 100%;
		float: right;
		margin: 0 1%;/* 
		background-color: #ffff7f; */
		display: flex;
		justify-content: space-between;
	}
	.taList{
		width: 24%;
		height: 100%;
		/* background-color: #aaaaff; */
		border: 1px solid #cecece;
	}
	.taListImg{
		width: 100%;
		height: 73%;
		background-image: url(../assets/images/alarm.jpg);
		background-size: cover;
	}
	.taListImg img{
		width: 100%;
		height: 100%;
	}
	.taListText{
		width: 100%;
		height: 27%;
	}
	.taListTextTitle{
		width: 98%;
		height: 60%;
		padding-left: .3rem;
		padding-top: .3rem;
	}
	#taPrice{
		color: #ffaa00;
		float: left;
		line-height: 2rem;
	}
	#taShop{
		float: right;
		line-height: 2rem;
		margin-right: 0.3rem;
	}
	/* 景点购票 */
	/* .scenicTickets {
		width: 100%;
		height: 30rem;
		border: 1px solid #000000;
		margin: 0 auto;
		background-color: white;
		border-radius: 0.3rem;
		box-shadow: 1px 1px 5px 5px rgba(191, 191, 191, 0.5);
	} */
	.scenicTickets {
		width: 80%;
		height:24rem;
		margin: 0 auto;
		border-radius: 0.3rem;
		background-color: #ffffff;
		box-shadow: 1px 1px 5px 5px rgba(191, 191, 191, 0.5);
		margin: 1% 10%;
	}
	
	.scenicTickets>.ivu-tabs-card>.ivu-tabs-content {
		height: 17rem;
		/* background-color: #000000; */
		/* margin-top: -16px; */
	}
	.tabsStyle1>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
		border-color: transparent;
		margin-right: 1.5rem
	}
	.scenicTickets .ivu-tabs-nav-scroll {
		width: 36rem;
		height: 4rem;
	}
	.hotTickets{
		width: 8%;
		height: 3rem;
		float: left;
		font-size: 1.125rem;
		color: #000000;
		line-height: 3rem;
		margin-left: 1rem ;
		
	}
	.scsity {
		width: 20%;
		height: 3.125rem;
		font-size: 1rem;
		line-height: 3rem;
		/* margin-left: 0.625rem; */
		/* margin: 0 auto; */
		display: flex;
		justify-content: space-between;
	}
	#slid {
		width: 1500px;
		height: 85%;
		margin: 0 auto;
		position: relative;
		top: 0;
		left: 0;
		overflow: hidden;
	}

	#slid ul {
		width: 4500px;
		height: 100%;
		position: relative;
		float: left;
		top: 0;
		left: 0;
		list-style: none;
		
		/* transition: all 1s ease; */
	}

	#slid ul li {
		width: 1500px;
		height: 100%;
		float: left;
	}
	.sliSelected{
		width: 100%;
		height: 100%;
		/* border: 1px solid salmon; */
		/* float: left; */
		/* background-color: #00A000; */
	}
	.sliSelectedTheme{
		width: 15%;
		height: 100%;
		background-color: white;
		float: left;
		text-align: center;
		font-size: 1.125rem;
		
	}
	.sliSelectedTheme1{
		width: 50%;
		height: 25%;
		background-image: url(../assets/images/tianyuan.jpg);
		float: left;
		color: white;
		line-height: 4rem;
	}
	.sliSelectedTheme2{
		width: 50%;
		height: 50%;
		background-image: url(../assets/images/shuishangreyuan.jpg);
		float: right;
		line-height: 9rem;
		color: white;
	}
	.sliSelectedTheme3{
		width: 50%;
		height: 40%;
		background-image: url(../assets/images/yanchubiaoyan.jpg);
		float: left;
		line-height: 7rem;
		color: white;
	}
	.sliSelectedTheme4{
		width: 50%;
		height: 25%;
		background-image: url(../assets/images/mingshengguji.jpg);
		float: right;
		line-height: 4.5rem;
		color: white;
	}
	.sliSelectedTheme5{
		width: 50%;
		height: 35%;
		background-image: url(../assets/images/jiatinglvyou.jpg);
		float: left;
		line-height: 6rem;
		color: white;
	}
	.sliSelectedTheme6{
		width: 50%;
		height: 25%;
		background-color: #c6fbff;
		float: right;
		line-height: 4rem;
		color: white;
	}
	.scenicSpot{
		width: 85%;
		height:100%;
		/* background-color: #aaffff; */
		float: left;
		display: flex;
	}
	.scenicSpotList{
		width: 50%;
		height: 100%;
		margin:.6% .6%;
		border-radius: 1.25rem;
	}
	.scenicSpotImg{
		width: 100%;
		height: 75%;
		background-image: url(../assets/images/mingshengguji.jpg);
		border-radius: 1.25rem 1.25rem 0 0;
		box-shadow: #c9cace;
	}
	.scenicSpotImg img{
		width: 100%;
		height: 100%;
		border-radius: 1.25rem 1.25rem 0 0;
	}
	.scenicSpotName{
		width: 100%;
		height: 25%;
		background-color: #F5F5FF;
		border-radius: 0 0 1.25rem 1.25rem;
	}
	#scenicSpotN{
		font-size:1rem;
		margin: 5% 0 5% 5%;
		float:left
	}
	#scenicSpotMoney{
		color: red;
		font-size:1rem;
		float: right;
		margin: 5% 5% 0 0;
	}
</style>
