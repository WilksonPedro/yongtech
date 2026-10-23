const dotenv = require("dotenv");
const nextJest = require("next/jest");

// esse parte injeta as variaveis de ambiente locais para o Jest
dotenv.config({
  path: ".env.development",
});
// nextJest é uma factory do Next que cria funcoes para entregar o objeto final para o Jest.
const createJestConfig = nextJest({
  // mostra a origem do projeto pro Jest
  dir: ".",
});
// Esta configuracao serve para o next conseguir rodar os teste com Jest
const jestConfig = createJestConfig({
  // Pode haver uma variacao no rootDir com <rootDir>/src se o projeto comecar em source
  moduleDirectories: ["node_modules", "<rootDir>/"],
});

module.exports = jestConfig;
