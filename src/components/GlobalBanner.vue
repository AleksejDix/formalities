<template>
  <div class="global-banner">
    <div class="mb-4 flex flex-1 items-center sm:mb-0">
      <div class="flex h-10 w-10 items-center justify-center">
        <GlobalIcon class="h-6 w-6" icon="mdi:bell-outline" />
      </div>
      <div class="mx-3">
        <span class="text-16 font-medium">
          <slot></slot>
        </span>
      </div>
    </div>
    <div class="flex">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss">
.global-banner {
  @apply mx-auto
      flex flex-col
      justify-between
      rounded-lg
      bg-denim-800
      p-4
      shadow sm:flex-row
      sm:items-center
      sm:px-4 sm:py-5;
}
</style>
