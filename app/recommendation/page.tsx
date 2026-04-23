import GameCard from "../components/Game-Card.tsx"
import { getRecommendedGames } from "@/lib/recommendations"

export default function Recommendation(){

    const recommended_games = getRecommendedGames()

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-2xl">Games We Recommend!</h1>

            {
                recommended_games.map((game) => {
                    <GameCard />
                })
            }
        </div>
    );
}