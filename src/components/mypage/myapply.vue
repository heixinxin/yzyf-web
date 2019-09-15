<template>
  <div>
    <div class="headertwo clearfloat" id="header">
      <p class="fl">我的报名</p>
    </div>
    <div v-if="myApplyList" class="page preview js_show">
      <div class="page__hd"></div>
      <div class="page__bd">
        <div v-for="(item, index) in myApplyList" >
          <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
              <label class="weui-form-preview__label">{{index+1}}、{{ item[0].name }}</label>
              <em class="weui-form-preview__value">¥{{ item[0].price }}</em>
            </div>
            <div class="weui-form-preview__bd">
              <div class="weui-form-preview__item">
                <label class="weui-form-preview__label">公司</label>
                <span class="weui-form-preview__value">{{ item[0].company }}</span>
              </div>
              <div class="weui-form-preview__item">
                <label class="weui-form-preview__label">地点</label>
                <span class="weui-form-preview__value">{{ item[0].place }}</span>
              </div>
              <div class="weui-form-preview__item">
                <label class="weui-form-preview__label">时间</label>
                <span class="weui-form-preview__value">{{ item[0].create_time }}</span>
              </div>
            </div>
            <div class="weui-form-preview__ft">
              <a v-if="(item[0].status) === 1" style="color: #4cd964;" class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:">待审核</a>
              <a v-else-if="(item[0].status) === 2" style="color: #4cd964" class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:">录入成功</a>
              <a v-else="" style="color: #ff0632;" class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:">录入失败</a>
              <button type="submit" class="weui-form-preview__btn weui-form-preview__btn_primary" @click="detailBtn(item[0].id)" href="javascript:">查看详情</button>
            </div>
          </div>
          <br>
        </div>
      </div>
    </div>
    <div class="page1" v-else-if="!myApplyList">你还没有申请岗位哟</div>
  </div>
</template>

<script>
  // 我的报名页面
  import myApply from '../../api/myapply'

  export default {
    name: 'myapply',
    data () {
      return {
        myApplyList:[]
      }
    },

    created: function () {
      this.init()
    },

    methods: {
      async init () {
        const res = await myApply.getApply()
        this.myApplyList = res.ApplyList
      },

      async detailBtn (detail_id) {
        this.$router.push({ name: 'job_detail',  query: { detail_id: detail_id}})
      }
    }
  }
</script>

<style scoped>
  .weui-form-preview{
    font-size: 0.5rem;
    width: 90%;
    margin: auto;
    border-radius: 0.2rem;
  }
  .page{
    margin-top: 17%;
  }
  .page1{
    margin-top: 17%;
    text-align: center;
    font-size: 0.6rem;
  }
  .weui-form-preview{
    font-size: 0.4rem;
  }
  .weui-form-preview__ft{
    line-height: 40px;
  }
  .weui-form-preview__hd .weui-form-preview__value{
    font-size: 1.5em;
  }
  .weui-form-preview__hd {
    line-height: 1.5em;
  }
  .recom {
    margin: auto;
    width: 95%;
  }
</style>
