<template>
  <!--
    animation:
     md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in
  -->
  <aside
    class="sidebar bg-blue-600"
    :class="isToggleSideBar ? 'w-fit ' : 'w-64'"
  >
    <div
      class="w-full sidebar-header flex items-center justify-center py-6 cursor-pointer"
    >
      <div @click="handleToggleSideBar">
        <svg
          class="w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="w-full sidebar-content px-4">
      <ul class="flex flex-col w-full">
        <li class="my-px cursor-pointer" @click="handleGoToPage('/')">
          <a
            class="flex flex-row items-center h-10 px-3 rounded-lg hover:bg-gray-100 hover:text-gray-700 hover:font-semibold"
            :class="
              $route.fullPath === '/'
                ? 'bg-gray-100 font-semibold text-gray-700'
                : 'text-gray-300'
            "
          >
            <span class="material-symbols-outlined"> home </span>
            <span v-if="!isToggleSideBar" class="ml-3">Dashboard</span>
          </a>
        </li>

        <li class="my-px">
          <span
            v-if="!isToggleSideBar"
            class="flex font-medium text-sm text-white px-4 my-4 uppercase"
            >Account</span
          >
          <span
            v-else
            class="flex font-medium text-lg text-white px-4 my-4 uppercase material-symbols-outlined border rounded-full"
          >
            manage_accounts
          </span>
        </li>
        <li class="my-px cursor-pointer" @click="handleGoToPage('/profile')">
          <a
            class="flex flex-row items-center h-10 px-3 rounded-lg hover:bg-gray-100 hover:text-gray-700 hover:font-semibold"
            :class="
              $route.fullPath.includes('/profile')
                ? 'bg-gray-100 font-semibold text-gray-700'
                : 'text-gray-300'
            "
          >
            <span class="material-symbols-outlined"> person </span>
            <span v-if="!isToggleSideBar" class="ml-3">Profile</span>
          </a>
        </li>
        <li class="my-px cursor-pointer" @click="handleGoToPage('/settings')">
          <a
            class="flex flex-row items-center h-10 px-3 rounded-lg hover:bg-gray-100 hover:text-gray-700 hover:font-semibold"
            :class="
              $route.fullPath.includes('/settings')
                ? 'bg-gray-100 font-semibold text-gray-700'
                : 'text-gray-300'
            "
          >
            <span class="material-symbols-outlined"> settings </span>
            <span v-if="!isToggleSideBar" class="ml-3">Settings</span>
          </a>
        </li>
        <li class="my-4 border-b-2"></li>
        <li class="my-px cursor-pointer hover:font-semibold">
          <a
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="material-symbols-outlined"> logout </span>
            <span v-if="!isToggleSideBar" class="ml-3">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "SideBar",

  data() {
    return {};
  },

  mounted() {},

  computed: {
    ...mapFields("auth", {
      isToggleSideBar: "isToggleSideBar",
    }),
  },

  methods: {
    handleToggleSideBar() {
      this.isToggleSideBar = !this.isToggleSideBar;
    },
    handleGoToPage(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style lang="scss" scoped></style>
