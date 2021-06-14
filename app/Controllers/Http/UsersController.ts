import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({ inertia }: HttpContextContract) {
    const users = await User.all();
    return inertia.render("User/index", { users });
  }

  public async create({ inertia }: HttpContextContract) {
    return inertia.render("User/addUser");
  }

  public async store({ request, inertia, response }: HttpContextContract) {
    const Req = request.all();
    await User.create(Req);
    return response.redirect().toRoute("user.index");
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
