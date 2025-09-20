function initCookieConsent() {
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    loadAnalytics();
    return;
  }

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div style="position:fixed;bottom:0;width:100%;background:#002b5c;color:white;padding:1rem;text-align:center;z-index:9999;">
      <p>אתר זה משתמש בעוגיות לשיפור חוויית המשתמש ולמדידת ביצועים.</p>
      <button id="accept-all" style="margin:0.5rem;padding:0.5rem 1rem;background:#4CAF50;color:white;border:none;border-radius:5px;cursor:pointer;">אישור כל העוגיות</button>
      <button id="accept-essential" style="margin:0.5rem;padding:0.5rem 1rem;background:#f5f5f5;color:#002b5c;border:none;border-radius:5px;cursor:pointer;">עוגיות חיוניות בלבד</button>
      <a href="privacy.html" style="color:white;margin-right:1rem;">מדיניות פרטיות</a>
    </div>`;

  document.body.appendChild(banner);

  document.getElementById('accept-all').onclick = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    loadAnalytics();
    banner.remove();
  };

  document.getElementById('accept-essential').onclick = () => {
    localStorage.setItem('cookiesAccepted', 'essential');
    banner.remove();
  };
}

function loadAnalytics() {
  if (window.analyticsLoaded) return;
  // Add your Google Analytics code here
  console.log('Analytics loaded');
  window.analyticsLoaded = true;
}

document.addEventListener('DOMContentLoaded', initCookieConsent);