import { Graph, GraphProvider } from "@graphysdk/core";
import { stickerPaths } from "../config/sticker-paths";

export const Traffic = () => {
  return (
    <GraphProvider
      data={{
        rows: [
          {
            c1: "2024-12-23T00:00:00.000Z",
            c2: "3570",
            c3: "12520",
          },
          {
            c1: "2024-12-30T00:00:00.000Z",
            c2: "4280",
            c3: "11520",
          },
          {
            c1: "2025-01-06T00:00:00.000Z",
            c2: "5280",
            c3: "16440",
          },
          {
            c1: "2025-01-13T00:00:00.000Z",
            c2: "5130",
            c3: "19980",
          },
          {
            c1: "2025-01-20T00:00:00.000Z",
            c2: "5200",
            c3: "18750",
          },
          {
            c1: "2025-01-27T00:00:00.000Z",
            c2: "4320",
            c3: "17790",
          },
          {
            c1: "2025-02-03T00:00:00.000Z",
            c2: "5180",
            c3: "22320",
          },
          {
            c1: "2025-02-10T00:00:00.000Z",
            c2: "5190",
            c3: "21400",
          },
          {
            c1: "2025-02-17T00:00:00.000Z",
            c2: "5080",
            c3: "21150",
          },
          {
            c1: "2025-02-24T00:00:00.000Z",
            c2: "5380",
            c3: "22910",
          },
          {
            c1: "2025-03-03T00:00:00.000Z",
            c2: "5690",
            c3: "23870",
          },
          {
            c1: "2025-03-10T00:00:00.000Z",
            c2: "5860",
            c3: "25850",
          },
          {
            c1: "2025-03-17T00:00:00.000Z",
            c2: "6080",
            c3: "24870",
          },
          {
            c1: "2025-03-24T00:00:00.000Z",
            c2: "5380",
            c3: "24210",
          },
          {
            c1: "2025-03-31T00:00:00.000Z",
            c2: "6260",
            c3: "24710",
          },
          {
            c1: "2025-04-07T00:00:00.000Z",
            c2: "5920",
            c3: "42860",
          },
          {
            c1: "2025-04-14T00:00:00.000Z",
            c2: "6870",
            c3: "43180",
          },
          {
            c1: "2025-04-21T00:00:00.000Z",
            c2: "7830",
            c3: "39740",
          },
          {
            c1: "2025-04-28T00:00:00.000Z",
            c2: "6800",
            c3: "34620",
          },
          {
            c1: "2025-05-05T00:00:00.000Z",
            c2: "7400",
            c3: "36440",
          },
          {
            c1: "2025-05-12T00:00:00.000Z",
            c2: "9100",
            c3: "37310",
          },
          {
            c1: "2025-05-19T00:00:00.000Z",
            c2: "8380",
            c3: "32960",
          },
          {
            c1: "2025-05-26T00:00:00.000Z",
            c2: "7330",
            c3: "33140",
          },
          {
            c1: "2025-06-02T00:00:00.000Z",
            c2: "7580",
            c3: "31640",
          },
          {
            c1: "2025-06-09T00:00:00.000Z",
            c2: "7940",
            c3: "34570",
          },
          {
            c1: "2025-06-16T00:00:00.000Z",
            c2: "7460",
            c3: "28230",
          },
          {
            c1: "2025-06-23T00:00:00.000Z",
            c2: "7170",
            c3: "26420",
          },
          {
            c1: "2025-06-30T00:00:00.000Z",
            c2: "7560",
            c3: "26830",
          },
          {
            c1: "2025-07-07T00:00:00.000Z",
            c2: "7890",
            c3: "26990",
          },
          {
            c1: "2025-07-14T00:00:00.000Z",
            c2: "6900",
            c3: "26870",
          },
        ],
      }}
      datasetConfig={{
        properties: [
          { key: "c1", label: "Date" },
          { key: "c3", label: "Organic" },
          { key: "c2", label: "Paid" },
        ],
        isDataHorizontal: false,
      }}
      annotations={{
        annotations: [
          {
            id: "24:c5",
            config: { type: "highlight", highlight: "data-point" },
            rowIndex: 24,
            propertyKey: "c5",
          },
        ],
      }}
      visualisationConfig={{
        type: "line",
        barPosition: "stacked",
        locale: "EN_US",
        curveType: "linear",
        useLogScale: false,
        hasGridLines: true,
        topAxisLabel: null,
        hideCrossAxis: false,
        leftAxisLabel: null,
        lineThickness: 1.56,
        headlineMetric: null,
        legendPosition: "right",
        rightAxisLabel: "Traffic",
        showDataLabels: false,
        bottomAxisLabel: null,
        shouldStartFromZero: true,
        showPercentageLabels: false,
        reverseCrossAxisPosition: false,
      }}
      customAppearanceConfig={{
        theme: "custom",
        palette: null,
        textScale: "1",
        background: "LIGHT",
        borderStyle: "solid",
        seriesConfig: {
          series1: { color: "#FCA65F", fillType: "solid", lineType: "solid" },
          series2: { color: "#FAC491", lineType: "solid" },
          series3: { color: "#BABABA", lineType: "solid" },
          series4: { color: "#FED03C" },
        },
        highlightStyle: "fade-color",
        backgroundStyle: "solid",
        borderStyleName: null,
        customBorderStyle: "#FFE9D6",
        hasTransparentBackground: false,
      }}
      numberFormat={{ abbreviation: "auto", decimalPlaces: "auto" }}
      title="73% increase in organic traffic in April"
    >
      <Graph
        renderTitle={({ title }) => (
          <h2 className="text-2xl font-bold">{title}</h2>
        )}
        stickerPaths={stickerPaths}
      />
    </GraphProvider>
  );
};
