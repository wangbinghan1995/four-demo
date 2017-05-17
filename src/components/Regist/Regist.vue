<template class="regist">
	<div>
		<v-header title="注册">
			<a slot="leftCont" href="javascript:window.history.go(-1);"><</a>
		</v-header>
		<v-content>
			<p class="label">请确保手机通畅，以便接收验证码</p>
			<form action="" method="post">
				<input v-model="tel" class="tel" type="tel" placeholder="请输入手机号" />
				<div class="mark"><input class="fl" type="number" placeholder="请输入验证码"/><a class="fr" href="javascript:;">获取验证码</a></div>
				<input @click="fn1" class="submit" type="button" value="下一步"/>
			</form>
			
		</v-content>
	</div>
	
</template>

<script>
	export default{
		name: 'regist',
		data(){
			return{
				tel: ""
			}
			
		},
		methods: {
			fn1(){				
				var telnum =  /^1\d{10}$/;
				if(!telnum.test(this.tel)){
					//Toast("111")
					alert("手机号输入有误！")
				}else{
					window.location="#/regist1?"+this.tel
//					Toast('Upload Complete');
				}

			}
		}
	}
</script>

<style scoped>
	#app{margin-top: 60px;}
	.label{height: 0.3rem; padding: 0.4rem 0; color: #999;}
	.tel{width: 90%; border-bottom: 1px solid #999;}
	form input{height: 0.96rem; line-height: 0.9rem; font-size:0.2rem; color:#999;  border: none; }
	.mark{overflow: hidden; width: 90%; margin-left:5%; line-height: 0.9rem;border-bottom: 1px solid #999;}
	.submit{width: 90%; height: 0.96rem; text-align: center; font-size: 0.24rem; line-height: 0.96rem; color: #FFFFFF; margin-top: 0.3rem;}
</style>