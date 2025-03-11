'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-12 w-full max-w-[500px] h-screen mx-auto py-16 px-6 text-black dark:text-white">
      <h2>Something went wrong!</h2>
      <div className="overflow-auto w-80 h-56 rounded-md p-3 border">
        <p className="font-mono text-xs">{error.stack}</p>
      </div>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
