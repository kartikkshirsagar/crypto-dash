// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const dataset =[
    {
      "id": "japan",
      "color": "hsl(342, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 60
        },
        {
          "x": "helicopter",
          "y": 279
        },
        {
          "x": "boat",
          "y": 223
        },
        {
          "x": "train",
          "y": 295
        },
        {
          "x": "subway",
          "y": 277
        },
        {
          "x": "bus",
          "y": 223
        },
        {
          "x": "car",
          "y": 45
        },
        {
          "x": "moto",
          "y": 273
        },
        {
          "x": "bicycle",
          "y": 120
        },
        {
          "x": "horse",
          "y": 23
        },
        {
          "x": "skateboard",
          "y": 222
        },
        {
          "x": "others",
          "y": 67
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(80, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 261
        },
        {
          "x": "helicopter",
          "y": 227
        },
        {
          "x": "boat",
          "y": 5
        },
        {
          "x": "train",
          "y": 216
        },
        {
          "x": "subway",
          "y": 251
        },
        {
          "x": "bus",
          "y": 175
        },
        {
          "x": "car",
          "y": 298
        },
        {
          "x": "moto",
          "y": 172
        },
        {
          "x": "bicycle",
          "y": 297
        },
        {
          "x": "horse",
          "y": 296
        },
        {
          "x": "skateboard",
          "y": 171
        },
        {
          "x": "others",
          "y": 42
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(220, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 124
        },
        {
          "x": "helicopter",
          "y": 118
        },
        {
          "x": "boat",
          "y": 120
        },
        {
          "x": "train",
          "y": 91
        },
        {
          "x": "subway",
          "y": 132
        },
        {
          "x": "bus",
          "y": 145
        },
        {
          "x": "car",
          "y": 64
        },
        {
          "x": "moto",
          "y": 106
        },
        {
          "x": "bicycle",
          "y": 224
        },
        {
          "x": "horse",
          "y": 283
        },
        {
          "x": "skateboard",
          "y": 184
        },
        {
          "x": "others",
          "y": 173
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(305, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 202
        },
        {
          "x": "helicopter",
          "y": 4
        },
        {
          "x": "boat",
          "y": 160
        },
        {
          "x": "train",
          "y": 238
        },
        {
          "x": "subway",
          "y": 256
        },
        {
          "x": "bus",
          "y": 99
        },
        {
          "x": "car",
          "y": 225
        },
        {
          "x": "moto",
          "y": 101
        },
        {
          "x": "bicycle",
          "y": 26
        },
        {
          "x": "horse",
          "y": 286
        },
        {
          "x": "skateboard",
          "y": 55
        },
        {
          "x": "others",
          "y": 26
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(127, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 194
        },
        {
          "x": "helicopter",
          "y": 129
        },
        {
          "x": "boat",
          "y": 42
        },
        {
          "x": "train",
          "y": 106
        },
        {
          "x": "subway",
          "y": 157
        },
        {
          "x": "bus",
          "y": 263
        },
        {
          "x": "car",
          "y": 97
        },
        {
          "x": "moto",
          "y": 197
        },
        {
          "x": "bicycle",
          "y": 102
        },
        {
          "x": "horse",
          "y": 276
        },
        {
          "x": "skateboard",
          "y": 237
        },
        {
          "x": "others",
          "y": 219
        }
      ]
    }
  ];

const MyResponsiveLine = ( {dataset} ) => (
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

const Graph = () => {
  return <MyResponsiveLine dataset = {dataset}/>;
};

export default Graph;
