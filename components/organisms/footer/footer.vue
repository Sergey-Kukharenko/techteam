<template>
  <footer :class="b()">
    <div :class="b('content')">
      <GaImage :class="b('image')" v-bind="backgroundAttrs"  />

      <h2 :class="b('title')">рады сотрудничеству</h2>
      <p :class="b('subtitle', { type: 'desktop' })">
        наведите камеру телефона на QR-код для загрузки мобильного приложения
      </p>

      <p :class="b('subtitle', { type: 'mobile' })">
        скачайте наше мобильное приложение
      </p>

      <div :class="b('markets')">
        <GaAction :class="b('market')" :href="marketsLinks.ruStore">
          <GaIcon :class="b('market-icon')">
            <GaIconPrimaryMarketRuStore />
          </GaIcon>
        </GaAction>

        <GaAction :class="b('market')" :href="marketsLinks.appStore">
          <GaIcon :class="b('market-icon')">
            <GaIconPrimaryMarketAppStore />
          </GaIcon>
        </GaAction>

        <GaAction :class="b('market')" :href="marketsLinks.googlePlay">
          <GaIcon :class="b('market-icon')">
            <GaIconPrimaryMarketGooglePlay />
          </GaIcon>
        </GaAction>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { GaImage } from '~/components/atoms/image';
import { GaIconPrimaryMarketAppGallery, GaIconPrimaryMarketAppStore, GaIconPrimaryMarketGooglePlay, GaIconPrimaryMarketRuStore } from '@ga/icons';
import { GaAction } from "~/components/molecules/action";
import { GaIcon } from "~/components/atoms/icon";

defineOptions({
  name: 'ga-footer'
})

const b = useBem()

const { markets: marketsLinks } = useAppConfig().links;

const backgroundAttrs = {
  src: '/footer/footer-phone.png',
}
</script>

<style module lang="scss" src="./footer.styles.scss" />
