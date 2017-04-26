import axios from 'axios'
import {
  computed,
  observable
} from 'mobx'

class PokeStore {

  @observable data = []

  constructor () {
    this.fetchPokemonDataAsync()
  }

  fetchPokemonData () {
    console.log('fetching data')
    axios.get('http://pokeapi.salestock.net:8000/api/v2/pokemon')
    .then(res => {
      this.data = res.data.results
      console.log('fetcing success')
    })

    .catch(err => {
      throw err
    })
  }

  async fetchPokemonDataAsync () {
    const response = await fetch('http://pokeapi.salestock.net:8000/api/v2/pokemon')
    const res = await response.json()

    this.data = res.results
  }
}

export default new PokeStore()
