export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-north-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="h-4 w-36 animate-pulse rounded-full bg-white/10" />
        <div className="mt-6 h-16 max-w-2xl animate-pulse rounded-lg bg-white/10" />
        <div className="mt-6 h-32 max-w-3xl animate-pulse rounded-lg bg-white/[0.07]" />
      </div>
    </div>
  );
}
