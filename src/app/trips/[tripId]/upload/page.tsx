interface UploadPageProps {
  params: {
    tripId: string;
  };
}

// Sidan för uppladdning av media till en resa. Denna version visar ett enkelt formulär med filuppladdning.
export default function UploadPage({ params }: UploadPageProps) {
  const { tripId } = params;
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ladda upp till resa {tripId}</h1>
      <form>
        <div className="mb-4">
          <label className="block font-medium mb-2">Bilder</label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Videor</label>
          <input
            type="file"
            accept="video/*"
            multiple
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Ladda upp
        </button>
      </form>
    </main>
  );
}