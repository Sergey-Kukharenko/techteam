<template>
  <picture v-if="hasSourcesInternal">
    <source
      v-for="(source, index) in sourcesInternal"
      :key="index"
      v-bind="buildSourceAttrs(source)"
    />

    <img
      :class="rootClass"
      v-bind="imgAttrs"
      @load="onLoad($event)"
      @error="onError($event)"
    />
  </picture>

  <img
    v-else
    :class="rootClass"
    v-bind="imgAttrs"
    @load="onLoad($event)"
    @error="onError($event)"
  />
</template>

<script src="./image.script.ts" />

<style module src="./image.style.scss" lang="scss" />
