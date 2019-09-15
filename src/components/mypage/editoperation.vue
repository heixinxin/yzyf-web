<template>
  <div>
    <div class="headertwo clearfloat" id="header">
      <p class="fl">编辑</p>
    </div>
    <div style="margin-top: 13.5%;">
      <div class="weui-cells__title">工作</div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input v-model="job_name" class="weui-input" type="text" placeholder="如：保安">
          </div>
        </div>
      </div>
      <div class="weui-cells__title">公司</div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input v-model="company" class="weui-input" type="text" placeholder="公司名字">
          </div>
        </div>
      </div>

      <!--<div class="weui-cells weui-cells_radio">-->
      <!--<label class="weui-cell weui-check__label" for="x11">-->
      <!--<div class="weui-cell__bd">-->
      <!--<p>男</p>-->
      <!--</div>-->
      <!--<div class="weui-cell__ft">-->
      <!--<input type="radio" v-model="gender" value="男" class="weui-check" name="radio1" id="x11">-->
      <!--<span class="weui-icon-checked"></span>-->
      <!--</div>-->
      <!--</label>-->
      <!--<label class="weui-cell weui-check__label" for="x12">-->
      <!--<div class="weui-cell__bd">-->
      <!--<p>女</p>-->
      <!--</div>-->
      <!--<div class="weui-cell__ft">-->
      <!--<input type="radio" v-model="gender" name="radio1" value="女" class="weui-check" id="x12" checked="checked">-->
      <!--<span class="weui-icon-checked"></span>-->
      <!--</div>-->
      <!--</label>-->

      <!--</div>-->
      <div class="weui-cells__title">薪资</div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd weui-flex">
            <input v-model="price" style="width: 90%" class="weui-input" type="number" placeholder="金额">
            <select v-model="year">
              <option>/ 天</option>
              <option>/ 月</option>
            </select>
          </div>
        </div>
      </div>

      <div class="weui-cells__title">地点</div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input v-model="place" class="weui-input" type="text" placeholder="上班地点">
          </div>
        </div>
      </div>

      <div class="weui-cells__title">人数</div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input v-model="job_number" class="weui-input" type="number" placeholder="招收人数"><span style="    position: absolute;
    right: 10%;">/ 人</span>
          </div>
        </div>
      </div>

      <div class="weui-cells__title">工作描述</div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea v-model="job_require" class="weui-textarea" placeholder="对工作的介绍" rows="3"></textarea>
            <div class="weui-textarea-counter"><span>{{job_require.length}}</span>/200</div>
          </div>
        </div>
      </div>

      <div class="weui-cells__title">公司介绍</div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea v-model="company_info" class="weui-textarea" placeholder="公司的简介" rows="3"></textarea>
            <div class="weui-textarea-counter"><span>{{company_info.length}}</span>/200</div>
          </div>
        </div>
      </div>

      <div class="weui-cells__title">是否包吃/住</div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd weui-flex">
            <select v-model="eat" class="eatC">
              <option>包吃</option>
              <option>不包吃</option>
            </select>
            <select v-model="live" class="eatC">
              <option>包住</option>
              <option>不包住</option>
            </select>
          </div>
        </div>
      </div>

    </div>
    <a @click="submitBtn" class="weui-btn weui-btn_block weui-btn_primary">提交</a>
  </div>
</template>

<script>
  import Home from '../../api/home'
  import App from '../../App'
  export default {
    name: 'editoperation',
    data () {
      return {
        job_id:this.$route.query.job_id,
        job_name: "",
        company: "",
        price: "",
        job_number: 0,
        place: "",
        year: "/ 天",
        eat: "包吃",
        live: "包住",
        company_info: "",
        job_require: ""
      }
    },

    created: function () {
      this.init()
    },

    methods: {
      async init () {
        const res = await Home.getDetail(this.job_id)
        this.job_name = res.name
        this.company = res.company
        this.year = res.price.substr(-2).replace("/", "/ ")
        this.price = res.price.slice(0, -2)
        this.job_number = res.job_number
        this.place = res.place
        if (!res.eat){
          this.eat = "不包吃"
        }
        if (!res.live){
          this.live = "不包住"
        }
        this.company_info = res.company_info
        this.job_require = res.job_require.replace("<br/>", /\n|\r\n/g)
      },

      async submitBtn () {
        this.eat = this.eat === "包吃"
        this.live = this.live === "包住"
        this.price = this.price + this.year.replace(" ", "")
        this.job_require.replace(/\n|\r\n/g, "<br/>")
        const res = await Home.putCreate(this.job_id ,this.job_name, this.company, this.price, this.job_number, this.place, this.eat, this.live, this.company_info, this.job_require)
        App.methods.tangK(res)
        this.$router.push({name: 'release'})
      }

    }

  }
</script>

<style scoped>
  .weui-cell {
    padding: 10px;
  }
  select {
    margin: 0;
    padding: 0 0 0 6%;
    width: 15%;
    height: 1.41176471em;
    line-height: 1.41176471;
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

  .weui-cells__title{
    margin-top: 3px;
    padding-left: 10px;
  }
  .headertwo{
    padding: 0;
  }
  .headertwo p {
    margin-top: 0.3rem;
  }
  .weui-btn {
    margin: 10px 1px 10px 1px;
  }
  .eatC {
    width: 30%;
    margin: auto;
    padding: 0;
    text-align: center;
    text-align-last: center;
  }
</style>
