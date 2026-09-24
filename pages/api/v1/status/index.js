import database from "/infra/database.js";

async function status(request, response) {
  const databaseName = process.env.POSTGRES_DB;

  const updatedAt = new Date().toISOString();
  const postgresVersionResult = await database.query("SELECT version();"); // Query sem parametro
  const postgresVersion = postgresVersionResult.rows[0].version;
  const maxConnectionsResult = await database.query("SHOW max_connections;"); // Query sem parametro
  const maxConnections = maxConnectionsResult.rows[0].max_connections;
  const usedConnectionsResult = await database.query(
    {
      text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
      values: [databaseName],
    }, // Uma QUERY dinamica que permiti SQLinjection
  );
  const usedConnections = usedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: postgresVersion,
        max_connections: maxConnections,
        used_connections: usedConnections,
      },
    },
  });
}

export default status;
