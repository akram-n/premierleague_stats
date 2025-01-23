export default function PlayerTable({ players }) {
  const sortedPlayers = [...players].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="overflow-x-auto max-h-96">
      <table className="w-full text-left border-collapse table-auto">
        <thead className="bg-gray-700 text-white sticky top-0">
          <tr>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Nation</th>
            <th className="px-4 py-3 font-semibold">Position</th>
            <th className="px-4 py-3 font-semibold text-right">Age</th>
            <th className="px-4 py-3 font-semibold text-right">
              Matches Played
            </th>
            <th className="px-4 py-3 font-semibold text-right">Goals</th>
            <th className="px-4 py-3 font-semibold text-right">Assists</th>
            <th className="px-4 py-3 font-semibold text-right">Yellow Cards</th>
            <th className="px-4 py-3 font-semibold text-right">Red Cards</th>
            <th className="px-4 py-3 font-semibold">Team</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr
              key={`${player.name}-${index}`}
              className={`${
                index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
              } hover:bg-gray-700`}
            >
              <td className="px-4 py-2">{player.name}</td>
              <td className="px-4 py-2 text-center">{player.nation}</td>
              <td className="px-4 py-2 text-center">{player.pos}</td>
              <td className="px-4 py-2 text-right">{player.age}</td>
              <td className="px-4 py-2 text-right">{player.mp}</td>
              <td className="px-4 py-2 text-right">{player.gls}</td>
              <td className="px-4 py-2 text-right">{player.ast}</td>
              <td className="px-4 py-2 text-right">{player.crdy}</td>
              <td className="px-4 py-2 text-right">{player.crdr}</td>
              <td className="px-4 py-2">{player.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
