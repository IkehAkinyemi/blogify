import faunadb from "faunadb";
const client = new faunadb.Client({
  secret: "fnAEITfiweACB7TCfXO7_RLNhVnfkuv1B1MFkwpi",
});
const q = faunadb.query;
export { client, q };
