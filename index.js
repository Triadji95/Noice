import { useState, useEffect } from 'react';

export default function NoiceCounter() {
  const [counts, setCounts] = useState({
    today: 0,
    total: 0
  });

  useEffect(() => {
    // Simulate fetching data from the Farcaster API
    const fetchData = async () => {
      // For demo, using mock data
      const todayCount = Math.floor(Math.random() * 100); // Simulates today's posts
      const totalCount = Math.floor(Math.random() * 1000); // Simulates total posts
      
      setCounts({
        today: todayCount,
        total: totalCount
      });
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="widget">
        <h2>Noice Counter</h2>
        <div className="stats">
          <div className="stat-box">
            <span className="number">{counts.today}</span>
            <span className="label">Today's Noice</span>
          </div>
          <div className="stat-box">
            <span className="number">{counts.total}</span>
            <span className="label">Total Noice</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #1a1a1a;
        }
        .widget {
          background: #2a2a2a;
          border-radius: 15px;
          padding: 20px;
          color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .stats {
          display: flex;
          gap: 20px;
        }
        .stat-box {
          background: #333;
          padding: 15px;
          border-radius: 10px;
          text-align: center;
        }
        .number {
          display: block;
          font-size: 24px;
          font-weight: bold;
          color: #00ff00;
        }
        .label {
          font-size: 14px;
          color: #888;
        }
      `}</style>
    </div>
  );
}
