// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uU1kPKvzhPsnJknJNHtoK1pEh9X/gzf6g0JRkvPpeUxWl+tCQca4axgVwNu4/cClI32cmVpeT62IIKIiFp4aQobVhWYlO+h8g+U9SDyREP6OrgSXLRut25WViRWwFtJqV8AeEvAyrJ0maz805OcMG5xXyTTzPeyOw2rtNsljJwV6sU9We5b9+OG5S12kODLCGLlf8dzUR1qbFUVoFtOYheOH3o+uL8klVFwzK2HnEtcTSws+d75aIlXcmioejjCF6Omv8X9/5ygBYxMH2vW7jljoZDrIeKNxAI7SyrnKUE30BUN1Yjz7fU9Wy6ATXDd0aukO+oqsD22f+fn72zXbZfWWR0clGT+2s80h7gK2yqiyeuuuIKes1jKNR4hBcrlvQzNVRz1Ml02oduLW3xDAruHYbS8WBh1gE7jEuiLeWKiVrJjz20TYGwYTecJfn/1M01oJUJAZIdfXmRwjSOF8BaTuwDAVVf39x+QtqoEcKmBcWRb4+bSrdXXQCGHM1Uufv0U5krEHj+Z/wX90rE1f9bpbT9kvz86pEld6+/pLlMgrrCY0Gzw+mUutYHzMFcMXh0utikPMh4eQ05/Tb0V5ypL60EFLOfvvzFSJGA+AaCefKaVhQGhyHl0cnbol1tiCPoAgcwy+M+M4TN1fWbP4hDQfOFShge6F8QfYwf8AhTXOdqBzFrhHHD81RYsaRNy7xrdnkDRFZzTqTzlovMF4DX2lO9H7ZX3SxWJ2EU6kXOSQbrc6E104QGtu9aXcNx8po/xtHoFqkELRHRV1kCOjyZCUMNrCh2jXH2Nh5gz0OFaksphow9c0SXrFcnY/ORGQPz2csUZHeqbZu5VRWRkTd9ERT32i7rYT7v2GZH8Yfho9F5Zn8xQf8e4T/HuIA98WN9QKdsre4sHxqFwFJrzMuUQot4kgbOUAG8RWKaK/7js6aKPWhZTJgEWHP5WbKqcF+V4ATG9cG8SylEArsPV+S+IyOZQEEFhAt+nihG79V+/B1sfITssw6W0IdMWeRikaoX0Jr4nO4cmYgFXshwqRLyxqnp5VcC/rN4NRxg4YjZFjRt2f3GdAHCVRz66SMYZGUI1gesp3dl2PxikghmWd64gAJbN9O93+JPp2+BuJ8thRz/WAHiwNG+HAs9SzQEDY+dbZmiiAGmmtgoH/rnMAguudaw7FLvtQdrh3kF0wGnn3rPO3IXZQQFLyzX1DLHZMPpaP/AnutVI=';
  const _INTEGRITY_HASH = 'e1e9bb4519e9d69ec53c89487c341fb7c5114b3ecaae7db92f7faee0a8a9abdb';
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
