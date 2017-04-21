import axios from 'axios'
import {
  compouted,
  observable
} from 'mobx'

class PokeStore {

  @observable data = []

  constructor () {
    this.fetchPokemonData()
  }

  fetchPokemonData () {
    console.log('fetching data')
    axios.get('http://pokeapi.salestock.net:8000/api/v2/pokemon')
    .then(res => {
      this.data = res.data.results
    })

    .catch(err => {
      throw err
    })
  }
}

export default new PokeStore()
