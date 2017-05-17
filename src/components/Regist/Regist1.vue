<template class="regist1">
	<div>
		<v-header title="注册">
			<a slot="leftCont" href="javascript:window.history.go(-1);"><</a>
		</v-header>
		<v-content>
			<form action="" method="post">
				<input v-model="pwd" class="tel" type="tel" placeholder="请输入密码" />
				<div  class="mark"><input v-model="rpwd" class="fl" type="text" placeholder="确认密码"/></div>
				<input @click="fn1" class="submit" type="button" value="注册"/>
			</form>
			
		</v-content>
	</div>
	
</template>

<script>
	export default{
		name: 'regist',
		data(){
			return{
				pwd: "" ,
				rpwd: ""
			}
			
		},
		methods: {
			
			fn1(){
				console.log(window.location.href.split("?")[1])
				console.log(this.pwd)
				var telnum= window.location.href.split("?")[1];
				var pwdnum= this.pwd;
				
				
				var pw = /^[a-zA-Z]\w{5,17}$/
				var flow= false;
				var flay= false;
				if(!pw.test(this.pwd)){
					alert("请输入6位以字母开头的字符")
				}else{
					flow= true;
				};
				
				if(this.pwd == this.rpwd){
					flay= true
					
				}
				if(flay&&flow){
					
					this.$http.get(
				"http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID="+telnum+"&password="+pwdnum).then((data)=>{
					console.log(data.data)
					if(data.data==1){
						alert("注册成功！")
					}
					if(data.data==0){
						alert("用户名重名了")
					}
				})
					window.location= "#/5_1"
				}
				
			}
			
		}
	}
</script>

<style scoped>
	.label{height: 0.3rem; padding: 0.4rem 0; color: #999;}
	.tel{width: 90%; border-bottom: 1px solid #999;}
	form input{height: 0.96rem; line-height: 0.9rem; font-size:0.2rem; color:#999;  border: none; }
	.mark{overflow: hidden; width: 90%; margin-left:5%; line-height: 0.9rem;border-bottom: 1px solid #999;}
	.submit{width: 90%; height: 0.96rem; text-align: center; font-size: 0.24rem; line-height: 0.96rem; color: #FFFFFF; margin-top: 0.3rem;}
</style>