'use client'
import { useState } from 'react'
import GameCard from "./Game-Card"

// Not in function because the data doesn't change. If it's inside the function, React would recreate array in memory on every render which is wasteful.
const games = [
        {title:"Catan", image:"Catan-Cover.png", players:"3-4", rating:5, weight:"Medium", tag_1:"Strategy", tag_2:"Trade", game_description:"Collect and trade resources to build up the island of Catan in this modern classic."}, 
        {title: "Codenames", image:"Codenames-Cover.jpg", players: "4-12", rating: 4.5, weight: "Light", tag_1: "Words", tag_2: "Teamwork", game_description: "Give your team clever one-word clues to help them spot their agents in the field."}, 
        {title: "King of Tokyo", image: "King_Of_Tokyo_Cover.webp", players: "3-6", rating: 4, weight: "Light", tag_1: "Dice", tag_2: "Fighting", game_description: "Prove your dominance by destroying Tokyou or by being the last monster left standing."}
    ]
export default function GameCardSlide() {
    const [currentIndex, setCurrrentIndex] = useState(0)

    if (currentIndex >= games.length) {
        return <div>No more games!</div>
    }

    return (
        <div>
            {/* Top card */}
            <div>
                <GameCard {...games[currentIndex]} />
            </div>

            {/* Render next card underneath */}
            <div>
                <GameCard {...games[currentIndex + 1]} />
            </div>
        </div>
    )
}