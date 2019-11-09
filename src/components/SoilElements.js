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


class SoilElements extends React.Component {
 render() {
   const data = [
     {
         month: "Jan",
         city: "Tokyo",
         temperature: 7
     },
     {
         month: "Jan",
         city: "London",
         temperature: 3.9
     },
     {
         month: "Jan",
         city: "Paris",
         temperature: 5
     },  
     {
         month: "Feb",
         city: "Tokyo",
         temperature: 6.9
     },
     {
         month: "Feb",
         city: "London",
         temperature: 4.2
     },
     {
          month: "Feb",
          city: "Paris",
          temperature: 4.5
     },
     {
         month: "Mar",
         city: "Tokyo",
         temperature: 9.5
     },
     {
         month: "Mar",
         city: "London",
         temperature: 5.7
     },
     {
      month: "Mar",
      city: "Paris",
      temperature: 6.6
  },
     {
         month: "Apr",
         city: "Tokyo",
         temperature: 14.5
     },
     {
         month: "Apr",
         city: "London",
         temperature: 8.5
     },
     {
      month: "Apr",
      city: "Paris",
      temperature: 12
  },
     {
         month: "May",
         city: "Tokyo",
         temperature: 18.4
     },
     {
         month: "May",
         city: "London",
         temperature: 11.9
     },
     {
      month: "May",
      city: "Paris",
      temperature: 14
  },
     {
         month: "Jun",
         city: "Tokyo",
         temperature: 21.5
     },
     {
         month: "Jun",
         city: "London",
         temperature: 15.2
     },
     {
      month: "Jun",
      city: "Paris",
      temperature: 18
  },
     {
         month: "Jul",
         city: "Tokyo",
         temperature: 25.2
     },
     {
         month: "Jul",
         city: "London",
         temperature: 17
     },
     {
      month: "Jul",
      city: "Paris",
      temperature: 20
  },
     {
         month: "Aug",
         city: "Tokyo",
         temperature: 26.5
     },
     {
         month: "Aug",
         city: "London",
         temperature: 16.6
     },
     {
      month: "Aug",
      city: "Paris",
      temperature: 20
  },
     {
         month: "Sep",
         city: "Tokyo",
         temperature: 23.3
     },
     {
         month: "Sep",
         city: "London",
         temperature: 14.2
     },
     {
      month: "Sep",
      city: "Paris",
      temperature: 18
  },
     {
         month: "Oct",
         city: "Tokyo",
         temperature: 18.3
     },
     {
         month: "Oct",
         city: "London",
         temperature: 10.3
     },
     {
      month: "Oct",
      city: "Paris",
      temperature: 13
  },
     {
         month: "Nov",
         city: "Tokyo",
         temperature: 13.9
     },
     {
         month: "Nov",
         city: "London",
         temperature: 6.6
     },
     {
      month: "Nov",
      city: "Paris",
      temperature: 8
  },
     {
         month: "Dec",
         city: "Tokyo",
         temperature: 9.6
     },
     {
         month: "Dec",
         city: "London",
         temperature: 4.8
     },
     {
      month: "Dec",
      city: "Paris",
      temperature: 7
  },
     
   ];
   const cols = {
     month: {
       range: [0, 1]
     }
   };
   return (
     <div>
       <Chart height={400} data={data} scale={cols} forceFit>
         <Legend />
         <Axis name="month" />
         <Axis
           name="temperature"
           label={{
             formatter: val => `${val}°C`
           }}
         />
         <Tooltip
           crosshairs={{
             type: "y"
           }}
         />
         <Geom
           type="line"
           position="month*temperature"
           size={2}
           color={"city"}
           shape={"smooth"}
         />
         <Geom
           type="point"
           position="month*temperature"
           size={4}
           shape={"circle"}
           color={"city"}
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

export default SoilElements;