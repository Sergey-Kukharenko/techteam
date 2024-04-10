<template>
  <section :class="b()">
    <div :class="b('content')">
      <LazyNuxtPicture :class="b('phones')" :sizes="{}" :imgAttrs="{ class: b('phones-img') }" src="/partnership/partnership-phones.png" />

      <div :class="b('heading')">
        <h2 :class="b('title')">преимущества партнерства</h2>
      </div>

      <div :class="b('items')">
          <div v-for="(item, index) in items" :key="index" :class="b('item')">
           <GaIcon width="20" height="20" :class="b('item-icon')" >
             <GaIconPrimaryStar />
           </GaIcon>

            <div :class="b('item-text')" v-html="item" />
          </div>
      </div>

      <GaButtonExpanded :icon-width="15" :icon-height="15" :class="b('action')" target="_blank" rel="noopener noreferrer" :href="nalogLinks.site" text="узнать подробнее">
        <template #icon>
          <GaIconPrimaryArrow />
        </template>
      </GaButtonExpanded>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GaIcon } from "~/components/atoms/icon";
import { GaIconPrimaryStar, GaIconPrimaryArrow } from "@ga/icons";
import {GaButtonExpanded} from "~/components/molecules/button-expanded";

defineOptions({
  name: 'ga-partnership'
})

const b = useBem()

const items = [
    'моментальное получение уведомлений из&nbsp;налоговой',
    'контроль собственного дохода&nbsp;и начислений',
    'создание и загрузка электронных чеков в&nbsp;один клик',
]

const { nalog: nalogLinks } = useAppConfig().links;
</script>

<style module lang="scss" src="./partnership.styles.scss" />
