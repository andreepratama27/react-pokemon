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
      isShowingModal: false,
      load: false
    }
  }

  componentWillMount () {
  }

  componentDidMount () {
  }

  handleClick () {
    this.setState({
      isShowingModal: true
    })
  }

  handleClose () {
    this.setState({
      isShowingModal: false
    })
  }

  render () {
    return (
        <div className='pokedex-container'>
            {
              this.state.load
              ? this.props.store.data.map((v, i) => <Pokedex data={v} id={i + 1} key={i} />)
              : <PokePlaceholder />
            }

            <div>
                {
                  this.state.isShowingModal &&
                  <ModalContainer onClose={ this.handleClose.bind(this) }>
                      <ModalDialog onClose={ this.handleClose.bind(this) }>
                          <h1>Dialog Content</h1>
                          <p>More content.</p>
                      </ModalDialog>
                  </ModalContainer>
                }
            </div>
        </div>
    )
  }
}

export default Main
