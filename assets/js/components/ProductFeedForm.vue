<template>
    <form class="needs-validation" novalidate v-on:submit="submit" action="#" method="post">
        <div class="form-group">
            <label for="product-feed-url">Url</label>
            <BaseInputText
                v-model="productFeedUrl"
                id="product-feed-url"
                placeholder="enter or paste url"
            />
            <div class="invalid-feedback">
                {{ errorMessage }}
            </div>
        </div>
        <BaseSubmitButton/>
    </form>
</template>

<script>
    import BaseInputText from './BaseInputText'
    import BaseSubmitButton from './BaseSubmitButton'

    export default {
        name: "productFeedForm",
        props: ['appState', 'feedProcessingStore'],
        components: {
            BaseInputText, BaseSubmitButton
        },
        data: function () {
            return {
                productFeedFormState: this.appState,
                errorMessage: "You must provide an url for the xml feed",
                productFeedUrl: '',
            }
        },
        methods: {

            submit: function(event){
                if (this.$el.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    this.feedProcessingStore.toggleBeforeFeedprocessing()
                    this.feedProcessingStore.toggleReadyToProcess()
                    this.$bus.$emit('form-validated', document.getElementById('product-feed-url').value)
                }
                this.$el.classList.add('was-validated')
            }
        }
    }
</script>