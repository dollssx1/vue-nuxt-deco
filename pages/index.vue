<template>
  <div>
    <p>state : {{ name }}</p>
    <p>getter : {{ getName }}</p>
    <div>
      <button @click="handleName">이름 클릭</button>
    </div>
    <div class="pd-wrap">
      <ul>
        <li v-for="item in products">
          <div class="flex">
            <p class="tit">{{ item.title }}</p>
            <p class="cate">category : {{ item.category }}</p>
          </div>
          <p>{{ item.description }}</p>
          <p>{{ item.rating.count }}</p>
          <p>{{ item.rating.rate }}</p>
        </li>
      </ul>
    </div>
    <div>
      <button @click="handleProduct">상품 클릭</button>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import { IProduct } from '@/store/modules/moduleUser'
const moduleUser = namespace('modules/moduleUser');

@Component
export default class Index extends Vue {

  @moduleUser.State('name')
  readonly name!: string;

  @moduleUser.Getter('getName')
  getName!: string;

  @moduleUser.Getter('getproducts')
  readonly products!: IProduct[]

  @moduleUser.Action('updateName')
  updateName!: (name: string) => void

  @moduleUser.Action('updateProduct')
  updateProduct!: () => void


  handleName(): void {
    this.updateName('변경된 이름')
  }

  handleProduct() {
    this.updateProduct()
  }
}
</script>




<style lang="scss">
.pd {
  &-wrap {
    .flex {
      display: flex;

      p {
        flex: 1;
      }
    }

    ul {
      padding: 0;
      list-style: none;

      li {
        padding-bottom: 20px;

        border-bottom: 1px solid #000;

        .tit {
          font-size: 16px;
          font-weight: 600;
        }

        .cate {
          text-align: right;
        }

      }
    }
  }
}
</style>