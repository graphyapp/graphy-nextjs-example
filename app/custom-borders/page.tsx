"use client";

import { SPEND_BREAKDOWN } from "@/src/datasets/spend-breakdown";
import { ReturnHome } from "@/src/ReturnHome";
import {
  buildChartTitleDocument,
  Graph,
  GraphConfig,
  GraphProvider,
  graphyLightTheme,
} from "@graphysdk/core";
import { useEffect, useState } from "react";

export default function CustomFontsExample() {
  // Note: Currently graphySDK is not working with SSR.
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ReturnHome />
      <ul
        className={
          "w-full flex flex-col gap-8 items-center justify-center mb-10"
        }
      >
        {configs.map((config, index) => (
          <li key={index}>
            <GraphProvider config={config} theme={graphyLightTheme}>
              <Graph isEditable={false} />
            </GraphProvider>
          </li>
        ))}
      </ul>
    </>
  );
}

const noneConfig: GraphConfig = {
  data: SPEND_BREAKDOWN.data,
  datasetConfig: SPEND_BREAKDOWN.config,
  visualisationConfig: {
    type: "bar",
  },
  customAppearanceConfig: {
    theme: "graphy",
    palette: "graphy",
    borderStroke: 0,
    backgroundStyle: "transparent",
    textScale: "1.4",
  },
  titleDocument: buildChartTitleDocument({
    title: "No border",
  }),
};

const simpleConfig: GraphConfig = {
  data: SPEND_BREAKDOWN.data,
  datasetConfig: SPEND_BREAKDOWN.config,
  visualisationConfig: {
    type: "bar",
  },
  customAppearanceConfig: {
    theme: "graphy",
    palette: "graphy",
    borderStroke: 1,
    borderType: "grey",
    backgroundStyle: "transparent",
    textScale: "1.4",
  },
  titleDocument: buildChartTitleDocument({
    title: "Simple border",
  }),
};

const customConfig: GraphConfig = {
  data: SPEND_BREAKDOWN.data,
  datasetConfig: SPEND_BREAKDOWN.config,
  visualisationConfig: {
    type: "bar",
  },
  customAppearanceConfig: {
    theme: "graphy",
    palette: "graphy",
    borderStroke: 12,
    borderType: "custom",
    borderColor: "#F0A2C1",
    backgroundStyle: "transparent",
    textScale: "1.4",
  },
  titleDocument: buildChartTitleDocument({
    title: "Custom border",
  }),
};

const solidConfig: GraphConfig = {
  data: SPEND_BREAKDOWN.data,
  datasetConfig: SPEND_BREAKDOWN.config,
  visualisationConfig: {
    type: "bar",
  },
  customAppearanceConfig: {
    theme: "graphy",
    palette: "graphy",
    borderStroke: 12,
    borderType: "solid",
    borderColor: "#F0A2C1",
    backgroundStyle: "transparent",
    textScale: "1.4",
  },
  titleDocument: buildChartTitleDocument({
    title: "Solid border",
  }),
};

const gradientConfig: GraphConfig = {
  data: SPEND_BREAKDOWN.data,
  datasetConfig: SPEND_BREAKDOWN.config,
  visualisationConfig: {
    type: "bar",
  },
  customAppearanceConfig: {
    theme: "graphy",
    palette: "graphy",
    borderStroke: 12,
    borderType: "gradient",
    borderColor: "#F0A2C1",
    backgroundStyle: "transparent",
    textScale: "1.4",
  },
  titleDocument: buildChartTitleDocument({
    title: "Gradient border",
  }),
};

const presetConfig: GraphConfig = {
  data: SPEND_BREAKDOWN.data,
  datasetConfig: SPEND_BREAKDOWN.config,
  visualisationConfig: {
    type: "bar",
  },
  customAppearanceConfig: {
    theme: "graphy",
    palette: "graphy",
    borderStroke: 12,
    borderType: "preset",
    borderColor: "ice_cream",
    backgroundStyle: "transparent",
    textScale: "1.4",
  },
  titleDocument: buildChartTitleDocument({
    title: "Preset border",
  }),
};

const configs: GraphConfig[] = [
  noneConfig,
  simpleConfig,
  customConfig,
  solidConfig,
  gradientConfig,
  presetConfig,
];
