<template>
  <header :class="[b(), b({ inverse })]">
    <GaIconPrimaryLogo :class="b('icon')" />
    <div :class="b('modal', { show })">
      <div :class="b('modal-header')">
        <GaIconPrimaryLogo
          appearance="black"
          :class="[b('icon'), b('mobile')]"
        />

        <GaAction @click="closeModal" :class="b('mobile')">
          <GaIconPrimaryButtonCLose :class="b('burger')" />
        </GaAction>
      </div>
      <div :class="b('container')">
        <nav :class="b('nav')">
          <a
            :class="b('nav-link')"
            v-for="(item, idx) in nav"
            @click="scrollTo(item.href)"
          >
            {{ item.label }}
          </a>
        </nav>

        <a href="https://job.goldapple.ru/" :class="b('link')">
          работа у нас
          <GaIconPrimaryArrow :class="[b('arrow'), b('desktop')]" />
          <GaIconPrimaryArrowLong :class="[b('arrow-long'), b('mobile')]" />
        </a>
      </div>
    </div>
    <GaAction @click="openModal" :class="b('mobile')">
      <GaIconPrimaryButtonOpen :class="b('burger')" />
    </GaAction>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  GaIconPrimaryLogo,
  GaIconPrimaryArrow,
  GaIconPrimaryArrowLong,
  GaIconPrimaryButtonOpen,
  GaIconPrimaryButtonCLose,
} from "@ga/icons";
import { GaAction } from "~/components/molecules/action";

defineOptions({
  name: "GaHeader",
});

const b = useBem();

const nav = [
  {
    href: "our-products",
    label: "наши продукты",
  },
  {
    href: "about",
    label: "о компании",
  },
  {
    href: "contacts",
    label: "контакты",
  },
];

const show = ref<Boolean>(false);
const inverse = ref(false);

const openModal = () => {
  show.value = true;
  document.body.classList.add("no-scroll");
};

const closeModal = () => {
  show.value = false;
  document.body.classList.remove("no-scroll");
};

const scrollTo = (id: string) => {
  show.value && closeModal();
  useScrollTo(id);
};

onMounted(() => {
  const callBackFunction = ([entry]: IntersectionObserverEntry[]) => {
    inverse.value = entry.isIntersecting;
  };

  const sectionObserver = new IntersectionObserver(callBackFunction, {
    rootMargin: "-4.85% 0% -99% 0%",
  });

  const sections = document.querySelectorAll(".black-bg");
  for (let i = 0; i < sections.length; i++) {
    sectionObserver.observe(sections[i]);
  }
});
</script>

<style src="./header.style.scss" lang="scss" module />
