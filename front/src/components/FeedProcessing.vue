<template>
    <div>
            <div v-if="appState.readyToProcess">Sending request...</div>

        <transition name="fade">
            <div>
                <div v-if="appState.feedProcessing"> Processing Xml feed. Please wait.</div>
                <div class="table-responsive">
                    <table class="table" >
                        <thead class="">
                        <tr>
                            <th scope="col">productID</th>
                            <th scope="col">name</th>
                            <th scope="col">description</th>
                            <th scope="col">price</th>
                            <th scope="col">category(all)</th>
                            <th scope="col">productURL</th>
                            <th scope="col">imageURL</th>
                        </tr>
                        </thead>
                        <tbody id="stream-output">
                        </tbody>
                    </table>
                    <div id="modals">

                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
// const routes = require('../fos_js_routes.json')
// import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min'
import { JsonHelper } from '../utils/JsonHelper'

var $ = require('jquery')

require('bootstrap/dist/js/bootstrap.bundle.min')

$('.collapse').collapse()

const jsonHelper = new JsonHelper()

// Routing.setRoutingData(routes)

export default {
  name: 'feed-processing',
  props: ['appState', 'feedProcessingStore'],
  mounted: function () {
    this.$bus.$on('form-validated', (productFeedUrl) => {
      const lastResponseLength = false
      setTimeout(this.startStreaming(lastResponseLength, productFeedUrl), 5000)

      this.feedProcessingStore.toggleReadyToProcess()
      this.feedProcessingStore.toggleFeedProcessing()
    })
  },
  data () {
    return {
    }
  },
  methods: {
    startStreaming: function (lastResponseLength, productFeedUrl) {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', Routing.generate('product_feed_process') + '?data=' + encodeURIComponent(JSON.stringify({ url: productFeedUrl })), true)
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.onprogress = function (e) {
        var response = e.currentTarget.response
        var output = lastResponseLength === false
          ? response
          : response.substring(lastResponseLength)
        lastResponseLength = response.length
        console.log(output + 'toto')
        if (output.includes('{')) {
          const jsonProduct = jsonHelper.createJsonObject(output)

          var streamOutputElement = document.getElementById('stream-output')
          var tr = document.createElement('tr')
          var trCollapsible = document.createElement('tr')
          var collapsibleId = '#' + jsonProduct.productID
          tr.setAttribute('data-toggle', 'collapse')
          tr.setAttribute('data-target', collapsibleId)
          tr.setAttribute('aria-expanded', 'false')
          tr.setAttribute('aria-controls', collapsibleId)
          tr.setAttribute('class', 'clickable')
          const jsonCategories = jsonProduct.categories
          let categories = ''
          const categoriesArray = Object.keys(jsonCategories).map(function (k) {
            return jsonCategories[k]
          })

          categoriesArray.forEach(function (category) {
            categories += category + ' '
          })

          tr.innerHTML = `
                        <th scope="row"><i class="material-icons">expand_more</i>${jsonProduct.productID}</th
                        <td class="text">
                            <span>${jsonProduct.name}</span>
                        </td>
                        <td class="text">
                            <span >${jsonProduct.description}</span>
                        </td>
                        <td>${jsonProduct.currency} ${jsonProduct.price}</td>
                        <td class="text">
                            <span>${categories}</span>
                        </td>
                        <td class="text">
                            <span>${jsonProduct.productURL}</span>
                        </td>
                        <td class="text">
                            <span>${jsonProduct.imageURL}</span>
                        </td>
                    `
          trCollapsible.innerHTML = `
                        <td colspan="7">
                            <div class="collapse row" id="${jsonProduct.productID}">
                                <div class="col-4">
                                    <div class="list-group" id="list-tab-${jsonProduct.productID}" role="tablist">
                                      <a class="list-group-item list-group-item-action active" id="list-name-list-${jsonProduct.productID}" data-toggle="list" href="#list-name-${jsonProduct.productID}" role="tab" aria-controls="name">Name</a>
                                      <a class="list-group-item list-group-item-action" id="list-description-list-${jsonProduct.productID}" data-toggle="list" href="#list-description-${jsonProduct.productID}" role="tab" aria-controls="description">Description</a>
                                      <a class="list-group-item list-group-item-action" id="list-categories-list-${jsonProduct.productID}" data-toggle="list" href="#list-categories-${jsonProduct.productID}" role="tab" aria-controls="categories">Categories</a>
                                      <a class="list-group-item list-group-item-action" id="list-product-url-list-${jsonProduct.productID}" data-toggle="list" href="#list-product-url-${jsonProduct.productID}" role="tab" aria-controls="product-url">ProductURL</a>
                                      <a class="list-group-item list-group-item-action" id="list-image-url-list-${jsonProduct.productID}" data-toggle="list" href="#list-image-url-${jsonProduct.productID}" role="tab" aria-controls="image-url">ImageURL</a>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="list-name-${jsonProduct.productID}" role="tabpanel" aria-labelledby="list-name-list-${jsonProduct.productID}">${jsonProduct.name}</div>
                                        <div class="tab-pane fade" id="list-description-${jsonProduct.productID}" role="tabpanel" aria-labelledby="list-description-list-${jsonProduct.productID}">${jsonProduct.description}</div>
                                        <div class="tab-pane fade" id="list-categories-${jsonProduct.productID}" role="tabpanel" aria-labelledby="list-categories-list-${jsonProduct.productID}">${categories}</div>
                                        <div class="tab-pane fade" id="list-product-url-${jsonProduct.productID}" role="tabpanel" aria-labelledby="list-product-url-list-${jsonProduct.productID}">${jsonProduct.productURL}</div>
                                        <div class="tab-pane fade" id="list-image-url-${jsonProduct.productID}" role="tabpanel" aria-labelledby="list-image-url-list-${jsonProduct.productID}">${jsonProduct.imageURL}</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    `
          streamOutputElement.appendChild(tr)
          streamOutputElement.appendChild(trCollapsible)
        }
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          // $('#stream-output').append('<p>Completed!</p>');
        }
      }

      xhr.send()
    }
  }
}
</script>
