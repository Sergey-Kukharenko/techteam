<template>
  <section :class="b()">
    <h2 :class="b('title')">header</h2>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: "GaHeader",
});

const b = useBem();
</script>

<style src="./header.style.scss" lang="scss" module />
