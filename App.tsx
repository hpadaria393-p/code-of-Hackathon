import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import LiveMap from './components/LiveMap';
import AdminView from './components/AdminView';
import Footer from './components/Footer';
import { GANDHINAGAR_ZONES } from './constants';

function App() {
  const [selectedZone, setSelectedZone] = useState(GANDHINAGAR_ZONES[0].id);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <LiveMap currentZone={selectedZone} onZoneSelect={setSelectedZone} />
        <Dashboard selectedZone={selectedZone} onZoneChange={setSelectedZone} />
        <AdminView selectedZone={selectedZone} />
      </main>
      <Footer />
    </div>
  );
}

export default App;