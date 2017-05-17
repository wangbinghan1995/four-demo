<template class="cart">
	<div>
		<v-header title="购物车">
			<a slot="leftCont"  href="javascript:window.history.go(-1);"><</a>
		</v-header>
		<v-content>
		</v-content>
		<v-footer :footer-data="footerData" :active="3"></v-footer>
	</div>
</template>

<script>
	export default{
		name: 'cart',
		mounted() {
			this.$http.get(" http://datainfo.duapp.com/shopdata/getCar.php?userID=huazai")
			.then((res)=>{
				//console.log(res.data)
			})
			console.log(this.$store)
		},
		methods:{
		},
		computed:{
			footerData(){
				return this.$store.state.footerData
			}
		}
	}
</script>

<style scoped>
	html,body{background-color: #CCCCCC;}
</style>