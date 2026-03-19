// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Gs3+WASAF1QcL2AIn1wXXryJVznTnL/C08qI4vSidz2cHD0XI7ExrLsKu7pZTO8LEecJA4pu/GH2hDv8+SGc7NCOYT6yiA+/VnIRoFfyx+XS0p6e7w+c+KOvhKPm+vd11LTDbKFZRBaN5kU4p4ikT6xZlax/ns1ln7SCAw9nmbxBT5nhEFRl+y7x2lezleTN89Pkf5Jxb7a7IpQF+U6F7UeDUKryv7+tyAn5bMgiwgh3Tnu/GZuaDaIZ7buwERishiatv67pVBcwFaINdbzc2Ya++Tlmy19J5s67eNzY6GiQFqRIKQ6GABsZ9FZcqQ16NfFABlt4mFBOTBlharWqGc9LHmQcsgnZhAFqqS+rWt3UmD37ubgmkt5IfunDe/hBliyjr/GYFHEsoUbInoSuw9IwyfLA9fNLgD6jfVmY3dV+1HrlICM4P+LXLNwplvLnCfBMZuM+stIIV1sZcTMaO4uY9hMrkT81s9Wt0MRHc/PzVVuuYKfKlMIdQk8w92bd0QmpF6qJuZ3TFWYm2TVE/oxYe6nakE6xfy8nMUt2d6sF0npLLyTEG/m0qJZmylIkUPDHAmoqy2Kl6s2qjJPywR+zp2muIRYAXJ4xD/0kS9qxD34Tv1/4wcawjrj4LszVf/t9OIdRvfPsNeNFsXqTk1JU8imdYK/qIRW9QLn9Gr1Z0mN65BuVVQAVPfGzL4/dHnoZwxObkgw8P0yzFWoyvORZuk1z4ueqn/vxGVowqIicH7PZ5DPGCekPLgt569jE8HTauQU4DyAI3QX3lYpswbglEV2m/P+ycslAZ/3C1OLntDWK4Mf0fkwAGgx9UaaBZChkqQwjpednzdu+jaQtrjei7cierzfX4jtitcSnq75wZ9GZ9CoClbPdeyEUnvs5wtmsrqKyMpqPjZ+NPSygXnuPHS8GJy8uBSBkv4Sw1V6+ywPTmvTDUUHtKUZHY6BgxhnwB4tLRvNMQQcTF9uHZ/LboZ5xLoaxZqvcX4WjszD4ENfnH/wWaR+Zz7nq';
  const _INTEGRITY_HASH = 'f3c80b61ff075f353714c9e40d4c1ee962563dcc3ed28560501e89b904ce0799';
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
