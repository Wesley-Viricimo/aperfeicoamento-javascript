require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_POSTGRES_HOST,
  port: process.env.DATABASE_POSTGRES_PORT,
  schema: process.env.DATABASE,
  username: process.env.DATABASE_POSTGRES_USERNAME,
  password: process.env.DATABASE_POSTGRES_PASSWORD,
  database: process.env.DATABASE_POSTGRES,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
  } ,
  dialectOptions: {
    timezone: 'America/Sao_Paulo'
  },
  timezone: 'America/Sao_Paulo'
}
