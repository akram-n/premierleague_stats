"use client";

import { useState, useEffect } from "react";
import PlayerTable from "@/components/PlayerTable";
import SearchBar from "@/components/SearchBar";
import CompareButton from "@/components/CompareButton";
import { fetchPlayers } from "@/lib/api";

export default function PlayersPage() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPlayers() {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
        setFilteredPlayers(data);
      } catch (error) {
        console.error("Error fetching players:", error.message);
        setError("Failed to load player data.");
      } finally {
        setLoading(false);
      }
    }
    getPlayers();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPlayers(players);
    } else {
      setFilteredPlayers(
        players.filter((player) =>
          player.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, players]);

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-gray-800 p-8 shadow-lg rounded-lg">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12">
          Player Statistics
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            className="w-full md:w-1/3"
          />
          <CompareButton className="mt-4 md:mt-0" />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="flex justify-center">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400">{error}</div>
        ) : (
          <>
            <div className="mb-8 text-center text-gray-300">
              <p className="text-xl">
                Explore the statistics of your favorite football players.
              </p>
              <p className="text-lg mt-4">
                Use the search bar above to find a player, or click "Compare" to
                see how players stack up against each other.
              </p>
            </div>

            <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
              <PlayerTable players={filteredPlayers} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
