<template>
  <Html :dir="htmlDir">
    <Body v-bind="bodyMods">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup>
import { useAppInit } from "./scripts/useAppInit";

const { bodyMods, htmlDir } = await useAppInit()
</script>
