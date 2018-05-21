import React, {Component} from 'react';
import {Row, Col} from 'reactstrap'
import styled from 'styled-components'
export const PlayerNumber = styled.h1 `
  color: #fff;
  font-family: 'Roboto Mono', monospace;
`
export const PlayerTitle = styled.h2 `
  color: #fff;
  font-family: 'Roboto Mono', monospace;
`
export const PlayerWarpper = styled.div ``

const PlayerPic = styled.img `  
  width:15%;
  padding-right: 10px;  
  
  
`
const InactivePlayerPic = PlayerPic.extend`
  /* filter: ${props => props.active ? 'none' : 'grayscale(100%)'}; */
  filter: grayscale(100%);
`
// class PlayerTurn extends Component {   render() {     return (
// <PlayerWarpper>         <Row>           <Col>
// <PlayerTitle>{this.props.title}</PlayerTitle>           </Col>         </Row>
//         <Row>           <Col>
// <PlayerNumber>{this.props.number}</PlayerNumber>           </Col>
// </Row>       </PlayerWarpper>     );   } }

class PlayerTurn extends Component {
  render() {    

    return (
      <PlayerWarpper>
        <Row>
          <Col>
            <PlayerTitle>{this.props.title}</PlayerTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <PlayerNumber>{this.props.number}</PlayerNumber> */}
            {Array(this.props.number)
              .fill(1)
              .map((el, i) =>{i===this.props.current_player ? <PlayerPic key={i} src="assets/player_kita.png"/> : <InactivePlayerPic key={i} src="assets/player_kita.png"/>}
              )}
            
          </Col>
        </Row>

      </PlayerWarpper>
    );
  }
}

export default PlayerTurn;