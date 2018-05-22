import React, {Component} from 'react';
import {Container, Col, Row} from 'reactstrap'
import styled from 'styled-components'
import io from 'socket.io-client'
import PlayerNumber from './Components/Player'
import BigNumber, {SmallNumber, MaxNumber} from './Components/Number'
import {LosePage, InitPage} from './Components/Pages'
import {SectionWarpper,ScoreTitle,LightIcon,PlusPic } from './Components/Utils'

const FullViewContainer = styled(Container)`
  height: 100vh;  
  background: #0f0c29;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 5vh 0 30px 0 ;
`
const LogoTXT = styled.h1 `
  font-size:100px;
  color: #fff;
  font-family: 'Pacifico', cursive;
`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_number: 0,
      max_number: 0,
      plus_number: 0,
      player_count: 2,
      current_player: 1,
      isLose: false,
      isStart: false
    };

  }
  componentDidMount() {
    const socket = io('http://localhost:8001');

    socket.on('current_number', (data) => {
      console.log(`current_number: ${data.current_number}`)
      this.setState({current_number: data.current_number})
    })

    socket.on('max_number', (data) => {
      console.log(`max_number: ${data.max_number}`)
      this.setState({max_number: data.max_number})
    })

    socket.on('plus_number', (data) => {
      console.log(`plus_number: ${data.plus_number}`)
      this.setState({plus_number: data.plus_number})
    })

    socket.on('player_count', (data) => {
      console.log(`player_count: ${data.player_count}`)
      this.setState({player_count: data.player_count})
    })

    socket.on('current_player', (data) => {
      console.log(`current_player: ${data.current_player}`)
      this.setState({current_player: data.current_player})
    })

    // Status
    socket.on('start', (data) => {
      console.log(`Start!`)
      this.setState({isStart: true})
    })

    socket.on('lose', (data) => {
      console.log(`Lose!`)
      this.setState({isLose: true})
    })

    socket.on('restart', (data) => {
      console.log(`Restart!`)
      this.setState({
        current_number: 0,
        max_number: 0,
        plus_number: 0,
        player_count: 2,
        current_player: 1,
        isLose: false,
        isStart: false
      })
    })

  }
  render() {
    if (!this.state.isStart) {
      return (
        <div className="text-center">
          <InitPage
            maxPlayer={this.state.player_count}
            maxNumber={this.state.max_number}/>
        </div>
      )
    } else if (this.state.isLose) {
      return (
        <div className="text-center">
          <LosePage player={this.state.current_player}/>
        </div>
      )
    } else {
      return (
        <div className="text-center">
          {/* <LosePage player={this.state.current_player} /> */}

          <FullViewContainer fluid={true}>
            <Row>
              <Col xs={3}>
                {/* <LogoTXT>eeeee</LogoTXT> */}
                <PlayerNumber number={this.state.player_count} current_player ={this.state.current_player} title="Player"/>
              </Col>
              <Col xs={6}>
                <LogoTXT>Count Game Yay!</LogoTXT>
              </Col>
              <Col xs={3}>
                <MaxNumber number={this.state.max_number} title="Max Jaaaaa"/>
              </Col>
            </Row>
            {/* <Row>
          <Col>
            <SmallNumber>200</SmallNumber>
          </Col>
        </Row> */}
        <Row>
          
        </Row>
        <SectionWarpper fluid>
            <Row>
              <Col>    
              <ScoreTitle>Total</ScoreTitle>            
                <BigNumber>{this.state.current_number}</BigNumber>
              </Col>
              <Col md={3} className="d-flex">
                <div className="justify-content-center align-self-center">
                  {/* <LightIcon
                    className="fas fa-plus fa-10x justify-content-center align-self-center fa-spin"/> */}
                    <PlusPic className="fa-spin" src="assets/tik.png"/>
                </div>

              </Col>
              <Col>
              <ScoreTitle>{'Plus'}</ScoreTitle>     
                <BigNumber>{this.state.plus_number}</BigNumber>
              </Col>
            </Row>
            </SectionWarpper>

          </FullViewContainer>

        </div>

      );

    }

  }
}

export default App;
