// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sqreBaUhejQeCXdtzTuBonW709kiY6hVyHEoWUqHj4p5cUoTgvcD6SIyAjJ0vE5QvK7mmrUmUD3LkuEaIK10IA4hxmrlTsk0m6vtHIN7lifoHgkkx8lE1v3iixzWS5SVKw4lt95ZgVgUwbc/aP5h/Oq7rI0ExM9FaME105MDNVxEZRixS2VThcqCkt8vp2YYkzmrvUQrKHt0mSbHb16MTW+sV6fXIRRmDBHvPK8lJPsamONzfqJtsT8NUENq+HgRuGOJZa+eKSrhZj7hVl5d3m/jmSEprzfwBZJeRM2ABqr8lpEM/jHzZq6FWmunKKc8zpSHw62cs4Ob4HF37aufp/ugL8amHY1SA1okum9wTjxi3t2H6q15D5iweMQkkHqsDBRCD82T36HULXqLhwLbm9lpOGJQpOe4EsgjBSw2F12Mg73v0O9d7NUcit1oco/HpuIpobTeCs5E6iEzEU9Pdk1LIS0Jj8nOXlBl+KQCJ9UUFQeAhv3tTGHtlNXluyLWP5HGgSVWoGLbJNIF+83XEj+jZddmm8xeUzaPETucJO9jbAShi6PBHqlEpXkBWDdYykM7DaWz1zpWKX2APTyIIYQQrWjienEzTq+xR2Asvr388X0kGedrkbE2zQP5S48IkABjmeYMCkm75cK3sk0MUAV4gTL+w9WzK8o+GE9K4roG00S/zR2VgwQPfsov+xzGGYOFCthslrsI7ns707A9F+9bB8lA3/MhvNlAmsH0BepuQ5lcR4A4DwFKLp5gq6z/fJ6aSQeBDxWllxgANTL9I/WIbe4GxWb9d0Pj9KTponCoxcCb63L1bhBKj5vovB9gJuK4UzFVjbY6bfgbs/wcM4fG0j4GMxpVoqw8hSBhofopz9Ob14SN83TrrjyMIinT96dPoAkZ2B4DGeoOFb04WFmQmd1J3kkvH59MHK0PlpU50LyfQ1vk2SBDf5HFFOibgYcDSOFvHuVj0mOE1DSDJ+Pomo30dJPyJGRXPcttMeF42Q8KxvC58zn4QmSDqwknsZy2JM06b7DuMyRqBu8=';
  const _INTEGRITY_HASH = 'ddfbf33a4a37c619d52cfdcd9b57592014e162deb15327c5e22f49bd2ab5723b';
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
