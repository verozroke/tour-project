<template>

  <Head>
    <Link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <Link
      rel="preconnect"
      href="https://fonts.gstatic.com"
    />
    <Link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </Head>
  <div class="font-body">
    <section class="bg-white">
      <div class="container max-w-screen-xl mx-auto px-4">
        <HeaderVue />
      </div>
    </section>
    <NuxtPage />
    <FooterVue />
  </div>
</template>
