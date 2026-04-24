const recommended_games = [
    {title:"Spots", image:"Catan-Cover.png", players:"1-4", rating:4, weight:"Light", tag_1:"Dice", tag_2:"Push Your Luck", game_description:"Roll and place dice to complete adorable dog cards."}, 
    {title: "Decrypto", image:"Codenames-Cover.jpg", players: "3-8", rating: 4.5, weight: "Light", tag_1: "Words", tag_2: "Teamwork", game_description: "Decipher your opponents' code before they decipher yours. Don't get caught."}, 
    {title: "Camel Up", image: "King_Of_Tokyo_Cover.webp", players: "3-8", rating: 4, weight: "Light", tag_1: "Racing", tag_2: "Betting", game_description: "Place your bets and bend the odds in this crazy camel-stacking race!"},
    {title: "Lost Ruins of Arnak", image: "King_Of_Tokyo_Cover.webp", players: "1-4", rating: 4.5, weight: "Medium", tag_1: "Adventure", tag_2: "Deck Building", game_description: "Explore an island to find resources and discover the lost ruins of Arnak."}
]

export function updateTagMap(tag1: string, tag2: string, tag3: string) {
    // Get existing hashmap saved in local storage. Get null if hashmap doesn't exist yet.
    const existing = JSON.parse(localStorage.getItem('tagMap') || '{}')

    // Insert tags of liked games into hash map 
    if(tag1 in existing){
        existing[tag1] += 1
    }
    else {
        existing[tag1] = 1
    }

    if(tag2 in existing){
        existing[tag2] += 1
    }
    else {
        existing[tag2] = 1
    }

    if(tag3 in existing) {
        existing[tag3] += 1
    }
    else {
        existing[tag3] = 1
    }

    // Save updated hashmap to local storage.
    localStorage.setItem('tagMap', JSON.stringify(existing))
}

export function getRecommendedGames() {
    // Get existing hashmap saved in local storage. Get null if hashmap doesn't exist yet. Using Record so highestTag function knows that a and b will be a number and can therefore subtract, and therefore order the hashmap properly.
    const existing = JSON.parse(localStorage.getItem('tagMap') || '{}') as Record<string, number>

    // Turns hashmap into an array of key value pairs. Sort tags in descending order. The subtraction of a and b are responsible for 
    // determining whether it will be ascending or descending order. Currently grabbing first 7 results.
    const highestTags = Object.entries(existing).sort((a, b) => b[1] - a[1]).slice(0, 7)

    // Turn array of keys and values to an array of only keys
    const highestTagsKeys = highestTags.map(tag => tag[0])

    // Empty array to hold recommended games
    const recommendedGames: typeof recommended_games = []

    for(let i = 0; i < recommended_games.length; i++) {
        let tagCounter = 0

        if(highestTagsKeys.includes(recommended_games[i].tag_1)) {
            tagCounter += 1
        }
        if(highestTagsKeys.includes(recommended_games[i].tag_2)) {
            tagCounter += 1
        }
        if(highestTagsKeys.includes(recommended_games[i].weight)) {
            tagCounter += 1
        }

        if(tagCounter > 1){
            recommendedGames.push(recommended_games[i])
        }
    }
    // Console logs to make sure recommended games is working.
    console.log('tagMap:', existing)
    console.log('highestTags:', highestTags)
    console.log('recommendedGames:', recommendedGames)
    return recommendedGames
}

