// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wshrgFzUw6pufwjj+faof1ErJrdM3abO6Bm+PTD5Ax+K56CHZqqPFtJRXuqIL1hXuAsQYduEUx/R3kkT50qcLQ1mwL5/U+LmM43omA1aXoQ8h2ZZGAZLAVUHMQM9UTXg90kRek/sMENL+4t+4S7SuFwh5SA7NnlsWEu4HHYR1ddqyw+BrO13BGzpFG2EFdnekJMknslei1fIkzK8hCMIqYVUJEZf7RAkvmJ3m+2JeACm7XKwMX6lcze7EJ6wFPyeEb2ya5OsyQw0okRB6ZZ+e+dnvuTiWgjyJH3775cNRqDPc2O7FQTM74YR0UFTwlgWG5rk+JQayyAnlZ7txqz+pWI3et0q7DE6MicTCR7WOPuPzdtKsatmmniE5OTfwbIwBoVRH6oX/hxlQZupQEyzROkFmkzQAI9BggV6EL90jvf4/opskNE5MbiaerCxeoqZZYfGE1aHOednv6FGL8yUhpWDJ7qZD9bu4+WQJZo+Q9E3PpeUBNIC0ucP08xS+nB8oMIS1h/fkZkZXpF7vSZMvb47fZ7U0B8oqRqgX74XV1AUZF0zyflwn9K2QSVO0V8JH0rrY0tXM6E0QaDRvZ4A9XB6rpgWQQ8W/yqxZfWHUfldM6Fk2aa2HyrgOR4LLO+cPRvOKJb0YFA4v4XGww1RV7AEcp/cWPFQfgQXh0ZUiMwmqISemdgfORVpJzv4jYUpHnFOj8CQxHw/4/lqowfMn6lUjZA2pCkMkMcKOSqUCD1JAieFiKXXs6Z6Qoyv7/ZD2WCitokPoBATCR6/bJqKlty68zbcvgK6Kqq/GuLoP7DuPlYtcBmW828pFOQgGXW4LwHYfG5jYc5spYirxv4SOp8De57v4KyGIaBcjaED52nGK/R6PFMWnlOCpJjtlYxrWxzjB4mJc+8CIck1sSPearuH2u1Gq/gbfm8szf8EImL5UjHIAKO/p6eyCx/1RpaKIYeBQ0eRLR/tzed0OQ66cMyL1uXSfxJlheEE6GhUcx3vygmkvWgLvC5cZZTC';
  const _INTEGRITY_HASH = '2f206da29e4eaa6f3effbe688d3824e84499f90de5a125bc38393a2cb3cf1b7e';
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
