import { observer } from 'mobx-react'
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

  componentwillmount () {
    this.setstate({
	  load: false
	})
  }

  componentdidmount () {
    this.setstate({
	  load: true
	})
  }

  handleclick () {
    this.setstate({
      isshowingmodal: true
    })
  }

  handleclose () {
    this.setstate({
      isshowingmodal: false
    })
  }

  render () {

    const { data } = this.props.store

    return (
        <div classname='pokedex-container'>
            {
              this.state.load
              ? data.map((v, i) => <pokedex data={v} id={i + 1} key={i} />)
              : <pokeplaceholder />
            }

            <div>
                {
                  this.state.isshowingmodal &&
                  <modalcontainer onclose={ this.handleclose.bind(this) }>
                      <modaldialog onclose={ this.handleclose.bind(this) }>
                          <h1>dialog content</h1>
                          <p>more content.</p>
                      </modaldialog>
                  </modalcontainer>
                }
            </div>
        </div>
    )
  }
}

export default Main
