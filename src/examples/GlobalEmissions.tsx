import {
  buildChartTitleDocument,
  Graph,
  GraphProvider,
  graphyLightTheme,
  migrateFromLegacyGraphConfig,
} from "@graphysdk/core";
import type { GraphSizing } from "@graphysdk/core";
import { GLOBAL_EMISSIONS } from "../datasets/global-emissions";

interface GlobalEmissionsProps {
  sizing: GraphSizing;
}

export const GlobalEmissions = ({ sizing }: GlobalEmissionsProps) => {
  return (
    <GraphProvider
      theme={graphyLightTheme}
      config={
        migrateFromLegacyGraphConfig({
          config: {
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
              borderStyle: "none",
              borderStyleName: null,
              seriesConfig: {
                series1: { color: "#0FB981" },
                series2: { color: "#65D46F" },
                series3: { color: "#E83562" },
                series4: { color: "#FED03C" },
              },
              // backgroundStyle: "transparent",
            },
            numberFormat: { abbreviation: "auto", decimalPlaces: "auto" },
            titleDocument: buildChartTitleDocument({
              title: "Have global CO₂ emissions peaked?",
            }),
          },
        }).config
      }
    >
      <Graph isEditable={false} sizing={sizing} />
    </GraphProvider>
  );
};
