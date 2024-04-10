<template>
  <button :class="b()" :type="type" v-bind="$attrs">
    <slot />
  </button>
</template>

<script src="./button-base.scripts.ts" />

<style module src="./button-base.styles.scss" lang="scss" />
