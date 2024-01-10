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

    <div class="mt-10">
      <div class="shadow-md rounded-lg">
        <table class="w-full text-left">
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="w-1/2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
              >
                Email
              </th>
              <td class="w-1/2 px-6 py-4">{{ signupForm?.email }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
              >
                Full name
              </th>
              <td class="px-6 py-4">
                {{ signupForm?.firstName }} {{ signupForm?.lastName }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
              >
                Gender
              </th>
              <td class="px-6 py-4">{{ signupForm?.gender }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
              >
                Date of birth
              </th>
              <td class="px-6 py-4">{{ signupForm?.dob }}</td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
              >
                City
              </th>
              <td class="px-6 py-4">{{ signupForm?.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-10">
        <button
          type="submit"
          class="flex w-full h-12 bg-blue-600/100 hover:bg-blue-600/75 justify-center items-center rounded-md px-3 py-2 text-center text-base font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          @click="handleSumbit"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "SignUpCheck",

  layout: "authLayout",

  data() {
    return {};
  },

  computed: {
    ...mapFields("signup", {
      signupForm: "signupForm",
    }),
  },

  mounted() {},

  methods: {
    handleSumbit() {
      this.$router.push("/login");
    },
  },

  beforeDestroy() {
    if (!this.$route.path.includes("/signup")) {
      this.$store.commit("signup/RESET_STATE");
    }
  },
};
</script>

<style lang="scss" scoped></style>
