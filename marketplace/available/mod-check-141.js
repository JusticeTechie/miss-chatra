// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5Uc8B+4i/tumaAhfkOxrAmzqw3iCKmhBT/qw0IGX74rdFOGIn9XewfIClnvoQUOi8kTRzU0o/y9EmBhY65RKwRbALptkzvup53DfRCrau8jMXm0kt+mR05AMsq4YBY0l3cEEUFcKqXQvW6dPrpMph0EvNJcN0ImFps18emhuSATa5iY9BbrsdvyFo8Wc1zrYMazM+S9oKY/VkQuTOtR5e9pOo8g3DOB+qOINENgsX5YCEAzx4b8HXEBqpuan3+ttS6aIn9WAIp2FGmpY0W9ayBPN9OH0dNfcA5zEOLAmEOeCghKvqZxKtKiXYR9i1i6yK3GZWgkicNgGqtxR+xT9lrl24zsBhxy6E7OrV1dFypuwJz2+GVp6INPfRz6bDIU1ZiGevdzi2Nwz7p6ikOtM6aVCx0mPcKdkCtRFVsp/CUQIvd8z9/fMXJ49QorABIx3hpTgwPQHTP5J9YtDfqML5v/gjtiuTdFhcVnXIcSHDco5T+4HqqP1OCHniH0nhQpr9Ja+jtNnGp4nQr+ZCxdAIYXkmaKhiszmfPg6QPa4DpjmlWdWylec4JyjTQRfopPLWKOQPNxUKZ7olU1hLQdVrqI2msczIVGK9QIpcfDorxKT0oxeaJFkMTJKtCFIWkRwaoDrwPnLMUQxRxkL9XSalMh2XSsdkpTKvsR+uJFA7gicrHRC9pvNED5YhlSEymHpSPUtAWrA1w1rj6jfvGOdh+4NYeLmebfV85FXUr6gqncZ7tNjy2mGmDOQZ4tLXK8NZpH91Y90rpgEamym8MKUQ42H8F+vMcfWgdbYqthNFxGkw277MTNXPmfwfifwJ91bxXKSD9wQ4QY6ZgiECpwaI7Zzq9pf6/EhcXA/tFKQ0Qv3mS6j460vDbK55PWuK0twvizQeL5XebD6MPr8GN7tTf5dRgPBGiLln6490+bVtwv/v+fwHJI2NPESsCLgWwlVdDglXLBRay0pl3R1sUd3/t8O1oYFJvdKjsFzeKhIccVxf0O7XG12i5JK0MVW8I+x35M9XH9AnzEuGl3BVQM/jFTXImiYGt+w8FmQO+9sTjnmJ68LD32ghcG54NbRmaoMtLmudnhpoOvoDFI/83hbzjfIYAy/R/RnmI/S8GD77+quR7Yq9ojyQOyYreAOAs9dDAK/IjMsAkj3WykwP4GbcFNAC0p6Y55x9M5Dcw11gsO78g/rFWLHWQOr3O5njmHaB74Agv644DerPr5dHifzfjzBvEHN3e1mlfBZzCNmnIURp8i5IdooEM/IEw+C2+dGK6zty24iQncCLjh+T6euZ7GrzaiKND2R2MzPwcE9SQm3DRAA7DZzaW0cViCqrEevts0WE59uAN0qvs5cRB0vovNpWYKmQEqJNnm693QO';
  const _INTEGRITY_HASH = 'bbfcbf46e0a71db9fe233b94ea500f30613322989dc35449afaf2992fe4d3037';
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
