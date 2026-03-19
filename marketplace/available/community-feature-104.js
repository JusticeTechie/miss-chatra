// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3USc2KQZZeyWF2nME33OCbgAZecYdz9vBgfag/E6sXzWR0rXUijmMLPKkl2qkAKT5u55aIIc47+/aFSdJPj42uf8+CTBKtgognQWUJO2r6imFA3Qp/3oukzzA1e3tNyAQ3GyQO3w5RJPcXKHCQxLZZ/HVKD8akkoJ6M3mYhxeTsT31h2zfChp5Nm9vWgVTTg75oFlwSUPmLzh0Ojwj5AWZfhiHqoncHaly3Z8BkVngJpva40US90vBr0HUpkkrB0GXmQsqwNZWrZab9oM4gfiL31xh0eMQJ3OYvRnaSI4m4okFwTzYqIL4b8QBSaw4yr6iePcqExs3lnZE+OAsj1VPKuZLRz3RCDIwVAM2P/jRVKdE7GHis+3uVQHOA4wiPF46q3XW7lIbA8BImN0nzwfT1rtIFVE4pR96QhmNBo02qTn0FTmZAY+aGRRVf0aPawDLnb/IBUwE2dw9mg+p9pLt+WDXXfyG41tPXtpn+1THNPCZ8TV1L0EBxnL1pdeGPx0LuuZSw3XBdoZT5ncp/E7mhYHZS8yiyKCuJG9utAexlvtUgiA/BS60Q3B0xZZ5Y0UhvLr9SoEIXjwKCeq5aFti+gHbw6tgIaj5VZXKwRgZ70Eqpp6t+CynTOZOvrfkct494ZQFEm+bV1Ik4a60xMrLb6xPGglDD878vjYaeUelL5IYu4kH0e+18A66o14VqwyYN7Z90ZvELCMF0QLz1GCwAEwB8DrZrLS1qrG1HKfACyLo/sFKg=';
  const _INTEGRITY_HASH = 'ecbe25854d03444c2a2c9fb0545c5472baf82e002677992ebc7e92a9709ad594';
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
