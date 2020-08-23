<template>
	<div class="travelReserve">
		<div>
			<shop-header></shop-header>
		</div>
		<div class="traReslie">
			<Carousel autoplay>
				<Carousel-item>
					<div class="demo-carousel">
						<img src="../assets/images/traReNav1.jpg">
					</div>
				</Carousel-item>
				<Carousel-item>
					<div class="demo-carousel">
						<img src="../assets/images/traReNav2.jpg">
					</div>
				</Carousel-item>
				<Carousel-item>
					<div class="demo-carousel">
						<img src="../assets/images/traReNav3.jpg">
					</div>
				</Carousel-item>
				<Carousel-item>
					<div class="demo-carousel">
						<img src="../assets/images/traReNav4.jpg">
					</div>
				</Carousel-item>
			</Carousel>
		</div>
		<div class="ticketTab">
			
		</div>
		<div>
			<shop-footer></shop-footer>
		</div>
	</div>
</template>

<script>
	import ShopHeader from '../components/header.vue';
	import ShopFooter from '../components/footer.vue'
	export default {
		components: {
			ShopHeader,
			ShopFooter
		},

	}
</script>

<style>
	.travelReserve {
		width: 100%;
		height: 100%;
		z-index: 1;
		position: relative;
	}

	.traReslie {
		width: 100%;
		height: 23rem;
		margin: 0 auto;
		z-index: 1;
	}

	.traReslie .ivu-carousel {
		width: 100%;
		height: 23rem;
		z-index: 1;
	}

	.traReslie .ivu-carousel img {
		width: 100%;
		height: 23rem;
		z-index: 1;
	}

	.ticketTab {
		width: 70%;
		height: 20rem;
		margin: 0 auto;
		/* border: 1px solid salmon; */
		background-color: white;
		box-shadow: 1px 1px 5px 5px rgba(191, 191, 191, 0.5);
		z-index: 20;
		left: 15%;
		top: 20rem;
		position: absolute;
	}
</style>
