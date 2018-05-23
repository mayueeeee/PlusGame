import React, {Component} from 'react';
import {Row, Col} from 'reactstrap'
import styled from 'styled-components'
import {LogoTXT, FullHeightContainer, SectionWarpper} from './Utils'
import {MaxNumber} from './Number'
import ReactPlayer from 'react-player'

const PaneWarpper = styled.div `
  width:100%;
  height:100vh;  
  background: -webkit-linear-gradient(to right, #4b134f, #c94b4b);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4b134f, #c94b4b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  z-index: 2;
  position: absolute;
  /* margin-top: 22vh; */


`
const CenterCol = styled(Col)`
  margin-top: auto;
  margin-bottom: auto;
`
const FullRow = styled(Row)`
  height:100%;

`
const LoseText = styled.h1 `
  font-size:200px;
  font-family: 'Noto Sans Thai UI', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #fff;
`

const LoseSubText = styled.h2 `
  /* font-size:100px; */
  font-family: 'Noto Sans Thai UI','Laila', serif;
  color: #fff;
`
const LoseMeme = styled.img `
  height: 90vh;
  margin-top: 10vh;
  margin-left: 1vw;
`
export const StyleText = styled.h2 `
  margin-top: 7vh;
  font-size: 40px;
  color: #fff;
  font-family: 'Cabin Sketch', cursive;
`

// const LogoTXT = styled.h1 `   font-size:100px;   color: #fff;   font-family:
// 'Pacifico', cursive; `

export class LosePage extends Component {
  render() {
    return (
      <PaneWarpper>
        <FullRow>
          <Col xs={2}><LoseMeme src="assets/lose_porr.png"/></Col>

          <Col className="my-auto">
            <LoseText>แตก1 สวยพี่สวย</LoseText>
            <LoseSubText>~Player{this.props.player}, You Noob Na Jaaa Eiei~</LoseSubText>
            <LoseSubText >กดปุ่มเพื่อเริ่มเล่นใหม่</LoseSubText >
          </Col>
        </FullRow>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=hCC6ZhRS7sY'
          width='0%'
          height='0%'
          loop
          playing/>

      </PaneWarpper>
    );
  }
}

export class InitPage extends Component {
  render() {
    return (

      <FullHeightContainer fluid narrow className="text-center">
        <Row>
          <Col>
            <LogoTXT big>Count Game Yay!</LogoTXT>
          </Col>
        </Row>
        <SectionWarpper>
          <Row>
            <Col>
              <MaxNumber number={this.props.maxPlayer} title="Player"/>
            </Col>
            <Col>
              <MaxNumber number={this.props.maxNumber} title="Max Number"/>
            </Col>
          </Row>
          <Row>
            <Col><StyleText>Press Start key to start game</StyleText></Col>
          </Row>
        </SectionWarpper>
        <ReactPlayer
              url='https://www.youtube.com/watch?v=B5-X_3_Kpww'
              width='0%'
              height='0%'
              loop
              playing/>
      </FullHeightContainer>
    );
  }
}

export default LosePage;