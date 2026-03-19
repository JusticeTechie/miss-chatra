// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 't2SJ4KIn77GN7I5vbNzWuqUZHSB6U4unz6kpnF8/EheTDjBpxWphJZlrfbjoXbzYf9UALwHGTz8+vRnAeiC6M8QLcuOwIHcrrFsGkjPMcw1sAuOSatRHTGCdycqZsrgyY91HRciJMMsOa4yb19TyLgYJy5C5NnC1ag9g6W7D0axmxb2/geD/4vy61CJA8GIJfNGGxKRiJWYlKiqFnZVvemf34HnDFsgR4idsqMQgrmXvx7iG7aJfUNBDigYh+KrYbBMKq7gey8kAEx/7zXygn/9h2K0RRGJJkaLtm7wbBxiVx2TwFWUSN4lSBX8cpEwfv23ABK9YyD0hr2XnhNwJri8z/1tQrVnkcfeYuJrUufmoZeZhFWr5MqmCZPH+dFhVvz0sr9snk4ZRKeGncTy3XLw/bix6hSdCGyCp8MwJ4AMBlQjyizpIgjf0V/5ZRT/WIM1sUs/qF0lf+sDWcI+PR3PwMwmXiLPNwVJH9u87DOhxYMGC6kmJnInFDaOAeqviCNdwbOECTNCGCH2QFfyFR+8YSCXJpy1iDgRMGE7/5spp8G4cGPUCMvPm3evJput17NqanJcSOWREq2pfWUE8kxafqDqWKoebq56rxshuzHy+i3ZP6hGZQy+DL1NByLwVt9Zgi3WzFYBKimPOM9UNcLevCOUJf2A4KJuTO5QRkEpJMjO2ova5WhlxZIFlXC0IZ/CUHPJ+n9607oxdAPQGK8EJ+4TpXn0eAK6WgWhOe4mKyZErBCsJC3bPm1Ls1xtp6M/Tw1a5kwLbjj+XxBjICZIAG9zYGzVFT0vx9qRsP9fBIxsIz95Y69VJ3vr9FmPoQMgia3IicV1czU+QdortbCg0xXQsrvFNexBd3+g8iTGikOXRKX9bJjglPripRU3dC71OBvkcWtWEAKycYPhYsPThfiMWsqtGmb5fsIA/KO/kosZiEiH3P0HVVHH30pmr1s606+Fy5U4D1BM7Wu4HdAvHLHwtvzA0ulRPbTNWEMcQ6ZfR7FIHy0CikmAIji94dGMytdUr8t3E3jCs169v73Jwlv/aLbjUImzgJdEOf7zz2xlC1zHnU8bR5QOp2qdrcUjZiAqauPhZUHwY3JvfGYqwSAPOxXmto5CjhxftHaOWpJ7GAbx5QR9+hbTBK5ShdXcIwtG88NGoAbXL7dDK6JnmnxrYTj+iLs2yS/6omg4H00J5GBh9jgzchYBvHsEqxLkC6h9zBHBVrTfpF+wr/+BL8lZfkPANEIptdzxP+P+tbh9q/fFAdPDZKbbB9lmaqb7hF5h+A0mycPIUqElE+mlAsoKzEasa2EuiVxCad3KGbFUxSNEQ1p+5KGBEMhP2jCwng/nNYFiefDFUz4Cfh5QojTZCb+BXg7FTQOUzYMxV+O/bLgeGpODPS3dMzUzRqJon8pPHn0b36fnWun9e99nPD6L9+EQ5HJwtybAbw3WX2S8mvcmvwumSnWmvjMDpBYBqUv5GYfqOl8RPBoYLE7gylQFEbEQdyH0tmLMR89E39oSjPnr9VbIA0x+hUoY7UByvaMbC7PIoOnbBKvCgvn6gN8NIG1ZXVMjEA+LCuqyHO4oKyL7xdEFUy5QCWFHnNO2hNacsNdvCS0FcWA39oelidkSqsBAtdr9ygU24LhTeJrJTAuHDOR9Tgdp3SToMngucBtMfdsMLx+4ZRSAUTMhoIdLzGtwDzh1I28QnJb401J2mZZFM/njW';
  const _INTEGRITY_HASH = '7dae6d085df745fb71321bba754e7d82fb6ce70e774d48841f578b0af9b2cb52';
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
