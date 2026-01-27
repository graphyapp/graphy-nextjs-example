import { GraphyAiSdk } from "@graphysdk/ai";
import { GraphConfig } from "@graphysdk/core";

const sdk = new GraphyAiSdk({
  apiKey: process.env.GRAPHY_API_KEY ?? "",
  baseUrl: process.env.GRAPHY_BASE_URL ?? "https://agents.graphy.dev",
});

interface GenerateRequest {
  userPrompt: string;
  config: GraphConfig;
}

interface StreamError {
  type: "error";
  message: string;
  code?: string;
  retryable?: boolean;
}

function formatError(error: unknown): StreamError {
  if (error instanceof Error && error.name === "AbortError") {
    return {
      type: "error",
      message: "Request was cancelled",
      code: "ABORT_ERROR",
      retryable: false,
    };
  }
  return {
    type: "error",
    message: error instanceof Error ? error.message : "Unknown error",
    retryable: false,
  };
}

export async function POST(request: Request) {
  const { userPrompt, config }: GenerateRequest = await request.json();

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const result = await sdk.generateGraph(
          { userPrompt, config },
          (update) => {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify(update)}\n\n`)
            );
          },
          request.signal
        );

        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "complete", result })}\n\n`)
        );
      } catch (error) {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(formatError(error))}\n\n`)
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}