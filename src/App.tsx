import { Routes, Route, Link, Navigate } from "react-router-dom";
function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="p-4 border-b bg-white">
        <nav className="flex gap-4">
          <Link to="/">Hem</Link>
          <Link to="/trips">Resor</Link>
          <Link to="/people">Personer</Link>
          <Link to="/tags">Taggar</Link>
        </nav>
      </header>
      <main className="p-4 max-w-5xl mx-auto">{children}</main>
    </div>
  );
}
function Home() { return <div>Välkommen - logga in & börja skapa resor.</div>; }
function Trips() { return <div>Lista resor (placeholder).</div>; }
function TripGallery() { return <div>Galleri (placeholder).</div>; }
function Upload() { return <div>Uppladdning (placeholder).</div>; }
function MediaDetail() { return <div>Media-detalj (placeholder).</div>; }
function TripSettings() { return <div>Resinställningar (placeholder).</div>; }
function People() { return <div>Personregister (placeholder).</div>; }
function Tags() { return <div>Taggar (placeholder).</div>; }
function YTCallback() { return <div>YouTube OAuth callback (placeholder).</div>; }
export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/:tripId" element={<TripGallery />} />
        <Route path="/trips/:tripId/upload" element={<Upload />} />
        <Route path="/media/:mediaId" element={<MediaDetail />} />
        <Route path="/trips/:tripId/settings" element={<TripSettings />} />
        <Route path="/people" element={<People />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/yt-callback" element={<YTCallback />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Shell>
  );
}
