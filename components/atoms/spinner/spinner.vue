<template>
  <div :class="b({ view })">
    <template v-if="view === 'dot'">
      <div :class="b('dot')" />
      <div :class="b('dot')" />
      <div :class="b('dot')" />
    </template>
    <template v-if="view === 'line'">
      <div :class="b('line')" />
    </template>
  </div>
</template>

<script src="./spinner.script.ts" />

<style src="./spinner.style.scss" lang="scss" module />
