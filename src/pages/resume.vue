<template>

</template>
<script>
export default {
  mounted() {
    this.$router.push({name: 'menu', params: {'skip': true}})
  }
}
</script>

