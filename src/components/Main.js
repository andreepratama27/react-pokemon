import { observer } from 'mobx-react'
import Pokedex from 'components/Pokedex'
import {
  ModalContainer,
  ModalDialog
} from 'react-modal-dialog'
import InfiniteScroll from 'react-infinite-scroller'
import Spinner from 'react-spinkit'
import axios from 'axios'
import store from './../PokeStore'

@observer
class Main extends React.Component {
  constructor (props) {
    super(props)
    this.total = 0
    this.loadPokemon = this.loadPokemon.bind(this)

    this.state = {
      data: []
    }
  }

  loadPokemon () {
    this.total = this.total + 20
  }

  renderComponent () {
    const { data } = this.props.store
    return data.map((v, i) => <Pokedex data={v} id={i + 1} key={i} />)
  }

  render () {

    return (
        <div className='pokedex-container'>

          <InfiniteScroll
            className='pokedex-scroller'
            loadMore={this.loadPokemon}
            hasMore={true}>
            {
              this.renderComponent()
            }
          </InfiniteScroll>

          <div className='pokedex-spinner'>
            <Spinner spinnerName='three-bounce' /> 
          </div>

        </div>
    )
  }
}

export default Main
