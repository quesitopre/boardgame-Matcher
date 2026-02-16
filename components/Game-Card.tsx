export default function GameCard({ title, image, players, description }: { title: string; image: string; players: string; description: string }) {
  return (
    <main>
      <div className="bg-red-100">
        <div className="flex justify-around items-center">
          <img src={image} className="h-60 bg-amber-100" />
          <div className="text-left">
            <h2 className="bg-amber-500 h-fit text-2xl">{title}</h2>
            <h3 className="bg-amber-500 h-fit text-lg">{players} Players</h3>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </main>
  );
}
