// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HzvFpSCurV/xDPqapX/0lEsbglhxvl8xrY5NLFo53yFKNHUfWyCn/1LIbQ9bAl0G2CajBgVfopImYjoE4jMuCxCOffLybMzoUV/lBdlnG72hPkDAZk9cbUI95SEqv8dLA2pca280xzmDW2Pa9vAQNFg4uaV9vuhbgaBmPjx+O8oKHtOHSVwrfO1VZEh2iHhucY5k/5Mhnh5Hk44gIUmYloLU+Etlvg/enxBKfPBmTk7ZnHoaQylyKsSvE9XfYKcG+VSiGwZEUIET50smfsVw6LC2S//+7LLVeavghjn4gjqlvfUIWzDOi1rFLK1t/hGBEziKlHUZSHNxJwIs1UOJ8kloZxWbMEuZJJys549Of1/qm4qJoHEfDy9qOC1zWnMfQ9kehQJ13VaOuOOriSAxxxtFpIeaVFEk5hwfEk8PoJN+XRo45jalrbDmSkVU/4gmMRcGmY5QpbwuPi3dzFaonlFIORk0Zz+tRe6UXG/Im3rf7m1lICmoobio2BYENi4S6l0rR2INhuputFaaZq+7c03C6Dw//3anBEO6n2WjZ6C35GKGX50WD6MaUX7JivZOCfQDBd2WhwaM05Tq+V+GEUqpIXCyRXwTOYv5YapM82DJLDqVrDLDOygQBFfLaDRiRR/rXaV28v6xYB02a8vwp0XjQpvVdUOpiVM5wB1LYK1HTDfnnFFWyjhYErzhkEugkcItLhEpvB+/tKSZC88VDVcXV5McLPLMvtChugQeRvOmwuyZwMAuFx6lw+znx3u/9iyJJrFS099phRX9eYiY1BsrGa3fluOBqfnkeytK1TPTvPhefRCZnsFpeJ+waSmidnNnN8JbMv9ucTf6jfKgFzPBFqwKTM3VkUuWBHvDwZkdA3rY3o7Wf67ShT0a2bznwA0kA2eKitsu459w8Ko9i+7wqpO5WtZUovvQHi8zVXazA9yTgX56W6NaFovg7FUKYiK6ZcqCTPg6uS+ovW/t97lb9fRgGmNVLZpV6PPw9abh/JSnqwXz+bw=';
  const _INTEGRITY_HASH = 'b82ef72dc083a58c190683f308f487cdd75da7fc8e80c8ba2dc48f12b317ea45';
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
