<template>
  <section :class="b()" class="with-bg">
    <GaImage
      :class-name="b('background-img')"
      :class="b('background')"
      v-bind="backgroundAttrs"
    />

    <div :class="b('content')">
      <h1 :class="b('title')">
        <span :class="b('title-word')">Ga</span>
        <span :class="b('title-word')">tech team</span>
      </h1>

      <div :class="b('subtitle')">
        IT компания — разработчик цифровых платформ
      </div>
    </div>

    <img src="/scroll.svg" :class="b('scroll-icon')" alt="scroll" />
  </section>
</template>

<script setup lang="ts">
import { GaImage } from "~/components/atoms/image";
import Header from "~/components/organisms/header/header.vue";

defineOptions({
  name: "GaTeam",
});

const b = useBem();

const backgroundAttrs = {
  src: "/team/1920.jpg",

  sources: [
    {
      srcset: ["/team/375.jpg"],
      ext: "jpg",
      media: {
        till: 768,
      },
    },
    {
      srcset: ["/team/768.jpg"],
      ext: "jpg",
      media: {
        from: 768,
        till: 1024,
      },
    },
    {
      srcset: ["/team/1024.jpg"],
      ext: "jpg",
      media: {
        from: 1024,
        till: 1280,
      },
    },
    {
      srcset: ["/team/1280.jpg"],
      ext: "jpg",
      media: {
        from: 1280,
        till: 1360,
      },
    },
    {
      srcset: ["/team/1360.jpg"],
      ext: "jpg",
      media: {
        from: 1360,
        till: 1680,
      },
    },
    {
      srcset: ["/team/1680.jpg"],
      ext: "jpg",
      media: {
        from: 1680,
        till: 1920,
      },
    },
    {
      srcset: ["/team/1920.jpg"],
      ext: "jpg",
      media: {
        from: 1920,
      },
    },
  ],
};
</script>

<style src="./team.styles.scss" lang="scss" module />
