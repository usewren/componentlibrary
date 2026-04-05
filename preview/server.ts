import index from "./index.html";

Bun.serve({
  port: 4003,
  routes: { "/": index },
  development: { hmr: true, console: true },
});

console.log("Component preview at http://localhost:4003");
