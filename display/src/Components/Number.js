import React, { Component } from 'react';
import styled from 'styled-components'
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

export default BigNumber;