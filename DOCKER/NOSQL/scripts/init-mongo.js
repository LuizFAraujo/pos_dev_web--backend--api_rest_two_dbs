db = db.getSiblingDB("admin");
db.createUser({
  user: "root",
  pwd: "root",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }],
});
const banco = bd_nosql_teste;
const userName = root;
const userPass = root;
const userRole = userAdminAnyDatabase;

db = db.getSiblingDB(banco);

db.createUser({
  user: userName,
  pwd: userPass,
  roles: [{ role: userRole, db: banco }],
});
