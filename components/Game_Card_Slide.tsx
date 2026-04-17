'use client'
import { useState, useEffect } from 'react'
import Link from "next/link";
import GameCard from "./Game-Card"
import { updateTagMap, getRecommendedGames } from "@/lib/recommendations"

// Not in function because the data doesn't change. If it's inside the function, React would recreate array in memory on every render which is wasteful.
const games = [
        {title:"Catan", image:"Catan-Cover.png", players:"3-4", rating:5, weight:"Medium", tag_1:"Strategy", tag_2:"Trade", game_description:"Collect and trade resources to build up the island of Catan in this modern classic."}, 
        {title: "Codenames", image:"Codenames-Cover.jpg", players: "4-12", rating: 4.5, weight: "Light", tag_1: "Words", tag_2: "Teamwork", game_description: "Give your team clever one-word clues to help them spot their agents in the field."}, 
        {title: "King of Tokyo", image: "King_Of_Tokyo_Cover.webp", players: "3-6", rating: 4, weight: "Light", tag_1: "Dice", tag_2: "Fighting", game_description: "Prove your dominance by destroying Tokyou or by being the last monster left standing."}
    ]
export default function GameCardSlide() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLeaving, setIsLeaving] = useState(false)
    const [votes, setVotes] = useState({ liked: 0, disliked: 0 })

    // Handles vote and triggers slide animation.
    const handleVote = (type: 'liked' | 'disliked') => {
        if(type == 'liked') {
            updateTagMap(games[currentIndex].tag_1, games[currentIndex].tag_2, games[currentIndex].weight)
        }
        setVotes(prev => ({ ...prev, [type]: prev[type] + 1}))
        setIsLeaving(true)
        setTimeout(() => {
            setCurrentIndex(prev => prev + 1)
            setIsLeaving(false)
        }, 800)
        
        // Testing recommended games here
        if( currentIndex == games.length - 1){
            getRecommendedGames()
        }
    }

    // Clear local storage storage when component mounts, such as on page refreshes.
    useEffect(() => {
        localStorage.removeItem('tagMap')
    }, [])

    // useEffect(() => {
    //     const fetchGames = async () => {
    //         const response = await fetch('/api/games')
    //         const data = await response.json()
    //         console.log(data)
    //     }

    //     fetchGames()
    // }, [])

    // if (currentIndex >= games.length) {
    //     return <div>No more games!</div>
    // }

    return (
        <div className="w-full flex flex-col gap-10 items-center justify-center">
            <div className="flex justify-center gap-10">
                <p className="bg-purple-500 rounded-full px-5 py-2 text-xl">{votes.liked} Liked</p>
                <p className="bg-purple-500 rounded-full px-5 py-2 text-xl">{votes.disliked} Disliked</p>
            </div>
            
            {/* Progress Bar render */}
            <div className="w-full h-3 bg-gray-300 rounded-2xl ">
                <div 
                    className="h-3 bg-purple-500 rounded-2xl transition duration-300"
                    style={{ width: `${(currentIndex / games.length) * 100}%`}}
                ></div>
            </div>

            { currentIndex >= games.length 
                ? 
                    <div className="flex flex-col gap-5">
                        No more games!
                        <Link href="/recommendation">
                            <button className="bg-purple-500 text-white cursor-pointer text-lg rounded-xl py-3 px-5 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">
                                Check out your recommendations!
                            </button>
                        </Link>
                    </div> 
                : 
                    <div className="w-full relative flex justify-center bg-red-100">
                        {/* Top card */}
                        <div className={`absolute z-10 ${isLeaving ? 'animate-fly-left': ''}`}>
                            <GameCard {...games[currentIndex]} onLike={() => handleVote('liked')} onDislike={() => handleVote('disliked')} />
                        </div>

                        {/* Render next card underneath */}
                        { currentIndex + 1 < games.length &&
                            <div className="absolute z-0">
                                <GameCard {...games[currentIndex + 1]} />
                            </div>
                        }
                    </div>
            }
            
        </div>
    )
}