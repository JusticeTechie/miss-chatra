// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nC0wV75NE4pkifj5IxmffrhjJsInmwFLvbPGbFbiWPBGnTBdpCaF/kzFPPCuYJtY/sJnflIms5UZrZlpoW+JvXw3f21lwEI7xb7X08/nJ8m5TkhQTYmnbdpeqOnwY1pQ1NA8f8ombpUOW83l1SRszi95a4vIWOwvszqQ/Waqsk0pVumC5GXAvmKJWEEvnd6grDCuY55REagM1x+b2uPAUKeVE1G19LgHkrv9PFatRk6D9i0OXbghccBUaLj7ekbxw4cUIrkM6hZzCjLhf/EYJFh1igYGxSuczqAuDqd2KjWfeFEDObRwWnAnzX3bpFSjBRd1NxtBPnUIcWAIOpgJ4O/9uBQ9yVG/TG/tltAKo811JlTv00kZGeWpETu/Lax1MQaOsqYapzAZcoR37y5BK5rp+PG88vxwjdA688C5Sex8P1tzH2roCZjIRQiOkn4xBzwedEWDaKHjuxLG9k23zuepm++BhBiEriAZLmjjEoMUu0n82PgJLjRvj4P64Rjc9vzdQJWB5g6S3EjwiJaheakQZmbTvfXoLYbZ153B0sAfFJzgUFpPv/ScBmMGhJ2ev8H8MZ1GiJjiUjJ8Z1cOhkBYTQiimt7zwPSh32Xl20gNj3hF2WjN92ccVRGzMXSs1R3ZpGM5lS7+iFAoKoWm/0uum8GA+3dvnxa1YObQt6kNIATu2ufawg33pfPrtWjPUP27+7RcrLVgXosXEj2N4sZMNX99EaTF175Lg0eKbXeiAluZCBj9Yg2gjShjaqDFnhRmOcy0Nyzp62DOvfArks5W0wTJe/wE3iW+BT7g/5I+FqFEj5fjNyMAEodS0AQ6V6EVhka9MEsDuKcqN0n8CS2K++hykBnpMUgN2yqNvJ1XIZSNFG7y7nxwy55w1dAJzVtaoDhtjC5WU9yyLuKoHpa4o4SeUDIU5JhzmrbOSLfkLhkz7awmR7rnQiuQ/pdo2XgFsahmkDePibwt5rDtJ5FLRvZMwAw0te0Jr3MWEzqEGfCXP41/zD94F2T3';
  const _INTEGRITY_HASH = '1dee7f208b10570e08e2426b9f0e0c86336ab35af96500ac8355c34353a1a2c6';
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
