"use client";

import React, { useEffect, useState } from "react";
import {
  Graph,
  GraphProvider,
  ThemeProvider,
  IntlProvider,
  DatasetConfig,
  DataType,
} from "@graphysdk/core";

const DATA = {
  rows: [
    { month: "2024-01", "Product A": "15000", "Product B": "9000" },
    { month: "2024-02", "Product A": "15800", "Product B": "9800" },
    { month: "2024-03", "Product A": "16600", "Product B": "10600" },
    { month: "2024-04", "Product A": "17400", "Product B": "11400" },
    { month: "2024-05", "Product A": "18200", "Product B": "12200" },
    { month: "2024-06", "Product A": "19000", "Product B": "13000" },
  ],
};

const DATASET_CONFIG: DatasetConfig = {
  properties: [
    { key: "month", label: "month", dataType: { type: DataType.Text } },
    { key: "Product A", label: "Product A", dataType: { type: DataType.Text } },
    { key: "Product B", label: "Product B", dataType: { type: DataType.Text } },
  ],
  isDataHorizontal: false,
} as const;

const VISUALISATION_CONFIG = {
  type: "bar",
  barPosition: "grouped",
  shouldStartFromZero: true,
  hasGridLines: true,
  showDataLabels: true,
  legendPosition: "top",
  flipAxes: false,
  topAxisLabel: "Product Category",
  bottomAxisLabel: "Sales Revenue",
  leftAxisLabel: "Profit",
  rightAxisLabel: "Profit",
  customLineLabel: "Profit",
  xGoalValue: null,
  yGoalValue: null,
  curveType: "linear",
  presetPowerUp: null,
  customPowerUp: null,
  averageLineSeriesKey: null,
  headlineMetric: null,
  customGoalLineLabel: null,
  customLineValue: null,
} as const;

export default function Home() {
  // Note: Currently graphySDK is not working with SSR.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  const stickerPaths = {
    "thumbs-up": "/stickers/thumbs-up.svg",
    "thumbs-down": "/stickers/thumbs-down.svg",
    "clapping-hands": "/stickers/clapping-hands.svg",
    "grinning-face": "/stickers/grinning-face.svg",
    rocket: "/stickers/rocket.svg",
  };

  return (
    <div className="flex items-center justify-center h-dvh px-16">
        <IntlProvider>
          <ThemeProvider>
            <GraphProvider
              data={DATA}
              datasetConfig={DATASET_CONFIG}
              visualisationConfig={VISUALISATION_CONFIG}
              title="My Visualisation"
            >
              <Graph
                renderTitle={({ title }) => (
                  <h2 className="text-2xl font-bold">{title}</h2>
                )}
                stickerPaths={stickerPaths}
              />
            </GraphProvider>
          </ThemeProvider>
        </IntlProvider>
    </div>
  );
}
