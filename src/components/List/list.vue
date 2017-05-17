<template>
  <div class="list" 
  		v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="100">
    <mt-header :title="this.$route.params.proname">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right">
		  </mt-button>
		</mt-header>
		<div class="shop">
			这里面是店铺的信息哦~
		</div>
    <div class="reverse">
    	<p>距离结束还有</p>
    	<p>- <span>{{totalTime.d}}</span>天<span>{{totalTime.h}}</span>小时<span>{{totalTime.m}}</span>分钟<span>{{totalTime.s}}</span>秒-</p>
    </div>
    <div class="hot">
    	- 爆款热卖 -
    </div>
    <div class="hotPro">
    	<ul>
    		<li v-for="(data,index) in hotPro" :key="index">
    			<!--<a href="#/detail">-->
    				<router-link to="/detail">
	    				<img :src="data.pic_url" alt="" />
    				</router-link>
    			<!--</a>-->
    			<div class="Pri">
    				<p>￥{{data.tuan_price}}</p><i>拼</i><p class="pri_2">￥{{data.oprice}}</p>
    			</div>
    			<p class="proName">{{data.title}}</p>
    		</li>
				<div class="clearfix"></div>
    	</ul>
    </div>
  	<div class="special">
  		- 正在特卖 -
  	</div>
  	<div class="sort">
  		<ul>
  			<li>综合</li>
  			<li>销量</li>
  			<li>价格</li>
  			<li>只看有货</li>
  		</ul>
  	</div>
  	<div class="hotPro">
    	<ul>
    		<li v-for="(data,index) in special" :key="index">
    			<a href="#/detail">
	    			<img :src="data.pic_url" alt="" />
    			</a>
    			<div class="Pri">
    				<p>￥{{data.tuan_price}}</p><i>拼</i><p class="pri_2">￥{{data.oprice}}</p>
    			</div>
    			<p class="proName">{{data.title}}</p>
    		</li>
				<div class="clearfix"></div>
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
    	totalTime:{
	    	h:"",
	    	m:"",
	    	s:'',
	    	d:"",
	    	t:""
    	},
    	hotPro:"",
    	special:"",
    	page:1
    }
  },
  methods:{
  	countTime(){
  		this.totalTime.d = Math.floor(this.totalTime.t/(24*3600))
  		this.totalTime.h = Math.floor((this.totalTime.t-this.totalTime.d*24*3600)/3600);
  		this.totalTime.m =Math.floor((this.totalTime.t-this.totalTime.h*3600-this.totalTime.d*24*3600)/60);
  		this.totalTime.s = Math.floor(this.totalTime.t-this.totalTime.h*3600-this.totalTime.m*60-this.totalTime.d*24*3600);
  		this.totalTime.t--
  	},
  	loadMore(){
  		console.log("执行啦~~~")
  		this.page++;
  
  		this.$http.get("/juanpi/brand/0?shop_id="+this.$route.params.proID+"&user_groupids=p8_c3_l1_18_51_5&page="+this.page+"&is_ajax=1&order=&sort=&isstock=0").then(res=>{
  			console.log(res.data.data.special)
  			this.special = this.special.concat(res.data.data.special)
  		})
  	}
  },
  mounted:function(){
  //https://m.juanpi.com/brand/1403589?shop_id=2500238&user_groupids=p8_c3_l1_18_51_5&page=1&is_ajax=1&order=&sort=&isstock=0
  this.$http.get("/juanpi/brand/0?shop_id="+this.$route.params.proID+"&user_groupids=p8_c3_l1_18_51_5&page="+this.page+"&is_ajax=1&order=&sort=&isstock=0").then(data=>{
  		this.totalTime.t=Number(data.data.data.hot[0].end_time-new Date().getTime()/1000)
  		this.hotPro=data.data.data.hot
  		this.special=data.data.data.special
	  	this.countTime()
  	})
  	setInterval(this.countTime,1000)
  //?shop_id=2072298&user_groupids=p8_c3_l1_18_51_5&page=1&is_ajax=1&order=&sort=&isstock=0
  //?shop_id=2695155&user_groupids=p8_c3_l1_18_51_5&page=1&is_ajax=1&order=&sort=&isstock=0
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
	position: absolute;
	top:0;
	bottom:0;
	left:0;
	overflow-y: auto;
}
.mint-header{
	background-color: #fff!important;
	color:#000;
	margin-bottom:10px
}
.reverse{
	width: 100%;
	height: 1.02rem;
	text-align: center;
}
.reverse p{
	font-size:12px;
	color:#666
}
.reverse span{
	color:#000000;
	font-size:16px;
	margin:0 5px
}
.shop{
	width: 100%;
	height: 3.34rem;
	background: #fff;
	margin-bottom:10px
}
.hot{
	width: 100%;
	height:0.96rem;
	background: #fff;
	text-align: center;
	line-height: 0.96rem;
	font-size:16px
}
.hotPro{
	width: 100%;
}
.hotPro ul{
	width: 100%;
}
.hotPro ul li{
	width: 50%;
	height: 4.5rem;
	float: left;
	background: #fff;
}
.hotPro ul li img{
	width: 100%;
}
.hotPro ul li .proName{
	margin:10px 10px 
}
.Pri {
	width: 100%;
	height:0.3rem ;
	margin-top:10px
}
.Pri p{
	float: left;
}
.Pri p:nth-child(1){
	color:red;
	font-size:0.3rem
}
.Pri i{
	float: left;
	background: #ff464e;
	color:#fff;
	margin:3px 10px;
}
.Pri .pri_2{
	color:#BBB;
	font-size:0.2rem;
	text-decoration: line-through;
	margin-top:5px
}
.special{
	width: 100%;
	height: 0.97rem;
	margin-top:10px;
	background: #fff;
	text-align: center;
	line-height: 0.97rem;
	font-size:0.3rem
}
.sort{
	width: 100%;
	height:0.81rem;
	border-top:1px solid #eaeaea;
	background: #fff;
}
.sort ul{
	width: 100%;
	height: 100%;
	display: flex;
	
}
.sort ul li{
	width: 25%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size:0.28rem
}
</style>
