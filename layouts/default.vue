<template>
  <div>
    <Header />
    <nuxt />
    <BtnInscribite />
  </div>
</template>
<script>
import Header from '~/components/Header.vue';
import BtnInscribite from '~/components/BtnInscribite.vue';
export default {
  components: {
    Header,
    BtnInscribite
  }
}
</script>