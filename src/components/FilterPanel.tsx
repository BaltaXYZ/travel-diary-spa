"use client";

import { useState } from 'react';

/**
 * FilterPanel visar en enkel filtreringskontroll för datumintervall. I den
 * fullständiga appen kommer fler fält som personer, taggar och mediatyp
 * att läggas till här. State hanteras lokalt, men kan i stället
 * synkroniseras med URL‑parametrar eller ett globalt tillstånd.
 */
export default function FilterPanel() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <div className="border p-4 rounded bg-white shadow-sm space-y-3">
      <h2 className="font-semibold text-lg">Filtrera</h2>
      <div>
        <label className="block text-sm font-medium mb-1">Från datum</label>
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Till datum</label>
        <input
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <p className="text-sm text-gray-500">
        Fler filter (personer, taggar, mediatyp, plats) implementeras vid
        senare utveckling.
      </p>
    </div>
  );
}