<template>
  <section :class="b()" id="join">
    <GaImage
      :class-name="b('background-img')"
      :class="b('background')"
      v-bind="backgroundAttrs"
    />
    <div :class="b('col')">
      <div :class="b('container')">
        <div :class="b('title')">присоединяйся <br />к команде</div>
        <div :class="b('description')">
          Делай то, что любишь, вместе с нами!
        </div>
        <GaButtonExpanded
          target="_blank"
          rel="noopener noreferrer"
          :href="nalogLinks.account"
          :icon-height="15"
          :icon-width="15"
          text="все вакансии gold apple"
          :class="b('action')"
        >
          <template #icon>
            <GaIconPrimaryArrow :class="b('arrow')" />
          </template>
        </GaButtonExpanded>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GaImage } from "~/components/atoms/image";
import { GaButtonExpanded } from "~/components/molecules/button-expanded";
import { GaIconPrimaryArrow } from "@ga/icons";
import Header from "~/components/organisms/header/header.vue";

defineOptions({
  name: "GaJoin",
});

const b = useBem();

const { nalog: nalogLinks, markets: marketsLinks } = useAppConfig().links;

const backgroundAttrs = {
  src: "/join/1920.jpg",

  sources: [
    {
      srcset: ["/join/375.jpg"],
      ext: "jpg",
      media: {
        till: 768,
      },
    },
    {
      srcset: ["/join/768.jpg"],
      ext: "jpg",
      media: {
        from: 768,
        till: 1024,
      },
    },
    {
      srcset: ["/join/1024.jpg"],
      ext: "jpg",
      media: {
        from: 1024,
        till: 1280,
      },
    },
    {
      srcset: ["/join/1280.jpg"],
      ext: "jpg",
      media: {
        from: 1280,
        till: 1360,
      },
    },
    {
      srcset: ["/join/1360.jpg"],
      ext: "jpg",
      media: {
        from: 1360,
        till: 1680,
      },
    },
    {
      srcset: ["/join/1680.jpg"],
      ext: "jpg",
      media: {
        from: 1680,
        till: 1920,
      },
    },
    {
      srcset: ["/join/1920.jpg"],
      ext: "jpg",
      media: {
        from: 1920,
      },
    },
  ],
};
</script>

<style src="./join.style.scss" lang="scss" module />
