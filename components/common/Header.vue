<template>
  <header class="sticky top-0 z-40 header bg-white shadow py-4 px-4">
    <div class="header-content flex items-center flex-row">
      <form>
        <div class="hidden md:flex relative">
          <div
            class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
          >
            <span class="material-symbols-outlined"> search </span>
          </div>

          <input
            id="search"
            type="text"
            name="search"
            class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-blue-600/75"
            placeholder="Search..."
          />
        </div>
        <div class="flex md:hidden">
          <a
            class="flex items-center justify-center h-10 w-10 border-transparent"
          >
            <svg
              class="h-6 w-6 text-gray-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>
        </div>
      </form>
      <div class="flex ml-auto">
        <a href class="flex flex-row items-center">
          <img
            src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
            alt
            class="h-10 w-10 bg-gray-200 border rounded-full"
          />
          <span class="flex flex-col ml-2">
            <span class="font-semibold tracking-wide leading-none"
              >Hiep Nguyen</span
            >
            <span class="text-gray-500 text-xs leading-none mt-1">Manager</span>
          </span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
