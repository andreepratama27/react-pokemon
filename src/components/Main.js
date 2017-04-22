import { observer } from 'mobx-react'
import Pokedex from 'components/Pokedex'
import {
  ModalContainer,
  ModalDialog
} from 'react-modal-dialog'

@observer
class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowingModal: false
    }
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
              this.props.store.data.map((v, i) => {
                return (
                  <Pokedex
                    data={v}
                    id={i + 1}
                    key={i} />
                )
              })
            }

            <button onClick={this.handleClick.bind(this)}>Show Modal</button>

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
