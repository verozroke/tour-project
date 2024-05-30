<template>
  <div class="mt-4 flex">
    <div>
      <div class="flex items-center h-16 border-l-4 border-blue-600">
        <span class="text-4xl text-blue-600 px-4">Q.</span>
      </div>
      <div class="flex items-center h-16 border-l-4 border-gray-400">
        <span class="text-4xl text-gray-400 px-4">A.</span>
      </div>
    </div>
    <div>
      <div class="flex items-center h-16">
        <span class="text-lg text-blue-600 font-bold">{{ faq.question }}</span>
      </div>
      <div class="flex items-center py-2">
        <span class="text-gray-500">{{ faq.answer }}</span>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>

export type FAQ = {
  question: string,
  answer: string
}

defineProps<{
  faq: FAQ
}>()

</script>

<style scoped></style>