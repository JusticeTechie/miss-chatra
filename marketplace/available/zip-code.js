// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0IL1Uge1c10ivqwcO4f6rBdTtSQVkP3r3t9ukbMuTxBVjStsuWZ+52uvHYluNpbHDE2gwIsgrqRBn9EcdkQXSQ8DXcNfgW2aRRmTMmB7XqG7yQ0nqY9TxKbim4XVCSLQD8pIpypVwARwANzjfRArgxh5GPyO26o5vzROHZ32XqCA865rL9u2sVp2oNMH1CFr/vbtIVH2xXRHY7TnYXYLSQzPLXZdW9Fn4Y/Nw2+fLtfG2xoMhjwK698H605hFt9Xv8fzgkw7ZVAyOw4SZv83awi+5w/YA2mmTktECdZeY1GOcnW04F30/dzUJT4Ym2NgbIbP9dmCgO+3L91zpRyn2bE8Cy5a1cT1xN8tiVszAN3D/HFmkyj3mpK+X7jtIp8FqDg7EzfIS35IqH1+QUO62vUk7p2n6cwgSpj/dOJv6Wyw/mtn+3DSvOAy29L5iG5GWJ8RQJ/BlwUJPWuQnowBa8KzVAU3lL9i/dP0EklUEtCgNNzgVUzgAEEsZppJ7JAX3yl8dtxxGY3V5sxFOlWdG0BCn/IBHQ8ab9axzEezxnSgt/oeseNq1DG8L3HnytuIpnd/ECi4u8YQ2yQPt0+bsHsYx/frXPrS5d6zvGw3QFXaznsCJGoQDTas5Kd9WL0w3AYewLOzwrTDyXogjTriirxnYV/Z61mDEQ1g9eKn1FgpckHVV6zwtD3v3TMBIY7I+wAzz3lATAwBbz84Wbr8Tvmwb8gOrVwsZy0QV6zsLAv7Hq4IQrE8XrQC6tRjs8mWtSWIO6mJWGsuG2MdgJUjZ21uSMuO0+xpBvtuvaDqQ72TEdvQc8mTkyoq/lL0hZ8C3N0LnHW1D1TkolOoftrw6h4yG5ReAwbNmy+ZOvrO4AeLClGAaast61G3J0DsYWrhwFCaBnQcIu4ojUvA842BjHbiu9h56lA4RxvuSdvsjSKCQMPuPAsNbw5GuLTP6ojBt9RBSx6f3V4BA33WxgP7/NJoA6Rfgdh2yMj/E1SMdUxiuIUwOR0aaP3QbvYvCvXiHC8aKGmzTMYEbafvfbsRqojgG1AiNJ3oexPu+scUpo8xT6i85iJ5qEUBRwE2UkjVYc5Y2rwXN8hB0kjQiJi7Iv0AYQ8yXFQLmp1Iv/wZqAfBXdr8RpUyszaufSe++lntYQBjKJqQ+2jK1Me7HTBGUBrzyIsnMU3nV+2VzqeiHi8ZiEHC7LV4O7hiiNIi6EThyjwIxdaaUangaltr6uajdk9K71rqCDxO3RxyVYZXe6wMYUgeXoS9V6NAnz8Ll/cKcReYxKpsBj+7iF8ybLY7+LSPrky01zsTpNdxzShlUsi4uS8qvfR+8icvBH7Ek7xfm3aEkM1TTQeGSihO6v1tAEg4Ku+9BXKSbnZi2i2Rv1kdNIrKs1PiZ5Rv3/vTYAH7/HTS5hstaX22KniRtegVT4j/GBpjBYtCyy8lE9vGcS7Z4n+fhNUFHcScHmDQ9DrBbnq79T7AdXQ/ruPaFbzjMUouzmbxlg3lfqgcLqpqOSKu5wGS2g0Kj0a21okgCwQToiZNcNVJr26sn7CICjWyxqpZFuqL92xqavnW3KEGDtkYLKGszAoAJr1caYToxvyprDdvG6pI0g8WhQ==';
  const _INTEGRITY_HASH = '725384ac8ced2b659fdff65fc2b059f62eeb46c85d8476bb6b082c565037d861';
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
