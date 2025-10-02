"use client";

import { buildChartTitleDocument, Graph, GraphProvider } from "@graphysdk/core";
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
} from "@graphysdk/editor";
import { ChakraProvider, defaultSystem, Tabs } from "@chakra-ui/react";
import { ReturnHome } from "@/src/ReturnHome";

export default function EditableExample() {
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
          theme="light"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBlock: 50,
              gap: 50,
              margin: "0 auto",
              maxWidth: 1200,
            }}
          >
            <Graph sizing={{ mode: "fixed", width: 500, height: 350 }} />
            <Editor />
          </div>
        </GraphProvider>
      </ChakraProvider>
    </>
  );
}

const Editor = () => {
  return (
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
          <GraphPanel />
        </Tabs.Content>
        <Tabs.Content value="axes">
          <AxesPanel />
        </Tabs.Content>
        <Tabs.Content value="color">
          <ColorPanel />
        </Tabs.Content>
        <Tabs.Content value="elements">
          <ElementsPanel />
        </Tabs.Content>
        <Tabs.Content value="annotate">
          <AnnotatePanel />
        </Tabs.Content>
        <Tabs.Content value="powerUps">
          <PowerUpPanel />
        </Tabs.Content>
      </Tabs.ContentGroup>
    </Tabs.Root>
  );
};

const initialConfig: GraphConfig = {
  data: TRAFFIC.data,
  datasetConfig: TRAFFIC.config,
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
  titleDocument: buildChartTitleDocument({
    title: "73% increase in organic traffic in April",
  }),
};
