// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TFTYPuWtlU+Bs43FDWrAiMD2Aw3yqetXo3uxUyHJCNpFBcWxwJtOei1H6UrbEw+C5x60mLN3Q7cDqlvvW+N5gc+RgO41H/r9LrQjS8X5Dbqy95wkF4QC4BK3Nkb1k/hK6XUVIS5btb8mtHRH2CQUcARqGH4YEGxzMVuAzS//FH46gBuXY5R+f9nUVV5/sovf95XiiLoTfbwkLXlH8rZJ31hi7qJ3ABVL+5/87VibhCsr9F3ybj1tv7M49P00OUcC7wM+TO6qa4Yhrquz7fnbMPsZdZzh/E1178LaBNHd7QxhCp1NzsXrer4Pnk6yenc4NQkRlSubE64XN1RZX0DSm5z8UtDW7VJUfyk7UBObE/64YOiWZ9GMuWhu7MDwV3azB5AOVB49ND7/o8ozlB7eXTbhn30vE2fZDJQewZ5jZ3npHeF0duvg+PsH6QPIzER65rn/wH1bj4/uXwQ7yme/CWMLLlKyuYfeHw5WsF3NLyyz1qrXYhBCANmV6R18eyknNfxnCbDxHUvr4pkQaOKWuL3BBdRGydGJP1srk2DGnurWbZmyxfxk52wXs4cf3Y8uwSscvR9QoE7uDbwg+ERtlmdlupudG+wimcxjRle2u+qPOEBsQJNiKcuAK1ad4KEebsgmYJZ8DCAi471zbvqvQlUPB+B07oc4F9xKb8on218U73nF8isj7u5655l4A1RJ6di4mnnFIeyWBetFBJkGEfV3w9HexhE/KkleJArPlS61j/E=';
  const _INTEGRITY_HASH = 'd76ca5896ef9c2df38f78b594e04e5529b4b114f9d113a7e451e47cdaf331a92';
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
