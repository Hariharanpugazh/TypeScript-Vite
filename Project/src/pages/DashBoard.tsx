import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const priceChartRef = useRef<HTMLCanvasElement>(null);
  const shareChartRef = useRef<HTMLCanvasElement>(null);
  const salesChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (agreed) {
      new Chart(priceChartRef.current!, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Gold Price ($)',
            data: [1900, 1950, 2000, 2025, 2050, 2100],
            borderColor: '#d4af37',
            tension: 0.3
          }]
        }
      });

      new Chart(shareChartRef.current!, {
        type: 'pie',
        data: {
          labels: ['Jewelry', 'Bullion', 'Investment', 'Coins'],
          datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: ['#ffd700', '#ffc107', '#ffca28', '#fff176']
          }]
        }
      });

      new Chart(salesChartRef.current!, {
        type: 'bar',
        data: {
          labels: ['USA', 'India', 'China', 'UAE'],
          datasets: [{
            label: 'Sales (tons)',
            data: [300, 450, 500, 200],
            backgroundColor: '#fbc02d'
          }]
        }
      });
    }
  }, [agreed]);

  if (!agreed) {
    return (
      <div className="modal">
        <div className="terms-box">
          <h2>Terms and License Agreement</h2>
          <p>By clicking Agree, you accept the terms to use this dashboard for gold marketing analytics.</p>
          <button onClick={() => setAgreed(true)}>Agree</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h1>GoldPro</h1>
        <nav>
          <a href="#">Overview</a>
          <a href="#">Sales</a>
          <a href="#">Analytics</a>
          <a href="#">Campaigns</a>
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <h2>Gold Marketing Dashboard</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="User" className="avatar" />
        </header>

        <section className="info-section">
          <div className="info-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1355/1355730.png" alt="Price" />
            <div>
              <h3>$2100</h3>
              <p>Current Gold Price</p>
            </div>
          </div>
          <div className="info-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Leads" />
            <div>
              <h3>12.4K</h3>
              <p>New Leads</p>
            </div>
          </div>
          <div className="info-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="Conversion" />
            <div>
              <h3>8.2%</h3>
              <p>Conversion Rate</p>
            </div>
          </div>
        </section>

        <section className="charts-section">
          <div className="chart-card">
            <h4>Gold Price Trend</h4>
            <canvas ref={priceChartRef}></canvas>
          </div>
          <div className="chart-card">
            <h4>Market Share</h4>
            <canvas ref={shareChartRef}></canvas>
          </div>
          <div className="chart-card">
            <h4>Regional Sales</h4>
            <canvas ref={salesChartRef}></canvas>
          </div>
        </section>

        <section className="footer-info">
          <p>
            The gold market continues to be driven by global demand, especially in Asia. Investment gold is rising due to economic uncertainty. Monitor conversion rates and lead growth from digital campaigns weekly.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
