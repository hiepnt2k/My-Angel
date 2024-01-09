<template>
  <div>
    <input
      :id="field"
      :name="field"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      class="outline-none block w-full h-12 items-center rounded-md border-0 p-2 text-gray-900 shadow-sm ring-2 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
      :class="[
        validation?.$error && 'bg-red-100 focus:ring-red-400 ring-red-400 ',
        !validation?.$error &&
          validation?.$dirty &&
          'bg-cyan-100 focus:ring-cyan-400 ring-cyan-400',
        (!validation?.$model || isTyping) && 'ring-gray-300',
      ]"
      @blur="handleBlur"
      @input="handleInput($event.target.value)"
    />
    <div class="wiggle text-red-400 font-semibold h-0">
      <transition name="fade">
        <div v-if="errorMsg">{{ errorMsg }}</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",

  data() {
    return {
      isTyping: false,
    };
  },

  props: {
    field: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    validation: {
      type: Object,
      default: () => {},
    },
    errorMsg: {
      type: String,
      default: "",
    },
  },

  mounted() {
    if (this.value) {
      this.validation.$touch();
    }
  },

  methods: {
    handleInput(value) {
      this.isTyping = true;
      this.validation.$reset();
      this.$emit("handleInput", value);
    },
    handleBlur() {
      this.isTyping = false;
      this.validation.$touch();
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
