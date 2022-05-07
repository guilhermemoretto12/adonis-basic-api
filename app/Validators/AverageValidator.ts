import { schema } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class PeopleGroupValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    n1: schema.number(),
    n2: schema.number(),
  });

  public messages = {
    required: "Campo obrigatório",
    number: "O campo deve ser um número",
  };
}
