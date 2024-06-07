<template>
      <header class="header pc">
        <div class="container">
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item item__logo-container" @click.stop="showModal = true">
                <logo class="item__logo header__logo"/>
                <transition name="fade">
                  <div v-if="showModal" class="modal">
                    <div class="modal-content">
                      <p class="header__secret-description">Это моя любимая группа.</p>
                      <p class="header__secret-description last-description">Логотип находится в разработке.</p>
                      <btn text="закрыть" @click.stop="closeModal" class="close">&times;</btn>
                    </div>
                  </div>
                </transition>
              </li>
              <li class="nav__item nav__btn">
                <div v-for="(item, index) in navItems" :key="index" class="item__link item__btn">
                  <btn class="nav__item-btn"  :text="item.text" :transparent="item.transparent" :btnLinkActive="item.btnLinkActive" :linkTo="item.linkTo" :index="index" @buttonClick="handleButtonClick" />
                </div>
              </li>
              <li class="nav__item">
                <SwitchThemeSVG class="item__switch" src="/colorSwitch.svg" @click="$colorMode.preference = ($colorMode.preference === 'light') ? 'dark' : 'light'"/>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  <header class="header mobile" :class="{ 'menu-open': isMenuOpen }">
    <div class="container">
      <nav class="nav">
        <div class="logo-container">
          <logo class="logo header__logo" @click.stop="showModal = true"/>
          <transition name="fade">
            <div v-if="showModal" class="modal">
              <div class="modal-content">
                <p class="header__secret-description">Это моя любимая группа.</p>
                <p class="header__secret-description last-description">Логотип находится в разработке.</p>
                <btn text="закрыть" @click.stop="closeModal" class="close">&times;</btn>
              </div>
            </div>
          </transition>
        </div>

        <div class="burger-menu" @click="toggleMenu">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>

        <ul class="nav__list">
          <li class="nav__item">
            <div v-for="(item, index) in navItems" :key="index" class="item__link item__btn">
              <Btn :text="item.text" :transparent="item.transparent" :btnLinkActive="item.btnLinkActive" :index="index" @buttonClick="handleButtonClick" />
            </div>
          </li>
          <li class="nav__item">
            <SwitchThemeSVG class="item__switch" src="/colorSwitch.svg" @click="$colorMode.preference = ($colorMode.preference === 'light') ? 'dark' : 'light'"/>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <div class="arrow-4" v-if="realIndex != 2">
      <span class="arrow-4-left"></span>
      <span class="arrow-4-right"></span>
    </div>
    <Swiper
        class="swiper"
        :modules="[SwiperMousewheel, SwiperPagination, SwiperKeyboard]"
        :slides-per-view="1"
        :direction="'vertical'"
        :pagination="{clickable: true,}"
        keyboard
        mousewheel
        :height="1000"
        @swiper="onSwiper"
    >
      <SwiperSlide class="swiper_slide">
        <section class="biography">
          <div class="container">
            <div class="biography__wrapper">
              <div class="biography__content">
                <h1 class="biography__name">Егор Адодин</h1>
                <h2 class="biography__head">
                  Frontend & Backend developer
                </h2>
                <p class="biography__description">
                  Я — разработчик фронтенда и бэкенда, специализирующийся на создании впечатляющих веб-приложений и сайтов. Мой опыт включает работу с различными фреймворками и технологиями, что позволяет мне создавать уникальные и инновационные решения для веб-разработки.
                </p>
                <div class="biography__contact">
                  <btn :btnLinkActive="true" link-to="https://t.me/XDoctype" text="Написать"/>
                  <div class="biography__animate">
                    <div class="circle"></div>
                    <span class="biography__collab">Готов к сотрудничеству</span>
                  </div>
                </div>
              </div>
              <div class="biography__image">
                <NuxtImg class="biography__memoji" src="/memojiMacMain.png" alt="memoji image"/>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide class="swiper_slide">
        <section class="about" id="about">
          <div class="container">
            <div class="about__wrapper">
              <div class="about__image">
                <NuxtImg class="about__image-item" src="/aboutMemoji.png"/>
              </div>
              <div class="about__info">
                <h2 class="about__head">Обо мне</h2>
                <p class="about__who">Кто я?</p>
                <p class="about__description">
                  Привет! Я фрилансер из Краснодара, готовый к новым возможностям и вызовам. Основной опыт - веб-разработка. Я ищу работу в команде, где смогу применить свои навыки и расти профессионально. Готов к переезду или удаленной работе. Общительный, быстрообучаемый, коммуникабельный и стрессоустойчивый. Ежедневно стремлюсь к самосовершенствованию и изучению новых технологий. В разработке я использую:
                </p>
                <div class="about__stack">
                  <TechStackItem
                      v-for="(item, index) in stackData"
                      :key="index"
                      :img="item.img"
                      :text="item.text"
                      :alt="item.alt"/>
                </div>
                <div class="about__btn">
                  <btn text="Скачать резюме"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide class="swiper_slide">
        <section class="project" id="projects">
          <div class="last-container">
            <div class="project__wrapper">
              <div class="project__head">
                <div class="project__title">Проекты</div>
              </div>
              <div class="project__content">
                <CardProject class="project__card" :cardData="cardData1"/>
                <CardProject class="project__card" :cardData="cardData2"/>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>

  </main>
</template>

<script setup lang="ts">
import Btn from "~/components/UI/btn/btn.vue";
import {cardData1, cardData2, navItems, stackData} from '~/data/data'
import Logo from "~/components/logo.vue";


const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const colorMode = useColorMode()

console.log(colorMode.preference)

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};



import { Swiper, SwiperSlide } from 'swiper/vue';

let realIndex = ref(0);

let swiperInstance = 0;

const onSwiper = (swiper) => {
  swiperInstance = swiper;
  swiper.on('slideChange', () => {
    realIndex.value = swiper.realIndex;
  });
};

const project = () => {
  swiperInstance.slideTo(2);
}
const about = () => {
  swiperInstance.slideTo(1);
}

const handleButtonClick = (index: number) => {
  if (index === 0) {
    about();
  } else if (index === 1) {
    project();
  }
};

</script>

<style lang="scss">
@import "assets/scss/variables";
.mobile{
  display: none;
}
.pc{
  display: block;
}
.dark-mode .swiper-pagination-bullet-active{
  background-color: $greenMain;
}
.light-mode .swiper-pagination-bullet-active{
  background-color: $bcDark;
}

.swiper-pagination-bullet{
  width: 2rem;
  height: 2rem;
}
.swiper-vertical > .swiper-pagination-bullets, .swiper-pagination-vertical.swiper-pagination-bullets {
  top: 15%;
}


.biography, .about, .project{
  background-position: center;
  background-size: cover;
}

// На вопрос тех почему я указал по одному тегу, а не через запятую все сразу. Переключатель цвета так не работал.
.dark-mode .biography {
  background-color: $bcDark;
}
.dark-mode .about {
  background-color: $bcDark;
}
.dark-mode .project {
  background-color: $bcDark;
}
.dark-mode .header{
  background-color: $bcDark;
}
.dark-mode .header__logo{
  fill: $greenMain;
}

.light-mode .biography {
  background-color: $bcWhite;
}
.light-mode .about {
  background-color: $bcWhite;
}
.light-mode .project {
  background-color: $bcWhite;
}
.light-mode .header{
  background-color: $bcWhite;
}
.light-mode .header__logo{
  fill: #000;
}



.biography{
  height: 100lvh;
}
.about{
  height: 100lvh;
}
.project{
  height: 100lvh;
}
.swiper, .swiper_slide{
  height: 100%;
}


.header{
  position: fixed;
  left: 0;
  padding-top: 2rem;
  z-index: 2;
  width: 100%;

  &__secret-description{
    @include mediumFont400;
    color: black;
  }
  &__secret-description:first-child{
    padding-bottom: 2rem;
    border-bottom: 1px solid black;
  }
}
.nav__list{
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.nav__btn{
  align-items: center;
  display: flex;
}

.item__logo{
  cursor: pointer;
  height: 6rem;
  width: 6rem;
}
.item__switch{
  cursor: pointer;
  width: 4rem;
  height: 4rem;
}

.last-description{
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.item__logo-container {
  position: relative;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  max-width: 45rem;
  background-color: #fefefe;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.close {
  position: relative;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.biography {
  display: flex;
  align-items: center;
  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__content{
    max-width: 70%;
  }
  &__image, &__memoji{
    width: 100%;
    height: 100%;
  }
  &__name {
    line-height: 0;
    padding-bottom: 0.7rem;
    @include mediumFont400;
    color: white;
  }

  &__head {
    padding-bottom: 0.9rem;
    @include mediumFont400;
    color: $greenMain;
  }

  &__description {
    @include mediumFont400;
    color: $grayOpacity;
  }

  &__contact {
    padding-top: 4rem;
    display: flex;
    align-items: center;
  }

  &__animate {
    padding-left: 5rem;
  }

  &__collab {
    @include mediumFont400;
    color: #888;
  }
}
.item__btn:not(:last-child){
  margin-right: 3.6rem;
}


.biography {
  &__image {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $greenMain;
      border-radius: 1rem;
    }
  }

  &__memoji {
    position: relative;
    z-index: 2;
  }
}

.biography__animate{
  display: flex;
  align-items: center;
}

.circle {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  position: relative;
  background: transparent;
  border: 2px solid $greenMain;
  box-shadow: 0 0 10px $greenMain;
}

.circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 48.5%;
  width: 15px;
  height: 15px;
  background: $greenMain;
  border-radius: 50%;
  animation: particles 1s infinite;
}

@keyframes particles {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}

.biography__collab {
  padding-left: 1rem;
  color: #fff;
}

.light-mode .biography__head{
  color: $whiteFontBlack;
}
.light-mode .biography__description{
  color: $whiteFontBlackOpacity;
}
.light-mode .biography__collab{
  color: #686565;
}
.light-mode .circle {
  border: 2px solid $bcDark;
  box-shadow: 0 0 10px $bcDark;
}
.light-mode .circle::after{
  background-color: $bcDark;
}
.light-mode .biography__image::before {
  background-color: $bcDark;
}
.light-mode .biography__name {
  color: #000;
}






.about {
  display: flex;
  align-items: center;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__image {
    max-width: 50%;
  }
  &__info {
    max-width: 48.8%;
  }
  &__head {
    @include largeFont700;
    color: $white;
  }

  &__who {
    padding-top: 0.5rem;
    padding-bottom: 3rem;
    @include smallFont700;
    color: $greenMain;
    max-width: 17rem;
    text-align: right;
    position: relative;

    &::before{
      position: absolute;
      right: 25%;
      top: 17.5%;
      content: '';
      width: 2rem;
      height: 0.4rem;
      background: $greenMain;
    }
  }

  &__description {
    @include mediumFont500;
    color: $grayOpacity;
    padding-bottom: 4rem;
  }

  &__stack {
    padding-bottom: 4rem;
    display: flex;
    justify-content: space-between;
  }
}

.about__image {
  position: relative;
}

.about__image-item {
  display: block;
  max-width: 100%;
  position: relative;
  z-index: 1;
}

.about__image::before,
.about__image::after{
  content: "";
  position: absolute;
  width: 15rem;
  height: 15rem;
  background-color: $greenMain;
  z-index: 0;
}

.about__image::before {
  top: -10px;
  left: -10px;
}

.about__image::after {
  bottom: -10px;
  right: -10px;
}


.light-mode .about__head{
  color: black;
}
.light-mode .about__who{
  color: $whiteFontBlackOpacity;
}
.light-mode .about__who::before{
  background: $whiteFontBlackOpacity;;
}
.light-mode .about__description{
 color: $whiteFontBlackOpacity;
}
.light-mode .about__image::after {
  background-color: #ffae00;
}
.light-mode .about__image::before {
  background-color: #ffae00;
}

.project {
  display: flex;
  align-items: center;
  &__title {
    text-align: center;
    @include largeFont700;
    color: $white;

    padding-bottom: 3rem;
  }
  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  &__card{
    display: flex;
    gap: 2rem;
  }
}

.light-mode .project__title {
  color: black;
}
.last-container{
  max-width: 120rem;
  margin: 0 auto;
  width: 100%;
}

@keyframes arrowAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
    opacity: 50%;
  }
  100% {
    transform: translateY(0);
  }
}
.arrow-4 {
  animation: arrowAnimation 2s infinite;
  position: absolute;
  z-index: 2;
  bottom: 45px;
  left: 45%;
  right: 45%;
  transform: translate(-50%, -45%);
  width: 66px;
  height: 30px;
}
.arrow-4-left {
  position: absolute;
  background-color: transparent;
  top: 10px;
  left: 0;
  width: 40px;
  height: 10px;
  display: block;
  transform: rotate(35deg);
  float: right;
  border-radius: 2px;
}
.arrow-4-left:after {
  content: "";
  background-color: #337AB7;
  width: 40px;
  height: 10px;
  display: block;
  float: right;
  border-radius: 6px 10px 10px 6px;
  transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
  z-index: -1;
}

.arrow-4-right {
  position: absolute;
  background-color: transparent;
  top: 10px;
  left: 26px;
  width: 40px;
  height: 10px;
  display: block;
  transform: rotate(-35deg);
  float: right;
  border-radius: 2px;
}
.arrow-4-right:after {
  content: "";
  background-color: #337AB7;
  width: 40px;
  height: 10px;
  display: block;
  float: right;
  border-radius: 10px 6px 6px 10px;
  transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
  z-index: -1;
}

@media (max-width: 1140px){
  .biography__wrapper{
    flex-direction: column-reverse;
  }
  .biography__image{
    max-width: 25rem;
    max-height: 25rem;
    margin-bottom: 5rem;
  }
  .about__image{
    width: 40%;
    height: 50%;
  }
  .about__image-item{
    width: 100%;
  }

}

@media (max-width: 768px) {
  .pc {
    display: none;
  }
  .mobile {
    display: block;
  }

  .logo-container {
    width: 5rem;
    height: 5rem;
  }

  .logo {
    width: 100%;
    height: 100%;
  }

  /* Стили для бургер-меню */
  .burger-menu {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    z-index: 999; /* Поместить поверх содержимого */
  }
  .circle{
    width: 2rem;
    height: 1.5rem;
  }
  .burger-line {
    width: 30px;
    height: 3px;
    background-color: $white;
    margin: 3px 0;
    transition: transform 0.3s ease;
  }

  /* Анимация для бургер-меню */
  .menu-open .burger-line:nth-child(1) {
    transform: translateY(8px) rotate(-47deg);
  }

  .menu-open .burger-line:nth-child(2) {
    opacity: 0;
  }

  .menu-open .burger-line:nth-child(3) {
    transform: translateY(-8px) rotate(47deg);
  }

  /* Стили для активного меню */
  .nav__list {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: $bcDark;
    border-left: 1px solid gray;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    transform: translateX(100%);
    flex-direction: column;
    justify-content: center;
    z-index: 100; /* Поместить поверх содержимого */
  }

  .menu-open .nav__list {
    transform: translateX(0);
  }
  .nav__item:not(:first-child){
    margin-top: 5rem;
  }
  .nav__item{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
  }

  .light-mode .nav__list{
    background-color: white;
  }
  .light-mode .burger-line{
    background-color: black;
  }

  .about__wrapper{
    flex-direction: column;
  }
  .about__head{
    font-size: 3rem;
  }
  .about__who{
    max-width: 12.5rem;
    padding-bottom: 1rem;
  }
  .about__who::before{
    right: 35%;
  }
  .about__description{
    font-size: 1.7rem;
  }
  .about__stack{
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .about__image{
    width: 33%;
    margin-bottom: 4rem;
  }
  .about__info{
    max-width: 90%;
  }
  .about__btn{
    display: flex;
    justify-content: center;
  }
  .about__who::before{
    top: 30%;
  }

}

.dark-mode .item__switch{
  fill: white;
}
.light-mode .item__switch{
  fill: black;
}

@media (max-width: 540px) {
  .biography__collab{
    font-size: 1.4rem;
  }
  .about__stack{
    column-gap: 1rem;
  }
  .about__description{
    font-size: 1.5rem;
  }
  .about__info{
    max-width: 90%;
  }
}
@media (max-width: 479px) {
  .about__info{
    max-width: 90%;
  }
  .project__content {
    flex-direction: column;
    align-items: center;
  }
  .project__card:not(:last-child){
    margin-bottom: 2rem;
  }
  .biography__description{
    font-size: 1.6rem;
  }
  .biography__animate{
    margin-top: 2rem;
    padding-left: 0;
    justify-content: center;
  }
  .about__image::before, .about__image::after {
    width: 6rem;
    height: 6rem;
  }
  .about__image{
    width: 40%;
  }
  .biography__contact{
    flex-direction: column;
    align-items: stretch;
  }
  .circle{
    width: 1.5rem;
  }
  .biography__collab{
    font-size: 1.3rem;
  }
  .arrow-4 {
    right: 40%;
    left: 40%;
    transform: translate(40%, 40%);
  }

  .about__description{
    padding-bottom: 2rem;
  }
  .about__stack{
    padding-bottom: 2.5rem;
  }
}

@media (max-width: 420px){
  .biography__image{
    margin-bottom: 1rem;
    max-width: 20rem;
    max-height: 20rem;
  }
  .arrow-4{
    bottom: 15px
  }
  .about__description{
    font-size: 1.4rem;
  }
}

.dark-mode .arrow-4-right:after{
  background-color: $greenMain;
}
.dark-mode .arrow-4-left:after{
  background-color: $greenMain;
}

.light-mode .arrow-4-right:after{
  background-color: black;
}
.light-mode .arrow-4-left:after{
  background-color: black;
}


.secret__btn{
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 20%;
  width: 2rem;
  padding: 10rem 4rem 10rem 5rem;
}
</style>