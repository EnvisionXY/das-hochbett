import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qa1ff4yd",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});
