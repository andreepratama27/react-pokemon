import axios from 'axios'
import {
  compouted,
  observable
} from 'mobx'

class PokeStore {

  // @observable data = []
  @observable data = [
    {
      id: 0,
      name: 'Andre pratama'
    },
    {
      id: 1,
      name: 'Lionel Messi'
    }

  ]

  constructor () {
    this.fetchPokemonData()
  }

  fetchPokemonData () {
    console.log('fetching data')
    // axios.get('http://pokeapi.salestock.net:8000/api/v2/pokemon')
    // .then(res => {
    //   this.data = res.data.results
    //   console.log('fetcing success')
    // })

    // .catch(err => {
    //   throw err
    // })
  }
}

export default new PokeStore()
