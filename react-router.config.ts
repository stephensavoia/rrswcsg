import type { Config } from "@react-router/dev/config";

export default {
  // return a list of URLs to prerender at build time
  ssr: false,
  async prerender() {
    return ["/", "/about", "/archive"];
  },
} satisfies Config;
