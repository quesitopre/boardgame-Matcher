export default function GameCard({ title, image, description }: { title: string; image: string; description: string }) {
  return (
    <main className="bg-green-200">
      <div>
        <img src={image} className="h-70" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </main>
  );
}
