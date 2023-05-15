import { DataSource, Repository } from 'typeorm';
import { Users } from '../models/users.entity';
import { classToPlain } from 'class-transformer';

export class UserService {
  private userRepository: Repository<Users>;
  constructor(dataSource: DataSource) {
    this.userRepository = dataSource.getRepository<Users>(Users);
  }

  findByKeyword = async ({ email, username }: Users) => {
    try {
      let userByEmail: Users = await this.userRepository.findOne({ where: { email } });
      let userByUsername: Users = await this.userRepository.findOne({ where: { username } });

      let result = [];
      let message = [];

      if (userByEmail) {
        const userByEmailObj = classToPlain({ ...userByEmail });
        result.push(userByEmailObj);
        message.push(`This email is exist`);
      }
      if (userByUsername) {
        const userByUsernameObj = classToPlain({ ...userByUsername });
        result.push(userByUsernameObj);
        message.push(`This username is exist`);
      }

      if (result) {
        return {
          message: message,
          data: result
        };
      }
      return;
    } catch (err) {
      console.log(err);
    }
  };

  create = async (data: any) => {
    try {
      let result = await this.findByKeyword(data);

      if (result) {
        return {
          message: result.message,
          data: ''
        };
      }
      // const newUser = await this.userRepository.save(data);
      // return {
      //     message: 'done',
      //     data: newUser
      // }
    } catch (err) {
      console.log(err);
    }
  };
}
