import Link from 'next/link';

// Den här sidan listar alla resor. I en riktig implementation skulle den
// hämta data från databasen via Prisma eller en API‑route.
export default async function TripsPage() {
  // Placeholder: lista över resor är tom tills databasen används
  const trips: { id: string; title: string; startDate: string; endDate: string }[] = [];
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Alla resor</h1>
      {trips.length === 0 ? (
        <p>Inga resor har skapats ännu.</p>
      ) : (
        <ul className="space-y-2">
          {trips.map((trip) => (
            <li key={trip.id}>
              <Link
                href={`/trips/${trip.id}`}
                className="text-blue-600 underline"
              >
                {trip.title} ({trip.startDate} – {trip.endDate})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}