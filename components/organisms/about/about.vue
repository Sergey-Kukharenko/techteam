<template>
  <section :class="b()" id="about">
    <h2 :class="b('title')">о компании</h2>
    <div :class="b('list')">
      <div :class="b('item')" v-for="(item, idx) in list" :key="idx">
        <div :class="b('row')">
          <div :class="b('col')">
            <div :class="b('number')">{{ item.number }}</div>
          </div>
          <div :class="b('col')">
            <div :class="b('content')">
              <div :class="b('content-title')">{{ item.title }}</div>
              <div :class="b('content-description')">
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: "GaAbout",
});

const b = useBem();

const list = [
  {
    number: 1,
    title: "it-компания GA techteam",
    description:
      "Мы разрабатываем цифровые платформы для современного омниканального ритейла.",
  },
  {
    number: 2,
    title: "GA techteam — аккредитованная компания",
    description:
      "GA TechTeam входит в реестр аккредитованных IT-компаний. Свидетельство об аккредитации № АО-20220408-4091867657-3.",
  },
  {
    number: 3,
    title: "микросервисы",
    description:
      "Наша любимая история — это микросервисы и k8s. Для того, чтобы микросервисы были быстрыми и крутыми, мы используем netCore и выбираем СУБД из стека Mongo/Redis/mySQL.",
  },
  {
    number: 4,
    title: "процессы",
    description:
      "Мы работаем по Agile, разделяя scrum-процессы для проектных команд и Kanban для команд поддержки.",
  },
  {
    number: 5,
    title: "архитектура и стек",
    description:
      "В нашем ландшафте приложения на Swift и Kotlin и Vue для Web, Flutter, большие системы ERP и CRM семейства Dynamics, WMS, стек Axelot, Clickhouse и Hadoop для управления данными и Kafka/NiFi, чтобы их быстро доставить.",
  },
];
</script>

<style src="./about.style.scss" lang="scss" module />
