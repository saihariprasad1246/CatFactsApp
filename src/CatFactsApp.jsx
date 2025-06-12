import React, { useState } from 'react';
import axios from 'axios';

const CatFactsApp = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRandomFact = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch (err) {
      setError('Oops! Something went wrong. Please try again.');
      console.error('Error fetching cat fact:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Cat Facts
          </h1>
          <p className="text-xl text-purple-200 opacity-90">
            Discover amazing facts about our feline friends
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          {/* Fact Display */}
          <div className="mb-8">
            {fact && !loading && (
              <div className="animate-fade-in">
                <div className="text-2xl mb-4">🐱</div>
                <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
                  "{fact}"
                </p>
              </div>
            )}
            
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                <span className="ml-4 text-white text-lg">Fetching a purr-fect fact...</span>
              </div>
            )}
            
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-6 text-center">
                <div className="text-2xl mb-2">😿</div>
                <p className="text-red-200 text-lg">{error}</p>
              </div>
            )}
            
            {!fact && !loading && !error && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🐾</div>
                <p className="text-white/70 text-lg">
                  Click the button below to discover an amazing cat fact!
                </p>
              </div>
            )}
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              onClick={fetchRandomFact}
              disabled={loading}
              className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            >
              {loading ? 'Getting Fact...' : fact ? 'Get Another Fact' : 'Get Random Cat Fact'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-purple-300/60 text-sm">
            Powered by CatFact.ninja API
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CatFactsApp;