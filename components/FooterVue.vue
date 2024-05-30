<template>
  <!-- footer -->
  <footer class="bg-white py-10 md:py-16">

    <div class="container max-w-screen-xl mx-auto px-4">

      <div class="flex flex-col lg:flex-row justify-between">
        <div class="text-center lg:text-left mb-10 lg:mb-0">
          <div
            class=" flex font-black text-5xl text-blue-500 items-center justify-between mb-5 underline underline-offset-4"
          >
            Tour+
          </div>

          <p class="font-light text-gray-400 text-xl mb-10">Найди себе выгодную путевку с <br> Tour+</p>

        </div>

        <div class="text-center lg:text-left mb-10 lg:mb-0">
          <h4 class="font-semibold text-gray-900 text-2xl mb-6">Главное</h4>

          <a
            href="#"
            class="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
          >Главная</a>

          <a
            href="#"
            class="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
          >Отели</a>

          <a
            href="#"
            class="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
          >Часто задаваемые вопросы</a>

          <a
            @click="goToWhatsapp"
            href="#"
            class="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
          >Связаться с нами</a>

          <a
            @click="scrollDown('book')"
            class="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
          >Забронировать путевку</a>
        </div>
      </div>

    </div>

  </footer>
</template>

<script
  setup
  lang="ts"
>
function scrollDown(blockID: string) {
  const $block = document.getElementById(blockID) ?? document.createElement('div')
  $block.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const goToWhatsapp = () => {
  const link = document.createElement('a')
  link.href = 'https://wa.me/77711160994'
  link.target = '_blank'
  link.click()
}
</script>

<style scoped></style>