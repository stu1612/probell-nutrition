export const CMS_REVALIDATE = Number(process.env.CMS_REVALIDATE ?? 300); // 5 min default
export const CMS_CACHE_DEFAULT: RequestCache = "force-cache"; // cache by default

// Optional: force-dynamic in dev if you like
export const IS_DEV = process.env.NODE_ENV !== "production";
