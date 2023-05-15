import { Request, Response } from 'express';
import dataSource from '../configs/dbconfig';
import { UserService } from '../services/user.service';

class UserController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService(dataSource);
  }

  findByKeyword = async (data: any) => {
    return this.userService.findByKeyword(data);
  };

  create = async (req: Request, res: Response) => {
    const data = req.body;
    const result = await this.userService.create(data);

    if (result?.data) {
      return res.status(200).json({
        message: result.message,
        data: result.data
      });
    }
    return res.status(404).json({
      message: result.message
    });
  };
}

export default new UserController();
