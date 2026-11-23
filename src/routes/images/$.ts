import { createFileRoute } from "@tanstack/react-router";
import { env } from "cloudflare:workers";

// Serves photos straight from the R2 bucket bound as IMAGES.
export const Route = createFileRoute("/images/$")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const key = params._splat;
        if (!key) return new Response("Not found", { status: 404 });

        const object = await env.IMAGES.get(key, {
          onlyIf: request.headers,
        });
        if (!object) return new Response("Not found", { status: 404 });

        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set("etag", object.httpEtag);
        headers.set("cache-control", "public, max-age=86400, s-maxage=604800");
        if (!headers.has("content-type")) {
          headers.set("content-type", "image/jpeg");
        }

        // No body means the browser's cached copy is still current.
        if (!("body" in object)) {
          return new Response(null, { status: 304, headers });
        }
        return new Response(object.body, { headers });
      },
    },
  },
});
