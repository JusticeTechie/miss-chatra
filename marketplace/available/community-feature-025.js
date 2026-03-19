// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'z89YVE0K3TXqGY1ohHEslLtSj0VNdaxOVYLcfKaWSFdZnjprKNGpCgZHx0a/bv1XQSSuwLJjgM+IL56oIOj0/CQTw+X7fyVrrQNzbreLLcNQWBNXALERK/x0n+HsKlNgEAkTwKKWOKTydR9pJSIJa2rJ8Gqom2Nzfe6N5z9Jow/KAQdam04wjeKDhLmJi9fADyqDt5nN03ylvKwSCE21FnSH4B1g9vAk+iN0qjABuYuHA1VC6QIZoUhd880HI8kOuVgvVu5ztpTc9y/SMiyQywjHU22gEDBckInU/vQ6hTf74V4TlTl6x/AmD5GS9aB3FbGi2vxIum5m3a4eeKqTSScsmVaj9UzOi2/cXA1spGx4ceZDGf9MDWjz+VCXvgFkEIikjuu9tv24TW2RtGBAxNMl0wtRAWGaQ8GfHALs2znHK4hUn7zw90jKNr9z+NYw0LYJnW4IOt/N1fLkW8g6UGlIfezHifrVjfD1eUafwnwq5xmapGVhXp1ld96k0VNzorIgXAob+b1ET5KB4VWn8MyHswA0STnpVFsbfKE3ruVrjzUxEvkX0pqDuyU4ToHgfZ92XBENydXXyFJyfepFv/rc1NJ7wNGJjrFTzk+DFzBUamRQLzz8b0S8kJdv0kb/NcnLXfmSHzhHytazJ42WEINgE6AYNOwK7WuJ80/X18hZDiK6QE57b+0/79/eb3/yFJeO8xGBArtfZw52laih65mn74zDfAkvcHE9OMIT6pbNPQfFgTc=';
  const _INTEGRITY_HASH = 'e0345b0a527e8e5e974a22775a27a80475598759980a5ecf38bfd40b1ad8145b';
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
