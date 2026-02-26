import TagButton from "./Tag_Button";

export default function GameCard({ title, image, players, rating, weight, tag_1, tag_2, game_description }: { title: string; image: string; players: string; rating: number; weight: string; tag_1: string; tag_2: string; game_description: string }) {
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

        <div className="flex gap-2 px-2 mt-2">
          <TagButton description={weight} />
          <TagButton description={tag_1} />
          <TagButton description={tag_2} />
        </div>
       
        <p>{game_description}</p>

        <div className="flex gap-3 px-2">
          <button className="flex-1 bg-purple-500 rounded-xl px-5 py-2 text-lg cursor-pointer hover:scale-110 duration-300 ease-in-out">Not for me</button>
          <button className="flex-1 bg-purple-500 rounded-xl px-5 py-2 text-lg cursor-pointer hover:scale-110 duration-300 ease-in-out">Love it!</button>
        </div>
      </div>
    </main>
  );
}
