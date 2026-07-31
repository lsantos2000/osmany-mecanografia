import app from "./index.js";

const STATIC_PATH = /\.(?:css|js|mjs|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|otf|txt|xml|webmanifest|map)$/i;

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/assets/") || STATIC_PATH.test(pathname)) {
      const asset = await env.ASSETS.fetch(request);
      if (asset.status !== 404) return asset;
    }

    return app.fetch(request, env, ctx);
  },
};
