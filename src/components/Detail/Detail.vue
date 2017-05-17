<template class="detail">
	<div>		
			<div>
				<mt-swipe :auto="4000" v-if="detailData.images">
  				<mt-swipe-item v-for="(data,index) in detailData.images" :key="index">
  					<img :src="data" />
  				</mt-swipe-item>
				</mt-swipe>				
			</div>				
			<div class="detail0">
				<b class="price">￥ {{detailData.price}}</b>
				<del class="del">￥268.00</del>
				<span class="baoyou">包邮</span>
				<span class="pinlijian">拼立省</span>
				<span class="jianp">199.00元</span>
				<p class="goodsName">{{detailData.goodsName}}</p>
				<p class="lingjuan" @click="handleClick">
					<span>领卷</span>  <span class="jianspan">满99元立减20元</span> <span class="jianspan">满199元立减50元</span>
				</p>
				<mt-popup
 				 v-model="popupVisible"
 				 position="bottom">
  					<div>
  						<ul  class="jian-body">
  							<li  class="jian-title"><h1>立即领取优惠券</h1></li>
  							<li v-for="(data,index) in lijianData">
  								<b class="dataMoney"> ￥  {{data.money}}</b><span class="dataCoupon">{{data.coupon_use_condition}}</span>
  							</li>
  							<button class="lijibutton">立即领取</button>
  						</ul>
  					</div>
				</mt-popup>
				
				<p class="rengongzhijian"><span>100%人工质检</span><span>24小时发货</span><span>品质保障</span></p>
			</div>
			<div class="detail-bottom">
				<ul>
					<li class="li0">我的拼团</li>
					<li class="li1">购物车</li>
					<li class="li2">单独购买</li>
					<li class="li3">立即拼团</li>
				</ul>
			</div>
			
	</div>
</template>

<script>
	export default{
		name: 'detail',
		data(){
			return{
				detailData:{
					images:[
					"//s2.juancdn.com/bao/170509/8/9/59114ac8a43d1f52ef20b542_800x800.jpg?iopcmd=convert&Q=88&dst=jpg",
					"//s2.juancdn.com/bao/170512/d/4/59157334a43d1f59c0724b56_800x800.jpg?iopcmd=convert&Q=88&dst=jpg",
					"//s2.juancdn.com/bao/170509/c/1/59114b77ad0a49eb948b45cf_800x800.jpg?iopcmd=convert&Q=88&dst=jpg",
					"//s2.juancdn.com/bao/170509/f/c/59114b75a43d1f52cc153174_800x800.jpg?iopcmd=convert&Q=88&dst=jpg",
					"//s2.juancdn.com/bao/170509/d/a/59114b71ad0a49c8978b45d7_800x800.jpg?iopcmd=convert&Q=88&dst=jpg",
					"//s2.juancdn.com/bao/170509/7/9/59114b6fad0a493caf8b45bb_800x800.jpg?iopcmd=convert&Q=88&dst=jpg"
					],
					price: 69.00,
					goodsName: "气质鱼尾中长款连衣裙",
				},
				popupVisible: false,
				lijianData: [{money:""},{money:""}]
			}
		},
		methods:{
			handleClick(){
				
				this.popupVisible= !this.popupVisible
			}
		},
		//https://tuan.juanpi.com/coupons/getCouponList?show_type=wap&uid=null&goods_id=49326757
		mounted(){
			console.log(this.$http)
			this.$http.get('/tuan/coupons/getCouponList?show_type=wap&uid=null&goods_id=49326757')
			.then(res=>{
				console.log(res,"red")
				this.lijianData= res.data.data.coupon_list
				console.log(this.lijianData,"this.lijianData")
				
			})
		}
	}
</script>

<style scoped>
	#app{margin-top:0 !important;}
	.mint-swipe { height: 7rem;}
    .mint-swipe img { width: 100%}
    .detail0{width: 90%; margin-left: 5%; text-align: left;}
    .price{font-size: 0.30rem; color: red;}
    .del{color: #ccc;}
    .baoyou{background: #42B983; color: #FFFFFF; padding: 0.02rem 0.08rem; font-size: 0.12rem;}
    .pinlijian{background: #FC7400; color: #FFFFFF; padding: 0.02rem 0.08rem; font-size: 0.12rem; }
    .jianp{border: 1px solid #42B983; padding: 0.01rem 0.06rem; font-size: 0.12rem;}
    .goodsName{font-size: 0.24rem;padding: 0.1rem 0;}
    .lingjuan{font-size: 0.12rem;padding: 0.1rem 0; width: 100%; border-bottom: 1px solid #ccc;}
    
    .jianspan{padding: 0.01rem 0.1rem; background: #42B983; color: #FFFFFF;}
    .mint-popup{width: 100%; height: 60%;}
    .jian-body{ background: #FFFFFF; width: 100%;}
    .jian-body li{height: 0.96rem; border-bottom: 1px solid #ccc; line-height: 0.96rem;}
    .dataMoney{font-size: 0.4rem; color: #FF0000; margin: 0.5rem; }
    .lijibutton{ border: none; position: fixed; width: 100%; height: 1rem; background: #FF464E; bottom:0; color: #FFFFFF; font-size: 0.3rem;}
	.rengongzhijian{height: 0.96rem; line-height: 0.96rem; font-size: 0.12rem; color: #ccc;}
	.rengongzhijian span{margin: 0 0.25rem;}
	.detail-bottom{ border-top: 1px solid #ccc; height: 0.96rem; width: 100%; background: #FFFFFF; position: fixed; bottom: 0;}
	.detail-bottom li{float: left;}
	.li0{width: 15%;}
	.li1{width: 15%;}
	.li2{width: 20%;}
	.li3{width: 50%;}
</style>