import GameCard from "./Game-Card"

export default function GameCardSlide() {
    let game_cards = [
        <GameCard title="Catan" image="Catan-Cover.png" players="3-4" rating={5} weight="Medium" tag_1="Strategy" tag_2="Trade" game_description="Collect and trade resources to build up the island of Catan in this modern classic." />,
        <GameCard title="Codenames" image="Codenames-Cover.jpg" players="4-12" rating={4.5} weight="Light" tag_1="Words" tag_2="Teamwork" game_description="Give your team clever one-word clues to help them spot their agents in the field. " />,
        <GameCard title="King of Tokyo" image="King_of_Tokyo_Cover.webp" players="3-6" rating={4} weight="Light" tag_1="Dice" tag_2="Fighting" game_description="Prove your dominance by destroying Tokyo or by being the last monster left standing." />
    ]

    return (
        <main>
            {game_cards}
        </main>
    )
}