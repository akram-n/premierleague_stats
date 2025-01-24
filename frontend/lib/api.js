export async function fetchPlayers() {
  const response = await fetch(
    "https://premierleague-stats.onrender.com/api/v1/players"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch players");
  }
  return await response.json();
}

export async function fetchTeams() {
  const response = await fetch(
    "https://premierleague-stats.onrender.com/api/v1/teams"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch teams");
  }
  return await response.json();
}

export async function fetchTeamDetails(slug) {
  const response = await fetch(
    `https://premierleague-stats.onrender.com/api/v1/teams/${slug}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch team details");
  }
  return await response.json();
}
