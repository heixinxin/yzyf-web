<template>
    <div id="app">
    <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    ifToken () {
      if (!localStorage.getItem('token')) {
        layer.open({
          content: '请先登录',
          skin: 'msg',
          time: 2
        })
        return false
      }
      return true
    },

    sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },

    tangK (res) {
      if (res){
        layer.open({
          content: '提交成功'
          ,style: 'background-color:#09C1FF; color:#fff; border:none;' //自定风格
          ,time: 3
        });
        this.sleep(3000)
      }else {
        layer.open({
          content: '提交失败'
          ,style: 'background-color:#09C1FF; color:#fff; border:none;' //自定风格
          ,time: 3
        });
      }
    }

  }
}
</script>

<style>
  .recom .content .list .right{
    width: 100%;
    float: right;
    padding: 0;
  }
  #footer{
    line-height: initial;
  }
  div{
    line-height: initial;
  }
  .headertwo{
    height: 1.3rem;
  }
  #main {
    padding-top: 45px;
    padding-bottom: 38px;
  }
  .headertwo p{
    width: 100%;
  }
  input::-webkit-input-placeholder {
    color: #dddddd;
  }
  textarea::-webkit-input-placeholder {
    color: #dddddd;
    padding-right: .7rem;
  }
</style>
