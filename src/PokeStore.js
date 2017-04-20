import { autorun, computed, observable } from 'mobx'
import axios from 'axios'

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
})
