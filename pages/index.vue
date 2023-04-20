<template>
        <div class="index">
                {{ name }}
                <base-input></base-input>
        </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'

const moduleUser = namespace('modules/moduleUser');

@Component({})
export default class Index extends Vue {
        input =''

      @moduleUser.Getter('getName')
      name!: string;

      @moduleUser.Action('updateName')
      updateName!: (name : string)=> void

      handelInput(){
        this.updateName(this.input);
      }
}
</script>

