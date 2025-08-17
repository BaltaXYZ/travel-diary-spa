interface TripSettingsPageProps {
  params: {
    tripId: string;
  };
}

// Sidan för att hantera resans inställningar, deltagare och delning.
export default function TripSettingsPage({ params }: TripSettingsPageProps) {
  const { tripId } = params;
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Inställningar för resa {tripId}
      </h1>
      <p>
        Här kan du hantera deltagare, sekretessinställningar, delningslänkar
        och standardtaggar för resan.
      </p>
    </main>
  );
}