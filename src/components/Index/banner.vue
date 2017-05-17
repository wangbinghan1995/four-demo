<template>
    <div class="banner">
    	<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(data,index) in bannerData" alt="" :key="index" >
	    	<img :src="data.pic"/>
		  </mt-swipe-item>
		</mt-swipe>
		<div class="protype">
			<ul>
				<li v-for="(data,index) in typePro" :key="index">
					<img :src="data.pic" alt="" />
					<p>{{data.words}}</p>
				</li>
			</ul>
		</div>
    	<div class="adv1">
    		<img :src="type_0.pic" alt="" />
    	</div>
    	<div class="space"></div>
    	<div class="type" >
    		<img :src="data.pic" alt="" v-for="(data,index) in type" :key="index"/>
    		<div class="clearfix"></div>
    	</div>
    	<div class="type_a">
    		<img v-for="(data,index) in type_a" :key="index" :src="data.pic" alt="" />
    		<div class="clearfix"></div>
    	</div>
    	<div class="type_b">
    		<img v-for="(data,index) in type_b" :key="index" :src="data.pic" alt="" />
    		<div class="clearfix"></div>
    	</div>
    	<div class="type_c">
    		<img v-for="(data,index) in type_c" :key="index" :src="data.pic" alt="" />
    		<div class="clearfix"></div>
    	</div>
    	<div class="type_d">
    		<img v-for="(data,index) in type_d" :key="index" :src="data.pic" alt="" />
    		<div class="clearfix"></div>
    	</div>
    </div>
</template>

<script>
export default {
  name: 'v-banner',
  data () {
    return {
      bannerData:"",
      typePro:"",
      type_0:"",
      type:"",
      type_a:"",
      type_b:"",
      type_c:"",
      type_d:""
    }
  },
  mounted(){
  this.fetchJsonp("https://jas.juanpi.com/pagetag/page?unique=module_ads%2Cbanner_ads%2Ctopbanner%2Cpopup_ads&cat_name=newest_zhe&zy_id=c3_l1_18_51_5&platform=m&_=1494856061052&callback=jsonp1").then(res=>{
  		return res.json()
  	}).then(data=>{
  		this.bannerData =data.banner_ads;
  		this.typePro=data.module_ads.multi_block[0].data[0].child
  		this.type_0 = data.module_ads.multi_block[1].data[0].child[0]
  		this.type=data.module_ads.multi_block[2].data[0].child
  		this.type_a=data.module_ads.multi_block[3].data[0].child
  		this.type_b=data.module_ads.multi_block[4].data[0].child
  		this.type_c=data.module_ads.multi_block[5].data[0].child
  		this.type_d=data.module_ads.multi_block[6].data[0].child
  		console.log(this.type_a)
  	}).catch(error=>console.log(error))
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{

}
.banner{
	width:100%;
}
.mint-swipe{
	height: 2.48rem;
	width: 100%;
}
.banner .mint-swipe img{
	height: 2.48rem;
	width: 100%;
}
.protype{
	width: 100%;
	height: 1.63rem;
	
}
.protype ul{
	display: flex;
	width: 100%;
	height: 100%;
	background: #fff;
}
.protype li img{
	width:0.8rem;
	height:0.8rem;
	margin-bottom:5px;
	margin-top:5px;
}
.protype li{
	width: 25%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.adv1{
	height: 1.63rem;
	width: 100%;
}
.adv1 img{
	width: 100%;
	height: 100%;
}
.space{
	width: 100%;
	height:0.15rem;
	background: #ccc;
}
.type,{
	width: 100%;
}
.type{
	
}
.type img{
	width: 50%;
	float: left;
}
.type_a img{
	width: 50%;
	float: left;
}
.type_b{
	width: 100%;
}
.type_b img{
	width: 50%;
	float: left;
}
.type_c{
	width: 100%;
}
.type_c img{
	width: 100%;
}
.type_d{
	width: 100%;
	margin-top:10px
}
.type_d img{
	width: 100%;
}
</style>
