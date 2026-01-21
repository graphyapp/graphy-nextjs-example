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
