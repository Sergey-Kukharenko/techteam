<template>
  <Component
    :is="component"
    :class="b({ view, size, block, state })"
    :disabled="disabledInternal"
    v-bind="$attrs"
  >
    <span :class="b('content')">
      <span :class="b('text')">
        {{ text }}
      </span>

      <span v-show="isLoading" :class="b('loader')">
        <GaSpinner />
      </span>
    </span>
  </Component>
</template>

<script src="./button.scripts.ts" />

<style module src="./button.styles.scss" lang="scss" />
