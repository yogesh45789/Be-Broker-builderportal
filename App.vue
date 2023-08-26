<template>
  <v-app>
    <v-main>
      <snack-bar />
      <component :is="this.$route.meta.layout || 'div'">
        <router-view/>
       </component>
    </v-main>
  </v-app>
</template>
<!-- /* eslint-disable */ -->
<script>
// import SnackBar from './components/Snackbar/SnackBar.vue',
export default {
  name: 'App',
  components: {
    SnackBar: () =>  import ("@/components/Snackbar/SnackBar"),
  },
  data: () => ({
    //
  }),
  mounted() {
        // this.$vuetify.theme.dark = true
    },
};
</script>
<style scoped> 
@import url("../src/common/styles.css");
</style>