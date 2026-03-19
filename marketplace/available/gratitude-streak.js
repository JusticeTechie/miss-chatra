// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z34i6orHzPPL7Y+6d7WX58pu6K0MbPtTVoR16GApkn4jaFLfk57SFSe5b89AJm56PzigyiPMwWRngQN1A7lBIGFUPCE9YYp6y6+o7wDabV3ShSeownMBDqYggf88DRIqrTs1X/AUd5+KNpJ5D1zHCYqkC10SjQDXfvDdawUtyQhlfOiOzr8tHBBi/d1kKWAD7i/ZE++c7m14cb+2JxR47vUBZYBrJW4MlqfGnXjS/pOeQ2ZVTfEUsIQwTkFyb282Ked2diAatqCb1S2itsSHAXWNfO8Cpn++6KxqrykMb3uolDENcpDHNBQrmGsKRM7PCseWNMSqDD7bzqu/PKBgMswGr9ScBuRebP1VNcOSfsaitBF+XrF6Ied7IkE0Sr70w4Sz1cl9Gp0OCnMWx+ZkeJ2t9giJJUpcFWFnI9PYkEJqWxiH76lJno1DYcSdrFUipeorEuFX+D9/4hU2xEu9AKrTFVFZrNwFXrCAwGITwpQMS73SXICu';
  const _INTEGRITY_HASH = 'cd0e69cfa69b62494eeadcbb0c8a01bdfa31dfda72d82d87968d7836268572fb';
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
