import { DatePicker } from "antd";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { BarChart, LineChart } from "echarts/charts";
import * as echarts from "echarts/core";
import React from "react";
import styled from "styled-components";
import { WHITE } from "../../constants/colors";

import {
  AxisPointerComponent,
  GridComponent,
  MarkAreaComponent,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
} from "echarts/components";

import { CanvasRenderer } from "echarts/renderers";
import { H2 } from "../../Ui/Typography";

export const ChartsWrapper = styled.div`
  padding: 20px;
  border-radius: 20px;
  background: ${WHITE};
`;

export const Header = styled.div`
  display: flex;

  div:first-child {
    flex-grow: 1;
  }
`;

interface ChartsProps {
  title: string;
}

export const Charts = ({ title }: ChartsProps) => {
  const options = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    title: {
      text: "Gradient Stacked Area Chart",
      show: false,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["22/10", "23/10", "24/10", "25/10", "26/10", "27/10", "28/10"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Finalizados",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [140, 232, 101, 264, 90, 340, 250],
      },
      {
        name: "Em andamento",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 282, 111, 234, 220, 340, 310],
      },
      {
        name: "Cancelados",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(55, 162, 255)",
            },
            {
              offset: 1,
              color: "rgb(116, 21, 219)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [0, 0, 10, 0, 190, 130, 220],
      },
      {
        name: "Aguardando resposta do cliente",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 0, 135)",
            },
            {
              offset: 1,
              color: "rgb(135, 0, 157)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [220, 402, 231, 134, 190, 230, 120],
      },
      {
        name: "Aceito pelo cliente",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "rgb(224, 62, 76)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [0, 0, 181, 234, 210, 290, 150],
      },
    ],
  };

  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    BarChart,
    CanvasRenderer,
    AxisPointerComponent,
    MarkAreaComponent,
    LineChart,
    ToolboxComponent,
  ]);

  return (
    <ChartsWrapper>
      <Header>
        <div>
          <H2 variation="thin">{title}</H2>
        </div>
        <DatePicker picker="week" />
      </Header>
      <ReactEChartsCore
        echarts={echarts}
        option={options}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
      />
    </ChartsWrapper>
  );
};
