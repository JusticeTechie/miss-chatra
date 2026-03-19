// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uceuG7Y0XsXjovivDL4MBhkuuGbl6y7RGIPG36GdbdDEQC5mCYTOTpY5MI1NlZVK9xWKlFoMxEf8QK414JximuAoQBHcRBv5q9Q9++29EHyygWMbnxkVbI7WWQy7KkDNjS8flZ+dw2xD8foQnKcMBb4LuXd7485f95Jw1WwrBs+Xtk3taqySIMkSOutDkek6fkIib9zGpYy9y3E5uNgDhmwEVNJMmVHXz3wqXZZ9FQ0VnaSbbEkY4BqafK+Z6ZyMlb0cf/cMXK5uRHc4wm8SDfMbm0en8UfbO9j2PurvMIxJNHa7mU9BMUdtz5Hv3ESrAxGy1YVMTOHzj+HPG1uNzQcpTQ0iN5xbKHTCHd+GlCTlMz1dZytcqcjqbUtHWd6j7pigaxiHqMevlu/XVQ6iDXnEO1P9p5bBC3Xd/c38BZiT4DRa0eWA/Z+xiUq2CbC0og5fGjMX6OsxpA0ceCczK9ZtgpY9oolnw4mJokz/oQC2mo1obpRjWBXpWxFIHEFh2jHksckqpDelISQoNFYwGoWC3Z6o2BbS4Z7raYxkgUW9zFUE+AHq0X69d+9JVR7uKj8acq0gFK/WQvlYCu6R6K5g+GW4RJBuMC47VwR5eQHJqRYQ0rbCqbs8RWQv7B0twy+/jK0Lf07dkL6qALwJQvpVg1ZBW6eFlVkMdmrZwsIAuY76/bmZLL8BEN7MQagG2z5fxYAbL2SXPhsrSGGqSp93XrDI5QLoBEAw03gjHPD9O5iGupWOPJatDOa3efjkCyW0k0kYQyKqOxM6cJNyiH0aXdK4bUGThFrvF/VujpZ5LNVKolapkgD0oMOJDXK6v3RAvBkMw6rxpzqCWEXZ8y8a+0ivqmE8jBBiiwJNe3oKzshqmxvkea8LWolYXIvVSevtNF3TpbsZOjyxzdsSEJrMudbE1tY4Hun21B0MrN5G0Irpv3nC3xi2xy2p/UfAdlzOeekBvZRvIg3iPhtAIdVBASl6RofcCW+BA5SYVS++X6L9HURGQpSB+3dP3LB+CxyBoioql09RgnSoxygla5uLVVhPf634OpeWFNRRRYYmvtc5+q6isuPswmygkxunTdIibq5MqOkLZdO5/xAWH5M2syJQjDUXbsGbSsNTPNJt/r+oWPfpVBh26HNeEhfFURhb+eGMqnQHeVr25ghvXlq+ju23PwZqlFxw8RkrhhipBBOFczFo4c8CUIT7rD1BN6xrMr9Bs0Cu/1YfU166lVUAbmtZupzHcxHlNVQbvvZ8NZjb8YLfJoC/uP3nPj7jU4utctPtuE74Y2qPYCO+eEOUXjwNiINEUWusjS5c4suaWAh0OdCWw7jfxeMvNuGFD+qC1hs9Fsibm/v4Vua9RfrsFLgT8ItDEX/4XBHY';
  const _INTEGRITY_HASH = '42c956cbe487e2e44692a9a20c031818ee1a25e4f8b661c08081ed97baebf003';
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
