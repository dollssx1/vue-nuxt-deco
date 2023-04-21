<template>
  <div class="index">
    {{ name }}
    <input type="text" v-model="input" @input="handelInput">
  </div>
</template>

<script lang="ts">
import { test, IProductS } from '@/store/modules/moduleUser'
import { Vue, Component, namespace } from 'nuxt-property-decorator'

const moduleUser = namespace('modules/moduleUser');

@Component({})
export default class Index extends Vue {
  input = ''

  @moduleUser.Getter('getName')
  name!: string;

  @moduleUser.Action('updateName')
  updateName!: (name: string) => void

  handelInput() {
    this.updateName(this.input);
  }
  async mounted() {
    const res: IProductS = await test();
    this.input = this.name
  }
}
</script>

