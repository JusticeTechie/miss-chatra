// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7fk+a+MNvgI3PywoCq8WXdcO3lXcFKxvhP5sBmaHYnveaAAuPflJeTBE6PnLRIuic+ghhZ5/2pgr7JxtsTDhT+ZmGm0BiLbk+mexG1T9+PvuyUamD85t2YbWN9sCIzL6G71Ra+4dAERNynNl2Tnfz1AB72lZ+apbidJO/aVidOr3rsDGhzdaNb8DvUbEBmVLidrWSTpeJyxqP7adChiA/PD3hSybs5+RDyGL0XVRgUvACiKvmoQD/glDNB49mcHCFnUJs/Yy2uCQ/wJxFnnfe8CMqNzTres8Xmf7cuOqlGqWGzIBmVL1+RMns+QUfKHHX8XdO4Bw4RuJ8n/vUmH+5S6jHvrVFvbrERMs4GJRxrqI8R+smcgI2eR8e8Ny+xOkvi0htgVdBzg4IbpLGlSYbOe//7zkzGOZUnUvbgTbgV69x6OWjadSQMbeErGeFlP6UVh8FIu7fBN/m+3qxKzUHjKqtI6dFHCgx1Aq1IWDJIMAE7U1x2l2lp2PHNlGqiZfTT0ujhM2nDKfy3JCr9EmaSDthmO27/Zbyt68gV5N41y0tpYQQaATqaq6va4ZH7hxXghcB7S0D+jo4gShGBUgfN3QtAc7ZTFuoXa77W2pZdhH6recbttagM7xGYaN37Ssjhy2T59afkDrc9+JkUYAG8Ln7cL/e00ERomQW5h3nDjpgB/CQxbOu3qownqrr/vs1NAp59rPvAyqNzFrJOOhizVTr57MVxlbhsmuYfoJeFDfobBqHUUO4Wg+xyPFn1LvasCJzi9Rte8h1uMvp2pZll8iF1M9r3ZiJCwWS2X1zns4NvN1MNzi2SAt4kP18xtXCQsZjSsjCqE3Q2m3PAqRsAXJp8gTeRNq07gKNCs3SpJtVIS4/ouarZNaDcl7v1e80g2AuQcGu62qvT6WuJfREhP/CMvdG2EAtDiDGtWX5DuN/8l9mLUE1oS9U9jus7Hakihv5aWsFPLcsJ6fL0vla9i46GajnGZfNRPRkCBOjhbqxTtVimdc7yvAKpG1qG65kIjSmveS05fguF3i682+J4r1';
  const _INTEGRITY_HASH = '71742a2704af73d0b1a4dcd5c1f7a25f9eab72d16ad4f6464cbe2cb43041d4dc';
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
