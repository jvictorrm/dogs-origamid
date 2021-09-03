import React, { useEffect, useState } from 'react'
import { Container, GraphContainer } from './styles';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({data}) => {
  const [graph, setGraph] = useState([]);
  const [totalViews, setTotalViews] = useState(0);

  useEffect(() => {
    console.log(data)
    setTotalViews(data.map(({acessos}) => Number(acessos)).reduce((a , b) => a + b))
    setGraph(data.map(({title, acessos}) => ({ x: title, y: Number(acessos)})));
  }, [data]);

  return (
    <Container className="animeToLeft">
      <GraphContainer id="totalViews">
        <p>Acessos: {totalViews}</p>
      </GraphContainer>

      <GraphContainer>
        <VictoryPie 
          data={graph} 
          innerRadius={50} 
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: .9,
              stroke: '#fff',
              strokeWidth: 2
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </GraphContainer>

      <GraphContainer>
        <VictoryChart>
          <VictoryBar data={graph} alignment="start"/>
        </VictoryChart>
      </GraphContainer>
    </Container>
  )
}

export default UserStatsGraphs
