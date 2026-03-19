// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KnjFACsx/qkQJMnsMMrS2CyQ9TCs9Vc0DcDAxZDv7Lu3wp0SywWRQW20EAqO7FllBwW+YmQZ4iv/TsqJVwvgRMnqDuiZu5pL6nuwVs1Xhow69nTPDacLsjmv4yOtLLPtA5+1vmenbTCk/KG8ZcgQw2DS+9IM1PgKzWMcD/eSEGfqFPLGIssPgK0LqRcG0YZwX0z4X+jtx8rCORrBsm5rlX5y+o4Cf5QKyLrlkp8qaBAYk6H+3cq8e+em4QjFrj7uLXsVk38aTbCRaGFpYHNUv/1ZmmJGQn9BN8i2J4iKuBCFXg/qamREythSwHOwL9pioA4N9tJwvlZcFoyVnUrHMZPstBDZRZRwW+5oWzgm88k1BoTTVCWu3nI69x3sgtZtVKRlm2M5OvVES8NEfEN7wRAp73xoNi7D1Mr+FG5D+nAzm85nKOBr2r6YmvV4d1PYfyjovU3szX10G/uiB114zsbzYzvcHxmJvAgVG1NzwnB/oWp2D0iEsR0O9AyhRE5l3b9ax6rdKy2tVk0Db5Fc7FSaHWrGr5XLi9eSwTIqTrAxTIcimRxWYvN2m+FLfnwPo79PUfgUQ6hiT1BQMQXPdRK9o5SAawEADUbnoakzVxr8787k08zve6hegXzJreZ7iB6OZgHwvrGiUTfGeb3MDCrNgYZCAQEvkD1iXlHVK0DdlDOc8eHplWUftyIeYcl7T1v6U6Tk8o+9yOsE6NrLaP8hoUR+joQV/lCnzbD7sRaqKMeAfIPZtzc9ro5J9IFWEdOZ82H5UJa+VZehYfMI9gKTsIh631qHYcmQShEuJf3mEegVamvvWGojkUwk8n9o6DyaShWorhuP81i1Jhf1XeQS9SW9/icBqN0Z/fvYnp6l214a8Xtt2PPMUx6xY47fU9wMnuAYgAJAjzZ4EANCb2+eB+CRnr5yjzeB1iA7HQc5bBUExHV2sN/SFiOWe908aIU0kL/A0AEBnJosuz8OhJJygj9uX5afQJbv5aCPK3RKcqXb7bxf2JQvCoukngtYgNqO8sP526rF0oKmj1H3bc53huLFDaz4IuIFmIlUxbWtGA==';
  const _INTEGRITY_HASH = '725c72ed6d5e049f15af7297345be578b028a071638b34fa77717e5929fa78be';
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
