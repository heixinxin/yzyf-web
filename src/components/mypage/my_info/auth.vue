<template>
  <div>
    <div class="headertwo clearfloat" id="header">
      <p class="fl">认证</p>
    </div>
    <p class="text">请拍摄以下证件照，避免证件反光</p>
    <div class="contentAuth">
      <form action="" enctype="multipart/form-data" style="margin-left: 3%;" method="post">
        <div class="logo-card">
          <img src="" alt="" class="Show" id="show">
          <div class="logo-button">
            <label for="upload1" class="upload1">上传</label>
            <input type="file" name="image"  v-on:change ="changePic($event)" id="upload1" hidden="hidden">
          </div>
          <div class="logo-text">身份证人像面</div>
        </div>
      </form>
      <form action="" enctype="multipart/form-data" method="post">
        <div class="logo-card">
          <img src="" alt="" class="Show" id="show1">
          <div class="logo-button">
            <label for="upload2" class="upload1">上传</label>
            <input type="file" name="image" value="" v-on:change ="changePic1($event)" id="upload2" hidden="hidden">
          </div>
          <div class="logo-text">身份证国徽面</div>
        </div>
      </form>
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
            <label class="weui-label">身份证号</label>
          </div>
          <div class="weui-cell__bd">
            <input v-model="card_id" pattern="[A-Z][0-9]*"  class="weui-input" type="text" placeholder="请输入身份证号">
          </div>
        </div>
      </div>
    </div>

    <div class="weui-btn-area">
      <a @click="applyBtn" class="weui-btn weui-btn_block weui-btn_primary">申请</a>
    </div>

  </div>
</template>

<script>
  import AuthUser from '../../../api/authuser'
  import App from '../../../App'
  import axios from 'axios'

  export default {
    name: 'Auth',
    data () {
      return {
        name: '',
        card_id: '',
        src1: null,
        src2: null,
      }
    },
    methods : {
      getObjectURL(file) {
        let url = null ;
        // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
        if (window.createObjectURL!==undefined) { // basic
          url = window.createObjectURL(file) ;
        } else if (window.URL!==undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!==undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
      },
      /* 上传图片http  axios拦截了请求，对数据做了一些处理  而fromDate传输不需要任何处理，
      所以就在想直接在axios上过载一个方法，躲过axios的拦截。
      * */
      async postImage () {
        // 上传第一张图片
        event.preventDefault();
        let formData = new FormData()
        formData.append('face_photo', this.src1)
        formData.append('word_photo', this.src2)
        formData.append('name', this.name)
        formData.append('card_id', this.card_id)
        let options = {
          url: '/my/authuser',
          data: formData,
          method: 'post',
          processData: false,  // 不处理数据
          contentType: false ,  // 不设置内容类型
          header: {
            // 'Content-Type': 'multipart/form-data;charset=UTF-8',
          }
        }
        axios(options).then((res)=>{
          if (res.data.success !== "ok" && res.data.success !== "no") {
            layer.open({
              content: res.data.success
              , style: 'background-color:#09C1FF; color:#fff; border:none;' //自定风格
              , time: 3
            });
          }else {
            App.methods.tangK(res)
          }
        })
      },

      changePic (event) {
        this.src1 = event.target.files[0]
        document.getElementById('show').src = this.getObjectURL(event.target.files[0])
      },

      changePic1 (event) {
        this.src2 = event.target.files[0]
        document.getElementById('show1').src = this.getObjectURL(event.target.files[0])
      },

      async applyBtn () {
        if (!this.name) {
          layer.open({
            content: '字段不能为空'
            ,btn: '我知道了'
          });
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
        await this.postImage()

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
    margin: 3% auto 0 auto;
  }
  .contentAuth { display: flex; height: 4.1rem; padding-top: 1em; border-top: #ffffff 1em solid }
  .text { margin: 1.5rem 0 2% 3%; color: #000000; }
  /*.wall { display: block;height: 10px;width: 100%;background: #bbbbbb; margin-top: 0.5em; }*/
  form {
    width: 46%;
    margin-left: 2%;
  }
  .Show {
    position: absolute;
    z-index: -5;
    display: block;
    width: 46%;
    height: 3rem;
  }

  .logo-card {
    width: 100%;
    height: 3rem;
    border: 1px solid #ddd;
  }
  .logo-button {
    width: 30%;
    height: 25%;
    margin: 1.1rem auto auto auto;
    padding-top: 0.13rem;
    color: #ffffff;
    text-align: center;
    background: #5b5b5b;
    border-radius: 1rem;
  }
  .logo-text {
    text-align: center;
    margin-top: 1.3rem;
  }


</style>
