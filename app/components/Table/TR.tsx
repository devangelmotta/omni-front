/**
 *
 * tr component
 *
 */
import React from 'react';
import styled from 'styled-components';

interface Props {
  display?: string;
  border?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
  margin?: string;
  borderRadius?: string;
}

export const Tr = styled.tr`
    display: ${(props: Props) => props.display || "flex"};
    flex-direction: row;
    justify-content: space-around;
    border: ${props => props.border || "none"}; 
    background-color: ${props => props.backgroundColor || "transparent"};
    height: ${props => props.height || "null"};
    width: ${props => props.width || "100%"};
    border-radius: ${props => props.borderRadius || "0"};
    border: ${(props: Props) => props.border || "none"}; 
    margin: ${props => props.margin || "0 0 0 0"};
    
  }
`;