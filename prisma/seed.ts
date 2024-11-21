const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcrypt");

var prismaClient = new PrismaClient();

async function main() {
  const password = await hash("admin", 12);
  const admin = await prismaClient.user.upsert({
    where: { username: "admin" },
    update: { password: password },
    create: {
      username: "admin",
      password: password,
    },
  });
  console.log({ admin });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
