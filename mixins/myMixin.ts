import {Vue, Component} from 'nuxt-property-decorator'

@Component
export class Hello extends Vue {
  hello = 'Hello'
}

@Component
export class World extends Vue {
  world = 'World'
}