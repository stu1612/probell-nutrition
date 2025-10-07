import "server-only";

type GqlOptions = {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache; // "force-cache" (default) | "no-store"
  next?: { revalidate?: number }; // ISR per-request
};

export async function hygraph<T>({
  query,
  variables,
  cache = "force-cache",
  next,
}: GqlOptions): Promise<T> {
  const endpoint = process.env.HYGRAPH_ENDPOINT;
  if (!endpoint) throw new Error("Missing HYGRAPH_ENDPOINT in env");

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.HYGRAPH_TOKEN
        ? { Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}` }
        : {}),
    },
    body: JSON.stringify({ query, variables }),
    cache,
    next,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Hygraph HTTP ${res.status}: ${text}`);
  }

  const json = (await res.json()) as {
    data?: T;
    errors?: { message: string }[];
  };
  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }
  return json.data as T;
}
