import { Service, Inject } from "typedi";

/**
 * User Service
 *  - All the core logic & database request resides here. 
 */
@Service()
export class UserService {
  /**
   * All the database models required are injected from container. 
   * @param UserModel 
   */
  constructor(@Inject("userModel") private readonly UserModel) {}

  async getAll() {
    return this.UserModel.find();
  }
}
