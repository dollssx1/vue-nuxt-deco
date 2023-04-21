import { Module, VuexModule, Action, Mutation, MutationAction } from "vuex-module-decorators";
import axios from 'axios'

interface IRating {
  count: number,
  rate: number,
}
interface IProduct {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: IRating
  title: number
}

export interface IProductS {
  lists: IProduct[]
}

export async function test(): Promise<IProductS> {
  const products: IProductS = (await axios.get("https://fakestoreapi.com/products")).data;
  return products;
}

interface Post {
  name: string
}

@Module({
  stateFactory: true,
})

export default class ModuleUser extends VuexModule {
  //state
  private name = '염대원';
  private posts: Post[] = []
  private get getName(): string {
    return this.name;
  }


  // @Mutation
  // setName(payload: string): void {
  //     this.name = payload
  // }

  // @Action({ commit: 'setName' })
  // public updateName(newName: string): string {
  //     return newName;
  // }

}

