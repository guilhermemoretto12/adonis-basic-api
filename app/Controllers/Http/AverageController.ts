import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AverageController {
  public async calculateAverage({
    request,
    response,
    logger,
  }: HttpContextContract) {
    try {
      let { n1, n2 } = request.qs();
      n1 = parseFloat(n1);
      n2 = parseFloat(n2);
      logger.info(`numeros informados: ${n1}, ${n2}`);

      const rawAverage = (n1 + n2) / 2;
      logger.info(`media antes de arredondar: ${rawAverage}`);

      const roundedAverage = parseFloat(rawAverage.toFixed(2));
      logger.info(`media arredondada: ${roundedAverage}`);

      return { average: roundedAverage };
    } catch (err) {
      logger.error(`erro ao calcular média: ${err}`);
      response.status(400).send({ error: { message: `${err}` } });
    }
  }
}
