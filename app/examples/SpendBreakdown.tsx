import { buildChartTitleDocument, Graph, GraphProvider } from "@graphysdk/core";
import { SPEND_BREAKDOWN } from "./datasets/spend-breakdown";
import type { GraphSizing } from "@graphysdk/core";

interface SpendBreakdownProps {
  sizing: GraphSizing;
}

export const SpendBreakdown = ({ sizing }: SpendBreakdownProps) => {
  return (
    <GraphProvider
      config={{
        data: SPEND_BREAKDOWN.data,
        datasetConfig: SPEND_BREAKDOWN.config,
        visualisationConfig: {
          type: "pie",
          locale: "EN_GB",
          flipAxes: false,
          sortBars: false,
          curveType: "linear",
          xGoalValue: null,
          yGoalValue: null,
          barPosition: "grouped",
          useLogScale: false,
          hasGridLines: true,
          topAxisLabel: null,
          comboPlotType: "grouped-bars",
          customPowerUp: null,
          hideCrossAxis: false,
          leftAxisLabel: null,
          pieAppearance: "donut",
          presetPowerUp: null,
          headlineMetric: null,
          legendPosition: "top",
          rightAxisLabel: null,
          showDataLabels: true,
          bottomAxisLabel: null,
          customLineLabel: null,
          customLineValue: null,
          showStackTotals: false,
          pieTotalPosition: "center",
          showCategoryLabels: false,
          customGoalLineLabel: null,
          shouldStartFromZero: false,
          averageLineSeriesKey: null,
          showPercentageLabels: true,
          reverseCrossAxisPosition: false,
        },
        customAppearanceConfig: {
          font: "technical",
          theme: "custom",
          palette: null,
          textScale: "1",
          background: "LIGHT",
          borderStyle: "none",
          seriesConfig: {
            series1: { color: "#3C82F6", lineType: "solid" },
            series2: { color: "#85B3FF" },
            series3: { color: "#85B3FF" },
            series4: { color: "#85B3FF" },
          },
          highlightStyle: "fade-color",
          shouldHideLogo: true,
          backgroundStyle: "solid",
          borderStyleName: null,
          shouldHideTitle: false,
          shouldHideCaption: true,
          shouldHideSubtitle: true,
          shouldHideSourceSection: true,
          hasTransparentBackground: false,
        },
        numberFormat: { abbreviation: "auto", decimalPlaces: "auto" },
        titleDocument: buildChartTitleDocument({
          title: "Headcount represents 59% of spend",
        }),
      }}
    >
      <Graph isEditable={false} sizing={sizing} />
    </GraphProvider>
  );
};
