"use client";

import {
  buildChartTitleDocument,
  Graph,
  GraphProvider,
  graphyLightTheme,
} from "@graphysdk/core";
import { TRAFFIC } from "../../src/datasets/traffic";
import type { GraphConfig } from "@graphysdk/core";
import { useEffect, useState } from "react";
import {
  GraphPanel,
  AxesPanel,
  ElementsPanel,
  PowerUpPanel,
  ColorPanel,
  AnnotatePanel,
  DataTable,
  EditorProvider,
  GraphTypeSection,
  NumberFormatSection,
  GraphOptionsSection,
  CrossAxisSection,
  MainAxisSection,
  ChartBackgroundSection,
  ChartBorderSection,
  HighlightColorSection,
  PaletteSection,
  SourceSection,
  TextSizeSection,
  TextVisibilitySection,
  CallOutSection,
  HighlightSection,
  AveragePowerUpSection,
  GoalPowerUpSection,
  HeadlineNumberSection,
  LegendPositionSection,
  TrendPowerUpSection,
} from "@graphysdk/editor";
import { ChakraProvider, defaultSystem, Tabs } from "@chakra-ui/react";
import { ReturnHome } from "@/src/ReturnHome";

export default function EditorExample() {
  // Note: Currently graphySDK is not working with SSR.
  const [isMounted, setIsMounted] = useState(false);
  const [config, setConfig] = useState<GraphConfig>(initialConfig);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ReturnHome />
      <ChakraProvider value={defaultSystem}>
        <GraphProvider
          config={config}
          onChange={(update) => {
            setConfig((currentValues) => ({ ...currentValues, ...update }));
          }}
          theme={graphyLightTheme}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 3fr",
              gridTemplateRows: "1fr 1fr",
              gap: 40,
              padding: 20,
              margin: "0 auto",
              maxWidth: 1400,
              height: 900,
            }}
          >
            <div
              style={{
                gridColumn: "1",
                gridRow: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Graph sizing={{ mode: "responsive" }} />
            </div>
            <div
              style={{
                gridColumn: "1",
                gridRow: "2",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <DataTable />
            </div>
            <div style={{ gridColumn: "2", gridRow: "1 / 3" }}>
              <Editor />
            </div>
          </div>
        </GraphProvider>
      </ChakraProvider>
    </>
  );
}

const Editor = () => {
  return (
    <EditorProvider>
      <Tabs.Root defaultValue="graph">
        <Tabs.List>
          <Tabs.Trigger value="graph">Graph</Tabs.Trigger>
          <Tabs.Trigger value="axes">Axes</Tabs.Trigger>
          <Tabs.Trigger value="color">Color</Tabs.Trigger>
          <Tabs.Trigger value="elements">Elements</Tabs.Trigger>
          <Tabs.Trigger value="annotate">Annotate</Tabs.Trigger>
          <Tabs.Trigger value="powerUps">Power-ups</Tabs.Trigger>
        </Tabs.List>
        <Tabs.ContentGroup>
          <Tabs.Content value="graph">
            <GraphPanel>
              <GraphTypeSection />
              <GraphOptionsSection />
              <LegendPositionSection />
              <HeadlineNumberSection />
              <NumberFormatSection />
            </GraphPanel>
          </Tabs.Content>
          <Tabs.Content value="axes">
            <AxesPanel>
              <MainAxisSection />
              <CrossAxisSection />
            </AxesPanel>
          </Tabs.Content>
          <Tabs.Content value="color">
            <ColorPanel>
              <PaletteSection />
              <ChartBackgroundSection />
              <ChartBorderSection />
              <HighlightColorSection />
            </ColorPanel>
          </Tabs.Content>
          <Tabs.Content value="elements">
            <ElementsPanel>
              <TextVisibilitySection />
              <SourceSection />
              <TextSizeSection />
            </ElementsPanel>
          </Tabs.Content>
          <Tabs.Content value="annotate">
            <AnnotatePanel>
              <CallOutSection hiddenButtons={["text"]} />
              <HighlightSection />
            </AnnotatePanel>
          </Tabs.Content>
          <Tabs.Content value="powerUps">
            <PowerUpPanel>
              <GoalPowerUpSection />
              <TrendPowerUpSection />
              <AveragePowerUpSection />
            </PowerUpPanel>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs.Root>
    </EditorProvider>
  );
};

const initialConfig: GraphConfig = {
  data: TRAFFIC.data,
  datasetConfig: TRAFFIC.config,
  visualisationConfig: {
    type: "areaStacked",
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
    borderStyleName: null,
  },
  numberFormat: { abbreviation: "auto", decimalPlaces: "auto" },
  titleDocument: buildChartTitleDocument({
    title: "73% increase in organic traffic in April",
  }),
};
