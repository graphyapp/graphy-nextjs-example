import { Graph, GraphProvider } from "@graphysdk/core";
import { stickerPaths } from "../config/sticker-paths";
import { GLOBAL_EMISSIONS } from "./datasets/global-emissions";

export const GlobalEmissions = () => {
  return (
    <GraphProvider
      data={GLOBAL_EMISSIONS.data}
      datasetConfig={GLOBAL_EMISSIONS.config}
      visualisationConfig={{
        type: "line",
        locale: "EN_US",
        curveType: "linear",
        useLogScale: false,
        hasGridLines: true,
        topAxisLabel: null,
        hideCrossAxis: false,
        leftAxisLabel: null,
        headlineMetric: null,
        legendPosition: "right",
        rightAxisLabel: "CO₂ (tonnes per person)",
        showDataLabels: false,
        bottomAxisLabel: null,
        shouldStartFromZero: true,
        showPercentageLabels: false,
      }}
      customAppearanceConfig={{
        font: "technical",
        theme: "custom",
        palette: null,
        textScale: "1",
        background: "LIGHT",
        borderStyle: "solid",
        seriesConfig: {
          series1: { color: "#0FB981" },
          series2: { color: "#65D46F" },
          series3: { color: "#E83562" },
          series4: { color: "#FED03C" },
        },
        backgroundStyle: "solid",
        borderStyleName: null,
        customBorderStyle: "#CBF2E1",
        hasTransparentBackground: false,
      }}
      numberFormat={{ abbreviation: "auto", decimalPlaces: "auto" }}
      title="Have global CO₂ emissions peaked?"
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
