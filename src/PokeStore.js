import axios from 'axios'
import {
  compouted,
  observable
} from 'mobx'

class PokeStore {

  @observable pokemon = [
    'Pikachu',
    'Bulbasaur',
    'Squirtle',
    'Rattata'
  ]

  @observable data = []

  constructor () {
    this.fetchPokemonData()
  }

  fetchPokemonData () {
    axios.get('http://582d6829050f7a1200b8327b.mockapi.io/api/v1/task')
    .then(res => {
      this.data = res.data
    })

    .catch(err => {
      throw err
    })
  }
}

export default new PokeStore()
