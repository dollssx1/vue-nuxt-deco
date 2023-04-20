import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";


@Module({
    stateFactory : true,
})

export default class ModuleUser extends VuexModule{
    //state
    private name = '';

    private get getName() : string{
        return this.name;
    }

    
    @Mutation
     setName(payload: string ): void{
        this.name = payload
    }

    @Action({ commit: 'setName' })
    public updateName(newName: string): string {
       return newName;
    }
}
