import React, { useRef } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Stage, Layer, Line } from 'react-konva';
import { useMount } from 'react-use';

const MallSelectorProps = {
  points: [],
};

const Poi: React.FC<InferProps<typeof MallSelectorProps>> = ({ points }) => {
  const realLine = useRef(null);
  useMount(() => {
    console.log(realLine);
  });
  const line = points.flat()
  console.log(line)
  return (
    <Line
      ref={realLine}
      points={line}
      fill={'red'}
      closed={true}
    />
  );
};

export default Poi;
