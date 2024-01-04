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
  </div>
</template>

<script>
export default {
  name: "AuthLayout",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
