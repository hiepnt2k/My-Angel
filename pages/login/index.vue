<template>
  <LoginForm />
</template>

<script>
import LoginForm from "~/components/login/LoginForm.vue";
export default {
  name: "Login",

  layout: "authLayout",

  components: {
    LoginForm,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
