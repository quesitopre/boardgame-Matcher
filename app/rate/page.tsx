import GameCard from "@/components/Game-Card";
import GameCardSlide from "@/components/Game_Card_Slide";
export default function Rate() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-5/8 text-center space-y-10">
        <h1 className="text-4xl font-bold">Rate Some Games</h1>
        <h2 className="text-xl text-white">Rate at least 3 games to get recommendations.</h2>

        <div className="flex justify-center gap-10">
          <p className="bg-purple-500 rounded-full px-5 py-2 text-xl">0 Liked</p>
          <p className="bg-purple-500 rounded-full px-5 py-2 text-xl">0 Disliked</p>
        </div>

        {/* <div className="w-full h-3 bg-gray-300 rounded-2xl">
          <div className="w-[50%] h-3 bg-purple-500 rounded-2xl transition duration-300"></div>
        </div> */}

        {/* <GameCard title="Catan" image="Catan-Cover.png" players="3-4" rating={5} weight="Medium" tag_1="Strategy" tag_2="Trade" game_description="Settlement Game" />
        <GameCard title="Codenames" image="Codenames-Cover.jpg" players="4-12" rating={4.5} weight="Light" tag_1="Words" tag_2="Teamwork" game_description="Party Game" /> */}

        {/* <div className=" bg-amber-100 w-full"> */}
        <GameCardSlide />
        {/* </div> */}
      
      </div>
    </div>
  );
}
