import { Link } from './entities/link/link.entity';
import { config } from 'dotenv';

config();

export const typeORMConfig = {
  type: process.env.SQL_DB_TYPE,
  host: process.env.SQL_DB_HOST,
  port: process.env.SQL_DB_PORT,
  username: process.env.SQL_DB_USER,
  password: process.env.SQL_DB_PASSWORD,
  database: process.env.SQL_DB_NAME,
  entities: [Link],
  migrationsTableName: 'PostRefactoringMigration',
  autoLoadEntities: true,
  synchronize: true,
};
