import {
  ModalContainer,
  ModalDialog
} from 'react-modal-dialog'

class Pokedex extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      image: '',
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

  renderImage (id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }

  render () {

    const { data } = this.props

    return (
        <div className='pokedex' onClick={ this.handleClick.bind(this) }>
            <div className="pokedex-box">
                <div className="box-image">
                    <img src={ this.renderImage(this.props.id) } alt="" />
                </div>
            </div>

            <div>
                {
                  this.state.isShowingModal &&
                  <ModalContainer onClose={ this.handleClose.bind(this) }>
                      <ModalDialog onClose={ this.handleClose.bind(this) }>

                          <div className='poke-image'>
                              <img src={ this.renderImage(this.props.id) } alt="" />
                          </div>

                          <div className='poke-name'>
                              { data.name }
                          </div>

                          <div className='poke-information'>
                          </div>
                      </ModalDialog>
                  </ModalContainer>
                }
            </div>
        </div>
    )
  }

}

export default Pokedex
