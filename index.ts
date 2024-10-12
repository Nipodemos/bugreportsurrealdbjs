import { RecordId, Surreal } from "surrealdb";
const db = new Surreal();
await db.connect("http://127.0.0.1:8000/rpc");
await db.use({ namespace: "test", database: "test" });
await db.signin({
  username: "root",
  password: "root",
});

const result = await db.upsert(new RecordId("test", "nipo"), {
  name: "nipodemos",
});
console.log("result :>> ", result);
