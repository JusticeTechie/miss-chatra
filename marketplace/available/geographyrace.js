// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wp9gZOth38njgQ5SERkZYulpKpm+8jetvBbGpH1qCI1eRxRboEe3HsrzLT989kNJ6EQPv90h1nHoUgn+gTimTR426wZbSjBFGP7HNfm0icY7DOcB/WMnYmf3hHPid3H5B/2maNl+qCUWwEkb01LjvUabzgghSDjaTdpUbQjYfhVJrCGg3yZEkyPDYaBJcs7ARcko1KXVy5jeSPPdA25vQDRpcP5wymATucpYGeOEDVmkOdjn4UlcD65mIMGJwR5hgait/sJNtLR7YZEvzZb8+lwfy1WQAZ6YPz4BME+kRy8lmOE8Ndh6Qx/F61sQo4GL9n3x4bqVcqA0+do2C77vNlpOvPsLL25JnD5wxq9cPlYTvXNSxJnz0pihHZNx5n3A1YbPyw+f8M4fXcAxrhy8SgUEHfQ99lPBew3wW2LqcffQiaFur5xzjS3fSmm/46DJmUfQ63ZzZtauc1YdhiFN0xb3vsSNyYH50R1i7st9vgFcxFlARA80nMGN53eWIh3FLvU1w26ly1eMQRSuyREFdX7M+6RvZZr3/9x+KHrlKkYi84HxyWgYUMvkPjlIYVP/w7e2b7Pl3luRyCxTg1ji5jIIdQMHJ8KWq05H3F89R7c6yexa3boVyNMj/lM33M9vd1RUiYCOsgQFsbZJVRiZqklxE3RW56wllZbcGp1Tl+Uui5TVfgEivCfONNlxGi73ncNA8HiTN+Fr3VpwD/AhCDT5jpikxYCq7473f9CRxSgI3ybW1ZYQ90fpl6fOIXfHbYFy8ocHPuMo6dU+yb6tYEWNVCxwKycC7qSV6V8CjrXAHk1ZNw/tBOFJjVJL1dqXev+xPXThgDqDOV+JlMiiSXvBJTo9pgiHYRCRHtsxbrMhuXXaIz7YoljMgql8ayLGyowgv2knujOf6RnSEjEOtWSi9KJrnwfHwwWVPI2ZmAHkkNCfDWxpgTPAb3rSU9yu5AVjjDQWEB4C8TJXwkI3L0WlOb+AZa0SB7Ts4p6hCXlh0IQ8LfbH9WqG3iVdxUn9I/Ep1M2W2jzhTrt/oTkrQFsPvlJDMOXNg8aiqQxUzWNmhePlzV03uC+lA3ywUksztDhhx9CtoDGLKLMwGDruSokCDot+/RX2f/4yE+SaFIcfNHZxMjE2V8JiGtdkvtju7e880S0gD7GRJeMCQodF+YG7no0Dxf7S07CwHNWy15oFhzcM2SIdStp3JdumsnfiHrDDY/EH/W8M89WMpXM=';
  const _INTEGRITY_HASH = '487eaf9f17a2d8834a93e4dabaf22761a88290551874817823cb57a8c800811c';
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
