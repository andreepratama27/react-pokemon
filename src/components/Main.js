import { observer } from 'mobx-react'
import Pokedex from 'components/Pokedex'
import PokePlaceholder from 'components/PokePlaceholder'
import {
  ModalContainer,
  ModalDialog
} from 'react-modal-dialog'
import InfiniteScroll from 'react-infinite-scroller'
import Spinner from 'react-spinkit'
import axios from 'axios'

@observer
class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isshowingmodal: false,
      load: false
    }
  }

  componentWillMount () {
    this.setState({
      load: false
    })
  }

  componentDidMount () {
    this.setState({
	   load: true
    })
  }

  handleclick () {
    this.setState({
      isshowingmodal: true
    })
  }

  handleclose () {
    this.setState({
      isshowingmodal: false
    })
  }

  loadPokemon () {
    axios.get('http://pokeapi.salestock.net:8000/api/v2/pokemon/?offset=20')
    .then(res => {
      console.log(res.data.results)
    })
  }

  render () {

    const { data } = this.props.store

    return (
        <div className='pokedex-container'>

          <InfiniteScroll
            className='pokedex-scroller'
            pageStart={0}
            loadMore={this.loadPokemon}
            hasMore={true}>
            {
              this.state.load
              ? data.map((v, i) => <Pokedex data={v} id={i + 1} key={i} />)
              : <PokePlaceholder />
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
