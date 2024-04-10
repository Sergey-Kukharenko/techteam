<template>
    <component :is="component" :class="b({ view, size })" v-bind="$attrs">
        <span :class="b('content')">
            <span :class="b('text')">
                {{ text }}
            </span>

            <ga-icon :class="b('icon')" v-bind="iconAttrs">
                <slot name="icon" />
            </ga-icon>
        </span>
    </component>
</template>

<script src="./button-expanded.script.ts" />

<style module src="./button-expanded.style.scss" lang="scss" />
