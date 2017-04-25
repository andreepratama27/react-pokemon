import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Pokedex from 'components/Pokedex'
import PokePlaceholder from 'components/PokePlaceholder'
import {
  ModalContainer,
  ModalDialog
} from 'react-modal-dialog'

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

  render () {

    const { data } = this.props.store

    return (
        <div className='pokedex-container'>
            {
              this.state.load
              ? data.map((v, i) => <Pokedex data={v} id={i + 1} key={i} />)
              : <PokePlaceholder />
            }
        </div>
    )
  }
}

Main.propTypes = {
}

export default Main
