import React, { useState, useEffect } from 'react';

function WeatherDashboard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('London');
  const [inputCity, setInputCity] = useState('');

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // Fetch weather data
  const fetchWeather = async (searchCity = city) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeather(data);
      setCity(searchCity);
      
      // Update document title
      document.title = `${Math.round(data.main.temp)}°C - ${data.name}`;
      
    } catch (err) {
      setError(err.message);
      document.title = 'Weather Dashboard';
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch on mount
  useEffect(() => {
    fetchWeather();
  }, []);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeather();
    }, 300000); // 5 minutes = 300000ms

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [city]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      fetchWeather(inputCity.trim());
      setInputCity('');
    }
  };

  // Get weather icon
  const getWeatherIcon = (main) => {
    const icons = {
      Clear: '☀️',
      Clouds: '☁️',
      Rain: '🌧️',
      Snow: '❄️',
      Thunderstorm: '⛈️',
      Drizzle: '🌦️',
      Mist: '🌫️',
      Fog: '🌫️',
    };
    return icons[main] || '🌤️';
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Weather Dashboard</h1>
          <p style={styles.subtitle}>Real-time weather information</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} style={styles.searchForm}>
          <input
            type="text"
            placeholder="Search city..."
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            🔍 Search
          </button>
        </form>

        {/* Loading State */}
        {loading && (
          <div style={styles.loading}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>Loading weather data...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div style={styles.error}>
            <span style={styles.errorIcon}>⚠️</span>
            <p style={styles.errorText}>{error}</p>
            <p style={styles.errorHint}>Please try another city</p>
          </div>
        )}

        {/* Weather Data */}
        {weather && !loading && !error && (
          <div style={styles.weatherContent}>
            {/* City Name */}
            <div style={styles.citySection}>
              <h2 style={styles.cityName}>{weather.name}</h2>
              <p style={styles.country}>{weather.sys.country}</p>
            </div>

            {/* Weather Icon & Temp */}
            <div style={styles.mainInfo}>
              <div style={styles.iconLarge}>
                {getWeatherIcon(weather.weather[0].main)}
              </div>
              <div style={styles.temperature}>
                {Math.round(weather.main.temp)}°C
              </div>
              <div style={styles.description}>
                {weather.weather[0].description}
              </div>
            </div>

            {/* Weather Details Grid */}
            <div style={styles.detailsGrid}>
              <div style={styles.detailCard}>
                <span style={styles.detailIcon}>🌡️</span>
                <div style={styles.detailInfo}>
                  <p style={styles.detailLabel}>Feels Like</p>
                  <p style={styles.detailValue}>
                    {Math.round(weather.main.feels_like)}°C
                  </p>
                </div>
              </div>

              <div style={styles.detailCard}>
                <span style={styles.detailIcon}>💧</span>
                <div style={styles.detailInfo}>
                  <p style={styles.detailLabel}>Humidity</p>
                  <p style={styles.detailValue}>{weather.main.humidity}%</p>
                </div>
              </div>

              <div style={styles.detailCard}>
                <span style={styles.detailIcon}>💨</span>
                <div style={styles.detailInfo}>
                  <p style={styles.detailLabel}>Wind Speed</p>
                  <p style={styles.detailValue}>{weather.wind.speed} m/s</p>
                </div>
              </div>

              <div style={styles.detailCard}>
                <span style={styles.detailIcon}>🔽</span>
                <div style={styles.detailInfo}>
                  <p style={styles.detailLabel}>Pressure</p>
                  <p style={styles.detailValue}>{weather.main.pressure} hPa</p>
                </div>
              </div>
            </div>

            {/* Refresh Button */}
            <button 
              onClick={() => fetchWeather()} 
              style={styles.refreshButton}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
              🔄 Refresh
            </button>

            {/* Auto-refresh Info */}
            <p style={styles.autoRefreshText}>
              Auto-refreshes every 5 minutes
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Subtle, clean styling
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    maxWidth: '600px',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#1e293b',
    margin: '0 0 10px 0',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#64748b',
    margin: '0',
  },
  searchForm: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
  },
  searchInput: {
    flex: 1,
    padding: '12px 20px',
    fontSize: '1rem',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    outline: 'none',
    transition: 'border 0.3s',
  },
  searchButton: {
    padding: '12px 25px',
    fontSize: '1rem',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
    gap: '20px',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid #e2e8f0',
    borderTop: '4px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    color: '#64748b',
    fontSize: '1rem',
  },
  error: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#fef2f2',
    borderRadius: '15px',
    border: '2px solid #fee2e2',
  },
  errorIcon: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '15px',
  },
  errorText: {
    color: '#dc2626',
    fontSize: '1.1rem',
    margin: '0 0 10px 0',
    fontWeight: '600',
  },
  errorHint: {
    color: '#64748b',
    fontSize: '0.9rem',
    margin: '0',
  },
  weatherContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  citySection: {
    textAlign: 'center',
  },
  cityName: {
    fontSize: '2rem',
    color: '#1e293b',
    margin: '0 0 5px 0',
    fontWeight: '700',
  },
  country: {
    fontSize: '1rem',
    color: '#64748b',
    margin: '0',
  },
  mainInfo: {
    textAlign: 'center',
    padding: '30px 0',
    backgroundColor: '#f8fafc',
    borderRadius: '15px',
  },
  iconLarge: {
    fontSize: '5rem',
    marginBottom: '15px',
  },
  temperature: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#1e293b',
    margin: '10px 0',
  },
  description: {
    fontSize: '1.3rem',
    color: '#64748b',
    textTransform: 'capitalize',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
  },
  detailCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '20px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  detailIcon: {
    fontSize: '2rem',
  },
  detailInfo: {
    flex: 1,
  },
  detailLabel: {
    fontSize: '0.85rem',
    color: '#64748b',
    margin: '0 0 5px 0',
  },
  detailValue: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0',
  },
  refreshButton: {
    padding: '15px',
    fontSize: '1.1rem',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s',
  },
  autoRefreshText: {
    textAlign: 'center',
    fontSize: '0.85rem',
    color: '#94a3b8',
    margin: '0',
  },
};

export default WeatherDashboard;