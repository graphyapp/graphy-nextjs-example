"use client";

import { Graph, GraphProvider, graphyLightTheme } from "@graphysdk/core";
import type { GraphConfig } from "@graphysdk/core";
import { useEffect, useState } from "react";
import { ReturnHome } from "@/src/ReturnHome";

export default function GraphModes() {
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
      <div className="flex flex-col items-center px-16 gap-12 mx-auto my-8 max-w-6xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Graph modes</h1>
          <p className="text-gray-600 max-w-2xl">
            The <code className="bg-gray-100 px-1 rounded">mode</code> prop
            controls the interactivity and behavior of the graph. Try
            interacting with each chart to see the differences.
          </p>
        </div>

        <section className="w-full">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                mode="readonly"
              </code>
            </h2>
            <p className="text-gray-600 mt-1">
              Interactive viewing with tooltips and hover effects. This is the
              default mode.
            </p>
            <ul className="text-sm text-gray-500 mt-2 list-disc list-inside">
              <li>Tooltips: enabled</li>
              <li>Hover effects: enabled</li>
              <li>Animations: enabled</li>
              <li>Editing: disabled</li>
              <li>Legend interaction: enabled</li>
            </ul>
          </div>
          <div className="h-[450px] border border-gray-200 rounded-lg p-4 bg-white">
            <GraphProvider theme={graphyLightTheme} config={sampleConfig}>
              <Graph mode="readonly" sizing={{ mode: "responsive" }} />
            </GraphProvider>
          </div>
        </section>

        <section className="w-full">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              <code className="bg-green-100 text-green-800 px-2 py-1 rounded">
                mode="editor"
              </code>
            </h2>
            <p className="text-gray-600 mt-1">
              Full editing capabilities. Click on elements to edit them.
            </p>
            <ul className="text-sm text-gray-500 mt-2 list-disc list-inside">
              <li>Tooltips: enabled</li>
              <li>Hover effects: enabled</li>
              <li>Animations: enabled</li>
              <li>Editing: enabled</li>
              <li>Legend interaction: enabled</li>
            </ul>
          </div>
          <div className="h-[450px] border border-gray-200 rounded-lg p-4 bg-white">
            <EditorModeChart />
          </div>
        </section>

        <section className="w-full">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                mode="static"
              </code>
            </h2>
            <p className="text-gray-600 mt-1">
              Optimized for image export or thumbnails. No interactivity.
            </p>
            <ul className="text-sm text-gray-500 mt-2 list-disc list-inside">
              <li>Tooltips: disabled</li>
              <li>Hover effects: disabled</li>
              <li>Animations: disabled</li>
              <li>Editing: disabled</li>
              <li>Legend interaction: disabled</li>
            </ul>
          </div>
          <div className="h-[450px] border border-gray-200 rounded-lg p-4 bg-white">
            <GraphProvider theme={graphyLightTheme} config={sampleConfig}>
              <Graph mode="static" sizing={{ mode: "responsive" }} />
            </GraphProvider>
          </div>
        </section>
      </div>
    </>
  );
}

function EditorModeChart() {
  const [config, setConfig] = useState<GraphConfig>(sampleConfig);

  return (
    <GraphProvider
      theme={graphyLightTheme}
      config={config}
      onChange={(update) => {
        setConfig((currentConfig) => ({ ...currentConfig, ...update }));
      }}
    >
      <Graph mode="editor" sizing={{ mode: "responsive" }} />
    </GraphProvider>
  );
}

const sampleConfig: GraphConfig = {
  type: "column",
  data: {
    columns: [
      { key: "quarter", label: "Quarter" },
      { key: "revenue", label: "Revenue" },
      { key: "profit", label: "Profit" },
    ],
    rows: [
      { quarter: "Q1", revenue: 45000, profit: 12000 },
      { quarter: "Q2", revenue: 52000, profit: 15000 },
      { quarter: "Q3", revenue: 61000, profit: 18500 },
      { quarter: "Q4", revenue: 73000, profit: 24000 },
    ],
  },
  axes: {
    y: {
      label: "Amount ($)",
    },
  },
  appearance: {
    seriesStyles: {
      series1: {
        customColor: "#3B82F6",
      },
      series2: {
        customColor: "#10B981",
      },
    },
  },
  content: {
    title: "Quarterly Performance 2025",
  },
};
