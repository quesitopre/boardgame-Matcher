export default function GameCard({ title, image, players, rating, description }: { title: string; image: string; players: string; rating: number;description: string }) {
  return (
    <main>
      <div className="bg-gray-400 rounded-xl">
        <div className="flex items-center">
          <img src={image} className="flex-1 max-h-60 max-w-1/2 rounded-tl-xl" />
          <div className="flex-1 text-center space-y-2">
            <h2 className="text-2xl font-bold">{title}</h2>
            <h3 className="text-lg"> {players}</h3>
            <h3 className="text-lg">{rating}</h3>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </main>
  );
}
