<template>
  <div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>标题文字</p>
        </div>
        <div class="weui-cell__ft">说明文字</div>
      </div>
      <div class="weui-cell weui-cell_swiped">
        <div class="weui-cell__bd" style="transform: translateX(-68px)">
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p>标题文字</p>
            </div>
            <div class="weui-cell__ft">说明文字</div>
          </div>
        </div>
        <div class="weui-cell__ft">
          <a class="weui-swiped-btn weui-swiped-btn_warn" href="javascript:">删除</a>
        </div>
      </div>
    </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyFooter from '@/components/base/footer'

  export default {
    name: 'list',
    data () {
      return {
      }
    },

    components: {
      MyFooter
    },

    methods: {

    }

  }
</script>

<style scoped>

</style>
