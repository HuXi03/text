<template>
	<!-- <div class="top" @mouseover="mouseOver" @mouseleave="mouseLeave"> -->
	<!-- <div id="text"></div> -->
	<div class="list">
		<p>该实例设置了默认显示的选项卡，在页面载入时触发指定 id 的 click 事件。</p>

		<div class="tab">
			<button class="tablinks" @mouseover="openCity(event, 'London')" id="defaultOpen">London</button>
			<button class="tablinks" @mouseover="openCity(event, 'Paris')">Paris</button>
			<button class="tablinks" @mouseover="openCity(event, 'Tokyo')">Tokyo</button>
		</div>

		<div id="London" class="tabcontent">
			<h3>London</h3>
			<p>London is the capital city of England.</p>
		</div>

		<div id="Paris" class="tabcontent">
			<h3>Paris</h3>
			<p>Paris is the capital of France.</p>
		</div>

		<div id="Tokyo" class="tabcontent">
			<h3>Tokyo</h3>
			<p>Tokyo is the capital of Japan.</p>
		</div>
	</div>
	<!-- </div> -->


</template>

<script>
	export default {
		created() {
			document.getElementById("defaultOpen").style.display='block';
		},
		methods: {
			
			openCity: function(event, cityName) {

				var i, tabcontent, tablinks;
				tabcontent = document.getElementsByClassName("tabcontent");
				for (i = 0; i < tabcontent.length; i++) {
					tabcontent[i].style.display = "none";
				}
				// 以下是显示导航条的显示
				tablinks = document.getElementsByClassName("tablinks");
				for (i = 0; i < tablinks.length; i++) {
					tablinks[i].className = tablinks[i].className.replace(" active", "");
				}
				document.getElementById(cityName).style.display = "block";
				event.currentTarget.className += " active";
				//document.getElementById("defaultOpen").onmouseover();
				// if(num1=='1'){
				// 	document.getElementById('listcon1').style.display='block'
				// }else if(num1=='2'){
				// 	document.getElementById('listcon2').style.display='block'
				// }else if(num1=='3'){
				// 	document.getElementById('listcon3').style.display='block'
				// }else if(num1=='4'){
				// 	document.getElementById('listcon4').style.display='block'
				// }else if(num1=='5'){
				// 	document.getElementById('listcon5').style.display='block'
				// }

				// document.getElementById('listcon1').style.display='block'

			},
			//document.getElementById("defaultOpen").onmouseover();
			// mouseLeave: function(num2) {

			// if(num2=='1'){
			// 	document.getElementById('listcon1').style.display='none'
			// }else if(num2=='2'){
			// 	document.getElementById('listcon2').style.display='none'
			// }else if(num2=='3'){
			// 	document.getElementById('listcon3').style.display='none'
			// }else if(num2=='4'){
			// 	document.getElementById('listcon4').style.display='none'
			// }else if(num2=='5'){
			// 	document.getElementById('listcon5').style.display='none'
			// }else if(num2==''){
			// 	document.getElementById('listcon1').style.display='block'
			// }


			//},

			// show(){
			// 	document.getElementById('listcon1').style.display='block'
			// },
			// hid(){
			// 	document.getElementById('listcon1').style.display='none'
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

	body {
		font-family: "Lato", sans-serif;
	}
	#defaultOpen{
		display: block;
	}
	/* Style the tab */
	div.tab {
		overflow: hidden;
		border: 1px solid #ccc;
		background-color: #f1f1f1;
	}

	/* Style the buttons inside the tab */
	div.tab button {
		background-color: inherit;
		float: left;
		border: none;
		outline: none;
		cursor: pointer;
		padding: 14px 16px;
		transition: 0.3s;
		font-size: 17px;
	}

	/* Change background color of buttons on hover */
	div.tab button:hover {
		background-color: #ddd;
	}

	/* Create an active/current tablink class */
	div.tab button.active {
		background-color: #ccc;
	}

	/* Style the tab content */
	.tabcontent {
		display: none;
		padding: 6px 12px;
		border: 1px solid #ccc;
		border-top: none;
	}
</style>
