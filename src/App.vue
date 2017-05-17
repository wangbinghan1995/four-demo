<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@charset "utf-8";	
	html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input{ margin:0; padding:0; }
	ul,ol,li{list-style:none;}
	a,u{text-decoration:none;}
	html,body{font-family:"微软雅黑"; font-size: 12px;background: #f4f4f8!important;}
	img{display:block;border:0;}
	i,em{font-style:normal;}
	b,strong{font-weight:100;}
	h1,h2,h3,h4,h5,h6{font-size:16px;font-weight:100;}
	.clearfix:after{content:".";clear:both;display:block;height:0;overflow:hidden;visibility: hidden;}
	.fl{float: left;}
	.fr{
		float: right;
	}
</style>
