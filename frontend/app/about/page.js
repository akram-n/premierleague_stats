export default function AboutPage() {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6">About This App</h1>
        <p className="text-lg text-gray-300 leading-relaxed text-justify">
          Welcome to the Player Stats App! This application allows you to view,
          manage, and compare Premier League player and team statistics with
          ease. The backend is built using Spring Boot and Docker, ensuring
          scalability and ease of deployment. The services are containerized
          with Docker and deployed to Render, while the PostgreSQL database is
          hosted on Render for reliable data storage. The frontend is built
          using modern web technologies like Next.js and Tailwind CSS, providing
          a fast and responsive user experience, and is deployed on Vercel for
          seamless hosting.
        </p>
      </div>
    </div>
  );
}
