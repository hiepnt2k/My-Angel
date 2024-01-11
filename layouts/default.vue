<template>
  <div>
    <!-- component -->
    <div class="w-full flex flex-row min-h-screen bg-gray-100">
      <SideBar />
      <!--
        animation: 
         md:ml-0 transition-all duration-150 ease-in
      -->
      <main class="main flex flex-col flex-grow">
        <Header />
        <Nuxt />
        <Footer />
      </main>
    </div>
    <Loading v-if="loadingGlobal" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import Header from "~/components/common/Header.vue";
import Footer from "~/components/common/Footer.vue";
import SideBar from "~/components/common/SideBar.vue";
import Loading from "~/components/common/Loading.vue";

export default {
  name: "Default",

  components: {
    Header,
    Footer,
    SideBar,
    Loading,
  },

  computed: {
    ...mapFields({
      loadingGlobal: "loadingGlobal",
    }),
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
