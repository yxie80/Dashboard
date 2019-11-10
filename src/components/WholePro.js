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


const data = rawData.roseData;

class WholePro extends React.Component {
 render() {
   return (
     <div>
       <Chart height={200} data={data} padding="auto" forceFit>
         <Coord type="polar" />
         <Tooltip />
         <Geom
           type="interval"
           color="land"
           position="land*progress"
           style={{
             lineWidth: 1,
             stroke: "#fff"
           }}
         />
       </Chart>
     </div>
   );
 }
}
export default WholePro;