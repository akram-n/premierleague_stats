import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-gray-200 min-h-[90vh] flex flex-col justify-center items-center text-center p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Welcome to Player Stats
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover comprehensive statistics for players and teams. Analyze,
            compare, and stay ahead with insights from the world of football.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/players"
              className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg transition transform hover:bg-gray-200 hover:scale-105"
            >
              Explore Players
            </Link>
            <Link
              href="/teams"
              className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg border border-gray-600 transition transform hover:bg-gray-600 hover:scale-105"
            >
              Explore Teams
            </Link>
          </div>
        </div>
        <div className="absolute bottom-4 text-sm text-gray-400">
          <p>Trusted by football enthusiasts worldwide</p>
        </div>
      </section>

      <section className="bg-gray-800 text-gray-200 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Player Stats?
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Whether you're a fan, analyst, or coach, we provide tools to explore
            stats and trends that matter. Here's what we offer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-4">
                Comprehensive Player Data
              </h3>
              <p className="text-gray-400">
                Explore detailed player profiles, including goals, assists,
                positions, and more.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-4">
                Team Performance Insights
              </h3>
              <p className="text-gray-400">
                Analyze team statistics, compare performances, and track
                progress.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-4">
                Comparison Tools
              </h3>
              <p className="text-gray-400">
                Use our advanced tools to compare players and teams
                head-to-head.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-4">
                More to come...
              </h3>
              <p className="text-gray-400">
                Look out for additional features with future updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Ready to Explore Football Stats Like Never Before?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Jump right in and discover the statistics that fuel the beautiful
            game.
          </p>
          <Link
            href="/players"
            className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg transition transform hover:bg-gray-200 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
