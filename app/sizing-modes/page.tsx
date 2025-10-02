"use client";

import { GlobalEmissions } from "@/src/examples/GlobalEmissions";
import { SpendBreakdown } from "@/src/examples/SpendBreakdown";
import { Traffic } from "@/src/examples/Traffic";
import { ReturnHome } from "@/src/ReturnHome";
import { GraphSizing } from "@graphysdk/core";
import { useEffect, useState } from "react";

export default function SizingModes() {
  // Note: Currently graphySDK is not working with SSR.
  const [isMounted, setIsMounted] = useState(false);
  const [sizingMode, setSizingMode] = useState<GraphSizing["mode"]>("fixed");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  let sizing: GraphSizing;

  switch (sizingMode) {
    case "fixed":
      sizing = { mode: "fixed", width: 600, height: 400 };
      break;
    case "responsive":
      sizing = { mode: "responsive" };
      break;
    case "keepAspectRatio":
      sizing = {
        mode: "keepAspectRatio",
        intrinsicWidth: 500,
        intrinsicHeight: 500,
      };
      break;
  }

  const getItemClasses = () => {
    switch (sizingMode) {
      case "fixed":
        return "w-[600px] h-[400px] flex-shrink-0";
      case "responsive":
        return "w-full h-[500px]";
      case "keepAspectRatio":
        return "";
    }
  };

  const getContainerClasses = () => {
    if (sizingMode === "keepAspectRatio") {
      return "grid grid-cols-2 gap-8 mx-auto w-full";
    }
    return "flex flex-col items-center gap-8 w-full";
  };

  return (
    <>
      <ReturnHome />
      <div className="flex flex-col items-center justify-center px-16 gap-8 mx-auto my-8">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setSizingMode("fixed")}
            className={`px-3 py-1 rounded-md ${
              sizingMode === "fixed" ? "bg-gray-300" : ""
            }`}
          >
            Fixed size
          </button>
          <button
            onClick={() => setSizingMode("responsive")}
            className={`px-3 py-1 rounded-md ${
              sizingMode === "responsive" ? "bg-gray-300" : ""
            }`}
          >
            Responsive
          </button>
          <button
            onClick={() => setSizingMode("keepAspectRatio")}
            className={`px-3 py-1 rounded-md ${
              sizingMode === "keepAspectRatio" ? "bg-gray-300" : ""
            }`}
          >
            Aspect ratio
          </button>
        </div>

        <div className={getContainerClasses()}>
          <div className={getItemClasses()}>
            <GlobalEmissions sizing={sizing} />
          </div>
          <div className={getItemClasses()}>
            <Traffic sizing={sizing} />
          </div>
          <div className={getItemClasses()}>
            <SpendBreakdown sizing={sizing} />
          </div>
        </div>
      </div>
    </>
  );
}
