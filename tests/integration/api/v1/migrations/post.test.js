import database from "infra/database";

beforeAll(cleanDataBase);
async function cleanDataBase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("POST to /api/v1/migrations returns 200 and 201", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  // Verificacao se a chamada encontra migrations pendentes e as aplica
  expect(response1.status).toBe(201);

  const response1Body = await response1.json();
  // isArray verifica se o response1Body é um array
  expect(Array.isArray(response1Body)).toBe(true);
  expect(response1Body.length).toBeGreaterThan(0);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  // Verificacao se a chamada nao encontra migrations pendentes
  expect(response2.status).toBe(200);

  const response2Body = await response2.json();
  expect(Array.isArray(response2Body)).toBe(true);
  expect(response2Body.length).toBe(0);
});
