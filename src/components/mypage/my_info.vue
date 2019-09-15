<template>
<div>
  <div class="headertwo clearfloat" id="header">
    <p class="fl">我的资料</p>
  </div>

  <div class="myinfo clearfloat">
    <div class="p-list p-listwo clearfloat box-s">
      <span class="fl">用户名</span>
      <i @click="nameBtn" class="iconfont icon-arrowright fr you"></i>
      <span class="fr">{{ detail.username }}</span>
    </div>

    <div class="p-list p-listhree clearfloat box-s">
      <span class="fl">性别</span>
      <i @click="genderBtn()" class="iconfont icon-arrowright fr you"></i>
      <span v-if="detail.gender === 'female' " class="fr">女</span>
      <span v-if="detail.gender === 'male' " class="fr">男</span>
    </div>

    <div class="p-list p-listhree clearfloat box-s">
      <span class="fl">邮箱</span>
      <i class="iconfont icon-arrowright fr you"></i>
      <!--<span class="fr">1543057945@qq.com</span>-->
      <span @click="emailBtn" v-if="detail.email" class="fr">{{ detail.email }}</span>
      <span @click="emailBtn" v-if="!detail.email" class="fr" style="color: mediumblue">点击绑定</span>

    </div>

    <div class="p-list p-listwo clearfloat box-s">
      <span class="fl">支付宝</span>
      <span class="fr">{{ detail.alipay }}</span>
    </div>
    <div class="p-list p-listhree clearfloat box-s">
      <i class="iconfont icon-arrowright fr you"></i>
      <span class="fl">个人服务者</span>
      <span v-if="detail.perAdmin" class="fr" style="color: #30BB2B;">已认证</span>
      <span v-else="" class="fr" style="color: #ff0632">未认证</span>
    </div>
    <div class="p-list p-listhree clearfloat box-s">
      <i class="iconfont icon-arrowright fr you"></i>
      <span class="fl">商家</span>
      <span class="fr" style="color: #ff0632">未认证</span>
    </div>
  </div>
</div>
</template>

<script>
  // 个人信息页面
  import store from '../../store'
  import EditUser from '../../api/edituser'
  import User from '../../api/user'
  import {mapState} from 'vuex'

  export default {
    name: 'my_info',
    data () {
      return {
        detail: []
      }
    },
    created: function () {
      this.init()
    },
    methods: {
      async init () {
        const res = await User.getUser()
        this.detail = res.userinfo
      },

      async nameBtn () {
        this.$router.push({name: 'info_name', query: {username: this.detail.username}})
      },

      async genderBtn () {

        weui.picker([{
          label: '女',
          value: 'female'
        }, {
          label: '男',
          value: 'male'
        }], {
          onChange: function (result) {

          },
          onConfirm: function (result) {
            EditUser.putGender(result[0])
            store.dispatch('commitUserInfo')
            history.go(0)
          }
        });
      },

      async emailBtn() {
        this.$router.push({name: 'info_email', query: {email: this.detail.email}})
      }
    }

  }

</script>

<style scoped>

</style>
