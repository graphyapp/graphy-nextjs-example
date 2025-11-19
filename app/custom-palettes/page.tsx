"use client";

import { SPEND_BREAKDOWN } from "@/src/datasets/spend-breakdown";
import { ReturnHome } from "@/src/ReturnHome";
import {
  buildChartTitleDocument,
  CustomPaletteCatalog,
  Graph,
  GraphConfig,
  GraphProvider,
  graphyLightTheme,
} from "@graphysdk/core";
import { ColorPanel, EditorProvider } from "@graphysdk/editor";
import { useEffect, useState } from "react";

const customPalettes: CustomPaletteCatalog = [
  {
    id: "palette-1",
    name: "Palette 1",
    colors: [
      { id: "c1", hex: "#003f5c", name: "Color name 1" },
      { id: "c2", hex: "#58508d", name: "Color name 2" },
      { id: "c3", hex: "#bc5090", name: "Color name 3" },
      { id: "c4", hex: "#ff6361", name: "Color name 4" },
      { id: "c5", hex: "#ffa600", name: "Color name 5" },
    ],
  },
  {
    id: "palette-2",
    name: "Palette 2",
    colors: [
      { id: "c1", hex: "#004c6d", name: "Color name 1" },
      { id: "c2", hex: "#346888", name: "Color name 2" },
      { id: "c3", hex: "#5886a5", name: "Color name 3" },
      { id: "c4", hex: "#7aa6c2", name: "Color name 4" },
      { id: "c5", hex: "#9dc6e0", name: "Color name 5" },
    ],
  },
  {
    id: "palette-3",
    name: "Palette 3",
    colors: [
      { id: "c1", hex: "#00876c", name: "Color name 1" },
      { id: "c2", hex: "#89bd73", name: "Color name 2" },
      { id: "c3", hex: "#ffeb8a", name: "Color name 3" },
      { id: "c4", hex: "#f59855", name: "Color name 4" },
      { id: "c5", hex: "#d43d51", name: "Color name 5" },
    ],
  },
];

export default function CustomPalettes() {
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
      <GraphProvider
        customPalettes={customPalettes}
        config={config}
        onChange={(update) => {
          setConfig((currentValues) => ({ ...currentValues, ...update }));
        }}
        theme={graphyLightTheme}
      >
        <div className="flex p-5 max-w-6xl mx-auto">
          <div className="flex-1">
            <Graph
              isEditable
              sizing={{ mode: "fixed", width: 600, height: 400 }}
            />
          </div>
          <div className="flex-none w-80">
            <EditorProvider>
              <ColorPanel />
            </EditorProvider>
          </div>
        </div>
      </GraphProvider>
    </>
  );
}

const initialConfig: GraphConfig = {
  data: SPEND_BREAKDOWN.data,
  datasetConfig: SPEND_BREAKDOWN.config,
  visualisationConfig: {
    type: "pie",
    legendPosition: "top",
  },
  customAppearanceConfig: {
    theme: "customPalette",
    palette: "palette-1",
    borderStyle: "none",
    borderStyleName: null,
    backgroundStyle: "transparent",
  },
  titleDocument: buildChartTitleDocument({
    title: "Headcount represents 59% of spend",
  }),
};
