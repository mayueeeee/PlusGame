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
  width:20%;
  padding-right: 10px;  
  
  
`
const InactivePlayerPic = PlayerPic.extend`
  /* filter: ${props => props.active ? 'none' : 'grayscale(100%)'}; */
  filter: grayscale(100%);
  width:10%;
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
              .map((el, i) => <PlayerPlaceholder key={i} id={i} current={this.props.current_player}/>
              )}
            
          </Col>
        </Row>

      </PlayerWarpper>
    );
  }
}


class PlayerPlaceholder extends Component {
  
  render() {   
    const picName = ['kita','field','fluk','aj']

    if(this.props.id==this.props.current-1) {
      return (<PlayerPic src={`assets/player_${picName[this.props.id]}.png`}/>)
    }
    else{
      return (<InactivePlayerPic src={`assets/player_${picName[this.props.id]}.png`}/>)
    }  
    
  }
}

export default PlayerTurn;