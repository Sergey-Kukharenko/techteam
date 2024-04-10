<template>
  <section :class="b()">
    <div :class="b('content')">
      <div :class="b('heading')">
        <h2 :class="b('title')">остались вопросы?</h2>
        <div :class="b('subtitle')">узнайте больше о самозанятости в базе знаний ФНС РФ и в личном кабинете самозанятого</div>
      </div>
      <div :class="b('actions')">
        <GaButtonExpanded target="_blank" rel="noopener noreferrer" :href="nalogLinks.faq" :icon-height="15" :icon-width="15" text="база знаний по нпд фнс рф" view="line" :class="b('action')">
          <template #icon>
            <GaIconPrimaryArrow />
          </template>
        </GaButtonExpanded>

        <GaButtonExpanded target="_blank" rel="noopener noreferrer" :href="nalogLinks.account" :icon-height="15" :icon-width="15" text="Личный кабинет самозанятого" view="line" :class="b('action')">
          <template #icon>
            <GaIconPrimaryArrow />
          </template>
        </GaButtonExpanded>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GaIconPrimaryArrow } from "@ga/icons";

import { GaButtonExpanded } from "~/components/molecules/button-expanded";

defineOptions({
  name: 'ga-questions'
})

const nalogLinks = useAppConfig().links.nalog

const b = useBem()
</script>

<style module lang="scss" src="./questions.styles.scss"/>
