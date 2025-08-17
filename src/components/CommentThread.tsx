"use client";

import { useState } from 'react';

export interface Comment {
  id: string;
  user: string;
  text: string;
  replies?: Comment[];
}

interface CommentThreadProps {
  comments: Comment[];
}

/**
 * CommentThread visar en lista av kommentarer och ett fält för att lägga till
 * egna kommentarer. Denna komponent är endast ett exempel; den saknar
 * funktionalitet för att skicka in kommentarer och visa svarstrådar.
 */
export default function CommentThread({ comments }: CommentThreadProps) {
  const [newComment, setNewComment] = useState('');

  return (
    <div className="space-y-2">
      {comments.map((comment) => (
        <div key={comment.id} className="border-b pb-2">
          <p>
            <strong>{comment.user}:</strong> {comment.text}
          </p>
          {/* Här skulle man rekursivt kunna rendera svarstrådar */}
        </div>
      ))}
      <div className="mt-2">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Skriv en kommentar…"
          className="w-full border p-2 rounded"
          rows={2}
        />
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
          Kommentera
        </button>
      </div>
    </div>
  );
}