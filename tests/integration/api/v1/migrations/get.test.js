import database from "infra/database";

// beforeAll é uma funcao fornecida pelo Jest para executar uma funcao antes de todos os testes.
beforeAll(cleanDataBase);
async function cleanDataBase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("GET to /api/v1/migrations returns 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  // isArray verifica se o responseBody é um array
  expect(Array.isArray(responseBody)).toBe(true);
  // Verifica se o array criado tem elementos
  expect(responseBody.length).toBeGreaterThan(0);
});
