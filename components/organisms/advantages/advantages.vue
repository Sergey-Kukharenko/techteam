<template>
  <section :class="b()">
    <div :class="b('content')">
      <div :class="b('heading')">
        <h2 :class="b('title')">плюсы самозанятости</h2>
        <div :class="b('subtitle')">специального налогового режима для самозанятых&nbsp;&mdash; &laquo;Налога&nbsp;на&nbsp;профессиональный&nbsp;доход&raquo;</div>
      </div>

      <div :class="b('list')">
        <div v-for="(advantage, index) in advantages" :key="index" :class="b('item')">
          <img :class="b('item-image')" :src="`/advantages/advantage-${index + 1}.svg`" />

          <div :class="b('item-content')">
            <div :class="b('item-title')" v-html="advantage.title" />
            <div :class="b('item-text')" v-html="advantage.text" />

            <div :class="b('item-markets')" v-if="index === advantages.length - 1">
              <GaAction :class="b('item-market')" :href="marketsLinks.ruStore">
                <GaIcon :class="b('item-market-icon')">
                  <GaIconPrimaryMarketRuStore />
                </GaIcon>
              </GaAction>

              <GaAction :class="b('item-market')" :href="marketsLinks.appStore">
                <GaIcon :class="b('item-market-icon')">
                  <GaIconPrimaryMarketAppStore />
                </GaIcon>
              </GaAction>

              <GaAction :class="b('item-market')" :href="marketsLinks.googlePlay">
                <GaIcon :class="b('item-market-icon')">
                  <GaIconPrimaryMarketGooglePlay />
                </GaIcon>
              </GaAction>

              <GaAction :class="b('item-market')" :href="marketsLinks.appGallery">
                <GaIcon :class="b('item-market-icon')">
                  <GaIconPrimaryMarketAppGallery />
                </GaIcon>
              </GaAction>
            </div>
          </div>
        </div>
      </div>

      <div :class="b('actions')">
        <GaButtonExpanded :icon-width="15" :icon-height="15" :class="b('action')" target="_blank" rel="noopener noreferrer" :href="nalogLinks.site" text="узнать подробнее">
          <template #icon>
            <GaIconPrimaryArrow />
          </template>
        </GaButtonExpanded>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GaIconPrimaryArrow, GaIconPrimaryMarketAppGallery, GaIconPrimaryMarketAppStore, GaIconPrimaryMarketGooglePlay, GaIconPrimaryMarketRuStore } from '@ga/icons';

import { GaAction } from '~/components/molecules/action';
import { GaIcon } from '~/components/atoms/icon';
import { GaButtonExpanded } from "~/components/molecules/button-expanded";

defineOptions({
  name: 'ga-advantages'
})

const b = useBem()

const { nalog: nalogLinks ,markets: marketsLinks } = useAppConfig().links;

const advantages = [
  {
    title: 'работайте на себя',
    text: 'без оформления&nbsp;ИП, ведения бухгалтерии, походов в&nbsp;налоговую и&nbsp;сдачи отчетности',
  },

  {
    title: 'совмещайте <br> с&nbsp;основной работой',
    text: 'выбирая удобный для себя график&nbsp;и сохраняя трудовой стаж по&nbsp;месту работы',
  },

  {
    title: 'получайте <br> официальный доход',
    text: 'и&nbsp;подтверждайте его справкой при получении виз, кредита или пособий',
  },

  {
    title: 'не&nbsp;думайте об&nbsp;обязательных платежах',
    text: 'есть только один фиксированный налоговый платеж',
  },

  {
    title: 'используйте только&nbsp;одно&nbsp;приложение',
    text: '&laquo;Мой налог&raquo;&nbsp;&mdash; это все, что необходимо для ведения самозанятости',
  }
]
</script>

<style module lang="scss" src="./advantages.styles.scss" />
