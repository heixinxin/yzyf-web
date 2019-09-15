import Vue from 'vue'
import Vuex from 'vuex'
import User from '../api/user'

Vue.use(Vuex)

const store = new Vuex.Store ({
  state: {
    userinfo : JSON.parse(localStorage.getItem('userinfo')),
    Token : localStorage.getItem('token')
  },
  getters: {},
  mutations: {
    setUserInfo(state, userInfo){
      state.userinfo = userInfo
      localStorage.setItem('userinfo', JSON.stringify(userInfo))
    }
  },
  actions: {
    async commitUserInfo ({ commit }, userInfo) {
      if (!userInfo){
        const res = await User.getUser()
        userInfo = res.userinfo
        if (userInfo){
          localStorage.removeItem('userinfo')
        }
        console.log(userInfo)
      }
      commit('setUserInfo', userInfo)
      return userInfo
    }
  }

})

export default store
