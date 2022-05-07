import { test } from "@japa/runner";

test("search cep and validate city", async ({ client, assert }) => {
  const { response } = await client.get("/searchCEP/87503000");

  assert.equal(response.body.localidade, "Umuarama");
});

test("search cep with district and validate if message is empty", async ({
  client,
  assert,
}) => {
  const { response } = await client.get("/searchCEP/87503000");

  assert.notEmpty(response.body.bairro);
  assert.notExists(response.body.mensagem);
});

test("search cep without district and validate if message exists", async ({
  client,
  assert,
}) => {
  const { response } = await client.get("/searchCEP/18150000");

  assert.equal(response.body.bairro, "");
  assert.notEmpty(response.body.mensagem);
});

test("search cep in valid format that does not exist", async ({
  client,
  assert,
}) => {
  const { response } = await client.get("/searchCEP/11111111");

  assert.equal(response.body.error.message, "CEP não encontrado");
});

test("search invalid cep", async ({ client, assert }) => {
  const { response } = await client.get("/searchCEP/123");

  assert.equal(response.body.error.message, "CEP inválido");
});
