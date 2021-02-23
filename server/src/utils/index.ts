import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const config = ConfigModule.forRoot();

export const graphql = GraphQLModule.forRoot({
  debug: false,
  playground: true,
  autoSchemaFile: 'schema.gql',
});

export const postgres = TypeOrmModule.forRoot({
  type: 'postgres',
  port: 5432,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true,
});
