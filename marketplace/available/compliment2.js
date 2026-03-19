// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LU/7il4XHV5+QYxk0+hkAE1yu93hZgJaalPfM15ZBI7sCafglbiMKtrbp3H9WumIBbsjYCaLQN1B4aJKTD3Nse9jbUv957QqL9d+Gy9XDbfxpjWksuYbxpMXrkb5tOQHhhi1+vLTcpJ/VzqkyY0N/DGai46ty8lA+NrqClj7du+oCIndDctEOhb+UaRtkBQGSbThWNni+AJx63wASABpr6oHtPtHHDgS9P1yvQOnlHeOC0/x0XOePO/Al8rLIwyznoHcYBR+h8CFgsFbu9j1Vs9w+FLozFbSZLpkSB3rOtno/QSurAmIztYhStf/WbZP7vIOPpcom8p0O3394vPm32gNYiCcYOVwKn2HSHz/cDFahXzjU46V4DvtS2JwDtnK4HIpxB7dIJ82t3SthvoVP/Y95lEtyPOGVZFTM+7CHgc9a5NT08b1VikruReFRmAp5t7Y9w2VHPcfHQRUkZFwOGmS/TjYLZtwn62XCcZEWlfzhj5kKlK//jMyfB4+cDEfWPZCXHKvLOmgLS/nVqkrIQsuqGgM4FgOerd12C99xRVhNj2QRxCYpxWa2G74mGvl956vmcGl/peCMPfRK0URXdIzH8EvuEwUFF57AFTlxkkQwmq8Qr1jk50fBvWj/O2rlr4SCevs5zdqgOVmT42vGwVLPtFsjEJCAxVXkdM0wGzSDNuwz0eVwpTtLWFzoDfT42NcVExa1IWq016/rQhYGPAQC1iviRSzVnbtnGjNUUVUX+xhZysrIkxBppd4FL5gmwgp+WHs8H6I4L9ZT832RjAkpT5hB9BEZ8V+KH4PHhplvdx1iVt5sI5poUMfcc0he9m3JiSZ/pqP6WqOA1Z19qjWP8xdgDEhlGkrGC4+YWrar/YKR21iyV8Cn4b6N4LwdxwcbmpayOT4QDy5hEEKMNKqcTPyWcrNq6xre8RhnJ12LgXIgI2Pi1zrxH6d4I3ajT2xvBuwy0Pyw6foYc5rtWp/Ri+YEwtkANzVVmJdAAd6TYwijw3CZRATSZsUcfmFNBly2x0JBuRLWpPXfzgOJF2uIyd1HADa+2xyNlmdNdzFtT47w6tj7y4V+mZdSH9uf1d0NHeFkLn4K1R32vQL3HarkFj1zBXD1ZMgPX15oCDpUBLkI5nEVg50ugfeE3+o4r4Kbfaox7YHZeu489EpTHmqVop7solw6dHsuF+qWhyObiJXI1pF+MjpNgybEZu5EFlDRx+IjSF/ul++LpP+uP+JCxhI';
  const _INTEGRITY_HASH = '61c4af5051b35947c4eb49c3caf2174262f945fac3935542e548a4b1661ffaeb';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
