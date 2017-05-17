<template id="header">
	<div class="header">
		<ul>
			<li class="header-btn"><slot name="leftCont"></slot></li>							
			<li class="header-title">{{title}}</li>
			<li class="header-btn"><slot name="rightCont"></slot></li>			
		</ul>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'v-header',
		props: {
			title: {
				type: String,
				default: '卷皮'
			}
		}
	}
</script>

<style scoped>
	.header{position: fixed; top: 0; height: 0.88rem; width: 100%; line-height: 0.88rem; border-bottom: 1px solid #dedede;
	background:#fff;
	z-index:9
	}
	.header ul{display: flex;}
	li{list-style: none;}
	.header-title { flex: 1; text-align: center; font-size: 20px;}
    .header-btn { width: 60px;}
    .header-btn  a { color: #666}
</style>