"use client";

import { Graph, GraphConfig, GraphProvider, graphyLightTheme } from "@graphysdk/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { TRAFFIC_CONFIG } from "@/src/datasets/traffic";

export default function AIexample() {
  const [isMounted, setIsMounted] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<{
    message: string;
    steps?: string[];
    data?: Record<string, unknown> | Array<unknown> | null;
  } | null>(null);
  const [streamingProgress, setStreamingProgress] = useState<
    Array<{ type: string; percentage: number; message?: string }>
  >([]);
  const [loading, setLoading] = useState(false);
  const [chartConfig, setChartConfig] = useState<GraphConfig>(TRAFFIC_CONFIG);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleGenerateChart = useCallback(async (message: string, currentConfig: GraphConfig) => {
    abortControllerRef.current = new AbortController();
    setLoading(true);
    setStreamingProgress([]);

    try {
      const res = await fetch("/ai/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userPrompt: message,
          config: currentConfig,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!res.ok || !res.body) {
        throw new Error("Failed to generate chart");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n\n").filter((line) => line.startsWith("data: "));

        for (const line of lines) {
          const json = JSON.parse(line.replace("data: ", ""));

          if (json.type === "progress") {
            setStreamingProgress((prev) => [...prev, json]);
          } else if (json.type === "complete") {
            const { config, response: apiResponse } = json.result;
            if (config) {
              setChartConfig(config);
            }
            setResponse({
              message: apiResponse.message,
              steps: apiResponse.steps,
              data: config.data,
            });
          } else if (json.type === "error") {
            throw new Error(json.message);
          }
        }
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        setResponse({
          message: "Request cancelled.",
          steps: [],
          data: null,
        });
        return;
      }
      console.error("Error generating chart:", error);
      setResponse({
        message: "Error generating chart. Please try again.",
        steps: [],
        data: null,
      });
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  }, []);

  const handleCancel = useCallback(() => {
    abortControllerRef.current?.abort();
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    await handleGenerateChart(prompt, chartConfig);
  };

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-6 p-5 max-w-6xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="prompt" className="text-lg font-semibold">
            Ask AI to modify your chart:
          </label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., 'Change to a bar chart' or 'Add an average column'"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />

          <div className="flex gap-2 self-end">
            {loading && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Generating..." : "Send"}
            </button>
          </div>
        </form>

        {(loading || response) && (
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-2">AI Response:</h3>
            {loading && streamingProgress.length > 0 && (
              <div className="space-y-2 mb-4">
                {streamingProgress.map((progress, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <p className="text-gray-700">{progress.message}</p>
                  </div>
                ))}
              </div>
            )}

            {response && !loading && (
              <>
                <p className="text-gray-700">{response.message}</p>
                {response.steps && response.steps.length > 0 && (
                  <ul className="mt-2 text-gray-700 list-disc list-inside">
                    {response.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-6 p-5 max-w-[1600px] mx-auto">
        <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 overflow-auto max-h-[600px]">
          <h3 className="font-semibold mb-2">Dataset:</h3>
          <pre className="text-gray-700 text-sm">
            {JSON.stringify(response?.data ?? TRAFFIC_CONFIG.data, null, 2)}
          </pre>
        </div>
        <div className="flex-1">
          <GraphProvider config={chartConfig} theme={graphyLightTheme}>
            <div className="flex items-center justify-center">
              <Graph isEditable={false} />
            </div>
          </GraphProvider>
        </div>
      </div>
    </>
  );
}
