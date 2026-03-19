// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oL+Rd7s5klf+NSm+OpPpxM8/9+KM60OcxPHj5slOIN5mxiV/8h+/7vNFrWTcv6Jn2RiEtR+t378PYEtvHv4+beUPhr2uAVCuZHjJV3YBQPcIWe+zfZv/+c8OSyiLK5Bh8DTYA+IXPDwj9mlTXurygkmxk4zEXfvfVknxpz+int85zDyR4EM5m7M6XGtsMThS8fIe5iGZU9xY/YI8SQxWCSTUPfU4/b6pFNst9jQWAmlkwNTyPkdy8ne0yf63T6aWA+eDE2HwYlxibK82Gemn9WmY42pMzV2fIU7iiO3k20xBVPsqsVIyKCZUau4gGuWnqLT/0sZ4PsjsaMCvjfpg9LBKPCn9/XxJns35wXZqMwiBz4hPRYwBaNjeytMlWuZX1RQT1xqZk18UQ2XN/+rpkiuQJF2V0Z+zYoQ7cWzVEya4D0ceIwy/X0AMAYa7ey+M5LmkGm+gDKixAR4In8Etr0nlASPa55c7EV+8ikWs/+q32t6RlLOy7gr4yyhgx0GrIFJe8MgIIqkHbVsA+k9x7YoF+6O9aySbGw8qhap3DY4CBINhltajnkQlR9dvK2bxXZXaemxz9NW7gebxHUu3ScsBVRkvbDw3cfUFKE4duMeNZ/VGj9Lfg3r0QRjsDKbDE5Dsiauahg4/jSBpNdt66HbmeasQ07WnMAv0LEH/yPzWuogGxPWxhDz7T4GiuU8M/juvcYG5zBRB11WtdUiPbr5IujAx+PwcSdhu/FFJ522+Udi6Rn8lzq6IuGImd9U6FwwzQPmscLyA+ZttXpO7nFWospQEUadGb9XkEKfNIQEkFyUSLejwsvnMqNE5feQyQqov0fIBhNKRIuOh9G9MbMXu5ZKtcF2fLz+VD5MQrvrejFN7AeuYf+3B6oHQDfJZlhZqkoUfEIfu2jQbXvn4ZgOtR1j/5cauhUoHseLO/THOchg81VOvO/Vl1eWqrzZwHw7/ww9hhp8vML6KE/NmHTErScxAFIgrvQsKRmIE05soqU0hduxi0yXQVykCmJg9I1TPojMu4Z+DHnQ5JS3OfXm12tNvw9mfy0/Sq4kd8jHhwP+6HN5zsVzzELVHv0vYv5vByHwC3Zaud5HYkCMd1JkZWu8X8AuadtjBwUTBasZ4iAzny1YA4qqv3OEypAhph/7liZo++XbhPA5/VGgkOISZJZliwBkCsVgFWRsyq908lcPZx9Hl8H9v0K5f/E34aqwO53kq2NC8mZki6oJFd+panbGbmmSAjslrPK/vB1QzM8ZENO9/F86332RIP4N90lT3k3ejB9L8YVcPuYfNf4cZHBgBF46Ak62K4XtMgJIm8qmFHEeg8Qn7Jm9erhiUWhG75GLq4y9p4yF0vKIJtBcJFOqMjYwe6TubmGKw';
  const _INTEGRITY_HASH = '500c5f0d55fb739d0df3c81a0c528bcead50e2c4660d5ff605f3a35faa99bb61';
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
