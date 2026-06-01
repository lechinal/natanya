export default function GlobalStyles() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { overflow-x: hidden; }
      ::-webkit-scrollbar { width: 3px; }
      ::-webkit-scrollbar-thumb { background: #8B1A1A; border-radius: 2px; }
      input, textarea { outline: none; font-family: 'DM Sans', sans-serif; }
      input:focus, textarea:focus { border-color: #D4891A !important; }
      .btn-red { background: #8B1A1A; color: #F5F0E8; border: none; padding: 12px 26px; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 15px; cursor: pointer; transition: all 0.2s; }
      .btn-red:hover { background: #B22222; transform: translateY(-1px); }
      .btn-gold { background: transparent; color: #D4891A; border: 2px solid #D4891A; padding: 11px 24px; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s; }
      .btn-gold:hover { background: #D4891A; color: #120800; }
      .nav-btn { background: none; border: none; color: #9A8870; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; padding: 8px 2px; transition: color 0.2s; border-bottom: 2px solid transparent; }
      .nav-btn.active { color: #D4891A; border-bottom-color: #D4891A; }
      .nav-btn:hover { color: #D4891A; }
      .menu-card { background: #1e1000; border: 1px solid #2E1A08; border-radius: 14px; padding: 18px; transition: all 0.25s; }
      .menu-card:hover { border-color: #D4891A; background: #271500; transform: translateY(-2px); }
      .cat-btn { background: transparent; border: 1px solid #2E1A08; color: #9A8870; padding: 8px 16px; border-radius: 100px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; white-space: nowrap; flex-shrink: 0; }
      .cat-btn.active { background: #8B1A1A; border-color: #8B1A1A; color: #F5F0E8; }
      .cat-btn:hover { border-color: #D4891A; color: #D4891A; }
      .gal-item { border-radius: 14px; aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.3s; position: relative; overflow: hidden; border: 1px solid #2E1A08; }
      .gal-item:hover { transform: scale(1.04); }
      .gal-item:hover .gal-label { opacity: 1 !important; }
      .mobile-nav-item { background: none; border: none; color: #F5F0E8; font-family: 'DM Sans', sans-serif; font-size: 17px; font-weight: 600; cursor: pointer; padding: 15px 0; text-align: left; width: 100%; border-bottom: 1px solid #2E1A08; transition: color 0.2s; }
      .mobile-nav-item.active, .mobile-nav-item:hover { color: #D4891A; }
      .info-row { display: flex; gap: 14px; margin-bottom: 18px; align-items: flex-start; }
      .info-icon { width: 42px; height: 42px; min-width: 42px; background: rgba(139,26,26,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
      .about-card { background: #1e1000; border-radius: 16px; padding: 22px 18px; border: 1px solid #2E1A08; }
      .divider { width: 60px; height: 3px; background: linear-gradient(90deg, #8B1A1A, #D4891A); border-radius: 2px; margin: 12px auto 0; }
      @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      .hero-img { animation: float 5s ease-in-out infinite; }
    `}</style>
  );
}
