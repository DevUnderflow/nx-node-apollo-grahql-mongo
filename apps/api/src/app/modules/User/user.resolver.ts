import { User } from './../../entity/user';
import { UserService } from './../../services/user.service';
import {
  Resolver,
  Query,
} from "type-graphql";

@Resolver()
export class UserResolver {
  constructor(
    // constructor injection of service
    private readonly userService: UserService,
  ) { }

  @Query(() => [User])
  async users() {
    return this.userService.getAll();
  }
}
