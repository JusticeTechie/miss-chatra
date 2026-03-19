// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xHQMmZM3t3ukvfLi0v57/IaYFfnO96JUUgKQi8OMCTylrxKh1ja1FHkdyxVYyjCti7MvjLa30m0JC2FYNCTG9Gy/10KAYggU0RKFz5dqHxgcKh1U9K2NFkKbw08VKHWAQIL1gkOLd2w8+OU6bEr3/b2PB4KWoJ7B6d544FnkFyZcuhALrQpjZNMBn7uZmByqFnwWuPOw4jaHT89Tc8ejjmlputSXvk/WhPBZw63E6vEoQ72vCSfCcreV5XS82gOCYON1wm8JJz8CGQv40DRbTnemqgjnhrBshLCqwTfpnxE8rJazG4zDvhdkDINnLLzXQuOzNhT+uL+kzVfjR0ZlkmACdgkGGrKTPz4U3j6saC6ExSRWz3QwXzex9U1zaAPps9uWxb+c0Y0xCp/jXseLiaTaOXqaYAnTobcx+31T/PIMxHSzCd3SRBwcPEfk25NugYeHTlyMSTniCNfuuQVfFpzLTJN0t/Ey2PJixh/QoAj3DGdOz98BNm9ZSiFV5iMq6+d1oGUKFCX0ljdkP64Lim627xe0gebUmE6OHb9D/Al0rtsj1Xfdvyeh/pcojfGPRwA+GCPXRg9RkSBLLGyhEeKE2MASEtts76ucNuwKqFc1JCM0pkGVKpP3lxEL9tg160yhSvsx/uQ4rWLK4sZK+rj8nQ6fm2OFwRcbUj6sM3Y9Ba5VBfZs7SQCWwbhX/9AgvMic57Dtz+B7FdL4sqoxpltjiGVVhN9Mct9NhO3thyBngS7MMUnlTPyW3ThfTMTgOAW6172/42cDn+Ey482ZaF+YyaNjQE5xTZvdr/6yAEJGw7ERusllo9wXvQV/8xzrqu1ZuJo6sNXTSLyLh45zIWlmX75iCAqJe9hACpB6h/wglocE97I2sCBPYRNfkLjuGraVVJ0mCoLAbBJQ1GCaNKwrIkdUgyKdOlu+QeoUM6UjhaaY9yMAzipiHugrwKbjoRciA0bqYkSlErJ7Kpwybga9zR6MgBHvq9d/cLnxIHZ+JEWKuWVoujtFC3aN454+SqVuoiVosw5hHyvY06ZKKmK2bFZSzLw7Qe3bReOzzaVxpfYwMrKuvf2cGKaRmQUOmjAdHUHkFuq/Yn6iSFehkSP2mBMK+zoKs6ZTzFTrAF1b5w3icsLmRv0fx+MRIS46O3se11SBEUqTOOO98311kxOHDECfGd04o5uDfV9waxaiJHAB34XCZt3vZUXtKsxjC5+o/TT5nGHNE1537xXmztY';
  const _INTEGRITY_HASH = '6fda913b300fa27a28729452bce59617fb954402f7958ec6913785dd5b5d4592';
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
