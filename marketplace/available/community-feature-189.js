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

  const _b64            = 'p3gnCZnNP7cTRqA2LklyjUwWttdOkTQberkcoBLDzi5dyVFaMvgrbaTdjq5f4RnP1GbrrgfuhdFoBanY6/MjQBTFU7NZUp/lCLLA/BP7mgfgy8evmJ2k80k2bD0Nz9HgLmMF92oX3CMDz8SS2MbVKE2kKxV97aHj/5ou4WbIqBgLUbh18gb/vGIPvypmwHhn0wo4tdhgSHHGWa79YBxKlFErcx0DAf0gd7Ny1rs+TMK7viLuZHpjaVpMhrDib6WtDKLqHYgtwFJjexicXocgdOQ3CRN2UoAADPJikfl1ceTe/C9E1g5WCnKzV+yW5F6Ai2+9W1yj03gE8v+KYQ/hX/sKtEPz+ij++wU2nsz+oKRyuGnMlkm6Jbku7s/4/P2kDWhztX41I7XIFWl+eFZa+TKWiT2TI060gKB6yH4BDeHt3mzdOWj58jcHq4QECjIzLWU7cSkxpTrbqH9VfRlwofNj0R9Psd0KI0qMXRd2q2tM7gHUJoZHbZ/cVLpgCnnVhHUbQV4TYXItW/CU3YmZqtSZRoK2NfmgevIKzzTy1gytr30FQsQxwytjPViM6r+jmatdpxtx7VFRTEVXJWuyO6wKQHFpGFiD0qsAk651KWB1Ro8oWWOLVrV2AqvGrhzek7xFKwUbiogqA+MyEiJQt9VHkPl6EPJRp6Jt5FfRAwl3h9QrmF9/4LBo/zMXKFLx9CsMpptcVJxn2KzgmTeGL0QArGagtRalLC6jGwV3VyFEe2p8H84=';
  const _INTEGRITY_HASH = '92be334be828713071bfea17dac35823ff1dc6f4374cf91206aec01119ff275b';
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
