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

export default function CustomFonts() {
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
      <link
        href="https://fonts.googleapis.com/css2?family=Nova+Square&display=swap"
        rel="stylesheet"
      />
      <ReturnHome />
      <GraphProvider config={config} theme={graphyLightTheme}>
        <div className="flex p-5 max-w-6xl mx-auto items-center justify-center">
          <Graph isEditable={false} />
        </div>
      </GraphProvider>
    </>
  );
}

const config: GraphConfig = {
  data: SPEND_BREAKDOWN.data,
  datasetConfig: SPEND_BREAKDOWN.config,
  visualisationConfig: {
    type: "pie",
    legendPosition: "right",
  },
  customAppearanceConfig: {
    theme: "graphy",
    palette: "graphy",
    borderStyle: "none",
    borderStyleName: null,
    backgroundStyle: "transparent",
    textScale: "1",
    font: {
      heading: {
        fontId: "primary",
        color: "#1f57d3",
      },
      body: {
        fontId: "secondary",
        color: "#3a94ed",
      },
    },
  },
  titleDocument: buildChartTitleDocument({
    title: "Custom font families and colors",
  }),
  fontList: [
    {
      id: "primary",
      label: "Heading",
      fontFamily: "'Nova Square', 'Georgia', 'Times New Roman', serif", // LOADED FROM GOOGLE FONTS
    },
    {
      id: "secondary",
      label: "Body",
      fontFamily:
        "'Comic Sans MS', 'Comic Sans', 'Chalkboard SE', 'Comic Neue', cursive", // SYSTEM FONTS
    },
  ],
};
