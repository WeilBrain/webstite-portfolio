<template>
  <template v-if="props.btnLinkActive">
    <NuxtLink :to="props.linkTo" class="btn" :class="{'btn__transparent': props.transparent}">
      {{ props.text }}
    </NuxtLink>
  </template>

  <template v-else>
    <button class="btn" :class="{'btn__transparent': props.transparent}">
      {{ props.text }}
    </button>
  </template>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  text: String,
  transparent: Boolean,
  btnLinkActive: {
    type: Boolean,
    default: false
  },
  linkTo: {
    type: String,
    default: '',
  }
});
</script>

<style scoped>
/* Ваши стили для кнопки */
</style>


<style scoped lang="scss">
@import "assets/scss/variables";
.btn {
  padding: 1.3rem;
  @include mediumFont500;
  color: #000;
  background-color: $greenMain;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.25s;
  text-decoration: none;
  &:hover {
    background-color: #3e9970;
    color: white;
    transform: scale(1.05);
  }

  &__transparent {
    display: block;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    &:hover {
      background-color: transparent;
      color: #a6a6a6;
      transform: scale(1.05);
    }
  }
}
.light-mode .btn {
  background-color: $bcDark;
  color: $white;
}
.light-mode .btn__transparent {
  background-color: transparent;
  border: 1px solid $bcDark;
  color: $whiteFontBlack;
}

</style>