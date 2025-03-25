import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-bold text-center mb-4">TuneZ</h1>
        <p className="text-xl text-center text-purple-200">Your Ultimate Music Experience & Merchandise Platform</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-800 bg-opacity-30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Music Streaming</h3>
              <p className="text-purple-200">Listen to your favorite tracks anytime, anywhere. High-quality streaming with personalized playlists.</p>
            </div>
            <div className="bg-purple-800 bg-opacity-30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Artist Upload</h3>
              <p className="text-purple-200">Artists can easily upload and share their music with fans worldwide.</p>
            </div>
            <div className="bg-purple-800 bg-opacity-30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Merchandise Store</h3>
              <p className="text-purple-200">Shop exclusive artist merchandise including CDs, posters, and more!</p>
            </div>
          </div>
        </section>

        {/* Repository Links */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Project Repositories</h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/your-frontend-repo"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Repository
            </a>
            <a
              href="https://github.com/your-backend-repo"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend Repository
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-purple-200">
        <p>&copy; 2024 TuneZ. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
