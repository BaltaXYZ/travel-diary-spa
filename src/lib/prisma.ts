import { PrismaClient } from '@prisma/client';

// PrismaClient är avsedd att återanvändas mellan SSR‑förfrågningar när appen
// körs i utvecklingsläge. Här skapas en singleton så att samma instans
// används i hela projektet.
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;