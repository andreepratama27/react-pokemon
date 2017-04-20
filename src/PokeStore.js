import { autorun, observable } from 'mobx'

class PokeStore {

  @observable pokemon = [
    'Pikachu',
    'Bulbasaur',
    'Squirtle',
    'Rattata'
  ]
}

const store = new PokeStore

export default store

autorun(() => {
  console.log(store.pokemon[0])
})
