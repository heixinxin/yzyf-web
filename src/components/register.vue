<template>
    <div id="app">
      <div class="headertwo clearfloat" id="header">
        <p class="fl">用户注册</p>
      </div>

      <div class="register clearfloat" id="main">
        <ul>
          <li class="clearfloat">
            <p class="tit fl">账号</p>
            <input type="text" v-model="username" name="username" class="shuru fl" required placeholder="请输入邮箱或者用户名"/>
          </li>
          <!--				<li class="clearfloat">
                              <p class="tit fl">验证码</p>
                              <input type="text" id="" value="" class="shuru shurutwo fl" placeholder="请输入短信验证码" />
                              <a href="#loginmodalt" id="modaltrigger">
                                  <input type="button" id="" value="获取短信验证码" class="btn fr" />
                              </a>
                          </li>-->
          <li class="clearfloat">
            <p class="tit fl">密码</p>
            <input type="password" v-model="password" name="password" class="shuru fl"  minlength="6" required placeholder="请设置密码"/>
          </li>
          <li class="clearfloat">
            <p class="tit fl">确认密码</p>
            <input type="password" v-model="password1" name="rpassword" class="shuru fl" minlength="6" required placeholder="请再次输入密码"/>
          </li>
          <li class="clearfloat">
            <p class="tit fl"><font style="color: red">*</font>支付宝</p>
            <input type="text" v-model="alipay" name="zfb" class="shuru fl" required placeholder="支付宝号" minlength="11"/>
          </li>
          <p class="tit fl" style="padding-left: 20px;padding-top: 5px"><font style="color: red">*注明：支付宝号请务必填写正确，否则无法提现</font></p>
        </ul>
        <a @click="register" class="pay-btn clearfloat" id="register">注册</a>
        <div class="bottom clearfloat">
          <p class="fl">
            已有账号？
            <a href="/login">立即登录</a>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
  import User from '../api/user'
  import login from './login'
  export default {
    name: 'register',
    data () {
      return {
        username: '',
        password: '',
        password1: '',
        alipay: '',
      }
    },
    methods: {
      /**
       * @return {number}
       */
      Length () {
        if (this.password.length < 6 || this.password1 < 6 ) {
          layer.open({
            content: "密码要大于6位",
            skin: 'msg',
            time: 2
          })
          return
        }
        if (this.alipay.length < 11){
          layer.open({
            content: "看看是不是支付输错了哟",
            skin: 'msg',
            time: 2
          })
          return
        }
        return 1
      },
      async register(){
        if (this.Length() !== 1){
          return
        }
        if (this.password !== this.password1) {
          layer.open({
            content: "两次输入的密码不一样",
            skin: 'msg',
            time: 2
          })
          return
        }
        const res = await User.postRegister(this.username, this.password, this.alipay)
        if (res.success === 'no'){
          layer.open({
            content: res.errmsg,
            skin: 'msg',
            time: 2
          })
          return
        }
        layer.open({
          content: res.msg,
          skin: 'msg',
          time: 3
        })
        this.$router.push({ name: 'login' })
      }

    }

  }
</script>

<style scoped>

</style>
