<template class="mine">
	<div>
		<v-header title= "个人中心">
			<a slot="leftCont" href="javascript:window.history.go(-1);"><</a>
			<slot><a class="mine-login" href="#/regist">注册</a></slot>
			<slot><a href="#/login">登录</a></slot>
		</v-header>
		<v-content>
			<div class="mine-box">
				<a href="##" class="mine-list">
					<span class="fl">我的订单</span>
					<span class="fr">全部订单 》</span>
				</a>
				<div class="mine-item">
					<a href="##">待付款</a>
					<a href="##">待发货</a>
					<a href="##">待收货</a>
					<a href="##">退款/售后</a>
				</div>
				<a href="##" class="mine-list">
					<span class="fl">我的收藏</span>
					<span class="fr"> 》</span>
				</a>
				<a href="##" class="mine-list">
					<span class="fl">我的优惠券</span>
					<span class="fr"> 》</span>
				</a>
				<a href="##" class="mine-list">
					<span class="fl">我的拼团</span>
					<span class="fr"> 》</span>
				</a>
				<a href="##" class="mine-list">
					<span class="fl">客服中心</span>
					<span class="fr"> 》</span>
				</a>
				<a href="##" class="mine-list">
					<span class="fl">关于卷皮</span>
					<span class="fr"> 》</span>
				</a>
				<div class="mine-bottom">
					<a href="##">返回主页</a>
					<a href="##">客户端</a>
					<a href="##">电脑版</a>					
				</div>
			</div>
			
		</v-content>
		<div class="mine-header">
			
		</div>
		<v-footer :footer-data="footerData" :active="4"></v-footer>
	</div>	  
</template>

<script>
	export default {
		name: 'mine',
		computed:{
			footerData(){
				return this.$store.state.footerData
			}
		}
	}
</script>
	
<style scoped>
	.content{margin-top: 2.44rem !important;}
	.header{height: 2.44rem !important; background-image: linear-gradient(146deg,#ff464e 34%,#fc7400)!important;
    border-bottom: none; color: 0.4rem; color: #FFFFFF;}
    .header a{color: #FFFFFF; font-size: 0.4rem; margin: 0.96rem 0; padding:0 0.96rem;} 
    .mine-login{border-right: 1px solid #FFFFFF; width: 100%; }  
    .mine-box{width: 92%; margin: 0 4%; } 
    .mine-list{display:block; height: 0.96rem; font-size: 0.26rem; color: #2C3E50; line-height: 0.96rem; border-bottom: 1px solid #ccc;}
	.mine-item{display: flex; padding: 0.24rem;}
	.mine-item a{flex:1; color: #2C3E50; font-size: 0.2rem;}
	.mine-bottom{height: 0.96rem; display: flex; line-height: 0.96rem;}
	.mine-bottom a{flex: 1; color: #2C3E50; font-size: 0.15rem;}
</style>