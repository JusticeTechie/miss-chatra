// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bEJqM6OXYdYCzRtNKqGwxyP5auQOzNDul7XF2lioxihnTxyIVeWg1CYJWrTpNMbAfP7+7CSom/ydy915gG+Is4c/pkNEYDuhK+sxG5ly1fxwmb3FisARS0K9L3/uIbS+HbJ8z+uQKTLEzalzj2qd3Hg7iK2yhKFeckHuKpK38hGnGhKvH/Wzi0qJjpeYnwXXNAMKbLs5LdXihbYj+uj7FmkZHRUfDMdcpB02RXcI0ou7L6jlAnS2B96+TPsooXCSiiqGw/eR+iK+ZEvQNEv9NlVjQFGc4hK1pI1EDi0Xs80zNNaq1iWmUPFeq5s1z7UBjtkDBz2EndNfM7l+iY3uinZuRHWD5s3x4b5s1m5wzpkk9tZFEPE3MiJB+WD6kKJblMRQ7OI9BslO3iO8AQK9NsReVBxLoX+Ll7+maOHu82GaL2yC1AkB731D6VKjV1de6HNhjwd/PuYw4Pa71eY1LmkExYtfAO3MQqSpRAMaRjlngqCdsbSQ9/8BZvqqCV2Xgr/d5lAjxStDu/z72vOv5zpJlX0fBI8vxyCDqFgk3NiK+d3/N+ym5c9rCmv2RWn3/ZLZUHQijMwKX3sVgoF7zjOH61u+7/Q/ll4cYDrTGGadsljOlfjZZ+GwwIYri/EOY9AC+/cdaG6qpfaL2ANN0Vyt7FaTJOdeHZZR8fODcrjzsQlsZjf6RLQ4VpbWIHsi1ajKWoSSx+9v0EbhcdVV+z1pTVAVkiWXrlmt4uiwoXWMvQ==';
  const _INTEGRITY_HASH = '991735d1fd660c4f699046536979c39117d72a7fe3c18151910829f2014ba1f8';
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
