"use client";

import { useState } from "react";

export default function PlayerComparison({ players }) {
  const [searchTerms, setSearchTerms] = useState(["", ""]);
  const [filteredPlayers, setFilteredPlayers] = useState([[], []]);
  const [selectedPlayers, setSelectedPlayers] = useState([null, null]);

  const handleSearchChange = (index, value) => {
    const updatedSearchTerms = [...searchTerms];
    updatedSearchTerms[index] = value;
    setSearchTerms(updatedSearchTerms);

    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(value.toLowerCase())
    );
    const updatedFilteredPlayers = [...filteredPlayers];
    updatedFilteredPlayers[index] = filtered;
    setFilteredPlayers(updatedFilteredPlayers);
  };

  const handlePlayerSelect = (index, player) => {
    const updatedSelectedPlayers = [...selectedPlayers];
    updatedSelectedPlayers[index] = player;
    setSelectedPlayers(updatedSelectedPlayers);

    const updatedSearchTerms = [...searchTerms];
    updatedSearchTerms[index] = "";
    setSearchTerms(updatedSearchTerms);

    const updatedFilteredPlayers = [...filteredPlayers];
    updatedFilteredPlayers[index] = [];
    setFilteredPlayers(updatedFilteredPlayers);
  };

  const PlayerDetails = ({ player }) => (
    <div className="border p-4 rounded bg-gray-700 text-gray-200">
      <h3 className="text-lg font-bold">
        {player ? player.name : "No Player Selected"}
      </h3>
      {player && (
        <ul className="mt-2">
          <li>Nation: {player.nation}</li>
          <li>Position: {player.pos}</li>
          <li>Matches Played: {player.mp}</li>
          <li>Goals: {player.gls}</li>
          <li>Assists: {player.ast}</li>
          <li>Team: {player.team}</li>
        </ul>
      )}
    </div>
  );

  return (
    <div className="shadow rounded p-6 bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {searchTerms.map((term, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Search for Player {index + 1}
            </label>
            <input
              type="text"
              placeholder={`Search Player ${index + 1}`}
              value={term}
              onChange={(e) => handleSearchChange(index, e.target.value)}
              className="w-full px-4 py-2 border rounded text-black"
            />
            {filteredPlayers[index].length > 0 && (
              <ul className="border rounded mt-2 max-h-40 overflow-y-auto bg-gray-700 text-gray-200">
                {filteredPlayers[index].map((player) => (
                  <li
                    key={player.id}
                    onClick={() => handlePlayerSelect(index, player)}
                    className="cursor-pointer px-2 py-1 hover:bg-gray-600"
                  >
                    {player.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedPlayers.map((player, index) => (
          <PlayerDetails key={index} player={player} />
        ))}
      </div>
    </div>
  );
}
