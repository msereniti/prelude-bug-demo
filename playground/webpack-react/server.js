import finalhandler from "finalhandler";
import http from "http";
import serveStatic from "serve-static";

const serve = serveStatic("dist", { index: ["index.html", "index.htm"] });

const server = http.createServer(function onRequest(req, res) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' nonce-preludedemodevserver https://edge.prelude.dev",
  );
  serve(req, res, finalhandler(req, res));
});

server.listen(3001);
