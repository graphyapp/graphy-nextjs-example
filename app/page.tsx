"use client";

import React, { useEffect, useState } from "react";
import { GlobalEmissions } from "./examples/GlobalEmissions";
import { Traffic } from "./examples/Traffic";
import { SpendBreakdown } from "./examples/SpendBreakdown";

export default function Home() {
  // Note: Currently graphySDK is not working with SSR.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center px-16 gap-8 max-w-[800px] mx-auto my-8">
      <GlobalEmissions />
      <Traffic />
      <SpendBreakdown />
    </div>
  );
}
