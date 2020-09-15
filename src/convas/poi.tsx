import React, { useRef } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Stage, Layer, Line } from 'react-konva';
import { useMount } from 'react-use';

const MallSelectorProps = {
  points: [],
};

const Poi: React.FC<InferProps<typeof MallSelectorProps>> = ({ points }) => {
  const realStage = useRef(null);

  return (
    <Line
      points={points}
      fill='red'
    />
  );
};

export default Poi;
