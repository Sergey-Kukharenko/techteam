<template>
<section :class="b()">
  <div :class="b('content')">
    <div :class="b('heading')">
      <h2 :class="b('title')">как стать самозанятым курьером
        Золотого&nbsp;Яблока?</h2>
    </div>

    <div :class="b('image-wrapper')">
      <GaImage :class="b('image')" :class-name="b('image-img')" v-bind="imageAttrs" />
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { GaImage } from '~/components/atoms/image';

defineOptions({
  name: 'ga-scheme'
})

const b = useBem()

const imageAttrs = {
  src: '/scheme/scheme-desktop.svg',

  sources: [
    {
      srcset: [
        '/scheme/scheme-mobile.svg',
      ],
      ext: 'jpg',
      media: {
        till: 768,
      }
    },
    {
      srcset: [
        '/scheme/scheme-tablet.svg',
      ],
      ext: 'jpg',
      media: {
        from: 768,
        till: 1360,
      }
    },
    {
      srcset: [
        '/scheme/scheme-desktop.svg',
      ],
      ext: 'jpg',
      media: {
        from: 1360,
      }
    },
  ]
}
</script>

<style module lang="scss" src="./scheme.styles.scss" />
