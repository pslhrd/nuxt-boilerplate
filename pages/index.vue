<template>
  <h1>Hello World !</h1>
</template>

<script setup>
  const { data } = await useAsyncData('products', () => GqlProducts({ first: 1 }))
  console.log(data)
</script>