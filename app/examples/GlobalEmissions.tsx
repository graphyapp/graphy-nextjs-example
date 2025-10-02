import { buildChartTitleDocument, Graph, GraphProvider } from "@graphysdk/core";
import { GLOBAL_EMISSIONS } from "./datasets/global-emissions";
import type { GraphSizing } from "@graphysdk/core";

interface GlobalEmissionsProps {
  sizing: GraphSizing;
}

export const GlobalEmissions = ({ sizing }: GlobalEmissionsProps) => {
  return (
    <GraphProvider
      config={{
        data: GLOBAL_EMISSIONS.data,
        datasetConfig: GLOBAL_EMISSIONS.config,
        visualisationConfig: {
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
        },
        customAppearanceConfig: {
          font: "technical",
          theme: "custom",
          palette: null,
          textScale: "1",
          background: "LIGHT",
          borderStyle: "none",
          borderStyleName: null,
          seriesConfig: {
            series1: { color: "#0FB981" },
            series2: { color: "#65D46F" },
            series3: { color: "#E83562" },
            series4: { color: "#FED03C" },
          },
          backgroundStyle: "solid",
          hasTransparentBackground: false,
        },
        numberFormat: { abbreviation: "auto", decimalPlaces: "auto" },
        titleDocument: buildChartTitleDocument({
          title: "Have global CO₂ emissions peaked?",
        }),
      }}
    >
      <Graph isEditable={false} sizing={sizing} />
    </GraphProvider>
  );
};
