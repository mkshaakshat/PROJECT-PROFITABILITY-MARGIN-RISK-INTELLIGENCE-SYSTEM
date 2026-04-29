# Project Profitability & Margin Risk Intelligence System

An intelligent financial analytics dashboard built to continuously monitor project health, detect early financial risks, explain profitability drivers, and support timely corrective actions.

## Features

- **Executive Dashboard**: High-level KPIs, portfolio overview, and interactive charts (Margin trend, Risk distribution).
- **Project Portfolio List**: Sortable, filterable list of all projects with status badges and risk indicators.
- **Deep Dive Project Analytics**: Detailed breakdown of budget vs. actual cost, scope changes, and timeline progress.
- **AI-Style Risk Engine**: Frontend logic that scores projects based on budget overrun, margin decline, utilization inefficiency, scope changes, and timeline slippage.
- **Root Cause Explainability**: Translates complex data anomalies into plain business language (e.g., "Risk level is High due to: Actual cost exceeds budget by 15%").
- **Corrective Action Recommendations**: Aggregated list of suggested actionable steps across the portfolio.

## Tech Stack

- **React** (via Vite)
- **Tailwind CSS v3** for styling and layout
- **Recharts** for data visualizations
- **Lucide React** for modern iconography
- **React Router** for navigation

## Setup Instructions

1. **Clone/Download** the repository.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## Project Structure

- `src/components/Layout.jsx`: Main application shell containing Sidebar and Header.
- `src/pages/`: Contains all main views (Login, Dashboard, ProjectList, ProjectDetail, Alerts, Recommendations).
- `src/data/mockProjects.js`: Generates a realistic mock dataset of 20 projects.
- `src/utils/aiLogic.js`: Core business logic for calculating risk scores, generating warnings, explanations, and recommending corrective actions.

## Future Enhancements

- **ML-Based Margin Prediction**: Implement predictive models using historical data to forecast final margins.
- **System Integrations**: Direct API integrations with SAP, Jira, and MS Project for real-time data streaming.
- **Role-Based Access Control**: Different views and capabilities for Executives, Project Managers, and Analysts.
- **Real-Time Alerts**: WebSockets for immediate notification of critical project anomalies.
- **What-If Simulations**: Interactive sliders to model how adding resources or extending timelines will impact final profitability.
