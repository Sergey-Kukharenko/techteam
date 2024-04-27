<template>
  <header :class="[b(), b({ inverse })]">
    <GaIconPrimaryLogo :class="b('icon')" />
    <div :class="b('modal', { show })">
      <div :class="b('modal-header')">
        <GaIconPrimaryLogo
          appearance="black"
          :class="[b('icon'), b('mobile')]"
        />
        <GaIconPrimaryButtonCLose
          :class="[b('burger'), b('mobile')]"
          @click="closeModal"
        />
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

        <a :class="b('link')" @click="scrollTo('join')">
          работа у нас
          <GaIconPrimaryArrow :class="[b('arrow'), b('desktop')]" />
          <GaIconPrimaryArrowLong :class="[b('arrow-long'), b('mobile')]" />
        </a>
      </div>
    </div>
    <GaIconPrimaryButtonOpen
      :class="[b('burger'), b('mobile')]"
      @click="openModal"
    />
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

  const element = document.getElementById(id);
  element && element.scrollIntoView({ behavior: "smooth" });
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
