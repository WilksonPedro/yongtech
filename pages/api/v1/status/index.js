import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result);
  response.status(200).json({
    chave:
      "Bem vindo a minha Oficina, no momento minha pagina ainda esta em construção, obrigado por visitar!",
  });
}

export default status;
