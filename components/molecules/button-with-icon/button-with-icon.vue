<template>
  <Component :is="component" :class="b(mods)" v-bind="$attrs">
    <span :class="b('content')">
      <span v-if="text" :class="b('text')">
        {{ text }}
      </span>

      <slot name="append">
        <GaIcon :class="b('icon')">
          <slot name="icon" />
        </GaIcon>
      </slot>
    </span>
  </Component>
</template>

<script src="./button-with-icon.script.ts" />

<style module src="./button-with-icon.style.scss" lang="scss" />
