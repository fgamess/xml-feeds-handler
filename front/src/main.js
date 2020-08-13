import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

// import App from './App'
// import ProductFeedForm from './components/ProductFeedForm';

// class FeedProcessingStore {
//   constructor () {
//     this.state = {
//       beforeFeedProcessing: true,
//       readyToProcess: false,
//       feedProcessing: false,
//       feedProcessed: false
//     }
//   }
//
//   toggleBeforeFeedprocessing () {
//     this.state.beforeFeedProcessing = !this.state.beforeFeedProcessing
//   }
//
//   toggleReadyToProcess () {
//     this.state.readyToProcess = !this.state.readyToProcess
//   }
//
//   toggleFeedProcessing () {
//     this.state.feedProcessing = !this.state.feedProcessing
//   }
//
//   toggleFeedProcessed () {
//     this.state.feedProcessed = !this.state.feedProcessed
//   }
// }

// const feedProcessingStore = new FeedProcessingStore()
//
// const EventBus = new Vue()
//
// Object.defineProperties(Vue.prototype, {
//   $bus: {
//     get: function () {
//       return EventBus
//     }
//   }
// })

// const testComponent = {
//   props: ['rootState'],
//   components: { ProductFeedForm },
//   data () {
//     return {
//       beforeFeedProcessing: this.rootState.beforeFeedProcessing,
//       message: 'mon message 2'
//     }
//   },
//   template: '<div> <ProductFeedForm v-if="beforeProcessing"/></div>'
// }
//
// /* eslint-disable no-new */
// const vm = new Vue({
//   el: '#app',
//   delimiters: ['${', '}'],
//   components: { App },
//   data: {
//     rootState: feed_processing_store.state,
//     feedProcessingStore: feed_processing_store
//   }
// })

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    message: 'Hello Vue 2!'
  }
})

function addMessage (message) {
  const messageHTML = "<div class='message'><strong>Product" + ':</strong> ' + message + '</div>'
  document.getElementById('chat').innerHTML += messageHTML
}

if ('WebSocket' in window) {
  console.log('WebSocket is supported by your Browser!')
  const socket = new WebSocket('ws://localhost:3001')

  socket.onopen = function () {
    console.log('CONNECTED')
  }

  document.getElementById('sendBtn').addEventListener('click', function () {
    const message = {
      feedUrl: document.getElementById('feed-url').value
    }
    socket.send(JSON.stringify(message))
    console.log('Message sent')
  })

  socket.onmessage = function (e) {
    console.log('Message received')
    console.log(e)
    try {
      const message = JSON.parse(e.data)
      addMessage(message.message)
    } catch (e) {
      // Catch any errors
    }
  }
}
