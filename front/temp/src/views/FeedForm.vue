<template>
  <div class="feed-form text-center">
    <h1>Feed form</h1>
    <ProductFeedForm/>
  </div>
</template>

<script>
import ProductFeedForm from '@/components/ProductFeedForm.vue'

export default {
  name: 'product-feed-form',
  components: {
    ProductFeedForm
  }
}
</script>
