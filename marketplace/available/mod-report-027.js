// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tq02x8lNibxpxIUcmX4IcfTbXc3irlxvjrRCRbiNOxTO5DAu+6fBjg5VoDwrYAMnGxHdaOeNtXUs8rU2ESyIsjA+YOhOlT1lroGVVoylFVXi9T+He2WxGs+lGBrTWgVZAFoDNeyuv8p7arsCQFqgBWOV/8D79yyiYLSyZfLSjkKhP7rHNz82gG1mnXiY3vmJsvAcN2ni8ahJrJG6JZSb+G96f3Y/PTsPL92aJGRO85aRALiKrLSxg0fG2wLlRC1h7OhhP2gZmEOp7StONBTLcoRmvqFB1cQFN5Cw6Qz9iYM3iEf1s76KbvWrWfXKY70AjS5DtszfqGu/BMnyHqZ2VnSYQkGhriLwbTo3ES+n472eLEA8tDSpvBRvzKqk/tMosqolNqz7ZUmqMCqom9gySg4PUHKpbhU+3rdvBjmR7hYBdNy5Z+tFSmPdaESd2eTrKvr5TKenFIx++pQBnyj7YpwhkOcYSgTyQvSbSREqN1GaCx2DRhPhxo2yfLQJ/qQBXAyi5ca2anmYxKVi6pnFVDFxX/1SNjg3QdSGhuciAH2bN4+wAH2Yzbo7Zn8CEGnsMTc/y/s9MB0Ir2v90LG9HBzAClWHFU8e+BBd/CKFtv9rgiKpcFxMwEjQwpj/5cIUc1xEipTYtIyW9H81A9jp1TSYKTTJewb0dSL5nwijb8KPXp1IrtLT6bmGIcsj3EG3HOmT6ZFenCrQSYjVyHpfodc7cciRX2BvVtNQw3Vc9/7BpfWMlUVsCFkXO05IFDiPBnl1sCx+EQ39jvcOGv4ZGK7GxCbJB0klDtdiGJ462c0vfGkhPnSU17vwrkzR+Ly4ylsv4zrDSB0quL4TBw4dLpXHZ7qkuAfNDYWPdKoX+3UTf9iVhy5fc1jQnGk+K+TnEe0Fvri+ppRYkO5QIrgCPgjpu1TxyDNpf9deI7pXTUunbgv+bHvI6cLgWlK7h7enAxWcTQUUQR/u19T0THXICJhv+OsJehQ7WWSNh+DqT+EtQamq+nfHDJ98bhoadDKr6LGprY36HFtd0JkRHSxVl8Cj0/1+2qbDe4Fda2cQXc6iEJ8VgxHGZOWOnr3QpDR/Hb6b+poql41pvi8O/etWngDHChn+e1b9chMbeZfDdnwgelPGRhEr4RxoU4SFNQVhLMsKM1IItMwemlba2R0ooxpwUiKXMNccrZUJyQnh9A6HpSgO9UjhV4aMBxA1/13mg1D4II5DkITq2H27gLFwoe7c91TMKPq9Nn6TIdZ/xRS5Jf3WcflGwhj+4DpNL4tK8yLY+doT6iL8dGEpAZJq6NzfC5IlLVNrIc1DSoov+peF1BAkSo397zl91/utIclAGlrrmcGlZFOQCzWn94bSNSeWpU6XXv1ytDduFgq2SsPwwuw=';
  const _INTEGRITY_HASH = 'e3934e0a3608835d1532c592eca270d90f893a0042a177398c29b7231ef9d5e4';
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
