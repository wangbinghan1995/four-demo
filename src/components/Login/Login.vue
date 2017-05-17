<template class="login">
	<div>
	<v-header title="登录">
		<a slot="leftCont" href="javascript:window.history.go(-1)"><</a>
		<a slot="rightCont" href="#/regist">注册</a>
	</v-header>
	<v-content>
		<div class="login-input">
			<input class="telnum" v-model="telnum"  placeholder="请输入手机号"/>
			<input class="pwdnum" v-model="pwdnum" placeholder="请输入密码"/>
			<input type="button" @click="fn2" class="login-submit" value="登 录" />
		</div>
	</v-content>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data(){
			return{
				telnum: "",
				pwdnum: "",
				
			}
		},
		methods:{
			fn2(){
				console.log(this.telnum,this.pwdnum)
				
				this.$http.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+this.telnum+"&password="+this.pwdnum).then((data)=>{
					if(data.data==0){
						alert("用户名不存在")
					}else if(data.data==2){
						alert("用户名密码不符")
					}else{
						console.log(data.data)
						window.location= "#/5_1?"+data.data[1]
						
					}
					
					
					
				})
			}
		}
	}
</script>

<style scoped>
	.header{background-image: linear-gradient(146deg,#ff464e 34%,#fc7400);}
	.header a , .header-title{color: #FFFFFF !important;}
	.login-input{width: 90%; margin: 0 5%;}
	.login-input input{height: 0.96rem; width: 100%; border:none; border-bottom:1px solid #ccc;}
	.login-submit{margin-top: 0.5rem; background: #ccc; font-size: 0.25rem; color:#FFFFFF; }
</style>