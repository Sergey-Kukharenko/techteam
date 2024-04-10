<template>
  <div :class="b()">
    <div :class="b('content')">
      <div v-for="(item, index) in items" :key="index" :class="b('item')">
        <div :class="b('item-title')" v-html="item.title" />
        <div :class="b('item-text')" v-html="item.text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ga-facts'
})

const b = useBem()

const items = [
  { title: '10&nbsp;000&nbsp;₽', text: 'налоговый вычет <br>от государства' },
  { title: '6%', text: 'налоговая ставка <br>с&nbsp;доходов от&nbsp;юрлица' },
  { title: '2029 ', text: 'год окончания <br>действия режима ' },
]
</script>

<style module lang="scss" src="./facts.styles.scss" />
