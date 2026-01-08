"use client";

import { Graph, GraphProvider, graphyLightTheme } from "@graphysdk/core";
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
  type: "areaStacked",
  data: {
    columns: [
      {
        key: "c1",
        label: "Date",
      },
      {
        key: "c3",
        label: "Organic",
      },
      {
        key: "c2",
        label: "Paid",
      },
    ],
    rows: [
      {
        c1: "2024-12-23T00:00:00.000Z",
        c2: "3570",
        c3: "12520",
      },
      {
        c1: "2024-12-30T00:00:00.000Z",
        c2: "4280",
        c3: "11520",
      },
      {
        c1: "2025-01-06T00:00:00.000Z",
        c2: "5280",
        c3: "16440",
      },
      {
        c1: "2025-01-13T00:00:00.000Z",
        c2: "5130",
        c3: "19980",
      },
      {
        c1: "2025-01-20T00:00:00.000Z",
        c2: "5200",
        c3: "18750",
      },
      {
        c1: "2025-01-27T00:00:00.000Z",
        c2: "4320",
        c3: "17790",
      },
      {
        c1: "2025-02-03T00:00:00.000Z",
        c2: "5180",
        c3: "22320",
      },
      {
        c1: "2025-02-10T00:00:00.000Z",
        c2: "5190",
        c3: "21400",
      },
      {
        c1: "2025-02-17T00:00:00.000Z",
        c2: "5080",
        c3: "21150",
      },
      {
        c1: "2025-02-24T00:00:00.000Z",
        c2: "5380",
        c3: "22910",
      },
      {
        c1: "2025-03-03T00:00:00.000Z",
        c2: "5690",
        c3: "23870",
      },
      {
        c1: "2025-03-10T00:00:00.000Z",
        c2: "5860",
        c3: "25850",
      },
      {
        c1: "2025-03-17T00:00:00.000Z",
        c2: "6080",
        c3: "24870",
      },
      {
        c1: "2025-03-24T00:00:00.000Z",
        c2: "5380",
        c3: "24210",
      },
      {
        c1: "2025-03-31T00:00:00.000Z",
        c2: "6260",
        c3: "24710",
      },
      {
        c1: "2025-04-07T00:00:00.000Z",
        c2: "5920",
        c3: "42860",
      },
      {
        c1: "2025-04-14T00:00:00.000Z",
        c2: "6870",
        c3: "43180",
      },
      {
        c1: "2025-04-21T00:00:00.000Z",
        c2: "7830",
        c3: "39740",
      },
      {
        c1: "2025-04-28T00:00:00.000Z",
        c2: "6800",
        c3: "34620",
      },
      {
        c1: "2025-05-05T00:00:00.000Z",
        c2: "7400",
        c3: "36440",
      },
      {
        c1: "2025-05-12T00:00:00.000Z",
        c2: "9100",
        c3: "37310",
      },
      {
        c1: "2025-05-19T00:00:00.000Z",
        c2: "8380",
        c3: "32960",
      },
      {
        c1: "2025-05-26T00:00:00.000Z",
        c2: "7330",
        c3: "33140",
      },
      {
        c1: "2025-06-02T00:00:00.000Z",
        c2: "7580",
        c3: "31640",
      },
      {
        c1: "2025-06-09T00:00:00.000Z",
        c2: "7940",
        c3: "34570",
      },
      {
        c1: "2025-06-16T00:00:00.000Z",
        c2: "7460",
        c3: "28230",
      },
      {
        c1: "2025-06-23T00:00:00.000Z",
        c2: "7170",
        c3: "26420",
      },
      {
        c1: "2025-06-30T00:00:00.000Z",
        c2: "7560",
        c3: "26830",
      },
      {
        c1: "2025-07-07T00:00:00.000Z",
        c2: "7890",
        c3: "26990",
      },
      {
        c1: "2025-07-14T00:00:00.000Z",
        c2: "6900",
        c3: "26870",
      },
    ],
  },
  options: {
    isSmoothLine: false,
    lineThickness: 1.56,
  },
  axes: {
    y: {
      label: "Traffic",
      isHidden: false,
      isReversed: false,
      scaleType: "linear",
      min: 0,
    },
    showGridLines: true,
  },
  legend: {
    position: "right",
  },
  appearance: {
    seriesStyles: {
      series1: {
        customColor: "#FCA65F",
        fillStyle: "solid",
        lineStyle: "solid",
      },
      series2: {
        customColor: "#FAC491",
        lineStyle: "solid",
      },
      series3: {
        customColor: "#BABABA",
        lineStyle: "solid",
      },
      series4: {
        customColor: "#FED03C",
      },
    },
    highlightStyle: "fade-color",
  },
  content: {
    title: "73% increase in organic traffic in April",
  },
  dataLabels: {
    showDataLabels: false,
    dataLabelFormat: "absolute",
  },
};
