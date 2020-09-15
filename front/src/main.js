import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App'
import { BootstrapVue, NavbarPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.use(Vuex)
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(NavbarPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// function addMessage (message) {
//   const messageHTML = "<div class='message'><strong>Product" + ':</strong> ' + message + '</div>'
//   document.getElementById('chat').innerHTML += messageHTML
// }

// if ('WebSocket' in window) {
//   console.log('WebSocket is supported by your Browser!')
//   const socket = new WebSocket('ws://localhost:3001')

//   socket.onopen = function () {
//     console.log('CONNECTED')
//   }

//   document.getElementById('sendBtn').addEventListener('click', function () {
//     const message = {
//       feedUrl: document.getElementById('feed-url').value
//     }
//     socket.send(JSON.stringify(message))
//     console.log('Message sent')
//   })

//   socket.onmessage = function (e) {
//     console.log('Message received')
//     console.log(e)
//     try {
//       const message = JSON.parse(e.data)
//       addMessage(message.message)
//     } catch (e) {
//       // Catch any errors
//     }
//   }
// }
