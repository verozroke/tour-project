<template>
  <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
    <h4 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">Отели</h4>
    <p class="text-center text-gray-600 text-sm mt-2">Здесь вы найдете списки всех отелей</p>
    <div class="flex flex-wrap gap-5 w-full px-20 py-5 items-center justify-center">
      <HotelCard
        v-for="hotel in hotels"
        :key="hotel.hotelName"
        :hotel
      />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import type { Hotel } from '~/components/HotelCard.vue';
import hotelsData from '../data/hotels.json' with { type: 'json'}

const hotels = ref<Hotel[]>(hotelsData)
</script>

<style scoped></style>