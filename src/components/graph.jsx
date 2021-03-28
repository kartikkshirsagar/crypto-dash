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
    const timeWiseUrl ="https://api.nomics.com/v1/currencies/sparkline?key=7986da46df6f3c84a80abcb10f1f7c73&convert=INR&ids="+ id+"&start=2020-04-14T00%3A00%3A00Z&end=" + date;

    return timeWiseUrl;
}

 

const MyResponsiveLine = ({dataset}) => (
  <ResponsiveLine
    data={dataset}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{type: "time" ,format:"%Y-%m-%d"}}
    // xScale={{type:"point"}}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
      format:" >-s",
    }}
    xFormat="time:%Y-%m-%d"
    yFormat=" >-s"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Time",
      legendOffset: 36,
      legendPosition: "middle",
      format:"%Y-%m-%d"

    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Price",
      legendOffset: -55,
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

    const [timeData,setTimeData] = useState([]) 
    
    const APIcall = async () => {
        const date = new Date().toISOString()
        const _response = await fetch(generateURL(props.id,date))
        .then(response=>response.json())
        .then(jsondata=> {
            let requiredData = [{
                id: jsondata[0]["currency"],
                color: "hsl(342, 70%, 50%)",
                data : jsondata[0].timestamps.map(
                    (timestamp,index) => {
                        // let _date = new Date(timestamp);
                        //gets yyyy-mm-dd
                        // const _day = String("0" + _date.getDate()).slice(-2);
                        // const _month = String("0" + (_date.getMonth()+1)).slice(-2);
                        // const _year = _date.getFullYear();
                        
                        return {
                            x:(timestamp+"").slice(0,10),
                            // x:_year+"-"+_month+"-"+_day,
                            y:Math.round(jsondata[0].prices[index])
                        }
                    }
                )
            }];
            console.log(requiredData);
            setTimeData(requiredData);
        });
    }
    
    useEffect(()=>{
        APIcall();
    },[])

    return <MyResponsiveLine dataset={timeData} />;
};

export default Graph;
