import Vue from "vue";
import VueRouter from "vue-router";

import index from "../view/index.vue"
import travel from "../view/travels.vue"
import travelersShop from "../view/travelersShop.vue"
import travelReserve from "../view/travelReserve.vue"
//使用vueRouter
Vue.use(VueRouter);

const routes=[
	{
		path:"/",
		component:travelersShop,
	},
	{
		path:"/index",
		component:index
	},
	{
		path:"/travel",
		component:travel
	},
	{
		path:"/travelersShop",
		component:travelersShop
	},
	{
		path:"/travelReserve",
		component:travelReserve
	},
	
]

var router =new VueRouter({
	routes
})
export default router;
