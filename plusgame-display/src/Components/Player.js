import React, {Component} from 'react';
import {Row, Col} from 'reactstrap'
import styled from 'styled-components'
const PlayerNumber = styled.h1 `
  color: #fff;
  font-family: 'Roboto Mono', monospace;
`
const PlayerTitle = styled.h2 `
  color: #fff;
  font-family: 'Roboto Mono', monospace;
`
const PlayerWarpper = styled.div``


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
            <PlayerNumber>{this.props.number}</PlayerNumber>
          </Col>
        </Row>

      </PlayerWarpper>
    );
  }
}

export default PlayerTurn;