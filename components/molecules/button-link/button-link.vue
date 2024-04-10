<template>
  <Component
    :is="component"
    :class="b(mods)"
    :disabled="disabledInternal"
    v-bind="$attrs"
  >
    <span :class="b('content')">
      <span :class="b('text')">
        {{ text }}
      </span>

      <GaIcon v-if="$slots.icon" :class="b('icon')" :style="iconStyle">
        <slot name="icon" />
      </GaIcon>
    </span>
  </Component>
</template>

<script lang="ts" src="./button-link.scripts.ts" />

<style module src="./button-link.styles.scss" lang="scss" />
