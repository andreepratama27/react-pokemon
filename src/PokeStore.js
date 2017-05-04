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
    axios.get('http://pokeapi.salestock.net:8000/api/v2/pokemon?offset=40')
    .then(res => {
      this.data = res.data.results
      console.log('done fetching')
    })

    .catch(err => {
      throw err
    })
  }

  async fetchPokemonDataAsync () {
    try {
      const response = await fetch('http://pokeapi.salestock.net:8000/api/v2/pokemon?offset=40')
      const res = await response.json()
      this.data = res.results
    } catch (err) {
      throw err
    }
  }
}

export default new PokeStore()
