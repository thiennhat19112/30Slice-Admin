import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

export default function AnimatedMulti(props) {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={props.timeSelected}
      isMulti
      options={props.time}
      onChange={props.onChange}
    />
  );
}