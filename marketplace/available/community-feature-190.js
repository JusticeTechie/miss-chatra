// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z8K+zkktig4o37AuiUpPVinVRaga1f8Kwn1L0OSmUZEXMXi9tXfGbYJYDg06inO8p/jL7asq2yTuj2MNsVPJNq5H9ImoHt2kZIL2M3ttEuP5LhwANka5KoByi861Q6/oR4CDrLIMmzz3yTeFPI2XV3zJmIr0Nut90wB7VJFB0obKMVAXz9fGfuHmt04b+l+KgNOUoV0B5Qryf7pOYp7L7JBwPSThyNgO2m8YW/2HIWZiPU8aWc8ZtnowygS2u3XzBuF4QrIMkj6halwKbbn3zkvuQ/pm+XiFEVWpiEZWLCiufuO8vetnrFuOqf7cDAmsfSoaScBg0Cl1TEcWFdxeFlHOiQXl94bs3okOgChPcvGHfbSxY+YIAbyWNWaVW1T8bUy0pY4ynUPm5NBNFySImHYzNV035IGDulBhewNPL2BPBNF3ab+2cYDQqPGIgdnyYipL0cwsOBgAfDBfUuKH/91NBzFw2XufA6WXMhvrxXYdwzy/EElQv/d8NHv1BDwc6zDb+CCBf6lupIXkFGtV/Mt5QZozRmlxI7+3PIjG8tTOm22lQuM/hP80T6hmpvcOEMZmXgeVcSZCzHBkTY/lIeZuKbkKvIgeE2cOz/jmJ+LUMYHnrggbmpFQ8Ua5cPWXLJf5XHujsbMkjfnlwerI296uDBdDkt8o4/q+R53HyuMSrmSHN3xrrTZQzA0U08auQxO7FMFPfzrN21HmLAD1folnJ8P9TehHbEPZevax6yLLrsnSSLG3qpPV';
  const _INTEGRITY_HASH = '03c3b3ee025c0f6ec1870047549f33157a6e32b8df86cb6d02b95f9da3f2e9cf';
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
