import React from 'react'
import styled from 'styled-components';
import Custom from './Custom';

const Header = styled.h1`
  color: turquoise;
  font-size: 36px;
`;

const Electric = styled.p`
  color: ${props => props.electric ? 'yellow' : 'black'};
  background-color: ${props => props.electric ? 'black' : 'white'};

  text-decoration: underline;
`;

const WrappedCustom = styled(Custom)`
  color: salmon;
  font-weight: bold;
`;

const Styled = () => {
  return (
    <div>
      <h2>Styled Components</h2>
      <Header>Do I look good??</Header>

      <Electric>Am I styled?</Electric>
      <Electric electric>No, but I am!!</Electric>

      <Custom />
      <WrappedCustom />
    </div>
  )
}

export default Styled
