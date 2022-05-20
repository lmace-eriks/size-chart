import React, { useEffect } from 'react';

// Styles
import styles from "./styles.css";

interface SizeChartProps {

}

const SizeChart: StorefrontFunctionComponent<SizeChartProps> = ({ }) => {

  useEffect(() => {
    console.log("Render " + Date.now());
  }, []);

  return (
    <h1>Hello World</h1>
  )
}

SizeChart.schema = {
  title: 'editor.SizeChart.title',
  description: 'editor.SizeChart.description',
  type: 'object',
  properties: {}
}

export default SizeChart;