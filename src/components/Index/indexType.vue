<template>
  <div class="index"  
  		ref="index-wrap" 
  		v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="100"
		  :id="this.Key">
  	<v-header></v-header>
  	<v-content>
  		<div class="nav">
  			<ul>
  				<li v-for="(data,index) in listData" :key="index" @click="addactive(index,data.link)" :class="{active:data.prop}" >
  					<a href="#/" :class="{active1:data.prop}" v-if="index==0">{{data.title}}</a>
  					<a :href="'#/indexType/'+data.link" :class="{active1:data.prop}" v-if="index!=0">{{data.title}}</a>
  				</li>
  			</ul>
  		</div>
    	<v-banner :proid="this.Key"></v-banner>
	    <v-list :list-data="this.proData">
	    	
	    </v-list>
  	</v-content>
    <v-footer></v-footer>
  </div>
</template>
<script>
import banner from './banner1.vue'
import list from './list.vue'
export default {
  name: 'index',
  data () {
    return {
    	listData:"",
    	listData_first:"",
    	num:0,
    	proData:"",
    	page:1,
    	scroll:"",
    	Key:312,
    	listsp:""
    }
  },
  components:{
  	"v-banner":banner,
  	"v-list":list
  },
  methods:{
  	addactive(index,id){
  		this.listData.forEach((ele,index)=>{
				ele.prop=false;
			})
  		this.listData[index].prop=true
  		this.Key = id
  		this.getInf();
  		this.proData=""
  		console.log("dianjile22",id)
  		console.log(this.Key,"dfafsadsfsf")
  	},
  	loadMore() {
  		this.loading=false;
  		this.page++;
			this.getInf();
		},
	  getInf(){
	  	this.fetchJsonp("https://shop.juanpi.com/gsort?key="+this.Key+"&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=hotcoupon&page="+this.page+"&rows=10&dtype=JSONP&cm=1&cm_cate=312&callback=gsort_callback").then(res=>{
	  		return res.json()
	  	}).then(data=>{
	  		console.log("我了去去，你没有执行吗？",this.Key)
	  		console.log(data,"aaaaaaaaaaaaaaaaaaaaa",this.$route.params.proid)
	  		if(!this.proData){
		  		this.proData=data.list
	  		}else{
	  			this.proData=this.proData.concat(data.list)
	  		}
	  		data.list.forEach((ele,index)=>{
	  			if(ele.gtype==5){
	  				ele.coupon={
	  					abName:ele.sub_title,
	  					rules:[{
	  						aeBankInfo:ele.main_title
	  					}]
	  				}
	  			}
	  		})
	  		this.loading=true;
	  		console.log("数据获取完毕")
	  	})
	  }
  },
  mounted(){
  this.$http.get("/juanpi/index/getMenu?select=1_2").then((data)=>{
  		this.listData=data.data.menu_list[0].subtab
  		this.listData.forEach((ele,index)=>{
  			ele.link=ele.link.split("/").reverse()[0].split("?")[0]
  		})
  		 this.listData.forEach((ele,index)=>{
				ele.prop=false;
				ele.up=1
			})
  		 this.listData[1].prop=true
  	})
   	this.getInf()
  
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index { position: absolute;; top: 0; left: 0; width: 100%; bottom: 0; overflow-y: auto;}
.nav{
	height:0.76rem;
	border-bottom:1px solid #eaeaea;
	font-size:0.28rem
}
.nav a{
	color:#000000
}
.nav ul{
	width: 100%;
	height: 100%;
	white-space: nowrap;
	overflow: auto;
	background: #fff;
}
.nav ul li{
	display: inline-block;
	width: 48px;
	height: 95%;
	margin: 0 20px;
	text-align: center;
	line-height: 38px;
}
.active{
	color:#ff464e!important;
	border-bottom: 2px solid #ff464e;
}
.active1{
	color:#ff464e!important;
}
</style>
