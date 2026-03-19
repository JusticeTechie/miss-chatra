// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'W9BQWuYnorsj6WBDUqO2oZOM41NlvrqFaFEPq9HkuiHHF9RjVBGQMFZAEdv8yJWZpHA07cUpkNG1MAKcJ7qUIVnC/xpryFzgErMD1KTnj+sVXa/OKLZeuFU+zNQuQ4ysNactEiqsnd7Ke2CZvFAoZNJ4pDjaTc6yJx2a5y9ErtSoMdmVo9t3aRRYKwg/7t28+8KBXIC0skf83jO1MH1G3WqcVlrfahIPfmZvK/sKXalkNb8cgfkAlHLuqraHu5j7DXwPgHuksEkHUqc6KyrnS897VpXMWmG092DnU9MPSnCZOjSLtUSwqRK6upPlAoGgZO+h2kl474l+IKdYR0+EJ4nEYV4OCv4SO5H4bI0wMc3tD4vLPGvS5SfrlVO8ij0X33lMGDqB89kiclOkozJaBNZQ8Po3Hm/BpsEQs0fOpyCbL0KEmToCt4tYeABsQbeH4pbkPfQSY5pLVKoRuWYAoDlaSqYfGCfFwOtft98WrBwU7R7nWEiGr4LYDt5zkYeFrJMw9GN8Rbycv6ou++pN4x7+vGQ9O7kmxTSi/0finc3ku9ZZvCckF3U9OSdSNhYRgg+VMbznbwmo70Ss8EmDxst9InvF6OMpjvYF7RL46zVRoohKU7saykJ1tgDisgGVROtsPJOY9DhZ1gXcnRUyBZJLwnE86hBczbtGJj3LRzR4uDrHBgjuaVaAUFEsH95yy0Y8tgqymXt6SxbvfRZvSCRkwMtva2oDmmFS+petpsJdr+x00wVZS461+sx57KQ+wYg92maaEkw3KFvylLDwOhU3j6KGpt5kpDib78Gzq5oNADl3PsWHMJ7+TVjhmZybnYLuXowTYv/7qDTPzfPTrgUU/6Ntdq3FQpS1JIz1dku0vQXZjqKikbg03B9nGgEKpyvWaSXHOaCpSLdMQOhlWlHniWCXK2XMgSu1RolqE2f9cHutiktS8msY21ioHpzrU5BVysL0vS2WepWSrHL+NctorxQ5/dXMogv9DyL+kGUxvTXC/eoud3gfpVG5uT/pOA==';
  const _INTEGRITY_HASH = '1461873a5dcba8140de84bc73fa7dad3950293d2185537b3498e45b3f31fdde6';
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
