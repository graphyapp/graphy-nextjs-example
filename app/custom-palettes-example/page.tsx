"use client";

import { SPEND_BREAKDOWN } from "@/src/datasets/spend-breakdown";
import { ReturnHome } from "@/src/ReturnHome";
import {
  buildChartTitleDocument,
  CustomPaletteCatalog,
  Graph,
  GraphProvider,
} from "@graphysdk/core";
import { useEffect, useState } from "react";

const customPalettes: CustomPaletteCatalog = [
  {
    id: "my-custom-palette",
    name: "My Custom Palette",
    colors: [
      { id: "c1", hex: "#aae4fe", name: "Color name 1" },
      { id: "c2", hex: "#aac5fe", name: "Color name 2" },
      { id: "c3", hex: "#aeaafe", name: "Color name 3" },
      { id: "c4", hex: "#aafeda", name: "Color name 4" },
      { id: "c5", hex: "#aafef9", name: "Color name 5" },
    ],
  },
];

export default function CustomPalettesExample() {
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
      <GraphProvider
        customPalettes={customPalettes}
        config={{
          data: SPEND_BREAKDOWN.data,
          datasetConfig: SPEND_BREAKDOWN.config,
          visualisationConfig: {
            type: "pie",
            pieAppearance: "donut",
            legendPosition: "right",
          },
          customAppearanceConfig: {
            theme: "customPalette",
            palette: "my-custom-palette",
            background: "LIGHT",
            borderStyle: "none",
            borderStyleName: null,
          },
          titleDocument: buildChartTitleDocument({
            title: "Headcount represents 59% of spend",
          }),
        }}
      >
        <Graph
          isEditable={false}
          sizing={{ mode: "fixed", width: 600, height: 400 }}
        />
      </GraphProvider>
    </>
  );
}
