<template>
  <div
    v-if="model"
    class="modal-overlay"
  >
    <div class="modal relative">
      <img
        alt="gallery"
        class="absolute inset-0 h-40 w-full z-10 rounded-2xl object-cover object-center"
        :src="hotel.imageUrl"
      >
      <div class="px-8 py-10 pt-44 relative  w-full bg-white">
        <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">{{ hotel.location }}</h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ hotel.hotelName }}</h1>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ hotel.price }}</h1>
        <p class="leading-relaxed">{{ hotel.description }}</p>
        <button
          @click="book"
          class="w-full py-4 my-4 font-semibold text-lg text-white bg-blue-500  rounded-xl hover:bg-blue-700 transition ease-in-out duration-500"
        >Забронировать</button>
      </div>
    </div>
    <div
      @click="model = false"
      class="close"
    >
      <img
        class="close-img"
        src="~/assets/close.png"
        alt=""
      />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import type { Hotel } from './HotelCard.vue';

const model = defineModel()

const props = defineProps<{
  hotel: Hotel
}>()


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


</script>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  filter: invert();
  width: 25px;
}
</style>
