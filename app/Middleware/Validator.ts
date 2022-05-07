import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import AverageValidator from "App/Validators/AverageValidator";

export default class Validator {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    try {
      await request.validate(AverageValidator);
      await next();
    } catch (error) {
      response.status(400).send(error);
    }
  }
}
