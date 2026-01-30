"use client";

import { ReturnHome } from "@/src/ReturnHome";
import { Graph, GraphConfig, GraphProvider } from "@graphysdk/core";
import { useEffect, useState } from "react";

export default function WaterfallColors() {
  // Note: Currently graphySDK is not working with SSR.
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [type, setType] = useState<GraphConfig["type"]>("waterfall");

  const palette = ["#6366f1", "#06b6d4", "#f43f5e", "#f59e0b", "#10b981"];

  const config = {
    type,
    data: {
      columns: [
        { key: "category", label: "Category" },
        { key: "amount", label: "Amount ($M)" },
      ],
      rows: [
        { category: "EBITDA", amount: 142.5 },
        { category: "Depreciation", amount: -18.3 },
        { category: "Amortization", amount: -7.2 },
        { category: "Interest Expense", amount: -12.8 },
        { category: "Other Income", amount: 4.6 },
        { category: "Tax Provision", amount: -27.2 },
        { category: "Net Income", amount: 81.6 },
      ],
    },
    content: {
      title: "FY2025 EBITDA to Net Income Bridge",
      subtitle: "All figures in millions USD",
    },
    appearance: {
      border: { width: 1 },
      seriesStyles: {
        // Series colors for non-waterfall graphs
        series1: { customColor: palette[0] },
        series2: { customColor: palette[1] },
        series3: { customColor: palette[2] },
        series4: { customColor: palette[3] },
        series5: { customColor: palette[4] },

        // Waterfall-specific colors
        waterfallStart: { customColor: palette[0] },
        waterfallPositive: { customColor: palette[1] },
        waterfallNegative: { customColor: palette[2] },
        waterfallTotal: { customColor: palette[0] },
      },
    },
  };

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ReturnHome />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Waterfall colors</h1>

        <div className="mb-4 flex gap-1">
          <button
            onClick={() => setType("waterfall")}
            className={`px-4 py-2 rounded-l-lg border font-medium transition-colors ${
              type === "waterfall"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Waterfall
          </button>
          <button
            onClick={() => setType("column")}
            className={`px-4 py-2 rounded-r-lg border font-medium transition-colors ${
              type === "column"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Column
          </button>
        </div>

        <GraphProvider config={config}>
          <Graph
            mode="readonly"
            sizing={{ mode: "fixed", width: 900, height: 500 }}
          />
        </GraphProvider>
      </div>
    </>
  );
}
