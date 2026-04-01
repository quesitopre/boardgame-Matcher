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

let game_dict = {}

