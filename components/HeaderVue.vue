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

    <ul class="flex flex-1 flex-row mx-8 gap-4 ">
      <li
        class="font-semibold text-gray-900 text-lg hover:text-blue-500 transition ease-in-out duration-300 mb-5 lg:mb-0"
      >
        <NuxtLink to="/">Главная</NuxtLink>
      </li>

      <li
        class="font-semibold text-gray-900 text-lg hover:text-blue-500 transition ease-in-out duration-300 mb-5 lg:mb-0"
      >
        <NuxtLink to="/hotels">Отели</NuxtLink>

      </li>

      <li class="font-semibold text-lg hover:text-blue-500 transition ease-in-out duration-300 mb-5 lg:mb-0">
        <NuxtLink to="/faq">Вопросы</NuxtLink>
      </li>

    </ul>

    <button
      @click="book"
      class="px-5 py-3 lg:block border-2 border-blue-500 bg-white rounded-lg font-semibold text-blue-500 text-lg hover:bg-blue-500  hover:text-white transition ease-linear duration-500"
    >
      Забронировать
    </button>

  </nav>
</template>

<script
  setup
  lang="ts"
>
const router = useRouter()


function scrollDown(blockID: string) {
  const $block = document.getElementById(blockID) ?? document.createElement('div')
  $block.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const book = () => {
  if (router.currentRoute.value.path !== '/') {
    router.push('/')
    setTimeout(() => {
      scrollDown('book')
    }, 1000)
  } else {
    scrollDown('book')
  }

}

</script>

<style scoped></style>