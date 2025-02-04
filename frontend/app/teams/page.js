"use client";

import { useState, useEffect } from "react";
import { fetchTeams } from "@/lib/api";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTeams() {
      try {
        const data = await fetchTeams();
        const sortedTeams = data.sort((a, b) => a.name.localeCompare(b.name));
        setTeams(sortedTeams);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getTeams();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-400 text-sm text-center">
          Please wait... The server may take up to 50 seconds to respond due to
          inactivity.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
        <p className="text-xl font-bold text-red-400">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white min-h-screen p-6">
      <h1 className="text-5xl font-extrabold text-center text-white mb-10">
        Teams
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {teams.map((team) => (
          <div
            key={team.name}
            className="bg-gray-800 rounded-lg shadow-lg p-4 hover:bg-gray-700 transition"
          >
            <a href={`/teams/${team.name}`} className="block text-center">
              <img
                src={`/images/${team.name}.svg`}
                alt={`${team.name} logo`}
                className="w-40 h-40 mx-auto mb-4"
              />
              <h1 className="text-xl font-semibold">{team.name}</h1>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
