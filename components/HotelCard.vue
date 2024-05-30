<template>
  <div class="flex relative w-96 h-72 rounded-2xl">
    <img
      alt="gallery"
      class="absolute inset-0 w-full h-full rounded-2xl object-cover object-center"
      :src="hotel.imageUrl"
    >
    <div
      class="px-8 py-10 relative z-10 w-full border-4 rounded-2xl border-gray-200 bg-white opacity-0 hover:opacity-100"
    >
      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">{{ hotel.location }}</h2>
      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ hotel.hotelName }}</h1>
      <p class="leading-relaxed">{{ hotel.description }}</p>
      <button
        @click="book"
        class="w-full py-4 my-4 font-semibold text-lg text-white bg-blue-500  rounded-xl hover:bg-blue-700 transition ease-in-out duration-500"
      >Забронировать</button>
    </div>
  </div>
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
  router.push('/')
  setTimeout(() => {
    scrollDown('book')
  }, 1000)
}





export type Hotel = {
  location: string
  hotelName: string
  description: string
  imageUrl: string
}


defineProps<{
  hotel: Hotel
}>()

</script>

<style scoped></style>