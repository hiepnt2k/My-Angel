<template>
  <div class="flex items-center justify-center w-full h-screen p-[5%]">
    <div v-if="!isMobile" class="w-1/2">
      <img
        class="w-full h-full"
        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
        alt=""
        srcset=""
      />
    </div>
    <div :class="!isMobile ? 'w-1/2' : 'w-full'">
      <Nuxt />
    </div>
    <Loading v-if="loadingGlobal" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import Loading from "~/components/common/Loading.vue";

export default {
  name: "AuthLayout",

  components: {
    Loading,
  },

  data() {
    return {};
  },

  computed: {
    ...mapFields({
      loadingGlobal: "loadingGlobal",
    }),
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
