import Link from 'next/link';

interface MediaDetailPageProps {
  params: {
    mediaId: string;
  };
}

// Detaljvy för ett mediaobjekt. Här visas själva bilden/videon och dess kommentarer.
export default function MediaDetailPage({ params }: MediaDetailPageProps) {
  const { mediaId } = params;
  // Placeholder: i en riktig implementation skulle vi hämta media och kommentarer här.

  return (
    <main className="p-4">
      <Link href="/trips" className="text-blue-600 underline inline-block mb-4">
        ← Tillbaka
      </Link>
      <h1 className="text-2xl font-bold mb-4">Media {mediaId}</h1>
      <div className="mb-4">
        {/* Stor förhandsvisning */}
        <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
          <span>Mediaförhandsvisning</span>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">Beskrivning</h2>
        <p>Tillfällig beskrivning…</p>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">Kommentarer</h2>
        {/* Kommentarskomponent – sätt in CommentThread här */}
        <p>Inga kommentarer ännu.</p>
      </div>
    </main>
  );
}