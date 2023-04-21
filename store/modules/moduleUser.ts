import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
// import { $axios } from "@/utils/api";
import axios from 'axios'


export interface IRating {
  count: number,
  rate: number,
}
export interface IProduct {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: IRating
  title: number
}


@Module({
  stateFactory: true,
})

export default class ModuleUser extends VuexModule {
  private name = 'ydw';

  private products: IProduct[] = [];


  private get getName() {
    return `${this.name} 입니다.`;
  }

  private get getproducts(): IProduct[] {
    return this.products as IProduct[]
  }


  @Mutation
  setName(payload: string) {
    this.name = payload
  }

  @Action({ commit: 'setName' })
  public updateName(newName: string): string {
    return newName;
  }


  @Mutation
  setProduct(payload: IProduct[]) {
    this.products = payload
  }

  @Action({ commit: 'setProduct' })
  async updateProduct(): Promise<Array<IProduct>> {
    const products: IProduct[] = (await axios.get("https://fakestoreapi.com/products")).data;
    return products
  }
}
