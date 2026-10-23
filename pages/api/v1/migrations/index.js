import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database";

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();

  const defaultMigrationOptions = {
    dbClient: dbClient,
    //dryRun é a opcao no node-pg-migration que permiti uma simulacao das migrations sem rodar de fato. Ele retorna um array com as migrations que seriam aplicadas.
    dryRun: true,
    // dir é a opcao do node-pg-migrate que indica o caminho para a pasta de migrations.
    // join é uma funcao do node:path que junta os caminhos de forma correta para o sistema operacional.
    dir: join("infra", "migrations"),
    // direction é a opcao para indicar a direcao das migrations no node-pg-migration.
    direction: "up",
    verbose: true,
    // migrationsTable é a opcao para indicar o nome da tabela de migrations no node-pg-migration.
    // na versao atual do node=pg-migrate, nao cria a tabela e ela retorna undefined.
    migrationsTable: "pgmigrations",
  };

  if (request.method === "GET") {
    const pendingMigrations = await migrationRunner(defaultMigrationOptions);
    await dbClient.end();
    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false,
    });

    await dbClient.end();

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    }
    return response.status(200).json(migratedMigrations);
  }

  return response.status(405).end();
}
