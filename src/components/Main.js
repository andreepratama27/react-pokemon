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

  render () {
    return (
        <div className='pokedex-container'>
            {
              this.props.store.data.map((v, i) => {
                return (
                  <Pokedex data={v} id={i + 1} key={i} />
                )
              })
            }

            <button onClick={this.handleClick.bind(this)}>Show Modal</button>

            <div onClick={this.handleClick}>
                {
                  this.state.isShowingModal &&
                  <ModalContainer onClose={this.handleClose}>
                      <ModalDialog onClose={this.handleClose}>
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
