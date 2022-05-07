import { test } from "@japa/runner";

test("average of integer", async ({ client, assert }) => {
  const { response } = await client.get("calculateAverage?n1=8&n2=2");

  assert.equal(response.body.average, 5);
});

test("average of negative value", async ({ client, assert }) => {
  const { response } = await client.get("calculateAverage?n1=-8&n2=-2");

  assert.equal(response.body.average, -5);
});

test("avarage rounded with half round up rule", async ({ client, assert }) => {
  const { response } = await client.get("calculateAverage?n1=10&n2=2.452");

  assert.equal(response.body.average, 6.23);
});

test("avarage rounded with half round up rule with negative value", async ({
  client,
  assert,
}) => {
  const { response } = await client.get("calculateAverage?n1=-10&n2=-2.452");

  assert.equal(response.body.average, -6.23);
});
