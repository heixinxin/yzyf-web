<template>
  <div id="app">
    <div class="headertwo clearfloat" id="header">
      <p class="fl">登录</p>
    </div>
    <div class="sign clearfloat" id="main">
      <ul>
        <li class="clearfloat">
          <i class="iconfont icon-phone fl"></i>
          <input type="text"  value="" v-model="username" name="username" placeholder="请输入账号/邮箱" class="fl phone"/>
        </li>
        <li class="clearfloat">
          <i class="iconfont icon-lock fl"></i>
          <input type="password"  value="" v-model="password" name="password" placeholder="请输入密码" class="fl phone"/>
        </li>
      </ul>
      <button @click="login" class="pay-btn clearfloat" id="login">
        登录
      </button>
      <div class="bottom clearfloat">
        <p class="fl">
          还不是会员？
          <a href="register">立即注册</a>
        </p>
        <a href="modify" class="fr">忘记密码？</a>
      </div>
    </div>
  </div>
</template>

<script>
  import User from '../api/user'
  import store from '../store'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },

    methods: {
    async Token(){
        const token = await User.postToken (this.username, this.password)
        if (token.code === 200){
          return token
        }
      },

     async login () {
       if (!this.username || !this.password){
         layer.open({
           content: "密码或账号不能为空",
           skin: 'msg',
           time: 2 // 2秒后自动关闭
         })
         return
       }
       const res = await User.postLogin(this.username, this.password)
       if (res.success === 'no'){
         layer.open({
           content: "密码或账号输入错误",
           skin: 'msg',
           time: 2
         })
         return
       }
       const token = await this.Token()
       localStorage.setItem('token', token.token)
       await store.dispatch('commitUserInfo', token.userinfo)
       this.$router.push({ path: '/personal' })
      },

    }

  }
</script>
<style></style>
