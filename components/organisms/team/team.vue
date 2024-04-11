<template>
  <section :class="b()">
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

defineOptions({
  name: "GaTeam",
});

const b = useBem();

const backgroundAttrs = {
  src: "/team/team-desktop@1x.jpg",

  sources: [
    {
      srcset: ["/team/team-mobile@1x.jpg"],
      ext: "jpg",
      media: {
        till: 768,
      },
    },
    {
      srcset: ["/team/team-tablet@1x.jpg"],
      ext: "jpg",
      media: {
        from: 768,
        till: 1360,
      },
    },
    {
      srcset: ["/team/team-desktop@1x.jpg"],
      ext: "jpg",
      media: {
        from: 1360,
        till: 1920,
      },
    },
    {
      srcset: ["/team/team-desktop-large@1x.jpg"],
      ext: "jpg",
      media: {
        from: 1920,
      },
    },
  ],
};
</script>

<style src="./team.styles.scss" lang="scss" module />
