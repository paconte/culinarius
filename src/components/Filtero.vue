<template>
  <li v-if="type === 'bulmaMenu'" v-on:click="applyFilter()">
    <a v-bind:class="[{'is-active': isActive}]">
      {{name}}
    </a>
  </li>
  <a v-else-if="type === 'hyperlink'"
    v-on:click="applyFilter()"
    v-bind:class="[buttonClass, colorClass, sizeClass, widthClass, {'is-outlined': !isActive}]">
    {{name}}
  </a>
</template>

<script>

export default {
  name: 'filter',
  props: {
    name: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: false },
    filterType: { type: String, required: true },
    type: { type: String, required: true, default: 'bulmaMenu' },
    colorClass: { type: String, required: false, default: 'is-warning' },
  },
  data() {
    return {
      buttonClass: 'button',
      outlinedClass: 'is-outlined',
      sizeClass: 'is-normal',
      widthClass: 'is-fullwidth',
    };
  },
  methods: {
    applyFilter() {
      if (!this.isActive && this.filterType === 'location') {
        this.$emit('setLocation', this.name);
      } else if (!this.isActive) {
        this.$emit('applyfilter', this.name, this.filterType);
      }
    },
  },
};
</script>

<style>
.box:not(:last-child) {
  margin-bottom: 0.2rem;
}
.button.is-warning.is-outlined {
  color: inherit;
  border-color: inherit;
}
</style>
