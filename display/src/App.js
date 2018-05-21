import React, {Component} from 'react';
import {Container, Col, Row} from 'reactstrap'
import styled from 'styled-components'
import io from 'socket.io-client'
import PlayerNumber from './Components/Player'
import BigNumber, {SmallNumber, MaxNumber} from './Components/Number'
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
            <PlayerNumber number={3} title="Player"/>
          </Col>
          <Col xs={6}>
            <LogoTXT>Fucking Plus Game</LogoTXT>
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
          <Col>
            <BigNumber>{this.state.current_number}</BigNumber>
          </Col>
          <Col md={1} className="d-flex h-100">
            <div className="justify-content-center align-self-center">
              <i
                className="fas fa-plus fa-10x justify-content-center align-self-center fa-spin"></i>
            </div>

          </Col>
          <Col>
            <BigNumber>{this.state.plus_number}</BigNumber>
          </Col>
        </Row>

      </FullViewContainer>

    );
  }
}

export default App;
