<template>
  <header :class="b()">
    <GaIconPrimaryLogo :class="b('icon')" />

    <div :class="b('modal')">
      <div :class="b('container')">
        <nav :class="b('nav')">
          <a
            :href="item.href"
            :class="b('nav-link')"
            v-for="(item, idx) in nav"
          >
            {{ item.label }}
          </a>
        </nav>

        <a :class="b('link')">
          работа у нас
          <GaIconPrimaryArrow :class="b('arrow')" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import GaIconPrimaryLogo from "~/packages/shared-icons/src/primary/logo.vue";
import { GaIconPrimaryArrow, GaIconPrimaryArrowLong } from "@ga/icons";

defineOptions({
  name: "GaHeader",
});

const b = useBem();

const nav = [
  {
    href: null,
    label: "наши продукты",
  },
  {
    href: null,
    label: "о компании",
  },
  {
    href: null,
    label: "контакты",
  },
];
</script>

<style src="./header.style.scss" lang="scss" module />
