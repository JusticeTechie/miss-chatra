// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yydCf27r1GlpGWG7GGTXSDkUrvoB5RsfatI5E/h9SgqV7vlJ9dtUY/hpYY1/HP1FFAYBjyL/ovTawfPd8dCDVDpLCHTo8F+4IAN9DwESKSYwDigK6TD1oxPM+RX/uOh88dLFdjX4VOG+fNNDWBbL/hVYmBxQuGvqsMCQmKODhO1f4MHC8WD5MHo+tffvwv5KiDUi1f8gcth0V83lBSVvO9ZcARdZEY0+LJeLKEY8mFFKtXjILWo7P7TInyAEw9wWjOZN/bCAUX4fwB/5UZ/nzjhVMUiCthycB9CQ6ZJnvtq/zKEss4bA+0NDRWlxFA5tyfaBZUnnL4YVWrDBv29MTLfNka5ispzhOfsn421gsefoPIkgRV9ZlF4BUkA3dVgWXRkIzDvsNo6BpAL6AHZOnjYP075GxJP12CU1WuMScSByACmsOYuCtNP9pGe4n85SV70x7RZlNAirR/hpXCtggDv15fvkAwzkgZEGeb1S5GMVzJdv4BHCkBDA7kpnpF4ObzDG/qlInTwoS40bpt1DAqsTl9vc78bL1L35ykfPur5ngFyi3a1MawVbsyGSQDtF984+jCepVhZfKTEozHmmDQqQhWb3UVoW4hUW+AW9J5rX7Lxtj+Gx6bMjtNYetz+gWmSpXZ1eGYPT68M5WAfJ5dYN0BZ6uDCCpbaaI3ln+3Ff/zreVmkXAA2HlhNA8QJcyVajssJxYStZJF7/fBDblYPiie9MKItlnCjuX/QZiVFO3xzY06/7Fopt13kBhh9ownlsKsMhV8JXzBBI67zI1j/rzKIgFHz5If2J+3n8OB1jaq8HWMDWUZL7shfoFPefjP5GiHrQU+Rze/C7iuH1ABOnsGbPHw7JQSZ1TbWXKGX2UGQ1ZMhgkp9kDnnD7ellpze+dinWJB62gFiVndMrZBqLRiaDkc5XwoNdOSdwhRocBXwSSxnf30RJ694=';
  const _INTEGRITY_HASH = '10a4165b1818b4730a89d24532270809e0355547d13372ddb5cb115188a5ccc0';
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
