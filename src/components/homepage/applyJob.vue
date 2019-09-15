<template>
    <div id="app">
      <div class="headertwo clearfloat" id="header">
        <p class="fl">申请</p>
      </div>

      <div class="page__bd">
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">姓名</label>
          </div>
          <div class="weui-cell__bd">
            <input v-model="name"  class="weui-input" type="text" placeholder="请输入姓名">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">性别</label>
          </div>
          <div class="weui-cell__bd">
            <input v-model="gender"  type="text" placeholder="请输入性别">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">年龄</label>
          </div>
          <div class="weui-cell__bd">
            <input v-model="age"  class="weui-input" pattern="[0-9]*" type="number" placeholder="请输入年龄">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">身份证号</label>
          </div>
          <div class="weui-cell__bd">
            <input v-model="card_id" pattern="[A-Z][0-9]*"  class="weui-input" type="text" placeholder="请输入身份证号">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">电话号码</label>
          </div>
          <div class="weui-cell__bd">
            <input v-model="number" class="weui-input" minlength="11" pattern="[0-9]*" type="number" placeholder="请输入电话号码">
          </div>
        </div>
      </div>
      </div>
      <div class="weui-btn-area">
      <a @click="applyBtn" class="weui-btn weui-btn_block weui-btn_primary">申请</a>
      </div>
      <div v-if="toast" id="toast">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
          <i class="weui-icon-success-no-circle weui-icon_toast"></i>
          <p class="weui-toast__content">已申请</p>
        </div>
      </div>
    </div>
</template>

<script>
  // 申请岗位页面
  import ApplyJob from '../../api/applyjob'
  import App from '../../App'
  export default {
    name: 'applysinup',
    data () {
      return {
        name:'',
        gender:'男',
        age:18,
        card_id: '',
        number:'',
        toast:false
      }
    },

    methods: {


      async applyBtn ()  {
        if (!this.name && !this.card_id && !this.number){
          layer.open({
            content: '字段不能为空'
            ,btn: '我知道了'
          });
          return
        }
        if (!(/^1[3456789]\d{9}$/.test(this.number))){
          layer.open({
            content: "请输入正确的电话号码",
            skin: 'msg',
            time: 2
          })
          return
        }
        if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.card_id))) {
          layer.open({
            content: "请输入正确的身份证",
            skin: 'msg',
            time: 2
          })
          return
        }
        const job = this.$route.query.detail_id
        console.log(job)
        const res = await ApplyJob.getApply(job, this.name, this.gender, this.age, this.card_id, this.number)
        if (res.success === 'ok'){
          this.toast = true
          App.methods.sleep(3000).then(() => {
            this.toast = false
            this.$router.push({ name: 'home'})
          })
        }else if (res.success === 'nok'){
          layer.open({
            content: "你已经申请过了",
            skin: 'msg',
            time: 2
          })
        }else{
          layer.open({
            content: "申请失败",
            skin: 'msg',
            time: 2
          })
        }

      }
    }

  }
</script>

<style scoped>
  .weui-cell {
    padding: 13px;
  }
  .weui-cells {
    border-radius: 0.2rem;
  }
  input{
    margin: 0;
    padding: 0;
    width: 100%;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
    background-color: transparent;
    font-size: inherit;
    color: inherit;
    height: 1.41176471em;
    line-height: 1.41176471;
  }
  .page__bd{
    width: 92%;
    margin: 16% auto 0 auto;
  }
  .weui-toast{
    width: 11em;
    margin-left: -5.5em;
    line-height: initial;
  }
  .weui-toast p{
    color: #ffffff;
  }
  .weui-btn-area {
    margin: 30px 16px 8px;
  }
</style>
