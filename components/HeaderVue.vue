<template>
  <nav
    class="flex-wrap lg:flex items-center py-14 xl:relative z-10"
    x-data="{navbarOpen:false}"
  >

    <div
      class="flex font-black text-5xl text-blue-500 items-center justify-between mb-10 lg:mb-0 underline underline-offset-4"
    >
      Tour+
    </div>

    <ul class="lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16 ">

      <li
        class="font-semibold text-gray-900 text-lg hover:text-blue-500 transition ease-in-out duration-300 mb-5 lg:mb-0"
      >
        <NuxtLink to="/">Home</NuxtLink>
      </li>

      <li
        class="font-semibold text-gray-900 text-lg hover:text-blue-500 transition ease-in-out duration-300 mb-5 lg:mb-0"
      >
        <NuxtLink to="/hotels">Hotels</NuxtLink>

      </li>

      <li class="font-semibold text-lg hover:text-blue-500 transition ease-in-out duration-300 mb-5 lg:mb-0">
        <NuxtLink to="/faq">FAQ</NuxtLink>
      </li>

    </ul>

    <button
      class="px-5 py-3 lg:block border-2 border-blue-500 rounded-lg font-semibold text-blue-500 text-lg hover:bg-blue-500  hover:text-white transition ease-linear duration-500"
    >
      Request quote
    </button>

  </nav>
</template>

<script
  setup
  lang="ts"
>


</script>

<style scoped></style>