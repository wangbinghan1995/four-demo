<template>
    <div class="list" :id="listData">
		<div>
			<ul>
	    		<li v-for="(data,index) in listData" :key="index">
	    			<a :href="'#/list/'+data.coupon.abName+'/'+data.shop_id" @click="fnname(data.coupon.abName)"><img :src="data.pic_url" alt="" /></a>
	    			<p class="favorable">{{data.coupon.rules[0].aeBankInfo}}</p>
	    			<div class="proname">
	    				<p>{{data.coupon.abName}}</p><span>{{data.residue}}</span>
	    			</div>
	    		</li>
				<div class="clearfix"></div>
	    	</ul>
		</div>
    </div>
</template>

<script>
export default {
  props:{
  	listData:{
  		
  	}
  },
  methods:{
  	fnname(name){
  		console.log(name)
  	}
  },
  computed:function(){
  	console.log(this.listData,"list页面")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
	width: 100%;
}
.list ul{
	width: 100%;
}
.list ul li{
	width: 50%;
	height: 4.5rem;
	float: left;
	background: #fff;
}
.list ul li img{
	width: 100%;
}
.list ul li p{
	font-size:13px;
	margin:10px 10px;
}
.list ul li .favorable{
	color:red!important
}
.list ul li .proname{
	width: 100%;
}
.list ul li .proname p{
	width: 70%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-top:0;
	float: left;
}
.list ul li .proname span{
	color:#CCCCCC
}
</style>
