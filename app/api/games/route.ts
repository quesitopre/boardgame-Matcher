export async function GET() {
    const response = await fetch('https://boardgamegeek.com/xmlapi2/thing?id=13', {
        headers: {
            'User-Agent': 'BoardGameMatchmaker'
        }
    })
    const text = await response.text()
    console.log(text)
    return Response.json({ data: text })
}