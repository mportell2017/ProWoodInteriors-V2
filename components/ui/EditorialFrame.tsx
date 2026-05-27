/**
 * Decorative double-border + corner-tick overlay for framed editorial imagery.
 * Drop inside a `relative` image container; it fills the parent and ignores
 * pointer events. Tuned for parchment/brass on photographic backgrounds.
 */
export function EditorialFrame() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="absolute inset-3 sm:inset-4 border border-parchment/40" />
      <div className="absolute inset-4 sm:inset-5 border border-brass/30" />
      {/* Corner ticks */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 border-t-2 border-l-2 border-brass/60" />
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 border-t-2 border-r-2 border-brass/60" />
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 border-b-2 border-l-2 border-brass/60" />
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 border-b-2 border-r-2 border-brass/60" />
    </div>
  );
}
