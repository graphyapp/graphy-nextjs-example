import { Graph, GraphProvider, graphyLightTheme } from "@graphysdk/core";
import type { GraphSizing } from "@graphysdk/core";

interface SpendBreakdownProps {
  sizing: GraphSizing;
}

export const SpendBreakdown = ({ sizing }: SpendBreakdownProps) => {
  return (
    <GraphProvider
      theme={graphyLightTheme}
      config={{
        type: "donut",
        data: {
          columns: [
            {
              key: "c1",
              label: "Category",
            },
            {
              key: "c2",
              label: "Value",
            },
          ],
          rows: [
            {
              c1: "Headcount",
              c2: "$38,4560",
            },
            {
              c1: "Legal",
              c2: "$4,5780",
            },
            {
              c1: "Marketing",
              c2: "$9,4560",
            },
            {
              c1: "Office",
              c2: "$12,9850",
            },
          ],
        },
        options: {
          isSmoothLine: false,
          sortBars: false,
          comboType: "grouped-bars",
          pieTotalPosition: "center",
        },
        legend: {
          position: "top",
        },
        appearance: {
          seriesStyles: {
            series1: {
              customColor: "#3C82F6",
              lineStyle: "solid",
            },
            series2: {
              customColor: "#85B3FF",
            },
            series3: {
              customColor: "#85B3FF",
            },
            series4: {
              customColor: "#85B3FF",
            },
          },
          textStyle: {
            heading: {
              fontId: "technical",
            },
            body: {
              fontId: "technical",
            },
          },
          highlightStyle: "fade-color",
        },
        content: {
          title: "Headcount represents 59% of spend",
          isSubtitleHidden: true,
          isCaptionHidden: true,
          isSourceHidden: true,
        },
        dataLabels: {
          showDataLabels: true,
          dataLabelFormat: "percentage",
          showStackTotals: false,
          showCategoryLabels: false,
        },
      }}
    >
      <Graph mode="readonly" sizing={sizing} />
    </GraphProvider>
  );
};
