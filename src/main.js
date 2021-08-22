import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

  Vue.config.productionTip = false
  Vue.use(Vuex);
  Vue.use(VueRouter)

  const store = new Vuex.Store({
      state : {
        gamer: {
          points: Number,
          name: String,
          isActive: false,
          questionIDs : []

        },
        gamers : [],
      }
  }); 

  new Vue ({
    methods : {
      newGamerCreate(name){
        store.state.gamer.points = 0;
        store.state.gamer.name = name;
        store.state.gamer.isActive = true;
      }
    },
    vuetify,
    render: h => h(App)
  }).$mount('#app')

