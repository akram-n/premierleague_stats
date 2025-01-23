"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchTeamDetails } from "@/lib/api";
import PlayerTable from "@/components/PlayerTable";
import PlayerTableDetailed from "@/components/PlayerTableDetailed";

export default function TeamPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [team, setTeam] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadTeamDetails() {
      try {
        const data = await fetchTeamDetails(slug);
        setTeam(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadTeamDetails();
  }, [slug]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500">
        <p className="text-red-500 text-lg font-medium">{error}</p>
      </div>
    );
  }

  if (!team) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500">
        <p className="text-gray-500 text-lg font-medium">
          Loading team details...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 min-h-screen text-white p-6">
      <div className="max-w-6xl mx-auto bg-gray-800 p-8 shadow-lg rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <img
            src={`/images/${team.name}.svg`}
            alt={`${team.name} logo`}
            className="w-24 h-24 mr-4"
          />
          <h1 className="text-5xl font-bold text-white">{team.name}</h1>
          <div className="text-right ml-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Total Stats</h2>
            <ul className="text-white text-lg space-y-2">
              <li>
                <span className="font-medium">Total Goals:</span>{" "}
                {team.totalGoals}
              </li>
              <li>
                <span className="font-medium">Total Assists:</span>{" "}
                {team.totalAssists}
              </li>
              <li>
                <span className="font-medium">Total Yellow Cards:</span>{" "}
                {team.totalYellowCards}
              </li>
              <li>
                <span className="font-medium">Total Red Cards:</span>{" "}
                {team.totalRedCards}
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-white">Players</h2>

        <div className="overflow-x-auto max-h-96">
          <PlayerTableDetailed players={team.players} />
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg transition hover:bg-gray-200"
            onClick={() => router.push("/teams")}
          >
            Back to Teams
          </button>
        </div>
      </div>
    </div>
  );
}
