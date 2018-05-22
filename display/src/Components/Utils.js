import styled from 'styled-components'
import {Container} from 'reactstrap'

export const FullHeightContainer = styled(Container)`
  height: 100vh;  
  background: #0f0c29;
  /* background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29); */
  background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
  padding: ${props => props.narrow ? '20vh' : '5vh'} 0 30px 0 ;
`
export const LogoTXT = styled.h1 `
  font-size: ${props => props.big ? '130px' : '100px'};
  color: #fff;
  font-family: 'Pacifico', cursive;
`

export const SectionWarpper = styled.div`
  margin: 15vh 0 0 0;
  ${props => props.fluid ? '' : 'padding: 0 25vw 0 25vw'}
  /* padding: 0 25vw 0 25vw; */
`

export const ScoreTitle = styled.h2`
    color: #fff;
    font-family: 'Pacifico', cursive;

`

export const LightIcon = styled.i`
    color: #fff;
`