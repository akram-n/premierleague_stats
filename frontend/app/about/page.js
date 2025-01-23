export default function AboutPage() {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6">About This App</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome to the Player Stats App! This application allows you to view,
          manage, and compare player statistics for your favorite teams. It’s
          built using modern web technologies like Next.js and Tailwind CSS,
          ensuring a fast and responsive user experience.
        </p>
      </div>
    </div>
  );
}
