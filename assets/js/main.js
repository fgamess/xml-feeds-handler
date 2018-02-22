import Vue from 'vue'
import App from './App'
import ProductFeedForm from './components/ProductFeedForm';



class FeedProcessingStore {
    constructor () {
        this.state = {
            beforeFeedProcessing: true,
            readyToProcess: false,
            feedProcessing: false,
            feedProcessed: false
        }
    }

    toggleBeforeFeedprocessing () {
        this.state.beforeFeedProcessing = !this.state.beforeFeedProcessing;
    }

    toggleReadyToProcess () {
        this.state.readyToProcess = !this.state.readyToProcess;
    }

    toggleFeedProcessing () {
        this.state.feedProcessing = !this.state.feedProcessing;
    }

    toggleFeedProcessed () {
        this.state.feedProcessed = !this.state.feedProcessed;
    }
}

let feed_processing_store = new FeedProcessingStore()

const EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})

let testComponent = {
    props: ['rootState'],
    components: { ProductFeedForm },
    data () {
        return {
            beforeFeedProcessing: this.rootState.beforeFeedProcessing,
            message: 'mon message 2'
        }
    },
    template: `<div> <ProductFeedForm v-if="beforeProcessing"/></div>`
}

/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    components: { App},
    data: {
        rootState: feed_processing_store.state,
        feedProcessingStore: feed_processing_store
    }
})