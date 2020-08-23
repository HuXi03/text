<template>
	<div class="travel">
		<div class="list">
			<div class="listNav">
				<!-- <ul>
					<li v-on:mouseover="addClassload(index)" v-on:mouseover="removeClassload(index)">1</li>
					<li v-on:mouseover="addClassload(index)" v-on:mouseover="removeClassload(index)">2</li>
					<li v-on:mouseover="addClassload(index)" v-on:mouseover="removeClassload(index)">3</li>
					<li v-on:mouseover="addClassload(index)" v-on:mouseover="removeClassload(index)">4</li>
					<li v-on:mouseover="addClassload(index)" v-on:mouseover="removeClassload(index)">5</li>
				</ul> -->
			</div>
			<div class="listcon1" id="listcon1"></div>
			<div class="listcon2" id="listcon2"></div>
			<div class="listcon3" id="listcon3"></div>
			<div class="listcon4" id="listcon4"></div>
			<div class="listcon5" id="listcon5"></div>
		</div>
		<!-- <div v-on:mouseover="addClassload(index)" v-on:mouseover="removeClassload(index)"></div> -->
	</div>
</template>

<script>
	export default {
		methods: {
			// addClassload(index) {
				
			// 	// this.classenable = true
			// 	// this.current = index;
			// },
			// removeClassload(index) {
			// 	// this.classenable = false
			// 	// this.current = index;
			// }
		}
	}
</script>

<style>
	.list {
		width: 80%;
		height: 18rem;
		margin: 0 20% 0 20%;
	}

	.listNav {
		width: 80%;
		height: 2rem;
		background-color: #13C2C2;
	}

	.listNav ul li {
		width: 18%;
		height: 2rem;
		margin-left: 0.625rem;
		float: left;
		list-style: none;
		background-color: #f98ca0;
	}

	.listcon1 {
		width: 80%;
		height: 10rem;
		background-color: #00A000;
		display: block;
	}

	.listcon2 {
		width: 80%;
		height: 5rem;
		background-color: #aa5500;
		display: none;
	}

	.listcon3 {
		width: 80%;
		height: 5rem;
		background-color: #aaaaff;
		display: none;
	}

	.listcon4 {
		width: 80%;
		height: 5rem;
		background-color: #16a095;
		display: none;
	}

	.listcon5 {
		width: 80%;
		height: 5rem;
		background-color: #ffff00;
		display: none;
	}
</style>

