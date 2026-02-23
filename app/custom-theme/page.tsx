"use client";

import { ReturnHome } from "@/src/ReturnHome";
import {
  Graph,
  GraphConfig,
  GraphProvider,
  graphyLightTheme,
} from "@graphysdk/core";
import type { GraphTheme } from "@graphysdk/core";
import { useEffect, useState } from "react";

const editorialTheme: GraphTheme = {
  id: "editorial-warm",
  colorScheme: "light",
  canvasColors: [
    { id: "terracotta", label: "Terracotta", value: "#C2704E" },
    { id: "sage", label: "Sage", value: "#7D8C6E" },
    { id: "ochre", label: "Ochre", value: "#D4A84B" },
    { id: "clay", label: "Clay", value: "#A0776E" },
    { id: "ink", label: "Ink", value: "#2C2418" },
    { id: "parchment", label: "Parchment", value: "#F5F0E8" },
  ],
  defaultAnnotationColorIds: {
    arrowStroke: "terracotta",
    shapeFill: "sage",
  },
  values: {
    ...graphyLightTheme.values,

    white: "#FFFDF9",
    black: "#2C2418",
    transparent: "transparent",
    grey100: "#F5F0E8",
    grey95: "#EBE5DA",
    grey90: "#DDD5C7",
    grey85: "#C4BAA8",
    grey80: "#A89D8B",
    grey75: "#8C826F",
    grey70: "#706756",
    grey60: "#564E3E",
    grey50: "#3E3728",
    grey0: "#1A1610",
    greyGradient80: "linear-gradient(180deg, #EBE5DA 0%, #DDD5C7 100%)",
    green60: "#7D8C6E",
    green50: "#5E7050",
    red60: "#C2704E",
    red50: "#A85A3A",
    amber70: "#E8C96A",
    amber50: "#D4A84B",
    amber40: "#C49535",
    amber30: "#A67D2A",
    blue80: "#8AAEB8",
    blue60: "#5E8E9A",
    purple50: "#9A7EAD",
    purple30: "#7B5E92",

    brand: "#C2704E",
    success: "#7D8C6E",
    warning: "#D4A84B",
    alert: "#B5533E",
    textPrimary: "#2C2418",
    textSecondary: "#706756",
    textDisabled: "#A89D8B",
    sunkenBackground: "#EBE5DA",
    defaultBackground: "#F5F0E8",
    raisedBackground: "#FFFDF9",
    overlayBackground: "#FFFDF9ee",
    overlayBorderGradient:
      "linear-gradient(135deg, #DDD5C7 0%, #EBE5DA 100%)",
    border100: "#DDD5C7",
    border10: "#DDD5C720",

    graphBackground: "#FFFDF9",
    gridLineColor: "#EBE5DA",
    hoverGuideLineColor: "#C4BAA8",
    originLineColor: "#DDD5C7",
    targetLineColor: "#C2704E",
    targetLineMarkerColor: "#C2704E",

    legendBackground: "transparent",
    legendBorderColor: "transparent",
    legendTextColor: "#564E3E",
    dimmedSeriesLabelTextColor: "#A89D8B",
    dimmedSeriesLabelLineColor: "#DDD5C7",

    trendPositiveColor: "#5E7050",
    trendNegativeColor: "#B5533E",

    tooltipBackground: "#FFFDF9",
    tooltipBorderColor: "#DDD5C7",
    tooltipHeadingTextColor: "#2C2418",
    tooltipLabelTextColor: "#706756",
    tooltipValueTextColor: "#3E3728",

    defaultArrowAnnotationColor: "#C2704E",
    annotationFrameBorderColor: "#DDD5C7",
    annotationMenuTriggerIconColor: "#8C826F",

    graphTypeIconAccentColor: "#C2704E",
    heatmapEmptyTileBackground: "#EBE5DA",
    stackedBarHoverBorderColor: "#FFFDF9",

    fontFamilyDefault:
      "'Georgia', 'Palatino Linotype', 'Book Antiqua', 'Palatino', serif",
    fontFamilyHeading:
      "'Georgia', 'Palatino Linotype', 'Book Antiqua', 'Palatino', serif",
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    fontXxs: "0.625rem",
    fontXs: "0.6875rem",
    fontSm: "0.75rem",
    fontMd: "0.875rem",
    fontLg: "1rem",
    fontXl: "1.25rem",
  },
};

const modernTheme: GraphTheme = {
  id: "modern-clean",
  colorScheme: "light",
  canvasColors: [
    { id: "indigo", label: "Indigo", value: "#6366F1" },
    { id: "cyan", label: "Cyan", value: "#06B6D4" },
    { id: "fuchsia", label: "Fuchsia", value: "#D946EF" },
    { id: "emerald", label: "Emerald", value: "#10B981" },
    { id: "slate", label: "Slate", value: "#475569" },
    { id: "snow", label: "Snow", value: "#F8FAFC" },
  ],
  defaultAnnotationColorIds: {
    arrowStroke: "indigo",
    shapeFill: "cyan",
  },
  values: {
    ...graphyLightTheme.values,

    white: "#FFFFFF",
    black: "#0F172A",
    transparent: "transparent",
    grey100: "#F8FAFC",
    grey95: "#F1F5F9",
    grey90: "#E2E8F0",
    grey85: "#CBD5E1",
    grey80: "#94A3B8",
    grey75: "#64748B",
    grey70: "#475569",
    grey60: "#334155",
    grey50: "#1E293B",
    grey0: "#020617",
    greyGradient80: "linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%)",
    green60: "#34D399",
    green50: "#10B981",
    red60: "#FB7185",
    red50: "#F43F5E",
    amber70: "#FCD34D",
    amber50: "#FBBF24",
    amber40: "#F59E0B",
    amber30: "#D97706",
    blue80: "#93C5FD",
    blue60: "#6366F1",
    purple50: "#A78BFA",
    purple30: "#7C3AED",

    brand: "#6366F1",
    success: "#10B981",
    warning: "#F59E0B",
    alert: "#F43F5E",
    textPrimary: "#0F172A",
    textSecondary: "#64748B",
    textDisabled: "#CBD5E1",
    sunkenBackground: "#F1F5F9",
    defaultBackground: "#FFFFFF",
    raisedBackground: "#FFFFFF",
    overlayBackground: "#FFFFFFee",
    overlayBorderGradient:
      "linear-gradient(135deg, #E2E8F0 0%, #F1F5F9 100%)",
    border100: "#E2E8F0",
    border10: "#E2E8F015",

    graphBackground: "#FFFFFF",
    gridLineColor: "#F1F5F9",
    hoverGuideLineColor: "#CBD5E1",
    originLineColor: "#E2E8F0",
    targetLineColor: "#6366F1",
    targetLineMarkerColor: "#6366F1",

    legendBackground: "transparent",
    legendBorderColor: "transparent",
    legendTextColor: "#475569",
    dimmedSeriesLabelTextColor: "#CBD5E1",
    dimmedSeriesLabelLineColor: "#E2E8F0",

    trendPositiveColor: "#10B981",
    trendNegativeColor: "#F43F5E",

    tooltipBackground: "#FFFFFF",
    tooltipBorderColor: "#E2E8F0",
    tooltipHeadingTextColor: "#0F172A",
    tooltipLabelTextColor: "#64748B",
    tooltipValueTextColor: "#1E293B",

    defaultArrowAnnotationColor: "#6366F1",
    annotationFrameBorderColor: "#E2E8F0",
    annotationMenuTriggerIconColor: "#94A3B8",

    graphTypeIconAccentColor: "#6366F1",
    heatmapEmptyTileBackground: "#F1F5F9",
    stackedBarHoverBorderColor: "#FFFFFF",

    fontFamilyDefault:
      "'SF Pro Display', 'Inter', -apple-system, 'Helvetica Neue', sans-serif",
    fontFamilyHeading:
      "'SF Pro Display', 'Inter', -apple-system, 'Helvetica Neue', sans-serif",
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    fontXxs: "0.625rem",
    fontXs: "0.6875rem",
    fontSm: "0.75rem",
    fontMd: "0.875rem",
    fontLg: "1rem",
    fontXl: "1.25rem",
  },
};

const midnightTheme: GraphTheme = {
  id: "midnight-neon",
  colorScheme: "dark",
  canvasColors: [
    { id: "lime", label: "Lime", value: "#84CC16" },
    { id: "gold", label: "Gold", value: "#EAB308" },
    { id: "coral", label: "Coral", value: "#F97316" },
    { id: "electric", label: "Electric", value: "#3B82F6" },
    { id: "lavender", label: "Lavender", value: "#C084FC" },
    { id: "ice", label: "Ice", value: "#E0F2FE" },
  ],
  defaultAnnotationColorIds: {
    arrowStroke: "lime",
    shapeFill: "electric",
  },
  values: {
    ...graphyLightTheme.values,

    white: "#E8ECF4",
    black: "#060810",
    transparent: "transparent",
    grey100: "#E8ECF4",
    grey95: "#C5CCD9",
    grey90: "#9AA4B8",
    grey85: "#7C8DB5",
    grey80: "#5A6A8A",
    grey75: "#44536E",
    grey70: "#2E3B54",
    grey60: "#1E2A42",
    grey50: "#131B2E",
    grey0: "#060810",
    greyGradient80: "linear-gradient(180deg, #1E2A42 0%, #131B2E 100%)",
    green60: "#A3E635",
    green50: "#84CC16",
    red60: "#FB923C",
    red50: "#F97316",
    amber70: "#FDE047",
    amber50: "#EAB308",
    amber40: "#CA8A04",
    amber30: "#A16207",
    blue80: "#93C5FD",
    blue60: "#3B82F6",
    purple50: "#C084FC",
    purple30: "#9333EA",

    brand: "#84CC16",
    success: "#84CC16",
    warning: "#EAB308",
    alert: "#F97316",
    textPrimary: "#E8ECF4",
    textSecondary: "#7C8DB5",
    textDisabled: "#44536E",
    sunkenBackground: "#060810",
    defaultBackground: "#0C1021",
    raisedBackground: "#131B2E",
    overlayBackground: "#131B2Eee",
    overlayBorderGradient:
      "linear-gradient(135deg, #2E3B54 0%, #1E2A42 100%)",
    border100: "#1E2A42",
    border10: "#1E2A4220",

    graphBackground: "#0C1021",
    gridLineColor: "#151D30",
    hoverGuideLineColor: "#2E3B54",
    originLineColor: "#1E2A42",
    targetLineColor: "#84CC16",
    targetLineMarkerColor: "#84CC16",

    legendBackground: "transparent",
    legendBorderColor: "transparent",
    legendTextColor: "#9AA4B8",
    dimmedSeriesLabelTextColor: "#44536E",
    dimmedSeriesLabelLineColor: "#1E2A42",

    trendPositiveColor: "#84CC16",
    trendNegativeColor: "#F97316",

    tooltipBackground: "#131B2E",
    tooltipBorderColor: "#1E2A42",
    tooltipHeadingTextColor: "#E8ECF4",
    tooltipLabelTextColor: "#7C8DB5",
    tooltipValueTextColor: "#C5CCD9",

    defaultArrowAnnotationColor: "#84CC16",
    annotationFrameBorderColor: "#1E2A42",
    annotationMenuTriggerIconColor: "#5A6A8A",

    graphTypeIconAccentColor: "#84CC16",
    heatmapEmptyTileBackground: "#131B2E",
    stackedBarHoverBorderColor: "#0C1021",

    fontFamilyDefault:
      "'DM Sans', 'Inter', -apple-system, 'Helvetica Neue', sans-serif",
    fontFamilyHeading:
      "'DM Sans', 'Inter', -apple-system, 'Helvetica Neue', sans-serif",
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    fontXxs: "0.625rem",
    fontXs: "0.6875rem",
    fontSm: "0.75rem",
    fontMd: "0.875rem",
    fontLg: "1rem",
    fontXl: "1.25rem",
  },
};

export default function CustomTheme() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTheme, setActiveTheme] = useState<
    "editorial" | "modern" | "midnight"
  >("editorial");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  const themes = {
    editorial: editorialTheme,
    modern: modernTheme,
    midnight: midnightTheme,
  } as const;
  const theme = themes[activeTheme];

  return (
    <>
      <ReturnHome />
      <div className="flex flex-col items-center gap-6 p-5 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Custom Graph Theme</h1>
        <p className="text-gray-500 text-sm max-w-lg text-center">
          Three fully custom <code>GraphTheme</code> objects passed to the{" "}
          <code>theme</code> prop. Toggle between them to compare.
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setActiveTheme("editorial")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTheme === "editorial"
                ? "text-white ring-1 ring-orange-400/40"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            style={
              activeTheme === "editorial"
                ? { backgroundColor: "#C2704E" }
                : undefined
            }
          >
            Editorial Warm
          </button>
          <button
            onClick={() => setActiveTheme("modern")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTheme === "modern"
                ? "text-white ring-1 ring-indigo-400/40"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            style={
              activeTheme === "modern"
                ? { backgroundColor: "#6366F1" }
                : undefined
            }
          >
            Modern Clean
          </button>
          <button
            onClick={() => setActiveTheme("midnight")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTheme === "midnight"
                ? "text-white ring-1 ring-lime-400/40"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            style={
              activeTheme === "midnight"
                ? { backgroundColor: "#0C1021", color: "#84CC16" }
                : undefined
            }
          >
            Midnight Neon
          </button>
        </div>

        {charts.map((variants, i) => (
          <div
            key={i}
            className="w-full rounded-xl overflow-hidden transition-colors"
            style={{
              backgroundColor: {
                editorial: "#F5F0E8",
                modern: "#F8FAFC",
                midnight: "#0C1021",
              }[activeTheme],
              padding: 24,
            }}
          >
            <GraphProvider config={variants[activeTheme]} theme={theme}>
              <Graph
                mode="readonly"
                sizing={{ mode: "fixed", width: 880, height: 420 }}
              />
            </GraphProvider>
          </div>
        ))}
      </div>
    </>
  );
}

const barData: GraphConfig["data"] = {
  columns: [
    { key: "c1", label: "Region" },
    { key: "c2", label: "2023" },
    { key: "c3", label: "2024" },
    { key: "c4", label: "2025" },
  ],
  rows: [
    { c1: "Europe", c2: "84000", c3: "96000", c4: "112000" },
    { c1: "North America", c2: "72000", c3: "81000", c4: "93000" },
    { c1: "Asia Pacific", c2: "56000", c3: "68000", c4: "85000" },
    { c1: "Latin America", c2: "31000", c3: "42000", c4: "58000" },
  ],
};

const areaData: GraphConfig["data"] = {
  columns: [
    { key: "c1", label: "Month" },
    { key: "c2", label: "Subscriptions" },
    { key: "c3", label: "One-time" },
  ],
  rows: [
    { c1: "2025-01-01", c2: "18200", c3: "6400" },
    { c1: "2025-02-01", c2: "19800", c3: "7100" },
    { c1: "2025-03-01", c2: "22100", c3: "8600" },
    { c1: "2025-04-01", c2: "24600", c3: "9200" },
    { c1: "2025-05-01", c2: "26400", c3: "10800" },
    { c1: "2025-06-01", c2: "28900", c3: "11400" },
    { c1: "2025-07-01", c2: "31200", c3: "12600" },
    { c1: "2025-08-01", c2: "33800", c3: "13200" },
    { c1: "2025-09-01", c2: "35400", c3: "14800" },
    { c1: "2025-10-01", c2: "38100", c3: "15200" },
    { c1: "2025-11-01", c2: "40600", c3: "16800" },
    { c1: "2025-12-01", c2: "43200", c3: "17400" },
  ],
};

const pieData: GraphConfig["data"] = {
  columns: [
    { key: "c1", label: "Category" },
    { key: "c2", label: "Amount" },
  ],
  rows: [
    { c1: "Product", c2: "42" },
    { c1: "Engineering", c2: "28" },
    { c1: "Marketing", c2: "16" },
    { c1: "Operations", c2: "9" },
    { c1: "Design", c2: "5" },
  ],
};

type ThemeId = "editorial" | "modern" | "midnight";

const charts: Record<ThemeId, GraphConfig>[] = [
  {
    editorial: {
      type: "bar",
      data: barData,
      legend: { position: "top" },
      content: { title: "Revenue by Region" },
      axes: { y: { label: "Revenue ($)" }, showGridLines: true },
      appearance: {
        seriesStyles: {
          series1: { customColor: "#C2704E" },
          series2: { customColor: "#D4A84B" },
          series3: { customColor: "#7D8C6E" },
        },
      },
    },
    modern: {
      type: "bar",
      data: barData,
      legend: { position: "top" },
      content: { title: "Revenue by Region" },
      axes: { y: { label: "Revenue ($)" }, showGridLines: true },
      appearance: {
        seriesStyles: {
          series1: { customColor: "#6366F1" },
          series2: { customColor: "#06B6D4" },
          series3: { customColor: "#D946EF" },
        },
      },
    },
    midnight: {
      type: "bar",
      data: barData,
      legend: { position: "top" },
      content: { title: "Revenue by Region" },
      axes: { y: { label: "Revenue ($)" }, showGridLines: true },
      appearance: {
        seriesStyles: {
          series1: { customColor: "#84CC16" },
          series2: { customColor: "#EAB308" },
          series3: { customColor: "#3B82F6" },
        },
      },
    },
  },
  {
    editorial: {
      type: "areaStacked",
      data: areaData,
      legend: { position: "top" },
      content: { title: "Monthly Sales Breakdown" },
      axes: { y: { label: "Sales ($)" }, showGridLines: true },
      appearance: {
        seriesStyles: {
          series1: { customColor: "#A0776E", fillStyle: "solid" },
          series2: { customColor: "#D4A84B", fillStyle: "solid" },
        },
      },
    },
    modern: {
      type: "areaStacked",
      data: areaData,
      legend: { position: "top" },
      content: { title: "Monthly Sales Breakdown" },
      axes: { y: { label: "Sales ($)" }, showGridLines: true },
      appearance: {
        seriesStyles: {
          series1: { customColor: "#6366F1", fillStyle: "solid" },
          series2: { customColor: "#06B6D4", fillStyle: "solid" },
        },
      },
    },
    midnight: {
      type: "areaStacked",
      data: areaData,
      legend: { position: "top" },
      content: { title: "Monthly Sales Breakdown" },
      axes: { y: { label: "Sales ($)" }, showGridLines: true },
      appearance: {
        seriesStyles: {
          series1: { customColor: "#84CC16", fillStyle: "solid" },
          series2: { customColor: "#F97316", fillStyle: "solid" },
        },
      },
    },
  },
  {
    editorial: {
      type: "pie",
      data: pieData,
      legend: { position: "right" },
      content: { title: "Team Allocation by Department" },
      appearance: {
        seriesStyles: {
          series1: { customColor: "#C2704E" },
          series2: { customColor: "#7D8C6E" },
          series3: { customColor: "#D4A84B" },
          series4: { customColor: "#A0776E" },
          series5: { customColor: "#5E8E9A" },
        },
      },
    },
    modern: {
      type: "pie",
      data: pieData,
      legend: { position: "right" },
      content: { title: "Team Allocation by Department" },
      appearance: {
        seriesStyles: {
          series1: { customColor: "#6366F1" },
          series2: { customColor: "#06B6D4" },
          series3: { customColor: "#D946EF" },
          series4: { customColor: "#10B981" },
          series5: { customColor: "#F59E0B" },
        },
      },
    },
    midnight: {
      type: "pie",
      data: pieData,
      legend: { position: "right" },
      content: { title: "Team Allocation by Department" },
      appearance: {
        seriesStyles: {
          series1: { customColor: "#84CC16" },
          series2: { customColor: "#3B82F6" },
          series3: { customColor: "#EAB308" },
          series4: { customColor: "#C084FC" },
          series5: { customColor: "#F97316" },
        },
      },
    },
  },
];
