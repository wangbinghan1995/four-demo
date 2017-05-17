import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
	state:{
		cont:10,
		footerData:[]
	},
	mutations:{
		add(state){
			state.cont++
		},
		reduce(){
			state.cont--
		},
		setInf(state,inf){
			console.log(inf)
			state.footerData=inf.footerData
		}
	},
	actions:{
		increase(context,inf){
      //
  /*    setTimeout(()=>{
        context.commit("add")
        console.log("wowowooowowowowowow",inf)
      },1000)*/
      context.commit("setInf",inf)
		
    }
		
		/*this.$http.get('/juanpi/index/getMenu?select=2_1')
			.then(res=>{
				for(var i=0; i< 5; i++){
					res.data.menu_list[i].link=res.data.menu_list[i].link.split("select=")[1]
				}
				this.footerData= res.data.menu_list
				console.log("footer",this.footerData)
			})*/
	}
})
export default store 