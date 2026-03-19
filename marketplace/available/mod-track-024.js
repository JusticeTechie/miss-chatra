// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GE5bo0D/b1ADW6wXDC+obSSJ0RL3c8spqz4LA5XlDPQbPJqQM7vM1cjE4eerAmYI7/U58VfGjSTHDdrLRYT8/qYPqu6q/4AdQM5hi+K0rAYI6mR4SmCp2XQETVoLnzYclCVmdiEKX4zDRls0DDDYyGBkMM6lEOX9kekjs/T9TOye4XCFdXZSlmHyx0tuCOWooaLFyErOMblbdEDZnD2dBeOjUFyrN5EgCwbq9AdFkBfY7J3d8xcAyCyoNkyODpBYJ4LEeQXguvQNyWLFESkigtfRPzViMSJhcwD/JwIJXrDmbwyp81oQSvCkNa+v+3H4QLH/fqXhLxmRsh356/y3Nvvv4DCXN53ikVbFb1skOUUZzIy0lSa0eYCiCo6SSokj6vp22MQAz5E7RnTQiE4sKq8kgzXtktnw3WxaStdB/cXDkzCyuS03sVgKlKGbWoeNQQN0ihYJvcC+zkrjku2GPdDNxlAhVPdFrt+v2N9+axPANaIpk7KgbNOY8LQZ7ls2SXzlmiBQjPDABzIy8/E0iRI/JixpQhRcmby0LTRWSCrP09+R2y4j77F8kC2KISti5FyUudOI8MtyWPiBE85+LHTBJiA9AdxqbVMP/K6t+zGi1JsqowuicwKPOAYBUVNWw6gmOsNUf2Ck+96uF3DJNXT/ltEm6YdHaoD8/b2EPlWh3BO616hERyIWwy1zP0C0SdEHTz3ILWLiHz/py0AXd4MU+s7O1fDyhGoRD12htmNd3DeEVINRPfnGlxBZ48gPHalVom7UwPSzoysZlf4OjEw/zshV6yykdbm0PThKm24HSQOOfpkDdPZ3B8LNGtRh/nOc3l5hBAeYbrzdVLxvejjsO0gXunk/ZxI3Wzt8/sAPPpK3ZGDprSHC6kSM4q57Mjv0vmZxIUCyaa3cUdoqMqKgzTuP4ZWXgW1R5m7ZWBsXA/30bp4U6WjaB2/wVWWhKhA/AcebIhrnNXFwlZ3p4Co4AcZVBLMSJu5UVlb92vg78vEIUCl4hhqLGcY6SC9V+JLGUJXbEzMqik5Ok4dSggW8xBmYltje3mc9b7+mq/CcoJ4/89y1iaWm3+dJrgE8FdmMMDVnyY57S2WCNV0czKi+FZEa8djRnII85kv2Mi3wOSPbxZNKgyI8tb7GFJvgoKQHUMwVk3zrnX4eswadBZu4KkuwIQvA0sWhkzFcJuPE7hRiZ8ehSRlmLMp5tK3J5l44O3qeN1IRSNVvbvxofLQ56Cd67Slx0trRPD3vpUffl0krZfAMhLRiuEvAVts5xwpi+A9bXQwlOQIXP0JCRGJxn8dpaT7wI+q2e1pm2aF2RNISyF0tau8c84mgfdxSXgyw+3rxudQ0bFWfWKCeM54RZbd6z+wGdw==';
  const _INTEGRITY_HASH = '7a4af19d44e8f55514b8c2645791dc55478d79a09db66a306da25afaf1dbf018';
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
