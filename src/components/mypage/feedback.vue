<template>
<div>
  <div class="weui-cells__title">意见反馈</div>
  <div class="weui-cells weui-cells_form">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <textarea v-model="feed" class="weui-textarea" placeholder="说出您对我们的意见或建议,您的建议就是我们的动力" rows="3"></textarea>
        <div class="weui-textarea-counter"><span>{{feed.length}}</span>/200</div>
      </div>
    </div>
  </div>
  <a @click="submitBtn" class="weui-btn weui-btn_block weui-btn_primary">提交</a>
  <div id="toast" style="opacity: 0; display: none;">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-icon-success-no-circle weui-icon_toast"></i>
      <p class="weui-toast__content">已完成</p>
    </div>
  </div>
</div>
</template>

<script>
  import Feedback from '../../api/feedback'
  import App from '../../App'

  export default {
    name: 'feedback',
    data () {
      return {
        feed: ""
      }
    },

    methods: {
      async submitBtn () {
        const res = await Feedback.postFeedback(this.feed)
        App.methods.tangK(res)
        history.go(-1)
      }

    }

  }
</script>

<style scoped>
  .weui-btn {
    margin: 10px 1px 10px 1px;
  }
</style>
