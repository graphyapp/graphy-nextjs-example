import { Graph, GraphProvider } from "@graphysdk/core";
import { stickerPaths } from "../config/sticker-paths";
import { TRAFFIC } from "./datasets/traffic";

export const Traffic = () => {
  return (
    <GraphProvider
      data={TRAFFIC.data}
      datasetConfig={TRAFFIC.config}
      annotations={{
        annotations: [
          {
            id: "24:c5",
            config: { type: "highlight", highlight: "data-point" },
            rowIndex: 24,
            propertyKey: "c5",
          },
        ],
      }}
      visualisationConfig={{
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
      }}
      customAppearanceConfig={{
        theme: "custom",
        palette: null,
        textScale: "1",
        background: "LIGHT",
        borderStyle: "solid",
        seriesConfig: {
          series1: { color: "#FCA65F", fillType: "solid", lineType: "solid" },
          series2: { color: "#FAC491", lineType: "solid" },
          series3: { color: "#BABABA", lineType: "solid" },
          series4: { color: "#FED03C" },
        },
        highlightStyle: "fade-color",
        backgroundStyle: "solid",
        borderStyleName: null,
        customBorderStyle: "#FFE9D6",
        hasTransparentBackground: false,
      }}
      numberFormat={{ abbreviation: "auto", decimalPlaces: "auto" }}
      title="73% increase in organic traffic in April"
    >
      <Graph
        renderTitle={({ title }) => (
          <h2 className="text-2xl font-bold">{title}</h2>
        )}
        stickerPaths={stickerPaths}
      />
    </GraphProvider>
  );
};
