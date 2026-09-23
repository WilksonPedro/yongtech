test("GET to /api/v1/status returns database status informations", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  // response.json() devolve uma Promise.
  // Com await, responseBody recebe o objeto JSON interpretado.
  const databaseStatus = responseBody.dependencies.database;

  const maxConnections = Number(databaseStatus.max_connections);
  const connectionsUsed = Number(databaseStatus.used_connections);
  expect(databaseStatus.version).toContain("PostgreSQL");
  expect(databaseStatus.version).toEqual(expect.any(String));
  expect(maxConnections).toEqual(expect.any(Number));
  expect(maxConnections).toBeGreaterThan(0);
  expect(connectionsUsed).toEqual(expect.any(Number));
  expect(connectionsUsed).toBeGreaterThan(0);
});
