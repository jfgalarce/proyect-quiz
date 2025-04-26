import mysql from 'mysql2/promise';

const conexion = mysql.createPool({
  host: '172.17.0.1', // o tu host remoto
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'quiz',
});

export const GetItems = async () => {
  try {
    const sql = `CALL get_items()`;
    const [resut, fields] = await conexion.query(sql);
    return await [resut, fields];
  } catch (error) {
    return error;
  }
}

export const GetQuestions = async (json) => {
  try {
    const sql = `CALL get_questions(?)`;
    const values = [
      json || '[]'
    ];
    const [resut, fields] = await conexion.query(sql, values);
    return await [resut, fields];
  } catch (error) {
    return error;
  }
}