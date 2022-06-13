<template>
  <svg
    aria-live="polite"
    role="status"
    aria-label="loading"
    class="spinner w-24"
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path id="first" d="M 5 1 A 4 4 0 1 1 1 5" />
      <path id="second" d="M 5 2.2 A 2.8 2.8 0 1 1 2.2 5" />
      <path id="third" d="M 5 3.4 A 1.6 1.6 0 1 1 3.4 5" />

      <linearGradient id="p">
        <stop offset="50%" stop-color="#3A3284" />
        <stop offset="100%" stop-color="#6F60FF" />
      </linearGradient>
      <linearGradient id="f">
        <stop offset="50%" stop-color="#AEA1B8" />
        <stop offset="100%" stop-color="#F2E0FF" />
      </linearGradient>
      <linearGradient id="l">
        <stop offset="50%" stop-color="#B03399" />
        <stop offset="100%" stop-color="#FF4ADE" />
      </linearGradient>
    </defs>

    <use xlink:href="#first" class="circle origin-center animate-clockwise" stroke="url(#p)"></use>

    <use
      xlink:href="#second"
      class="circle origin-center animate-anticlockwise"
      stroke="url(#l)"
    ></use>

    <use xlink:href="#third" class="circle origin-center animate-clockwise" stroke="url(#f)"></use>
  </svg>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.spinner {
  --stroke-width: 1;
}
.circle {
  fill: none;
  stroke-width: var(--stroke-width);
  stroke-linecap: round;
  transform-origin: center center;
}
</style>
