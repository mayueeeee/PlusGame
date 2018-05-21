import React, {Component} from 'react';
import {Container, Col, Row} from 'reactstrap'
import styled from 'styled-components'
import io from 'socket.io-client'
import PlayerNumber from './Components/Player'
import BigNumber, {SmallNumber} from './Components/Number'
const FullViewContainer = styled(Container)`
  height: 100vh;  
  background-color: #000;
  padding: 15vh 0 30px 0 ;
`
const LogoTXT = styled.h1 `
  font-size:100px;
  color: #fff;
  font-family: 'Pacifico', cursive;
`
class App extends Component {
  componentDidMount(){
    const socket = io('http://localhost', {
      path: '/myownpath'
    });

  }
  render() {
    return (
      <FullViewContainer fluid={true} className="text-center">
        <Row>
          <Col xs={3}>
            {/* <LogoTXT>eeeee</LogoTXT> */}
            <PlayerNumber number={3} title="Player Count"/>
          </Col>
          <Col xs={6}>
            <LogoTXT>Fucking Plus Game</LogoTXT>
          </Col>
          <Col xs={3}>
            <PlayerNumber number={5} title="Player turn"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <SmallNumber>200</SmallNumber>
          </Col>
        </Row>
        <Row>
          <Col>
            <BigNumber>200</BigNumber>
          </Col>
        </Row>

      </FullViewContainer>

    );
  }
}

export default App;
