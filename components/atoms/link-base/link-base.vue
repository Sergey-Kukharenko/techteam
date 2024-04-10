<template>
  <Component :is="component.is" :class="b()" v-bind="component.attrs"
    ><slot
  /></Component>
</template>

<script src="./link-base.scripts.ts" />

<style module src="./link-base.styles.scss" lang="scss" />
