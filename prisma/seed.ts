import prisma from '../src/lib/prisma';

/**
 * Detta skript seedar databasen med testdata. Funktionen är avsedd
 * att exekveras med `npm run seed` när du vill skapa exempelresor,
 * användare och media. I nuläget skriver skriptet endast ut ett
 * meddelande för att visa hur du kopplar upp dig mot Prisma.
 */
async function main() {
  console.log('Seeding… (ingen data sätts in i denna version)');
  // Här kan du skapa användare, resor och media. Exempel:
  // const user = await prisma.user.create({ data: { email: 'demo@example.com' } });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });