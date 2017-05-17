<template id="footer">
	<div class="footer">
		<ul>
			<li v-for="(data,index) in footerData" :key="index" :class="{active:active==index}">
				<a :href="'#'+data.link">
					<img class="footer-image" :src= "active==index? data.act_icon:data.bg_icon" />
					<p>{{data.title}}</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'v-footer',
		props: {
			active: {
				type: Number,
				default: 0
			},
			footerData:{
				
			}
		},
		
	}
</script>

<style>
	.footer { position: fixed;bottom: 0; left:0;height: 0.99rem; width: 100%; line-height: 0.44rem; border-top: 1px solid #ccc; background-color: #fff}
	.footer  ul { overflow: hidden; text-align: center}
	.footer li { float: left; width: 20%; list-style: none;}
	.footer a{color: #2C3E50;display: flex;justify-content: center;flex-direction: column;align-items: center;margin-top:5px}
 	.footer .active a { color: red; font-size: 0.2rem;}
 	.footer-image{height:0.48rem; width: 0.4rem;}
</style>