/**
 *
 * InputItem
 *
 */
import React, { useContext } from 'react';

// import styled from 'styles/styled-components';

import { FormattedMessage } from 'react-intl';
import { ContextComponent } from "../../FormGroup"
import messages from './messages';

import { Input } from "../../Input";

interface Props {
  value?: string;
  name?: string;
  type?: string;
  htmlFor?: string;
  handleChange?: any;
  valuesInput?: object;
}

function InputItem(props: Props, ) {

  return (
    <Input type={props.type} name={props.name} onChange={props.handleChange} {...props} />
  );
}

export default InputItem;
