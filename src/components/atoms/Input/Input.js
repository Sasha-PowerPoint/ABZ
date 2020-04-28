import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 15px 20px;
  border-radius: 4px;
  border: 2px solid #8d70ff;
`;

export default function Input(props) {
    return (
        <StyledInput
            {...props}
        />
    );
}
