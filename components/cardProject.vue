<template>
  <div class="card">
    <NuxtImg :src="cardData.img" :alt="cardData.imgAlt" class="card__image"/>
    <h2 class="card__title">{{ cardData.title }}</h2>
    <p class="card__description pc">{{ cardData.description }}</p>
    <span class="card__tech pc">Technologies Used:</span>
    <div class="card__icon-wrapper pc">
      <div
          class="card__icon-container"
          v-for="(item, iconIndex) in cardData.cardIcon"
          :key="iconIndex"
          @mouseover="showTooltip(item.alt)"
          @mouseleave="hideTooltip()"
      >
        <NuxtImg
            class="card__icon"
            :src="item.icon"
            :alt="item.alt"
        />
        <div v-if="tooltipVisible" class="card__tooltip">{{ tooltipText }}</div>
      </div>
    </div>
    <btn class="card__btn--mobile mobile" text="Подробнее" @click="showModal = true"/>
    <btn class="card__btn" :btn-link-active="true" :linkTo="cardData.gitHubLink" text="Open GitHub"/>
    <transition name="fade">
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <p class="modal__description">{{ cardData.description }}</p>
          <span class="card__tech">Technologies Used:</span>
          <div class="card__icon-wrapper">
            <div
                class="card__icon-container"
                v-for="(item, iconIndex) in cardData.cardIcon"
                :key="iconIndex"
                @mouseover="showTooltip(item.alt)"
                @mouseleave="hideTooltip()"
            >
              <NuxtImg
                  class="card__icon"
                  :src="item.icon"
                  :alt="item.alt"
              />
              <div v-if="tooltipVisible" class="card__tooltip">{{ tooltipText }}</div>
            </div>
          </div>
          <btn text="Закрыть" @click="closeModal" class="close">&times;</btn>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Btn from "~/components/UI/btn/btn.vue";

const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
});

const tooltipVisible = ref(false);
const tooltipText = ref('');

const showTooltip = (text: string) => {
  tooltipVisible.value = true;
  tooltipText.value = text;
};

const hideTooltip = () => {
  tooltipVisible.value = false;
  tooltipText.value = '';
};

const showModal = ref(false);
const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped lang="scss">
@import "assets/scss/variables";
.pc{
  display: block;
}
.mobile{
  display: none;
}
.card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  max-width: 56.5rem;
  height: 100%;
  background-color: #26313f;
  border-radius: 1.5rem;
  &__image {
    width: 100%;
    max-height: 23rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &__title {
    @include largeFont700;
    color: $white;
    padding-bottom: 2.5rem;
    padding-top: 1rem;
  }

  &__description {
    @include mediumFont500;
    color: $grayOpacity;
    text-align: center;
  }

  &__tech {
    font-weight: 700;
    font-size: 2.2rem;
    color: $white;
    padding-bottom: 2.5rem;
    padding-top: 1rem;
  }

  &__icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__icon{
    width: 4rem;
    height: 4rem;
  }

  &__btn{
    margin: 2rem 0 2rem;
  }
}

.card__icon-container {
  position: relative;
  display: inline-block;
  transition: all .2s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover{
    padding: 0.5rem;
    border: 1px solid $greenMain;
    border-radius: 1rem;
  }
  &:not(:last-child){
    margin-right: 2rem;
  }
}

.card__tooltip {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  z-index: 999;
  display: none;
}

.card__icon-container:hover .card__tooltip {
  display: block;
}

.card__icon-container:active .card__tooltip {
  display: block;
}

@media (max-width: 1140px) {
  .card{
    max-width: 40rem;
    margin: 0 2rem;
  }
  .card__image{
    max-height: 15rem;
  }

  .card__title{
    font-size: 3rem;
  }
  .card__description, .card__tech{
    font-size: 1.8rem;
  }
  .card__icon{
    width: 3rem;
    height: 3rem;
  }
}

@media (max-width: 540px) {
  .pc{
    display: none;
  }
  .mobile{
    display: block;
  }
  .card{
    max-width: 35rem;
    margin: 0 2rem;
  }
  .card__image{
    max-height: 10rem;
  }

  .card__title{
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }
  .card__description, .card__tech{
    font-size: 1.6rem;
  }
  .card__tech{
    padding-bottom: 1rem;
  }
  .card__icon{
    width: 2rem;
    height: 2rem;
  }
  .card__btn{
    margin: 1rem 0 1rem;
  }


  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 1rem;
  }

  .close {
    position: relative;
    top: 1rem;
    right: 1rem;
  }


  .modal__description{
    font-size: 2rem;
  }
  .card__icon{
    width: 4rem;
    height: 4rem;
  }
  .card__icon-wrapper{
    padding-bottom: 2rem;
    border-bottom: 1px solid black;
  }
}
</style>
