<template>
<div class="tech__wrapper">
  <NuxtImg class="tech__img" :src="props.img" :alt="props.alt"/>
  <span class="tech__text">{{  props.text  }}</span>
</div>
</template>

<script setup lang="ts">
const props = defineProps(['img', 'text', 'alt'])
</script>

<style scoped lang="scss">
@import "/assets/scss/variables";
.tech {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__img {
    max-width: 4rem;
    max-height: 4rem;
    margin-bottom: 1.1rem;
  }

  &__text {
    @include smallFont500;
    color: $grayOpacity;
  }
}

.light-mode .tech__text {
  color: $whiteFontBlack;
}

@media (max-width: 768px){
  .tech {
    &__img {
      width: 3rem;
      height: 3rem;
    }
  }
}

@media (max-width: 480px){
  .tech {
    &__text {
      font-size: 1.4rem;
    }
  }
}

</style>