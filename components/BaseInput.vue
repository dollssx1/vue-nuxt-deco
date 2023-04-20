<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class BaseInput extends Vue {
  @Prop(String) name!: string;
  @Prop(String) label!: string;
  @Prop({ default: 'text' }) type!: string;
  @Prop(String) placeholder!: string;
  @Prop() value!: string;
}
</script>