function status(request, response) {
  response.status(200).json({
    chave:
      "Bem vindo a minha Oficina, no momento esta tudo funcionando perfeitamente, obrigado por visitar!",
  });
}

export default status;
