import Link from 'next/link';

interface TripGalleryPageProps {
  params: {
    tripId: string;
  };
}

// Galleri för en specifik resa. Här visas filterpanelen och en rutnät‑vy över media.
export default async function TripGalleryPage({ params }: TripGalleryPageProps) {
  const { tripId } = params;
  // I en riktig implementation skulle vi hämta resans metadata och tillhörande media här.
  const mediaItems: { id: string; title: string; thumbnailUrl?: string }[] = [];

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Galleri för resa {tripId}</h1>
      <div className="mb-4 space-x-4">
          <Link href={`/trips/${tripId}/upload`} className="text-blue-600 underline">
            Ladda upp
          </Link>
          <Link href={`/trips/${tripId}/settings`} className="text-blue-600 underline">
            Inställningar
          </Link>
      </div>
      {/* Filterpanel: du kan lägga till komponenten FilterPanel här */}
      <div className="mb-4">
        {/* <FilterPanel /> */}
        <p className="text-gray-600">Filtreringspanel kommer här.</p>
      </div>
      {/* MediaGrid: här visas en lista över media */}
      {mediaItems.length === 0 ? (
        <p>Inget media har ännu laddats upp för denna resa.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Exempel på hur MediaCard kan användas */}
          {mediaItems.map((item) => (
            <div key={item.id} className="border rounded bg-white shadow">
              <Link href={`/media/${item.id}`}>
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  {item.thumbnailUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.thumbnailUrl} alt={item.title} className="object-cover w-full h-full" />
                  ) : (
                    <span className="text-sm text-gray-500">Ingen bild</span>
                  )}
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}