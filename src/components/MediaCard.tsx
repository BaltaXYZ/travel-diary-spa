"use client";

import Link from 'next/link';

export interface MediaCardProps {
  id: string;
  title: string;
  thumbnailUrl?: string;
}

/**
 * MediaCard visar en tumnagel för foto eller film. Klick leder till
 * detaljsidan för mediat.
 */
export function MediaCard({ id, title, thumbnailUrl }: MediaCardProps) {
  return (
    <div className="border rounded overflow-hidden shadow-sm bg-white">
      <Link href={`/media/${id}`}>
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          {thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnailUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-sm text-gray-500">Ingen bild</span>
          )}
        </div>
        <div className="p-2">
          <p className="text-sm font-medium truncate">{title}</p>
        </div>
      </Link>
    </div>
  );
}