import { MediaCard, MediaCardProps } from './MediaCard';

interface MediaGridProps {
  items: MediaCardProps[];
}

/**
 * MediaGrid renderar ett rutnät av MediaCards. Den tar emot en lista
 * av medieobjekt och visar dem. Ett grid används för responsiv layout.
 */
export default function MediaGrid({ items }: MediaGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <MediaCard
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnailUrl={item.thumbnailUrl}
        />
      ))}
    </div>
  );
}