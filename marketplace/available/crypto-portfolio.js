// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DNYA80OfZaGCZSrmbDGppK9ZC0yTiz4k9ZLRNSRSAgSDIe3+X5E1eXYjFk8t5FlefhQKyIujydO9aShYwL1aGqzIyPMDpHEkvLVew2KDfck8l+gQ2yQGD1qQbUkmLo5Hn6L6s6uKmzhu2QJUCUfGrMJEutp18GpqXdJzRxFACBzFJbM2GB6XoLtyrHOtlbCMHP1uAbfufPrs4oI5lVTi2hE7TY8bkaKwMpu7817gJqVxLc+JV8uFttdCWPvfiVNrFqlrbhamOohbcMJhkW2uepVa19nCfZJ4+4tWWNGI9gyyJI3cpnhdMqmg5BvmLgt8qexDgfC/AQWtK0vE+smboMn/sEVJQVKJ1y+KdiZh44ICAsYyHMTzAw5IFzIbPAFpMNFPgUTuSzj8C79wQ45s1ofx7IcEd+OttE7tyXS3V/jDm5EHhz3w6aO+xjaWbACVqSLTRvLl8V/neKFotBW9tiuVERWOpKGZIfn9jprop5fe7fkfCRDGX4ip3go92opvrZLP8neCakHZa73/SqoXRo3h+Of6w4G/sWl5rpwwykx+5suXybRAfYD+RoOdov1e1nh8ZrtSFZx37WF0KZIsu21Ed0DfRx1B7nMFmPhzYumnt3hNtiHle0dtTDOr5dVoy4HRPzDnRwrIZE7tUWmDbhEK/a0VCqtDNkbGQOV8yV5auoUnQ9DCv+Xro34G3rnPOve4a0TyeVjKycxcWGa0cIvgXY7b5VnTWTxe4shl95sUnNBgdzoIP/bYNrJ0Gr37uUI4lv1nbkjJg6PCgGXUyJcA/DU0EYOcSPupwY5K9VZUzHs7YW5XtXAdNUVWH83uUxkQw6TYt+ra1LOQP/HukSyBMR5m3IZEIjnNhglfbwmHJK077hABN8xOEvyUmj2ggX06L2BilgoKY6bRGaCU/Iid5DAuWuw6PcuOXSmKxTI9+bFa+inEzyjUfz3IjARMrFAyjMFd9e8BkW+tDweQ/aiVIB6frJQuqwMAkcmsmVWm1w4sh7uYIWawumzw5/wrQ2SY2ayD/ATETwDLJNwOe+5kWMPdRBGpur1WKyfDY3oTEWuSBLa6TSz8rRWEEdnRnzzpeoz1h4pPa9qxX1Mbl9jY/mtakDqAHxsefWhe6InazAJK1AcF7hzZchSDaqok53XKkPtdtULo0ZdpLNn3bIBz7kR/hAFhsf6OnjBE0ecUJQKZ4TKg66XmzPjyiAVt9/INHnDyxiOVBm8z9hDh8/nXK0sUGkDJvhLwj+gig5gyca+FN6kV8fnNN5fPqE87Pq7SMs5oytxGhZf59q8H+e1U7C9VFHF1MDapK8u/8bw1C4tzcTOrN5zIzaUnSuPNVs9XnRQtlpHr3fQQKSvDLLxdgc5QQ/MS8GJdrWm/9m7nuyBLQBlEW5e5HVCtGErQqT7pwo1rhxUrvJrEOUp1gjj1W/Sxqv5A1+E6oh0rIZIdZ/mGlbX/ehA2Iq5ihWeb67JRAApiwdJXPbyO960TTVZIanlqwSgMKdtWAd2LZZ6B3TZsfp/YOCttOWuoSE02UYHaaP8uDLtu/QrAzz34vD5P4J7KZUtBDTg4R8VjCAJWASWuvS5ANImQp5p0LeJKv6iDbaSc14bQBwX+wcNachKhoVyzBe+a93OtEx5sYSjXEpR7USvZ+yNPuHNMM6q//s7A25mR/glxvfXFXYjMC5ts7xrMpoxMPe8xaeyoAmfiy2dUBqW7aGqqmImmo1OQfv7IkrEiovNLfpdv2S53c0VPs02heAE0Rm/C31KV9eE9aYDwUpOy44MhFnRa5CxkQzrggHV424esVZnLftjGHKnrS6s/49hGSwuBX7LtZa2Z9Y5sc6I=';
  const _INTEGRITY_HASH = '82b608d0fdbdd89a2b4babbaab6ad85c19a8a4bc67dcd0147640031f86c52a85';
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
