export default function TagButton({ description }: { description: string }) {
    return(
        <button className="bg-purple-500 text-xs rounded-2xl px-3 py-2">{description}</button>
    );
}