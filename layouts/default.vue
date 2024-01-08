<template>
  <div>
    <!-- component -->
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <SideBar />
      <main
        class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in"
      >
        <Header />
        <Nuxt />
        <Footer />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "~/components/common/Header.vue";
import Footer from "~/components/common/Footer.vue";
import SideBar from "~/components/common/SideBar.vue";

export default {
  name: "Default",

  components: {
    Header,
    Footer,
    SideBar,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
