<template>
  <section :class="b()" id="our-products">
    <h2 :class="b('title')">наши продукты</h2>

    <div :class="b('list')">
      <div :class="b('item')" v-for="(item, idx) in list" :key="idx">
        <div :class="b('col')">
          <GaImage :class="b('img')" v-bind="imgAttrs" />
        </div>
        <div :class="b('col')">
          <div :class="b('content-title')" v-html="item.title"></div>
          <div :class="b('content-description')">
            {{ item.description }}
          </div>

          <GaButtonExpanded
            target="_blank"
            rel="noopener noreferrer"
            :href="nalogLinks.account"
            :icon-height="15"
            :icon-width="15"
            text="подробнее о продукте"
            view="invert"
            :class="b('action')"
          >
            <template #icon>
              <GaIconPrimaryArrow />
            </template>
          </GaButtonExpanded>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GaButtonExpanded } from "~/components/molecules/button-expanded";
import { GaIconPrimaryArrow } from "@ga/icons";
import { GaImage } from "~/components/atoms/image";

defineOptions({
  name: "GaOurProducts",
});

const b = useBem();

const { nalog: nalogLinks, markets: marketsLinks } = useAppConfig().links;

const list = [
  {
    img: {
      src: "/our-products/our-products-desktop.jpg",
      alt: "our-products",
    },
    title: "field service:<br> курьерская доставка",
    description:
      "Мы разработали приложение для автоматизации работы курьеров. Вы сможете сократить время на обработку и доставку заказов, привлечь новых курьеров и расширить курьерскую сеть, повысив лояльность клиентов.",
  },
  {
    img: {
      src: "/our-products/our-products-desktop.jpg",
      alt: "our-products",
    },
    title: "field service:<br> курьерская доставка",
    description:
      "Мы разработали приложение для автоматизации работы курьеров. Вы сможете сократить время на обработку и доставку заказов, привлечь новых курьеров и расширить курьерскую сеть, повысив лояльность клиентов.",
  },
];

const imgAttrs = {
  src: "/our-products/our-products-desktop.jpg",

  sources: [
    {
      srcset: ["/our-products/375.jpg"],
      ext: "jpg",
      media: {
        till: 768,
      },
    },
    {
      srcset: ["/our-products/768.jpg"],
      ext: "jpg",
      media: {
        from: 768,
        till: 1024,
      },
    },
    {
      srcset: ["/our-products/1024.jpg"],
      ext: "jpg",
      media: {
        from: 1024,
        till: 1280,
      },
    },
    {
      srcset: ["/our-products/1280.jpg"],
      ext: "jpg",
      media: {
        from: 1280,
        till: 1360,
      },
    },
    {
      srcset: ["/our-products/1360.jpg"],
      ext: "jpg",
      media: {
        from: 1360,
        till: 1680,
      },
    },
    {
      srcset: ["/our-products/1680.jpg"],
      ext: "jpg",
      media: {
        from: 1680,
        till: 1920,
      },
    },
    {
      srcset: ["/our-products/1920.jpg"],
      ext: "jpg",
      media: {
        from: 1920,
      },
    },
  ],
};
</script>

<style src="./our-products.style.scss" lang="scss" module />
