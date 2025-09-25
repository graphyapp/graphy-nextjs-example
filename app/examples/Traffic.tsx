import { Graph, GraphProvider } from "@graphysdk/core";
import { stickerPaths } from "../config/sticker-paths";
import { TRAFFIC } from "./datasets/traffic";
import type { GraphSizing } from "@graphysdk/core";

interface TrafficProps {
  sizing: GraphSizing;
}

export const Traffic = ({ sizing }: TrafficProps) => {
  return (
    <GraphProvider
      config={{
        data: TRAFFIC.data,
        datasetConfig: TRAFFIC.config,
        annotations: [
          {
            id: "24:c5",
            config: { type: "highlight", highlight: "data-point" },
            rowIndex: 24,
            propertyKey: "c5",
          },
        ],
        visualisationConfig: {
          type: "line",
          barPosition: "stacked",
          locale: "EN_US",
          curveType: "linear",
          useLogScale: false,
          hasGridLines: true,
          topAxisLabel: null,
          hideCrossAxis: false,
          leftAxisLabel: null,
          lineThickness: 1.56,
          headlineMetric: null,
          legendPosition: "right",
          rightAxisLabel: "Traffic",
          showDataLabels: false,
          bottomAxisLabel: null,
          shouldStartFromZero: true,
          showPercentageLabels: false,
          reverseCrossAxisPosition: false,
        },
        customAppearanceConfig: {
          theme: "custom",
          palette: null,
          textScale: "1",
          background: "LIGHT",
          borderStyle: "none",
          seriesConfig: {
            series1: { color: "#FCA65F", fillType: "solid", lineType: "solid" },
            series2: { color: "#FAC491", lineType: "solid" },
            series3: { color: "#BABABA", lineType: "solid" },
            series4: { color: "#FED03C" },
          },
          highlightStyle: "fade-color",
          backgroundStyle: "solid",
          borderStyleName: null,
          hasTransparentBackground: false,
        },
        numberFormat: { abbreviation: "auto", decimalPlaces: "auto" },
        title: "73% increase in organic traffic in April",
      }}
    >
      <Graph
        renderTitle={({ title }) => (
          <h2 className="text-2xl font-bold">{title}</h2>
        )}
        stickerPaths={stickerPaths}
        sizing={sizing}
      />
    </GraphProvider>
  );
};
