import React from 'react';
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend,
   } from "bizcharts";
import DataSet from "@antv/data-set";
import rawData from "../data.json";

const data = rawData.waterStats;

class WaterStats extends React.Component {
    render() {
      const ds = new DataSet();
      const dv = ds.createView().source(data);
      dv.transform({
        type: "fold",
        fields: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug."],
        // 展开字段集
        key: "月份",
        // key字段
        value: "月均降雨量" // value字段
      });
      return (
        <div>
          <Chart height={400} data={dv} forceFit>
            <Legend />
            <Axis name="月份" />
            <Axis name="月均降雨量" />
            <Tooltip />
            <Geom
              type="intervalStack"
              position="月份*月均降雨量"
              color={"title"}
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

export default WaterStats;