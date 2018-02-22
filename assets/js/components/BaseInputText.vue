<template>
    <input
    type="text"
    class="form-control"
    :value="value"
    required
    >
</template>

<script>
    export default {
        name: "base-input-text",
        props: {
            value: {
                type: String,
                default: '',
            }
        },
    }
</script>

<style scoped>

</style>