<template>
  <footer :class="b()">
    <div :class="b('container')">
      <div :class="b('icon')" />
      <div :class="b('content')">
        <div :class="b('title')">контакты</div>
        <div :class="b('description')">
          <a href="mailto:info@gatechteam.ru" :class="b('link')"
            >info@gatechteam.ru</a
          >
          <span :class="b('slash')">/</span>
          <a href="tel:73433850213" :class="b('link')">+ 7 (343) 385-02-13</a>
        </div>
      </div>

      <div :class="b('content')">
        <div :class="b('title')">юридический адрес</div>
        <div :class="b('description')">
          620014, Свердловская область, г. Екатеринбург, ул. Сакко и Ванцетти,
          д. 62, оф. 1
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { GaImage } from "~/components/atoms/image";
import {
  GaIconPrimaryMarketAppGallery,
  GaIconPrimaryMarketAppStore,
  GaIconPrimaryMarketGooglePlay,
  GaIconPrimaryMarketRuStore,
} from "@ga/icons";

defineOptions({
  name: "ga-footer",
});

const b = useBem();
</script>

<style module lang="scss" src="./footer.styles.scss" />
