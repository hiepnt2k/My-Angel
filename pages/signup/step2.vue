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

      <div class="w-full mt-10 flex justify-between">
        <div class="w-1/4">
          <label
            for="email"
            class="block text-base font-medium leading-6 text-gray-900"
            >Gender
            <span class="text-red-600">*</span>
          </label>
          <div class="mt-2">
            <div class="relative flex w-full" v-click-outside="closeGender">
              <button
                @click="handleToggleGender"
                class="text-black ring-2 rounded-md font-normal flex justify-center items-center h-12 w-full"
                :class="
                  gender
                    ? 'bg-cyan-100 focus:ring-cyan-400 ring-cyan-400'
                    : 'bg-white ring-gray-300'
                "
                type="button"
              >
                {{ gender || "None" }}
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
                class="absolute top-14 border-2 rounded-sm text-black font-normal h-[68px] bg-white w-full"
              >
                <ul class="cursor-pointer">
                  <li
                    @click="handleChooseGender('Male')"
                    class="hover:bg-cyan-100 p-1"
                    :class="gender === 'Male' && 'bg-cyan-100'"
                  >
                    Male
                  </li>
                  <li
                    @click="handleChooseGender('Female')"
                    class="hover:bg-cyan-100 p-1"
                    :class="gender === 'Female' && 'bg-cyan-100'"
                  >
                    Female
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[70%]">
          <label
            for="email"
            class="block text-base font-medium leading-6 text-gray-900"
            >Date of birth
            <span class="text-red-600">*</span>
          </label>
          <div class="mt-2">
            <input
              class="h-12 ring-2 rounded-md w-full p-2 outline-none"
              :class="
                dob
                  ? 'bg-cyan-100 focus:ring-cyan-400 ring-cyan-400'
                  : 'bg-white ring-gray-300'
              "
              type="date"
              name=""
              id=""
              v-model="dob"
            />
          </div>
        </div>
      </div>

      <div class="mt-10">
        <label
          for="email"
          class="block text-base font-medium leading-6 text-gray-900"
          >City
          <span class="text-red-600">*</span>
        </label>
        <div class="mt-2">
          <Input
            :field="'city'"
            :type="'text'"
            :placeholder="'Hanoi'"
            :value="city"
            :validation="$v.city"
            :errorMsg="validationCity().msg"
            @handleInput="handleInputCity"
          />
        </div>
      </div>

      <div class="mt-14">
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
import {
  firstNameShema,
  lastNameShema,
  cityShema,
} from "~/mixins/validateShema";

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
      city: {
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
      return (
        this.firstName &&
        this.$v.firstName.$dirty &&
        !this.$v.firstName.$error &&
        this.lastName &&
        this.$v.lastName.$dirty &&
        !this.$v.lastName.$error &&
        this.city &&
        this.$v.city.$dirty &&
        !this.$v.city.$error &&
        this.gender &&
        this.dob
      );
    },
  },

  mounted() {},

  methods: {
    handleSumbit() {
      this.$router.push("/signup/check");
    },
    handleInputCity(value) {
      this.city = value;
    },
    validationCity() {
      return this.getFieldError(this.$v, "city", cityShema);
    },
    handleChooseGender(value) {
      this.gender = value;
      this.closeGender();
    },
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

  beforeDestroy() {
    if (!this.$route.path.includes("/signup")) {
      this.$store.commit("signup/RESET_STATE");
    }
  },
};
</script>

<style lang="scss" scoped></style>
