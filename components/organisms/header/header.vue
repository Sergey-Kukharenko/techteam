<template>
  <!--  <div :class="[b(), b('logo')]">-->
  <!--    <GaIconPrimaryLogo :class="b('icon')" />-->
  <!--  </div>-->
  <header :class="[b(), b({ 'mix-blend': mixBLend })]">
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

const mixBLend = ref(false);

onMounted(() => {
  const options = {
    // root: null,
    rootMargin: "-1% 0% -99% 0%",
  };

  const sectionObserver = new IntersectionObserver(callBackFunction, options);

  // const header = document.querySelector("header");

  const sections = document.querySelectorAll(".with-bg");
  for (let i = 0; i < sections.length; i++) {
    sectionObserver.observe(sections[i]);
  }

  function callBackFunction(entries) {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      // header.classList.remove("mix-blend");
      mixBLend.value = false;
    } else {
      // header.classList.add("mix-blend");
      mixBLend.value = true;
    }
  }
});
</script>

<style src="./header.style.scss" lang="scss" module />
