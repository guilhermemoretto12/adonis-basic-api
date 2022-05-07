import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import axios from "axios";

export default class SearchCEPController {
  public async searchCEP({ params, response }: HttpContextContract) {
    try {
      const { data: cep } = await axios
        .get(`https://viacep.com.br/ws/${params.cep}/json`)
        .catch(() => {
          throw "CEP inválido";
        });

      if (cep.erro) {
        throw "CEP não encontrado";
      }

      if (!cep.bairro) {
        cep.mensagem = "Não foi possível localizar o bairro do CEP informado";
      }

      return cep;
    } catch (err) {
      response.status(400).send({ error: { message: err } });
    }
  }
}
