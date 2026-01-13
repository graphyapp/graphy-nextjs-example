"use client";

import { ReturnHome } from "@/src/ReturnHome";
import {
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
      <GraphProvider
        config={config}
        theme={graphyLightTheme}
        fontList={[
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
        ]}
      >
        <div className="flex p-5 max-w-6xl mx-auto items-center justify-center">
          <Graph isEditable={false} />
        </div>
      </GraphProvider>
    </>
  );
}

const config: GraphConfig = {
  type: "pie",
  data: {
    columns: [
      {
        key: "c1",
        label: "Category",
      },
      {
        key: "c2",
        label: "Value",
      },
    ],
    rows: [
      {
        c1: "Headcount",
        c2: "$38,4560",
      },
      {
        c1: "Legal",
        c2: "$4,5780",
      },
      {
        c1: "Marketing",
        c2: "$9,4560",
      },
      {
        c1: "Office",
        c2: "$12,9850",
      },
    ],
  },
  legend: {
    position: "right",
  },
  appearance: {
    palette: {
      id: "preset:graphy:graphy",
      name: "Graphy",
      colors: [
        {
          id: "0",
          hex: "#B399FD",
          name: "Color 1",
        },
        {
          id: "1",
          hex: "#FC8497",
          name: "Color 2",
        },
        {
          id: "2",
          hex: "#FBBC30",
          name: "Color 3",
        },
        {
          id: "3",
          hex: "#279EFF",
          name: "Color 4",
        },
        {
          id: "4",
          hex: "#E83562",
          name: "Color 5",
        },
        {
          id: "5",
          hex: "#40F8FF",
          name: "Color 6",
        },
        {
          id: "6",
          hex: "#F38650",
          name: "Color 7",
        },
        {
          id: "7",
          hex: "#C82184",
          name: "Color 8",
        },
        {
          id: "8",
          hex: "#31FCB4",
          name: "Color 9",
        },
        {
          id: "9",
          hex: "#6D48D2",
          name: "Color 10",
        },
      ],
    },
    textStyle: {
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
  content: {
    title: "Custom font families and colors",
  },
};
