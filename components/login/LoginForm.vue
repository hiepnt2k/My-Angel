<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
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
      <form autocomplete="off" class="space-y-12" action="#" method="POST">
        <div>
          <label
            for="email"
            class="block text-base font-medium leading-6 text-gray-900"
            >Email
          </label>
          <div class="mt-2">
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              class="block w-full h-10 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              placeholder="123456789aA@"
              class="block w-full h-10 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full h-10 justify-center rounded-md bg-blue-600/100 px-3 py-2 text-center text-base font-semibold leading-6 text-white shadow-sm hover:bg-blue-600/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
            class="w-[47%] border rounded-lg h-10 flex items-center justify-center font-semibold cursor-pointer hover:text-slate-500"
          >
            <img
              class="h-5 mr-1"
              src="https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png"
              alt=""
              srcset=""
            />
            <span>Google</span>
          </div>
          <div
            class="w-[47%] border rounded-lg h-10 flex items-center justify-center font-semibold cursor-pointer hover:text-slate-500"
          >
            <img
              class="h-5 mr-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
              alt=""
              srcset=""
            />
            <span>Facebook</span>
          </div>
        </div>
        <div class="text-center">
          <span class="text-base">Already have an account? </span>
          <span class="text-lg font-semibold text-blue-600">Log In</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  mounted() {},

  computed: {
    // ...mapState("auth", ["email", "password"]),
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
