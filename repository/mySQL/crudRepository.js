export default function crudRepository(connection) {
    return {
        create : async (table, data) => {
            const keys = Object.keys(data).join(", ");
            const values = Object.values(data).map(value => `'${value}'`).join(", ");
            const query = `INSERT INTO ${table} (${keys}) VALUES (${values})`;
            const [result] = await connection.query(query);
            return result;
        },
        read : async (table, conditions = {}) => {
            const whereClause = Object.keys(conditions)
                .map(key => `${key} = '${conditions[key]}'`)
                .join(" AND ");
            const query = `SELECT * FROM ${table} ${whereClause ? `WHERE ${whereClause}` : ''}`;
            const [rows] = await connection.query(query);
            return rows;
        },
        readAll : async (table) => {
            const query = `SELECT * FROM ${table}`;
            const [rows] = await connection.query(query);
            return rows;
        },
        update : async (table, data, conditions) => {
            const setClause = Object.keys(data)
                .map(key => `${key} = '${data[key]}'`)
                .join(", ");
            const whereClause = Object.keys(conditions)
                .map(key => `${key} = '${conditions[key]}'`)
                .join(" AND ");
            const query = `UPDATE ${table} SET ${setClause} WHERE ${whereClause}`;
            const [result] = await connection.query(query);
            return result;
        },
        delete : async (table, conditions) => {
            const whereClause = Object.keys(conditions)
                .map(key => `${key} = '${conditions[key]}'`)
                .join(" AND ");
            const query = `DELETE FROM ${table} WHERE ${whereClause}`;
            const [result] = await connection.query(query);
            return result;
        }
    };
}