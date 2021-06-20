import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { UsersModel } from "src/models/users.model";
import { JwtAuthGuard } from "src/security/jwt.guard";
import { UsersService } from "src/services/users.service";
import { CurrentUser } from 'src/decorators/user.decorator';



@Resolver(of => UsersModel)
export class UsersResolver {
    constructor(private readonly service: UsersService) {}
    
    @UseGuards(JwtAuthGuard)
    @Query(returns => UsersModel)
    async getUser(@CurrentUser() user: UsersModel) {
      console.log(user);
    }

    @Query(returns => UsersModel, { nullable: true })
    async login(@Args('email') email: string, @Args('password') password: string) {
      return await this.service.login(email, password);
    }

    @Mutation(returns => UsersModel)
    async register(@Args('email') email: string, @Args('password') password: string) {
      return this.service.create(email, password);
    }
}