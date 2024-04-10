<template>
  <Component
    :is="component"
    :class="b({ view, checked, disabled })"
    :disabled="disabled"
    v-bind="$attrs"
    ><slot
  /></Component>
</template>

<script src="./action.scripts.ts" />

<style module src="./action.styles.scss" lang="scss" />
