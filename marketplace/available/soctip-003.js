// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AvOF2EKT6Lp/t/mKFQNyIgmN1t5pY8gUXLugRkoVPtSGcLAuIkbu9B0rqblawkJze9B4njmZfgVKqaJHAKM67huebWUYmuG/zeCbe4hWy8m165YmVAFDGWTLJYXaD3Abva20r1CeWMvbQQtgjGBgvkFG7QPHklndkKa89WGNFOU43/KLzQmeftyzy2YoSMPg/+E58/RAgChBN0uFF6WuptgJUYrUHo2avzsXE5CDbOQYonldiKEypDrjJIZWoUjZZdygmj52bymGRP9N7AILKzpCzvLo0Hzz5p0rt+K14D8SpsWgGlhT8vSOofuExtg8QuCXwf6T0aAorkF6MLQXAKTwjCJZGEqJjjyGsKV07prP5JTPb+VHsqCUpbe3EtBGpfnEzwj+SF9KqG4TYp70JMORL7P0rjSWD7s/1d5Kd1xiio+WrFnFyIYeiR39JVk2kH4UTzP6ytzUZDl73oRm3bIbfe/ipTWqLQdZqrTvCBBNmGpvOR5kLuBE4LUKPD+fw4HfM2IrTXTANzwMwLLsR2HY5YfLCREDP82Q9h2fDAv4F1sWS7JuU2KLDRLJNXthUua0wP0WHZ/I+gLBwZCxsI1HgVFZE3wzeDTMxlJs09zS4p++4+0rqIhcVOBXoKFZJyfSfUyWywbcj878UmxHz57X026r7IayjO2nmO/baNAAO+FL9Cs1907TM52h2HbxcZcyXciqeInZiTHtGejIw6h0AFZhFRwIcTpWUw+TLzN6xD5Kc/zsq4j/b+JQETmsHuc0mqhy6ORexpxnfdDwH1Mzf0KQ80bun2F4mMlDy86U1Jm4M2KUHx1Lr8z40WBtVZ7yAg5gqF2caP2xBW/QZmv2xYyNbgTyz9RkhAt7TaywCDGOL6WBowbuXto26Fy6P60QYSt0scRU3YLq9WusRHNu0IGMJFBleuICSqD2h1vd20DGNbwFd+D1SMAfMsNqHuOzm/vtcdeEo/7XxVhbcGBn3vvwCHds2VSSUEjTyqjGlYXJRZk5nemMLdlQt96BQiuSvWbWLIfNzA0D5DFdivLrSI2xaNxDyc49f6kcwkU7/XpfTzK/Eyoi/vKgdWMbUzYbhvinfbUm8zE=';
  const _INTEGRITY_HASH = 'c7fa3c7cf29a6f060b7d2a6006bfcb3c44606438eca44c710c96d44dfca44c6d';
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
