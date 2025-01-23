export default function PlayerTableDetailed({ players }) {
  return (
    <div className="overflow-x-auto max-h-96">
      <table className="w-full text-center border-collapse">
        <thead className="bg-gray-700 text-white sticky top-0 shadow-md">
          <tr>
            <th className="px-20 py-2">Name</th>
            <th className="px-4 py-2">Nation</th>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Matches Played</th>
            <th className="px-4 py-2">Matches Started</th>
            <th className="px-4 py-2">Minutes Played</th>
            <th className="px-4 py-2">Goals</th>
            <th className="px-4 py-2">Assists</th>
            <th className="px-4 py-2">Expected Goals</th>
            <th className="px-4 py-2">Expected Assists</th>
            <th className="px-4 py-2">Penalties Scored</th>
            <th className="px-4 py-2">Yellow Cards</th>
            <th className="px-4 py-2">Red Cards</th>
            <th className="px-4 py-2">Goals per 90 minutes</th>
            <th className="px-4 py-2">Assists per 90 minutes</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr
              key={`${player.name}-${index}`}
              className={`${
                index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
              } hover:bg-gray-700`}
            >
              <td className="px-50 py-2">{player.name}</td>
              <td className="px-4 py-2">{player.nation}</td>
              <td className="px-4 py-2">{player.pos}</td>
              <td className="px-4 py-2">{player.age}</td>
              <td className="px-4 py-2">{player.mp}</td>
              <td className="px-4 py-2">{player.starts}</td>
              <td className="px-4 py-2">{player.min}</td>
              <td className="px-4 py-2">{player.gls}</td>
              <td className="px-4 py-2">{player.ast}</td>
              <td className="px-4 py-2">{player.xg}</td>
              <td className="px-4 py-2">{player.xag}</td>
              <td className="px-4 py-2">{player.pk}</td>
              <td className="px-4 py-2">{player.crdy}</td>
              <td className="px-4 py-2">{player.crdr}</td>
              <td className="px-4 py-2">{player.gls90}</td>
              <td className="px-4 py-2">{player.ast90}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
