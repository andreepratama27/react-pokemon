import { observable } from 'mobx'

class PokeStore {
  @observable todos = ['buy milk', 'buy egg']
  @observable filter = ''
}

var store = new PokeStore

export default store
