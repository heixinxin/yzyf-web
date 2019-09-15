<template>
<div>
  <div class="headertwo clearfloat" id="header">
    <p class="fl">修改密码</p>
  </div>

  <div class="modify clearfloat" id="main">
    <ul>
      <li class="clearfloat">
        <input type="text" name="usernmae"  value="" placeholder="用户名" class="sname"/>
      </li>
      <li class="clearfloat">
        <input type="text" name="email" value="" placeholder="绑定的邮箱" class="sname"/>
      </li>
      <li class="clearfloat">
        <input type="text" name="imgcode" value="" placeholder="请输入验证码" class="syzma fl imagecode" minlength="4" maxlength="4"/>
        <img src="static/img/lvbg.png" class="fl"/>
      </li>
    </ul>
    <a href="javascript:;" class="pay-btn clearfloat mui-btn-red" id="forgotpass">
      找回密码
    </a>
  </div>
</div>
</template>

<script>
  export default {
    name: 'modify'
  }
</script>

<style scoped>

</style>
