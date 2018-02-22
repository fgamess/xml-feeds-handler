<template>
    <div>
        <div id="form-view"  v-show="appState.beforeFeedProcessing ">
            <h1>Product Feed form</h1>
            <ProductFeedForm :app-state="appState" :feed-processing-store="feedProcessingStore"/>
        </div>

        <transition name="fade">
            <FeedProcessing :app-state="appState" :feed-processing-store="feedProcessingStore" v-show="appState.readyToProcess || appState.feedProcessing"/>
        </transition>

        <FeedProcessed v-if="appState.feedProcessed"/>
    </div>
</template>

<script>
    import ProductFeedForm from './components/ProductFeedForm'
    import FeedProcessing from './components/FeedProcessing'
    import FeedProcessed from './components/FeedProcessed'

    export default {
        props: ['feedProcessingStore'],
        components: { ProductFeedForm, FeedProcessing, FeedProcessed },
        data () {
            return {
                appState: this.feedProcessingStore.state,
            }
        }

    }
</script>
