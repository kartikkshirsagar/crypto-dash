// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import React, { useState,useEffect } from 'react';






function generateURL(id,date){
    const timeWiseUrl ="https://api.nomics.com/v1/currencies/sparkline?key=7986da46df6f3c84a80abcb10f1f7c73&ids="+ id+"&start=2020-04-14T00%3A00%3A00Z&end=" + date;

    return timeWiseUrl;
}

  const dataset = [
  {
    id: "japan",
    color: "hsl(342, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 60,
      },
      {
        x: "helicopter",
        y: 279,
      },
      {
        x: "boat",
        y: 223,
      },
      {
        x: "train",
        y: 295,
      },
      {
        x: "subway",
        y: 277,
      },
      {
        x: "bus",
        y: 223,
      },
      {
        x: "car",
        y: 45,
      },
      {
        x: "moto",
        y: 273,
      },
      {
        x: "bicycle",
        y: 120,
      },
      {
        x: "horse",
        y: 23,
      },
      {
        x: "skateboard",
        y: 222,
      },
      {
        x: "others",
        y: 67,
      },
    ],
  },
];

const MyResponsiveLine = ({ dataset }) => (
  <ResponsiveLine
    data={dataset}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    enableGridX={false}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor", modifiers: [] }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

const Graph = (props) => {

    const [timeData,setTimeData] =useState({
        coin:[]
    }) 

    const APIcall = async () => {
        const date = new Date().toISOString()

        const response = await fetch(generateURL(props.id,date))
        .then(response=>response.json())
        .then(jsondata=> setTimeData({coin:jsondata}));
        
    }
    useEffect(async ()=>{
        await APIcall();
        console.log(timeData);
    },[])

    return <MyResponsiveLine dataset={dataset} />;
};

export default Graph;
