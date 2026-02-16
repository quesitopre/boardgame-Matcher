export default function GameCard({ title, image, players, description }: { title: string; image: string; players: string; description: string }) {
  return (
    <main>
      <div className="bg-red-100">
        <div className="flex justify-around items-center">
          <img src={image} className="flex-1 h-60 bg-amber-100" />
          <div className="flex-1 text-left space-y-2">
            <h2 className="bg-amber-500 h-fit w-fit text-2xl font-bold">{title}</h2>
            <h3 className="bg-amber-500 h-fit w-fit text-lg">{players} Players</h3>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </main>
  );
}
