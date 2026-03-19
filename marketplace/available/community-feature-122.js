// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gyNPt7o4WBpZ6KMUzIdWMXQ+ceB3XSDwfEKzuBT/ksGmshbLZON/kMe5nA9EA9bGY53Ld6daV4K2BxNPR/3efuWxys5dZUbRkLow/2izyAOnxJGwc6HBjyBNlZTfkXbbEzBw0cBjxQwqqzIzwT1hI6Y2RdOCmRRUrI/Cbh9BATHFG1/Kw/7PlhgPSAPA1UIW3Ai5AIy/N96rDqUat7wZzApM6R2dtPK2zU5WiBcDT0O2Q6q6FoGO/danw7ALg4GBO40CBWUnn4XjWkpnSdTPV1dzDCPtgjebnj3K9gOUiYkGeLXOaJz+6bSkH/2N40OX4q+JTLuFye0h0yoizsPnRgUn+VQVC3K40ZG50kcaY8Xhh8GHnWrWn3hmUhXlLRhIih70b7a5Zri4WImK4zH26BIBFC5dWeh6S9r5Z4FSYCcrd3neQios/UbuKry7WVrWuaK4yErtGNR54qr/JhQC2WDbR7dKUEjmnKP2b4oxT9rdyIyiMyvrYqr7+V1F5E/O0OyzVkNfjlfQyFAToXbDFRzi/+o7zAK0YoOSaLp3qx7su6dWWls0W061/UG45cphAbLppj6pmnVMaQJCwUMTxwf85Pn8ocFyG93oyBHILPadtRnz82DZ9LdgrmHZRO0edXNWzPy96PuPDXg6uEpEH2pDQZ/GtTVMyDwsbqxLbqgguaCTI4ejok0szT1oS9Yddf9esfcoPAJF8f2rNx8HEnSp4xOUTLrjkA2JUY11/dkzENE=';
  const _INTEGRITY_HASH = '1b44ca25a348b8afe9eb0d5b51d8d8747557edbb73c90a8f3f34d2c32a317db2';
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
