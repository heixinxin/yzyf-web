<template>
  <div>
    <div class="weui-flex">
      <input v-model="email" type="text">
      <a  @click="SubmitBtn" class="weui-btn weui-btn_mini weui-btn_primary">保存</a>
    </div>
  </div>
</template>

<script>
  import store from '../../../store'
  import EditUser from '../../../api/edituser'

  export default {
    name: 'email',
    data () {
      return {
        email: this.$route.query.email
      }
    },
    methods: {
      async SubmitBtn () {
        EditUser.putEmail(this.email)
        store.dispatch('commitUserInfo')
        history.go(-1)
      }
    }

  }
</script>

<style scoped>
  input{
    margin: 5% auto auto 5%;
    padding: 0;
    width: 90%;
    border: 0;
    border-bottom: #06ae56 1px solid;
    outline: 0;
    -webkit-appearance: none;
    background-color: transparent;
    font-size: 14px;
    color: inherit;
    height: 1.41176471em;
    line-height: 1.41176471;
  }
  .weui-btn{
    position: absolute;
    right: 5%;
    top: 0.34rem;
    padding: 0.1em 0.75em 0.1em 0.75em;
    line-height: 1.6;
    font-size: 14px;
    font-weight: inherit;
  }
</style>
