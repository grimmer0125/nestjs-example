// https://github.com/nestjs/nest/blob/master/sample/23-graphql-code-first/src/recipes/recipes.resolver.ts
import { Field, Int, ObjectType } from '@nestjs/graphql';

// import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'apollo-server-express';
// import { NewRecipeInput } from './dto/new-recipe.input';
// import { RecipesArgs } from './dto/recipes.args';
// import { Recipe } from './models/recipe.model';
import { AuthorsService } from './authors.service';
import { Author } from './models/author.model';

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService, // private postsService: PostsService,
  ) {}

  @Query(returns => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  //   @ResolveField('posts', returns => [Post])
  //   async getPosts(@Parent() author: Author) {
  //     const { id } = author;
  //     return this.postsService.findAll({ authorId: id });
  //   }
}
