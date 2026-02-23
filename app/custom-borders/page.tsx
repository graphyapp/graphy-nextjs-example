"use client";

import { ReturnHome } from "@/src/ReturnHome";
import {
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
              <Graph mode="readonly" />
            </GraphProvider>
          </li>
        ))}
      </ul>
    </>
  );
}

const noneConfig: GraphConfig = {
  type: "bar",
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
  appearance: {
    border: {
      width: 0,
    },
    textScale: 1.4,
  },
  content: {
    title: "No border",
  },
};

const simpleConfig: GraphConfig = {
  type: "bar",
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
  appearance: {
    border: {
      style: "grey",
      width: 1,
    },
    textScale: 1.4,
  },
  content: {
    title: "Simple border",
  },
};

const customConfig: GraphConfig = {
  type: "bar",
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
  appearance: {
    border: {
      style: "custom",
      width: 12,
      color: "#F0A2C1",
    },
    textScale: 1.4,
  },
  content: {
    title: "Custom border",
  },
};

const solidConfig: GraphConfig = {
  type: "bar",
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
  appearance: {
    border: {
      style: "tinted",
      width: 12,
      color: "#F0A2C1",
    },
    textScale: 1.4,
  },
  content: {
    title: "Solid border",
  },
};

const gradientConfig: GraphConfig = {
  type: "bar",
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
  appearance: {
    border: {
      style: "gradient",
      width: 12,
      color: "#F0A2C1",
    },
    textScale: 1.4,
  },
  content: {
    title: "Gradient border",
  },
};

const presetConfig: GraphConfig = {
  type: "bar",
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
  appearance: {
    border: {
      style: "preset",
      width: 12,
      color: "ice_cream",
    },
    textScale: 1.4,
  },
  content: {
    title: "Preset border",
  },
};

const configs: GraphConfig[] = [
  noneConfig,
  simpleConfig,
  customConfig,
  solidConfig,
  gradientConfig,
  presetConfig,
];
