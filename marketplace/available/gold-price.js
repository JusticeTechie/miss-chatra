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

  const _b64            = 'ybiVq/Uuy63AmnLrwHEMXBPmUbwevr16O8dt2/n++ktrPYXLmZJsq+9YDK7232N6AI2yTRNasEJOtuH2KNlsmbS3JQ0MlWnqgmB0Pdg19vpb0FCl5cfY/T7UAnQebnd/PrbyIqWL4UC0sDGVLqhfTLVFXt7EPEao77ExWCmxrxVxQ5LGM+K3l5eom2ITVVl8mCJwnmUZUhvkmisAuA1zXXcfhq3nWxn/BBQcmZNiOiEe/JbUujfODdtQCGBQZDJczU4CY9YGEI48g1xL80JcfmBwrphrdfNGFFb9q0jE+C9/YdSThfOa0rbW0r6Lyx34AiknRmpNSZS0FnGaCJ9m6brRFCAxqAVfKqXoIktjmr49Qfpt8Y1C+JTh3S+nm1ckpS7o07rNhbSvNXtnT6CSzEQBiuuFb4g0szrGOLJE19uHZYyD+SDomlqedsuRficM2c/ExfQfG9RKjNVXgTLRgNZY0Cs/toaC7KbDOOJ6kiYjTE/Mr8Npj8OGYcSauFN8J/mutKRnAatBIG9YNfLhromUiImRp7VLSFpKRf10oQsYzxw3wH6a4efD+BTlI0FVImE=';
  const _INTEGRITY_HASH = '52a8977eebaadcee1b3eb0c89e9a9e3456a41ff09d0151050ccbf078cdc54319';
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
