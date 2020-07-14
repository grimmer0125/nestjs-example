import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    AuthorsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true, //process.cwd() + 'src/schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
