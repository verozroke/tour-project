<template>


  <div class="font-body">
    <!-- home section -->
    <section class="bg-white mb-20 md:mb-52 xl:mb-72">
      <div class="container max-w-screen-xl mx-auto px-4">

        <div class="mt-28 text-center xl:text-left">
          <h1 class="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6">Грандиозные
            <br> поездки!
          </h1>

          <p class="font-normal text-xl text-gray-400 leading-relaxed mb-12">Ищете прекрасные места
            для отдыха? <br> Обращайтесь к нам!</p>

          <button
            @click="goToWhatsapp"
            class="px-6 py-4 bg-blue-500  text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500"
          >Связаться с нами</button>
        </div>

        <div
          class="absolute z-0 top-0 right-0"
          style="width: 45%"
        >
          <img
            src="assets/image/home-img.jpg"
            alt="Home img"
            style="width: 100%; height: 900px; object-fit: cover; object-position: center; border-radius: 10px;"
          >
        </div>

      </div>
    </section>

    <section class="bg-white py-20 relative">

      <div class="container max-w-screen-xl mx-auto px-4">

        <div class="flex flex-col xl:flex-row justify-end">

          <div
            class="absolute left-0 bottom-0 w-full"
            style="width: 45%"
          >
            <img
              src="/assets/image/feauture-img.jpg"
              alt="Feature img"
              style="width: 100%; height: 798px; object-fit: cover; object-position: center; border-radius: 10px;"
            >
          </div>

          <div class="">

            <h1 class="font-semibold text-gray-900 text-xl md:text-4xl leading-normal mb-6">О нас</h1>

            <p class="font-normal text-gray-400 text-md md:text-xl mb-16">Мы предоставляем широкий выбор отелей и
              доступных путевок, <br> чтобы ваше путешествие было незабываемым.</p>

            <div class="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
              <div class="text-center md:text-left">
                <h4 class="font-semibold text-gray-900 text-2xl mb-2">Лучшие цены</h4>
                <p class="font-normal text-gray-400 text-xl leading-relaxed">Мы предлагаем конкурентоспособные цены на
                  бронирование <br> отелей и путевок, чтобы сделать ваши путешествия доступнее.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">

              <div class="text-center md:text-left">
                <h4 class="font-semibold text-gray-900 text-2xl mb-2">Надежность и безопасность</h4>
                <p class="font-normal text-gray-400 text-xl leading-relaxed">Мы гарантируем безопасность ваших
                  транзакций <br> и защиту персональных данных.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center xl:justify-start space-x-4">

              <div class="text-center md:text-left">
                <h4 class="font-semibold text-gray-900 text-2xl mb-2">Удобство и простота</h4>
                <p class="font-normal text-gray-400 text-xl leading-relaxed">Наш сайт обеспечивает легкий и быстрый <br>
                  процесс бронирования, экономя ваше время и усилия.</p>
              </div>
            </div>

          </div>

        </div>

      </div> <!-- container.// -->

    </section>

    <section class="bg-white py-20 relative">

      <div class="container max-w-screen-xl mx-auto px-4">

        <div class="flex flex-col xl:flex-row justify-end">
          <div class="w-full">

            <h1 class="font-semibold text-gray-900 text-xl md:text-4xl leading-normal mb-16">Почему мы?</h1>

            <div class="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
              <div class="text-center md:text-left">
                <h4 class="font-semibold text-gray-900 text-2xl mb-2">Широкий выбор</h4>
                <p class="font-normal text-gray-400 text-xl leading-relaxed">Мы предлагаем разнообразные варианты отелей
                  <br> и путевок, чтобы удовлетворить все ваши потребности.
                </p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">

              <div class="text-center md:text-left">
                <h4 class="font-semibold text-gray-900 text-2xl mb-2">Лучшие предложения</h4>
                <p class="font-normal text-gray-400 text-xl leading-relaxed">Наши цены и скидки делают <br> путешествия
                  доступными для любого бюджета.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center xl:justify-start space-x-4">

              <div class="text-center md:text-left">
                <h4 class="font-semibold text-gray-900 text-2xl mb-2">Отличное обслуживание</h4>
                <p class="font-normal text-gray-400 text-xl leading-relaxed">Мы обеспечиваем высокий уровень поддержки
                  клиентов, <br> помогая на каждом этапе вашего бронирования.</p>
              </div>
            </div>

          </div>
          <div
            class="absolute right-0 top-0"
            style="width: 45%"
          >
            <img
              src="https://images.unsplash.com/photo-1655337169484-d9bf5a8c5b6f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Feature img"
              style="width: 100%; height: 798px; object-fit: cover; object-position: center; border-radius: 10px;"
            >
          </div>
        </div>

      </div> <!-- container.// -->

    </section>

    <section class="bg-white py-10 md:py-16">

      <div class="container max-w-screen-xl mx-auto px-4">

        <h1 class="font-semibold text-gray-900 text-4xl text-center mb-10 mt-10">Доступные Путёвки</h1>

        <div class="flex space-x-4 md:space-x-6 lg:space-x-8">
          <div>
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/91/53/d1.jpg"
              alt="image"
              @click="scrollDown('book')"
              style="width: 411px; height: 280px;"
              class="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 object-cover object-center transition ease-in-out duration-500"
            >
            <img
              src="https://blog.howlanders.com/wp-content/uploads/2021/08/tours-to-machu-picchu.jpg"
              alt="image"
              @click="scrollDown('book')"
              style="width: 411px; height: 592px;"
              class="hover:opacity-75 transition object-cover object-center ease-in-out duration-500"
            >

          </div>

          <div>
            <img
              src="https://nationalparkexpress.com/wp-content/uploads/2022/05/grand-canyon-west-1.jpg"
              alt="image"
              @click="scrollDown('book')"
              style="width: 411px; height: 280px;"
              class="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 object-cover object-center transition ease-in-out duration-500"
            >
            <img
              src="https://www.nationalgeographic.com/content/dam/expeditions/destinations/africa/journeys/Tanzania-Safari-Experience/tanzania-safari-experience-lead-lion-cubs.jpg"
              alt="image"
              @click="scrollDown('book')"
              style="width: 411px; height: 280px;"
              class="mb-3 md:mb-6 lg:mb-8 hover:opacity-75 object-cover object-center transition ease-in-out duration-500"
            >
            <img
              src="https://www.tauck.com/-/media/Tauck/Collection/Hero-Images/Collection_RiverCruising_banner.jpg?h=817&w=1400&rev=d476ae5fcad245328f8813d80f321649&hash=C65DBFD85BE7626CA48EF9D2D1FFDEFA"
              alt="image"
              @click="scrollDown('book')"
              style="width: 411px; height: 280px;"
              class="hover:opacity-75 transition object-cover object-center ease-in-out duration-500"
            >
          </div>

          <div>
            <img
              src="https://quicksilver-cruises.com/qsc/wp-content/uploads/2015/10/hero-mobile-720-bg3.jpg"
              alt="image"
              @click="scrollDown('book')"
              style="width: 411px; height: 592px;"
              class="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 object-cover object-center transition ease-in-out duration-500"
            >
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/2e/16/f8.jpg"
              alt="image"
              @click="scrollDown('book')"
              style="width: 411px; height: 280px;"
              class="hover:opacity-75 transition ease-in-out object-cover object-center duration-500"
            >
          </div>
        </div>

      </div> <!-- container.// -->

    </section>


    <section class="bg-white py-10 md:py-16">

      <div class="container max-w-screen-xl mx-auto px-4">

        <h1 class="font-semibold text-gray-900 text-4xl text-center mb-10">Наши Отели</h1>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://cdn.worldota.net/t/1200x616/extranet/1f/33/1f33b4b63d2f2ee5dd868209231742f99a41b67e.jpeg"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Россия, Москва</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Гостиница Арбат</h1>
                <p class="leading-relaxed">Элегантный отель с видом на Красную площадь. Наслаждайтесь роскошными
                  номерами и первоклассным сервисом в самом сердце Москвы.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://www.hotels.ru/content/images/articles/eiffel_tower_16.jpg"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Франция, Париж</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Отель Эйфелева Башня</h1>
                <p class="leading-relaxed">Романтический отель с видом на Эйфелеву башню. Идеально подходит для
                  влюбленных пар и туристов, ценящих красоту Парижа.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://img-fotki.yandex.ru/get/988220/245498954.2b0/0_25751f_7dc9c6b7_orig.jpg"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Италия, Рим</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Вилла Тиберина</h1>
                <p class="leading-relaxed">Очаровательный бутик-отель, расположенный в историческом центре Рима. Ощутите
                  атмосферу древнего города в комфортных условиях.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/305582502.jpg?k=a63ceffc38e48825703cead04fcd8f785ff72fcff01190811ad5a282aeba77af&o=&hp=1"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Япония, Токио</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Императорский Палас Отель</h1>
                <p class="leading-relaxed">Современный отель с видом на Императорский дворец. Насладитесь гармонией
                  японской культуры и высокими стандартами обслуживания.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://www.thesun.co.uk/wp-content/uploads/2024/03/big-attraction-inside-mind-bending-888441149.jpg"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Испания, Барселона</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Гран Хотель Гауди</h1>
                <p class="leading-relaxed">Роскошный отель в стиле модерн, расположенный рядом с шедеврами Гауди.
                  Идеальное место для тех, кто ценит искусство и комфорт.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/232575872.jpg?k=beb1dfae9dc912ffb5fdea86ce69bf2fbfe1f28c96dc2c2dda8c8231d7d2ae7c&o=&hp=1"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Австралия, Сидней</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Отель Оперный Дом</h1>
                <p class="leading-relaxed">Современный отель с видом на Сиднейский оперный театр и гавань. Идеален для
                  туристов, желающих исследовать красоту и культуру Сиднея.</p>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- container.// -->
    </section>

    <section class="bg-white py-10 md:py-16">

      <div class="container max-w-screen-xl mx-auto px-4">

        <h1 class="font-semibold text-gray-900 text-4xl text-center mb-10">Страны сотрудничества</h1>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_Russia-512x341.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Россия</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_France-512x341.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Франция</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_Italy-512x341.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Италия</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_Spain-512x341.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Испания</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_Germany-512x307.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Германия</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_Japan-512x341.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Япония</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_Australia-512x256.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Австралия</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_Canada-512x256.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Канада</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_Peoples_Republic_of_China-512x341.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Китай</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_Brazil-512x358.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Бразилия</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_Argentina-512x320.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Аргентина</h2>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-md h-96">
            <div class="flex relative h-[100%]">
              <img
                alt="gallery"
                class="absolute rounded-md border-blue-400 border border-[5px] inset-0 w-full h-full object-cover object-center"
                src="/assets/image/Flag_of_India-512x341.png"
              >
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition ease-in-out duration-300"
              >
                <h2 class="tracking-widest text-3xl title-font font-bold text-blue-500 mb-1">Индия</h2>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- container.// -->
    </section>


    <!-- gallery section //end -->

    <!-- testimoni section -->
    <section class="bg-white py-10 md:py-16">

      <div class="container max-w-screen-xl mx-auto px-4 xl:relative">

        <p class="font-normal text-gray-400 text-lg md:text-xl text-center uppercase mb-6">Отзывы</p>

        <h1 class="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-14">Что наши клиенты
          <br>
          говорят о Tour+
        </h1>

        <div class="flex flex-col md:flex-row md:items-center justify-center md:space-x-8 lg:space-x-12 mb-10 md:mb-20">

          <div class="bg-gray-100 h-96 flex flex-col w-96 py-4 px-4 justify-center rounded-lg mb-10 md:mb-0">
            <img
              src="assets/image/testimoni-3.png"
              alt="Image"
              class="mx-8 my-8 w-[76px] h-[76px] rounded-full"
            >
            <p class="font-normal text-sm lg:text-md text-gray-400 mx-8 my-8"><b>Отличный сервис!</b> Tour+ помог мне
              <br> найти отличное жилье <br> по доступной цене, а персонал был очень <br> отзывчивым и помог во всем.
            </p>

            <h3 class="font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8">Огуречкин Иван</h3>
          </div>

          <div class="bg-gray-100 h-96 flex flex-col w-96 py-4 px-4 justify-center rounded-lg">
            <img
              src="assets/image/testimoni-4.png"
              alt="Image"
              class="mx-8 my-8 w-[76px] h-[76px] rounded-full"
            >

            <p class="font-normal text-sm lg:text-md text-gray-400 mx-8 my-8"><b>Превосходный опыт!</b> Благодаря Tour+
              <br> я смог забронировать <br> шикарный отель по <br> выгодной цене, и <br> путешествие прошло безупречно.
            </p>

            <h3 class="font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8">Аскар Ильясов</h3>
          </div>

          <div class="bg-gray-100 h-96 flex flex-col w-96 py-4 px-4 justify-center rounded-lg">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocLNnpBT5QCj42Y7MWvp-jciaMu8szTvfb91B-ADCXM3-p6sOkZO=s360-c-no"
              alt="Image"
              class="mx-8 my-8 w-[76px] h-[76px] rounded-full"
            >

            <p class="font-normal text-sm lg:text-md text-gray-400 mx-8 my-8"><b>Рекомендую всем!</b> Сервис Tour+ <br>
              значительно упростил выбор <br> и бронирование путевок, <br> предлагая лучшие предложения <br> по отличным
              ценам.
            </p>

            <h3 class="font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8">Айя Шалкар</h3>
          </div>


        </div>

      </div> <!-- container.// -->

    </section>
    <!-- testimoni section //end -->

    <!-- book section -->
    <section
      class="bg-white py-10 md:py-16"
      id="book"
    >

      <div class="container max-w-screen-xl mx-auto px-4 xl:relative">

        <div class="bg-blue-600 flex flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl">

          <div class="text-center lg:text-left mb-10 lg:mb-0">
            <h1 class="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">Бронь <br> путевок
            </h1>

            <p class="font-normal text-white text-md md:text-xl">Здесь вы можете забронировать себя к доступной путевке
              <br>
              Напишите свои контактные данные, <br> чтобы мы могли с вами связаться <br> Мы вам ответим как можно
              скорее!
            </p>
          </div>

          <div class="hidden xl:block xl:absolute right-0">
            <img
              src="assets/image/book.png"
              alt="Image"
            >
          </div>

          <div class="hidden md:block bg-white xl:relative px-6 py-3 rounded-3xl">
            <div class="py-3">
              <h3 class="font-semibold text-gray-900 text-3xl">Забронировать путевку</h3>
            </div>

            <div class="py-3">
              <input
                type="text"
                v-model="Name"
                placeholder="ФИО"
                class="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              >
            </div>

            <div class="py-3">
              <input
                type="text"
                v-model="Phone"
                placeholder="Номер телефона"
                class="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              >
            </div>

            <div class="py-3 relative">
              <input
                type="text"
                v-model="DateData"
                placeholder="Дата поездки"
                class="px-4 py-4 w-96 bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
              >
            </div>

            <div class="py-3 relative">
              <input
                type="text"
                placeholder="Название отеля"
                v-model="HotelName"
                class="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              >

              <div class="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                <i data-feather="chevron-down"></i>
              </div>
            </div>

            <div class="py-3">
              <button
                @click="send"
                class="w-full py-4 font-semibold text-lg text-white bg-blue-500  rounded-xl hover:bg-blue-700 transition ease-in-out duration-500"
              >Забронировать</button>
            </div>
          </div>

        </div>

      </div> <!-- container.// -->

    </section>
    <!-- book section //end -->
  </div>
</template>

<script
  setup
  lang="ts"
>
import axios from 'axios'

const Name = ref('')
const Phone = ref('')
const DateData = ref('')
const HotelName = ref('')

const send = async () => {
  const { data } = await axios.postForm('https://script.google.com/macros/s/AKfycbzvlPI8dZbkuCHPyBkl9QYnNoqPMitxvtJ9lwN8OOdfQOlUeEJ9duyMTpoHFlhsJdqqkg/exec', {
    Name: Name.value,
    Phone: Phone.value,
    Date: DateData.value,
    HotelName: HotelName.value,
  })

  alert(data)
}


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