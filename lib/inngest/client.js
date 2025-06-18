import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "SpendTrack", // Unique app ID
  name: "Spend Track",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
