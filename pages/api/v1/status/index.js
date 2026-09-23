import database from "/infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgresVersionResult = await database.query("SELECT version();");
  const postgresVersion = postgresVersionResult.rows[0].version;
  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnections = maxConnectionsResult.rows[0].max_connections;
  const usedConnectionsResult = await database.query(
    "SELECT count(*) AS used_connections from pg_stat_activity;",
  );
  const usedConnections = usedConnectionsResult.rows[0].used_connections;
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
