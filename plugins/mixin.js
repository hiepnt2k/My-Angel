import Vue from "vue";

const mixin = {
  data() {
    return {
      isMobile: window.innerWidth <= 960,
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      if (window.innerWidth <= 960) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
};

Vue.mixin(mixin);
