import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Mina resor</h1>
      <p className="mb-4">
        Det här är startsidan där du ser dina resor och senaste aktivitet.
      </p>
      <Link href="/trips" className="text-blue-600 underline">
        Gå till alla resor
      </Link>
    </main>
  );
}