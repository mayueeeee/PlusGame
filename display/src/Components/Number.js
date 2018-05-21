import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import styled from 'styled-components'
import {PlayerWarpper,PlayerTitle,PlayerNumber} from './Player'
const BigNumber = styled.h1`
  font-size:400px;
  color: #fff;
`
const SectionWarpper = styled.h2`
  margin-top: 70px;
  font-family: 'Inconsolata', monospace;
`
export class SmallNumber extends Component {
  render() {
    return (
      <SectionWarpper>
        Current: {this.props.children}
      </SectionWarpper>        
    );
  }
}

export class MaxNumber extends Component {
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

export default BigNumber;