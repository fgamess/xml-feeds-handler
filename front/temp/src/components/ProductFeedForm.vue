<template>
    <form class="needs-validation" novalidate v-on:submit="submit" action="#" method="post">
        <div class="form-group">
            <label for="product-feed-url">Url</label>
            <input
              v-model="productFeedUrl"
              type="text"
              class="form-control"
              required
            >
            <div class="invalid-feedback">
                {{ errorMessage }}
            </div>
        </div>
        <button v-on:click="sendMessage(productFeedUrl)" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>

export default {
  name: 'productFeedForm',
  props: ['appState', 'feedProcessingStore'],

  data: function () {
    return {

      errorMessage: 'You must provide an url for the xml feed',
      productFeedUrl: ''
    }
  },
  created: function () {
    if ('WebSocket' in window) {
      console.log('WebSocket is supported by your Browser!')
      this.connection = new WebSocket('ws://localhost:3001')

      this.connection.onopen = function () {
        console.log('CONNECTED')
      }

      this.connection.onmessage = function (e) {
        console.log('Message received')
        console.log(e)
        try {
          const message = JSON.parse(e.data)
          this.methods.addMessage(message.message)
        } catch (e) {
          // Catch any errors
        }
      }
    }
  },
  destroyed: function () {
    this.connection.close()
  },
  methods: {
    sendMessage: function () {
      console.log(this.connection)
      console.log(this.productFeedUrl)
      this.connection.send()
    },
    addMessage (message) {
      const messageHTML = "<div class='message'><strong>Product" + ':</strong> ' + message + '</div>'
      document.getElementById('chat').innerHTML += messageHTML
    },
    submit: function (event) {
      // if (this.$el.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()

      // } else {
      //   event.preventDefault()
      //   this.feedProcessingStore.toggleBeforeFeedprocessing()
      //   this.feedProcessingStore.toggleReadyToProcess()
      //   this.$bus.$emit('form-validated', document.getElementById('product-feed-url').value)
      // }
      // this.$el.classList.add('was-validated')
    }
  }
}
</script>
