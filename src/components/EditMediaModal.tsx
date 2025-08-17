"use client";

interface EditMediaModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * En enkel modal för att redigera ett media. Den visar endast
 * ett tomt formulär och en stängknapp. I den fullständiga appen
 * skulle här finnas fält för titel, beskrivning, datum, personer,
 * hashtags och plats.
 */
export default function EditMediaModal({ open, onClose }: EditMediaModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Redigera media</h2>
        {/* Formulärfält för redigering skulle gå här */}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
}