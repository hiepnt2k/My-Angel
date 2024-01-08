<template>
  <div
    class="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 shadow-inner"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign up new account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-12">
        <div>
          <label
            for="email"
            class="block text-base font-medium leading-6 text-gray-900"
            >Email
          </label>
          <div class="mt-2">
            <Input
              :field="'email'"
              :type="'text'"
              :placeholder="'example@gmail.com'"
              :value="email"
              :validation="$v.email"
              :errorMsg="validationEmail().msg"
              @handleInput="handleInputEmail"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-base font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <Input
              :field="'password'"
              :type="'password'"
              :placeholder="'123456789aA@'"
              :value="password"
              :validation="$v.password"
              :errorMsg="validationPassword().msg"
              @handleInput="handleInputPassword"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-base font-medium leading-6 text-gray-900"
              >Confirm Password</label
            >
          </div>
          <div class="mt-2">
            <Input
              :field="'confirmPassword'"
              :type="'password'"
              :placeholder="'123456789aA@'"
              :value="confirmPassword"
              :validation="$v.confirmPassword"
              :errorMsg="validationConfirmPassword().msg"
              @handleInput="handleInputConfirmPassword"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full h-12 justify-center items-center rounded-md px-3 py-2 text-center text-base font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            :class="
              isEnableBtnSubmit
                ? 'bg-blue-600/100 hover:bg-blue-600/75 '
                : 'bg-gray-400 cursor-default pointer-events-none'
            "
            @click="handleSumbit"
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import Input from "~/components/common/Input.vue";
import { required } from "vuelidate/lib/validators";
import { mustEmailFormat } from "~/mixins/ruleValidator";
import {
  emailShema,
  passwordShema,
  confirmPasswordShema,
} from "~/mixins/validateShema";
import common from "~/mixins/common";

export default {
  name: "Signup",

  layout: "authLayout",

  mixins: [common],

  components: {
    Input,
  },

  validations() {
    return {
      email: {
        required,
        mustEmailFormat,
      },
      password: {
        required,
      },
      confirmPassword: {
        required,
        match: () => {
          return this.password == this.confirmPassword;
        },
      },
    };
  },

  data() {
    return {};
  },

  mounted() {},

  computed: {
    ...mapFields("signup", {
      email: "signupForm.email",
      password: "signupForm.password",
      confirmPassword: "signupForm.confirmPassword",
    }),
    isEnableBtnSubmit() {
      return (
        this.email &&
        this.$v.email.$dirty &&
        !this.$v.email.$error &&
        this.password &&
        this.$v.password.$dirty &&
        !this.$v.password.$error &&
        this.confirmPassword &&
        this.$v.confirmPassword.$dirty &&
        !this.$v.confirmPassword.$error
      );
    },
  },

  methods: {
    handleSumbit() {},
    handleInputConfirmPassword(value) {
      this.confirmPassword = value;
    },
    handleInputPassword(value) {
      this.password = value;
    },
    handleInputEmail(value) {
      this.email = value;
    },
    validationConfirmPassword() {
      return this.getFieldError(
        this.$v,
        "confirmPassword",
        confirmPasswordShema
      );
    },
    validationPassword() {
      return this.getFieldError(this.$v, "password", passwordShema);
    },
    validationEmail() {
      return this.getFieldError(this.$v, "email", emailShema);
    },
  },

  destroyed() {
    this.$store.commit("signup/RESET_STATE");
  },
};
</script>

<style lang="scss" scoped></style>
