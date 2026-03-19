// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SV4QpCIaOWsRNa/abhfQymWz/v/Xxgifldl/I/U04tPfFaCzblEVAhuW8kVlrpMd2wjAR5+dCfMzsK1xw7dmmHILmki0MpZIG/7DzBWN30fc8mDBdSvCcbsU4ou266n2VJiojPaZ90D+CWJhLZ3G68DpZ/etVZNDwFeB3wYQc2vrk0/cp5C8XkthUnZAB9jNGqaVUOiucaKpzXkejWZITt+ppTXfPgRyPGWgBYrN+x1R5Qdon63R7BT9jN+u+PVRJf98ld3RcJPkHs90t/72Z7oyBHGvMJMy88cHADiPqaovb6Q8HeMXMdpUpizyvGpFjETT75vxf0oH6obG8ZeCNCrowHJBqws1I3HlxvGoV3evDwKGut0/VX9GEo/SjBwrmPUBRzIqERwfq8of6EwkDSei+HJ/iAgXW7f295TLa9Lv7vLihl1DcRnGJDT7S0Ktpu+SrAYzJQ3/nuKdGBwYNmQfq52Bvf+mG7xKGQg86hFx8bNA1V0B+AbB1+gauXOPhhiSKCkWQMA2PPQfVYIts0eXqm9JX3uUJnl7rpB6yR404BahUu7oS0X5cLQiPAkxFaYyi78fLcO6FwUxAgA9rf0=';
  const _INTEGRITY_HASH = '35a92a23bc3f3f6a5e4b1beab2a8fa14ead8fab5b8ff4657ca22952eab43b527';
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
