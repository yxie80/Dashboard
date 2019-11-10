import React from "react";
import {
 G2,
 Chart,
 Geom,
 Axis,
 Tooltip,
 Coord,
 Label,
 Legend,
 View,
 Guide,
 Shape,
 Facet,
 Util
} from "bizcharts";
import rawData from '../data.json';

const data = rawData.revenueData;

class Revenue extends React.Component {
 render() {
   const cols = {
     value: {
       min: 0
     },
     year: {
       range: [0, 1]
     }
   };
   return (
     <div>
       <Chart height={150} data={data} scale={cols} forceFit padding="auto">
         <Axis name="year" />
         <Axis name="value" />
         <Tooltip
           crosshairs={{
             type: "y"
           }}
         />
         <Geom type="line" position="year*value" size={2} />
         <Geom
           type="point"
           position="year*value"
           size={4}
           shape={"circle"}
           style={{
             stroke: "#fff",
             lineWidth: 1
           }}
         />
       </Chart>
     </div>
   );
 }
}
export default Revenue;