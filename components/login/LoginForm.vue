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
        Sign in to your account
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
              :type="'email'"
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
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-blue-600/100 hover:text-blue-600/75"
                >Forgot password?</a
              >
            </div>
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
            Sign in
          </button>
        </div>
        <div>
          <div
            class="relative border-b border-gray-400 flex items-center justify-center"
          >
            <div class="absolute bg-white p-5 text-gray-500">
              Or sign up with
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div
            class="w-[47%] border rounded-lg h-12 flex items-center justify-center font-semibold cursor-pointer hover:text-slate-500"
          >
            <svg
              class="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M19.0009 10.1944C19.0009 9.47495 18.9413 8.94995 18.8124 8.40552H10.4295V11.6527H15.35C15.2509 12.4597 14.7152 13.675 13.5247 14.4916L13.508 14.6003L16.1585 16.6126L16.3421 16.6305C18.0286 15.1041 19.0009 12.8583 19.0009 10.1944Z"
                fill="#64748B"
              />
              <path
                d="M10.4289 18.75C12.8396 18.75 14.8633 17.9722 16.3416 16.6305L13.5241 14.4916C12.7701 15.0068 11.7582 15.3666 10.4289 15.3666C8.06781 15.3666 6.06386 13.8402 5.34951 11.7305L5.2448 11.7392L2.48876 13.8295L2.45271 13.9277C3.92095 16.786 6.93681 18.75 10.4289 18.75Z"
                fill="#E2E8F0"
              />
              <path
                d="M5.35003 11.7306C5.16155 11.1862 5.05246 10.6028 5.05246 10C5.05246 9.39722 5.16155 8.81391 5.34012 8.26948L5.33512 8.15352L2.54453 6.02966L2.45323 6.07222C1.8481 7.25835 1.50087 8.59032 1.50087 10C1.50087 11.4098 1.8481 12.7417 2.45323 13.9278L5.35003 11.7306Z"
                fill="#FBBC05"
              />
              <path
                d="M10.4289 4.63331C12.1055 4.63331 13.2364 5.34303 13.8813 5.93613L16.4011 3.525C14.8536 2.11528 12.8396 1.25 10.4289 1.25C6.93684 1.25 3.92095 3.21387 2.45271 6.07218L5.33961 8.26944C6.06388 6.15972 8.06784 4.63331 10.4289 4.63331Z"
                fill="#EB4335"
              />
            </svg>
            <span>Google</span>
          </div>
          <div
            class="w-[47%] border rounded-lg h-12 flex items-center justify-center font-semibold cursor-pointer hover:text-slate-500"
          >
            <svg
              class="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1254_12678)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.25 10.0558C0.25 15.0275 3.86083 19.1617 8.58333 20V12.7775H6.08333V10H8.58333V7.7775C8.58333 5.2775 10.1942 3.88917 12.4725 3.88917C13.1942 3.88917 13.9725 4 14.6942 4.11083V6.66667H13.4167C12.1942 6.66667 11.9167 7.2775 11.9167 8.05583V10H14.5833L14.1392 12.7775H11.9167V20C16.6392 19.1617 20.25 15.0283 20.25 10.0558C20.25 4.525 15.75 0 10.25 0C4.75 0 0.25 4.525 0.25 10.0558Z"
                  fill="#2563EB"
                />
              </g>
              <defs>
                <clipPath id="clip0_1254_12678">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.25)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Facebook</span>
          </div>
        </div>
        <div class="text-center">
          <span class="text-base">Already have an account? </span>
          <span
            @click="goToSignUp"
            class="text-lg font-semibold text-blue-600 cursor-pointer hover:text-blue-400"
            >Sign Up</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "~/components/common/Input.vue";
import { required } from "vuelidate/lib/validators";
import { mustEmailFormat } from "~/mixins/ruleValidator";
import common from "~/mixins/common";
import { emailShema, passwordShema } from "~/mixins/validateShema";

export default {
  name: "LoginForm",

  mixins: [common],

  components: {
    Input,
  },

  data() {
    return {
      email: "",
      password: "",
    };
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
    };
  },

  mounted() {},

  computed: {
    isEnableBtnSubmit() {
      return (
        this.email &&
        this.$v.email.$dirty &&
        !this.$v.email.$error &&
        this.password &&
        this.$v.password.$dirty &&
        !this.$v.password.$error
      );
    },
  },

  methods: {
    goToSignUp() {
      this.$router.push("/signup");
    },
    handleSumbit() {
      this.$router.push("/");
    },
    validationPassword() {
      return this.getFieldError(this.$v, "password", passwordShema);
    },
    validationEmail() {
      return this.getFieldError(this.$v, "email", emailShema);
    },
    handleInputPassword(value) {
      this.password = value;
      this.$v.password.$reset();
    },
    handleInputEmail(value) {
      this.email = value;
      this.$v.email.$reset();
    },
  },
};
</script>

<style lang="scss" scoped></style>
