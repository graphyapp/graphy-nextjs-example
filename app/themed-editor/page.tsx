"use client";

import { ReturnHome } from "@/src/ReturnHome";
import { Graph, GraphProvider, graphyDarkTheme } from "@graphysdk/core";
import type { GraphConfig, GraphTheme } from "@graphysdk/core";
import type { EditorTheme } from "@graphysdk/editor";
import {
  GraphPanel,
  AxesPanel,
  ElementsPanel,
  PowerUpPanel,
  ColorPanel,
  AnnotatePanel,
  DataTable,
  EditorProvider,
  GraphTypeSection,
  NumberFormatSection,
  GraphOptionsSection,
  CrossAxisSection,
  MainAxisSection,
  ChartBackgroundSection,
  ChartBorderSection,
  HighlightColorSection,
  PaletteSection,
  SourceSection,
  TextSizeSection,
  TextVisibilitySection,
  CallOutSection,
  HighlightSection,
  AveragePowerUpSection,
  GoalPowerUpSection,
  HeadlineNumberSection,
  LegendPositionSection,
  TrendPowerUpSection,
} from "@graphysdk/editor";
import { ChakraProvider, defaultSystem, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const bodyFont =
  "'Plus Jakarta Sans', 'Outfit', -apple-system, 'Helvetica Neue', sans-serif";
const headingFont = "'Playfair Display', 'Georgia', 'Times New Roman', serif";

const COLORS = {
  gold: "#E2B755",
  coral: "#E8826E",
  teal: "#50D0C6",
  lavender: "#A898E0",
  cream: "#EDE8DC",

  textPrimary: "#E4E0D8",
  textSecondary: "#8690B8",
  textDisabled: "#5068A0",

  pageBg: "#060918",
  bg0: "#08102A",
  bg1: "#0D1838",
  bg2: "#162250",
  bg3: "#1E2C62",

  border: "#2A3878",
  borderFaint: "#2A387830",
  borderGradient: "linear-gradient(135deg, #2E4080 0%, #1E2C62 100%)",
};

const graphTheme: GraphTheme = {
  id: "noir-gold",
  colorScheme: "dark",
  canvasColors: [
    { id: "gold", label: "Gold", value: COLORS.gold },
    { id: "coral", label: "Coral", value: COLORS.coral },
    { id: "teal", label: "Teal", value: COLORS.teal },
    { id: "lavender", label: "Lavender", value: COLORS.lavender },
    { id: "cream", label: "Cream", value: COLORS.cream },
    { id: "deep", label: "Deep Navy", value: COLORS.bg2 },
  ],
  defaultAnnotationColorIds: {
    arrowStroke: "gold",
    shapeFill: "teal",
  },
  values: {
    ...graphyDarkTheme.values,

    grey100: "#283A72",
    grey95: "#243468",
    grey90: "#203060",
    grey85: COLORS.bg2,
    grey80: COLORS.bg3,
    grey75: "#354878",
    grey70: COLORS.border,
    grey60: COLORS.bg3,
    grey50: COLORS.bg3,
    grey0: COLORS.pageBg,
    greyGradient80: COLORS.borderGradient,

    brand: COLORS.gold,
    success: COLORS.teal,
    warning: COLORS.gold,
    alert: COLORS.coral,
    textPrimary: COLORS.textPrimary,
    textSecondary: COLORS.textSecondary,
    textDisabled: COLORS.textDisabled,
    sunkenBackground: COLORS.bg0,
    defaultBackground: COLORS.bg1,
    raisedBackground: COLORS.bg2,
    overlayBackground: COLORS.bg2 + "ee",
    overlayBorderGradient: COLORS.borderGradient,
    border100: COLORS.border,
    border10: COLORS.borderFaint,

    graphBackground: COLORS.bg1,
    gridLineColor: "#152050",
    hoverGuideLineColor: "#354878",
    originLineColor: COLORS.border,
    targetLineColor: COLORS.gold,
    targetLineMarkerColor: COLORS.gold,

    legendBackground: "transparent",
    legendBorderColor: "transparent",
    legendTextColor: COLORS.textSecondary,
    dimmedSeriesLabelTextColor: COLORS.textDisabled,
    dimmedSeriesLabelLineColor: COLORS.border,

    trendPositiveColor: COLORS.teal,
    trendNegativeColor: COLORS.coral,

    tooltipBackground: COLORS.bg3,
    tooltipBorderColor: COLORS.border,
    tooltipHeadingTextColor: COLORS.textPrimary,
    tooltipLabelTextColor: COLORS.textSecondary,
    tooltipValueTextColor: COLORS.cream,

    defaultArrowAnnotationColor: COLORS.gold,
    annotationFrameBorderColor: COLORS.border,
    annotationMenuTriggerIconColor: "#5068A0",

    heatmapEmptyTileBackground: COLORS.bg2,
    stackedBarHoverBorderColor: COLORS.bg1,

    fontFamilyDefault: bodyFont,
    fontFamilyHeading: headingFont,
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

    // Semantic font tokens
    fontEditorBody: `400 0.875rem/1.5 ${bodyFont}`,
    fontHeadingSm: `600 0.875rem/1.3 ${headingFont}`,
    fontHeadingMd: `600 1.125rem/1.3 ${headingFont}`,
    fontHeadingLg: `700 1.5rem/1.25 ${headingFont}`,

    // Axes
    fontTickLabel: `400 0.6875rem/1.2 ${bodyFont}`,
    fontAxisLabel: `500 0.75rem/1.2 ${bodyFont}`,

    // Data labels
    fontDataLabel: `500 0.6875rem/1.2 ${bodyFont}`,
    fontStackTotal: `600 0.75rem/1.2 ${bodyFont}`,

    // Legend
    fontLegendLabel: `500 0.75rem/1.2 ${bodyFont}`,
    fontSeriesLabel: `500 0.6875rem/1.2 ${bodyFont}`,

    // Chart tooltips
    fontTooltipHeading: `600 0.875rem/1.3 ${headingFont}`,
    fontTooltipLabel: `400 0.75rem/1.3 ${bodyFont}`,
    fontTooltipFooter: `400 0.6875rem/1.3 ${bodyFont}`,
    fontJumboTooltipLabel: `500 0.8125rem/1.3 ${bodyFont}`,
    fontJumboTooltip: `700 1.5rem/1.2 ${headingFont}`,
    fontMiniTooltipLabel: `400 0.6875rem/1.2 ${bodyFont}`,
    fontMiniTooltipFooter: `400 0.625rem/1.2 ${bodyFont}`,
    fontTooltipCaption: `400 0.6875rem/1.3 ${bodyFont}`,
    fontTooltipCaptionSmall: `400 0.625rem/1.3 ${bodyFont}`,

    // Trends
    fontTrendTag: `600 0.75rem/1.2 ${bodyFont}`,
    fontTrendTagSmall: `600 0.625rem/1.2 ${bodyFont}`,

    // Goal lines
    fontGoalLineLabel: `500 0.6875rem/1.2 ${bodyFont}`,

    // Pie charts
    fontPieLabel: `500 0.75rem/1.2 ${bodyFont}`,
    fontPieChartTotal: `700 1.25rem/1.2 ${headingFont}`,

    // Difference arrows
    fontDifferenceArrowSmall: `600 0.625rem/1.2 ${bodyFont}`,
    fontDifferenceArrowMedium: `600 0.75rem/1.2 ${bodyFont}`,
    fontDifferenceArrowLarge: `600 0.875rem/1.2 ${bodyFont}`,

    // Buttons & forms
    fontButton: `600 0.8125rem/1.2 ${bodyFont}`,
    fontInput: `400 0.8125rem/1.3 ${bodyFont}`,
    fontInputLabel: `500 0.75rem/1.3 ${bodyFont}`,
    fontSelectLabel: `500 0.8125rem/1.3 ${bodyFont}`,
    fontSelectDescription: `400 0.6875rem/1.3 ${bodyFont}`,
    fontColorSelectLabel: `500 0.75rem/1.2 ${bodyFont}`,

    // Menus
    fontMenuTitle: `600 0.875rem/1.3 ${headingFont}`,
    fontMenuGroupTitle: `600 0.6875rem/1.3 ${bodyFont}`,
    fontMenuItemLabel: `500 0.8125rem/1.3 ${bodyFont}`,
    fontMenuItemLabelSecondary: `400 0.6875rem/1.3 ${bodyFont}`,

    // UI tooltips
    fontUITooltip: `500 0.75rem/1.3 ${bodyFont}`,
    fontUITooltipSecondary: `400 0.6875rem/1.3 ${bodyFont}`,

    // Error boundary
    fontErrorBoundaryTitle: `700 1.125rem/1.3 ${headingFont}`,
    fontErrorBoundaryMessage: `400 0.875rem/1.4 ${bodyFont}`,

    // Tables
    fontTableCell: `400 0.75rem/1.3 ${bodyFont}`,
    fontTableHeaderCell: `600 0.75rem/1.3 ${bodyFont}`,

    // Footer
    fontSourceLabel: `400 0.6875rem/1.2 ${bodyFont}`,
    fontSourceLink: `500 0.6875rem/1.2 ${bodyFont}`,

    // Text editor headings (serif for all headings)
    fontTextEditorH1: `700 1.75rem/1.2 ${headingFont}`,
    fontTextEditorH2: `700 1.375rem/1.25 ${headingFont}`,
    fontTextEditorH3: `600 1.125rem/1.3 ${headingFont}`,
    fontTextEditorH6: `600 0.875rem/1.3 ${headingFont}`,
    fontTextEditorBody: `400 0.9375rem/1.5 ${bodyFont}`,
    fontTextEditorLink: `500 0.9375rem/1.5 ${bodyFont}`,

    // Highlight mode
    fontHighlightModeTitle: `700 1.125rem/1.3 ${headingFont}`,
    fontHighlightModeSubtitle: `400 0.8125rem/1.4 ${bodyFont}`,
  },
};

const editorTheme: EditorTheme = {
  ...graphTheme,
  values: {
    ...graphTheme.values,
    fontInputUnit: `400 0.6875rem/1.2 ${bodyFont}`,
    fontInlineError: `400 0.6875rem/1.3 ${bodyFont}`,
    fontToolbarButton: `500 0.75rem/1.2 ${bodyFont}`,
    fontGridButtonLabel: `500 0.75rem/1.2 ${bodyFont}`,
    fontTextScalePreview: `400 0.75rem/1.2 ${bodyFont}`,
    fontSectionTitle: `600 0.875rem/1.3 ${headingFont}`,
    fontSectionBody: `400 0.8125rem/1.4 ${bodyFont}`,
    fontControlLabel: `500 0.75rem/1.3 ${bodyFont}`,
    fontAccordionTitle: `600 0.875rem/1.3 ${headingFont}`,
    fontAnnotationButton: `500 0.75rem/1.2 ${bodyFont}`,
    fontPaletteLabel: `400 0.6875rem/1.2 ${bodyFont}`,
    fontHighlightSelected: `500 0.75rem/1.2 ${bodyFont}`,
    fontDataTableAccessory: `400 0.6875rem/1.2 ${bodyFont}`,
    fontNumberControlValue: `500 0.8125rem/1.2 ${bodyFont}`,
    fontTabButtonLabel: `500 0.75rem/1.2 ${bodyFont}`,
    fontSelectedPropertyLabel: `500 0.75rem/1.2 ${bodyFont}`,
    fontSwitchLabel: `500 0.75rem/1.3 ${bodyFont}`,
    fontDataTableCell: `400 0.75rem/1.3 ${bodyFont}`,
    fontDataTableHeaderCell: `600 0.75rem/1.3 ${bodyFont}`,
    graphTypeButtonIcon: COLORS.gold,
  },
};

export default function ThemedEditor() {
  const [isMounted, setIsMounted] = useState(false);
  const [config, setConfig] = useState<GraphConfig>(initialConfig);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: COLORS.pageBg, minHeight: "100vh" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      />
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 20px",
          color: COLORS.textPrimary,
        }}
      >
        <ReturnHome />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            paddingBottom: 28,
          }}
        >
          <h1
            style={{
              fontFamily: headingFont,
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            Custom Graph + Editor Theme
          </h1>
          <p
            style={{
              color: COLORS.textSecondary,
              fontSize: "0.875rem",
              maxWidth: 540,
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            A fully custom <code>GraphTheme</code> paired with a matching{" "}
            <code>EditorTheme</code>. The graph theme controls chart visuals
            while the editor theme styles all editor panel typography.
          </p>
        </div>
      </div>

      <ChakraProvider value={defaultSystem}>
        <GraphProvider
          config={config}
          onChange={(update) => {
            setConfig((prev) => ({ ...prev, ...update }));
          }}
          theme={graphTheme}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 3fr",
              gridTemplateRows: "1fr 1fr",
              gap: 20,
              padding: "0 20px 20px",
              margin: "0 auto",
              maxWidth: 1400,
              height: 880,
            }}
          >
            <div
              style={{
                gridColumn: "1",
                gridRow: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.bg1,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <Graph sizing={{ mode: "responsive" }} mode="editor" />
            </div>
            <EditorProvider theme={editorTheme}>
              <div
                style={{
                  gridColumn: "1",
                  gridRow: "2",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: COLORS.bg1,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <DataTable />
              </div>
              <div
                style={{
                  gridColumn: "2",
                  gridRow: "1 / 3",
                  backgroundColor: COLORS.bg1,
                  borderRadius: 12,
                  border: `1px solid ${COLORS.border}`,
                  overflow: "auto",
                }}
              >
                <Editor />
              </div>
            </EditorProvider>
          </div>
        </GraphProvider>
      </ChakraProvider>
    </div>
  );
}

const tabTriggerStyle = {
  color: COLORS.textSecondary,
  fontFamily: bodyFont,
  fontSize: "0.8125rem",
  fontWeight: 500,
  padding: "10px 14px",
  borderBottom: "2px solid transparent",
  background: "none",
  cursor: "pointer",
  transition: "color 0.15s, border-color 0.15s",
} as const;

const Editor = () => {
  return (
    <Tabs.Root defaultValue="graph">
      <Tabs.List
        style={{
          background: COLORS.bg0,
          borderBottom: `1px solid ${COLORS.border}`,
          display: "flex",
          gap: 0,
          padding: "0 8px",
        }}
      >
        {(
          [
            ["graph", "Graph"],
            ["axes", "Axes"],
            ["color", "Color"],
            ["elements", "Elements"],
            ["annotate", "Annotate"],
            ["powerUps", "Power-ups"],
          ] as const
        ).map(([value, label]) => (
          <Tabs.Trigger
            key={value}
            value={value}
            style={tabTriggerStyle}
            _selected={{
              color: COLORS.gold,
              borderBottomColor: COLORS.gold,
              fontWeight: 600,
            }}
            _hover={{ color: COLORS.textPrimary }}
          >
            {label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.ContentGroup>
        <Tabs.Content value="graph">
          <GraphPanel>
            <GraphTypeSection />
            <GraphOptionsSection />
            <LegendPositionSection />
            <HeadlineNumberSection />
            <NumberFormatSection />
          </GraphPanel>
        </Tabs.Content>
        <Tabs.Content value="axes">
          <AxesPanel>
            <MainAxisSection />
            <CrossAxisSection />
          </AxesPanel>
        </Tabs.Content>
        <Tabs.Content value="color">
          <ColorPanel>
            <PaletteSection />
            <ChartBackgroundSection />
            <ChartBorderSection />
            <HighlightColorSection />
          </ColorPanel>
        </Tabs.Content>
        <Tabs.Content value="elements">
          <ElementsPanel>
            <TextVisibilitySection />
            <SourceSection />
            <TextSizeSection />
          </ElementsPanel>
        </Tabs.Content>
        <Tabs.Content value="annotate">
          <AnnotatePanel>
            <CallOutSection hiddenButtons={["text"]} />
            <HighlightSection />
          </AnnotatePanel>
        </Tabs.Content>
        <Tabs.Content value="powerUps">
          <PowerUpPanel>
            <GoalPowerUpSection />
            <TrendPowerUpSection />
            <AveragePowerUpSection />
          </PowerUpPanel>
        </Tabs.Content>
      </Tabs.ContentGroup>
    </Tabs.Root>
  );
};

const initialConfig: GraphConfig = {
  type: "bar",
  data: {
    columns: [
      { key: "c1", label: "Quarter" },
      { key: "c2", label: "Subscriptions" },
      { key: "c3", label: "Licensing" },
      { key: "c4", label: "Services" },
    ],
    rows: [
      { c1: "Q1 2024", c2: "124000", c3: "58000", c4: "32000" },
      { c1: "Q2 2024", c2: "138000", c3: "62000", c4: "41000" },
      { c1: "Q3 2024", c2: "156000", c3: "71000", c4: "48000" },
      { c1: "Q4 2024", c2: "172000", c3: "79000", c4: "55000" },
      { c1: "Q1 2025", c2: "195000", c3: "86000", c4: "63000" },
      { c1: "Q2 2025", c2: "218000", c3: "94000", c4: "72000" },
    ],
  },
  axes: {
    y: { label: "Revenue ($)", isHidden: false, scaleType: "linear", min: 0 },
    showGridLines: true,
  },
  legend: { position: "top" },
  appearance: {
    seriesStyles: {
      series1: { customColor: COLORS.gold },
      series2: { customColor: COLORS.teal },
      series3: { customColor: COLORS.lavender },
    },
  },
  content: {
    title: "Revenue mix shifted toward subscriptions",
    subtitle: "Quarterly breakdown by stream, 2024–2025",
  },
  dataLabels: {
    showDataLabels: false,
    dataLabelFormat: "absolute",
  },
};
