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
      <div class="flex justify-between">
        <div>
          <label
            for="email"
            class="block text-base font-medium leading-6 text-gray-900"
            >First Name
            <span class="text-red-600">*</span>
          </label>
          <div class="mt-2">
            <Input
              :field="'firstName'"
              :type="'text'"
              :placeholder="'Hiep'"
              :value="firstName"
              :validation="$v.firstName"
              :errorMsg="validationFirstName().msg"
              @handleInput="handleInputFirstName"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-base font-medium leading-6 text-gray-900"
            >Last Name
            <span class="text-red-600">*</span>
          </label>
          <div class="mt-2">
            <Input
              :field="'lastName'"
              :type="'text'"
              :placeholder="'Nguyen'"
              :value="lastName"
              :validation="$v.lastName"
              :errorMsg="validationLastName().msg"
              @handleInput="handleInputLastName"
            />
          </div>
        </div>
      </div>

      <div class="mt-10">
        <label
          for="email"
          class="block text-base font-medium leading-6 text-gray-900"
          >Gender
          <span class="text-red-600">*</span>
        </label>
        <div class="mt-2">
          <div class="flex flex-col w-1/4">
            <button
              @click="handleToggleGender"
              class="text-black bg-white ring-2 ring-gray-300 rounded-md font-medium flex justify-center items-center h-12"
              type="button"
            >
              Gender
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              v-if="isOpenGender"
              class="mt-2 border-2 rounded-sm text-black font-medium"
            >
              <ul class="cursor-pointer">
                <li class="hover:bg-blue-600/75">Male</li>
                <li class="hover:bg-blue-600/75">Female</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
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
</template>

<script>
import { mapFields } from "vuex-map-fields";
import Input from "~/components/common/Input.vue";
import { required } from "vuelidate/lib/validators";
import common from "~/mixins/common";
import { firstNameShema, lastNameShema } from "~/mixins/validateShema";

export default {
  name: "SignUpStep2",

  layout: "authLayout",

  mixins: [common],

  components: {
    Input,
  },

  data() {
    return {
      isOpenGender: false,
    };
  },

  validations() {
    return {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
    };
  },

  computed: {
    ...mapFields("signup", {
      firstName: "signupForm.firstName",
      lastName: "signupForm.lastName",
      gender: "signupForm.gender",
      dob: "signupForm.dob",
      city: "signupForm.city",
    }),
    isEnableBtnSubmit() {
      return true;
    },
  },

  mounted() {},

  methods: {
    handleSumbit() {},
    closeGender() {
      this.isOpenGender = false;
    },
    handleToggleGender() {
      this.isOpenGender = !this.isOpenGender;
    },
    handleInputLastName(value) {
      this.lastName = value;
    },
    validationLastName() {
      return this.getFieldError(this.$v, "lastName", lastNameShema);
    },
    handleInputFirstName(value) {
      this.firstName = value;
    },
    validationFirstName() {
      return this.getFieldError(this.$v, "firstName", firstNameShema);
    },
  },
};
</script>

<style lang="scss" scoped></style>
