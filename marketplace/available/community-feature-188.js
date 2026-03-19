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

  const _b64            = 'L1+ZSJxSEqWuXLXqikJD2LWOxoMNcAnw8ZwQFTDVEZ5T/+Qhzf/9pB1z4/vd5xVYaERjjCdVXyM1JdW6blj1CcSMInzyVRI9CEbz/x3oncRFJHGbrX4Gnb5MEXVm2b4kNoHhmOiDgZo8d4+CN86o3ttf8HQ0gUpWl4971xVjI+ogiZk1VIi8nmKqCyWOvLMO8ly9m8j+KTouZb0DAB+wjKJCuclLQ46OvsJzURWLmitVQUkS7Gn5Dr2wcfnZEcNawg21Z08MHrE3fiQHwPFcviwI9yGZopiysiiXtYSfxGonzYL1UBDt6KyYExkdwJJWFIUQVPoFlIFtQxvzX0wNeJbfb3lAJ9i36alx4P4WObreAbh1qIJ0y9rp+LLTlm4C7WMuyLJltBbW0jG0tIU12PAeKrPBwrN+bRqazplC7afTSvaajwmlifnQ0YbkU1ZD4eYdZcQ1w4VV6j+wjMzz+xfnP2TDwQuaPodJWN3bUXIRmgtM9Kw7lXgN/gf2MnpnOUl5oyhYCXFgaWe5MRuiBs2Fy3QKyMHw8QY6zM5pGqMuiA6Rna4yiMabHoC1p0Lb9A/30aQjz+2ZFEFaQf7LIXZtj/Dwf5zwT4eGkoF1PtfPWo0cpObmJ3Ig5iTIm+QdCrEcLipdwAtJiTlerUoVMxe+oasu1NznYdcGWNeWlO/nhjyH9VTEXBuWRqFkycdFixX/nrZYDfwgsaV9kZKBRMrIW9bl49OtHY06Q5E=';
  const _INTEGRITY_HASH = '9762e2925b2c1c25fa3c033100410a21908e679ae76ac3a499318f8ddaf644dd';
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
