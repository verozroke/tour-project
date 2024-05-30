<template>
  <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
    <h4 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">Часто задаваемые вопросы</h4>
    <p class="text-center text-gray-600 text-sm mt-2">Здесь вы найдете ответы на часто задаваемые вопросы</p>
    <div class="space-y-12 px-2 xl:px-16 mt-12">
      <Question
        v-for="faq in faqs"
        :faq
        :key="faq.question"
      />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import type { FAQ } from '~/components/Question.vue';
import faqData from '../data/faqs.json' with { type: 'json'}


const faqs = ref<FAQ[]>(faqData)

</script>

<style scoped></style>