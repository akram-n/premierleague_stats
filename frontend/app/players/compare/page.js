import PlayerComparison from "@/components/PlayerComparison";
import { fetchPlayers } from "@/lib/api";

export default async function ComparePlayersPage() {
  let players = [];

  try {
    players = await fetchPlayers();
  } catch (error) {
    console.error("Error fetching players:", error.message);
  }

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 min-h-screen text-white p-6">
      <div className="max-w-6xl mx-auto bg-gray-800 p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Compare Players</h1>
        <PlayerComparison players={players} />
      </div>
    </div>
  );
}
