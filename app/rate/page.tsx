export default function Rate() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center space-y-10">
        <h1 className="text-4xl font-bold">Rate Some Games</h1>
        <h2 className="text-xl text-white">
          Rate at least 3 games to get recommendations.
        </h2>

        <div className="flex justify-center gap-10">
          <p className="bg-purple-500 rounded-full px-5 py-2 text-xl">
            0 Liked
          </p>
          <p className="bg-purple-500 rounded-full px-5 py-2 text-xl">
            0 Disliked
          </p>
        </div>
      </div>
    </main>
  );
}
