import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Bun!");
    return new Response(body);
  }
});

console.log(`Listening on http://localhost:${server.port} ...`);

