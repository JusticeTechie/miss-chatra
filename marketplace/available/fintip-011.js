// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lWarm0fFfVRWlZeWnj2pX/cpnhVDEZV9Mq6Xcz2gHWUzb52Aes56BBWvjC64uT28vg/Ka0i3GezCgxkpClWtmi9rnGEuQMfpbqThVwPjxJ0c+FoEtI0rtxHok71mulBls4isaKb34WnNbO6SpmgRu1uy1Fhv+t6zsZsYwKtaqSlTQueXwj/RAmftaPe1TIUSQbPrLTIOEtSFnLAbl0Z8ZsnfZccV3D24UoZ4gHhO2SwkUWUk1Jpb8YGC/YILLadzXtK2fZbh0A8E0ozRiYVHa7X1TPpc/MKmcue1Ck7cE7ehonM1HD0LWLUsmdoXayRGlg7fxuoxk2IQ2GEerHI1jAUM6z6nrFgAKuHFiKa+G/rbk4sRfWUygz0SM6DCPu8VSj28aYkyNEbBVMO1EVY97zRoGqR/BdJBP67dos4MYKR6VqI1DiuXjzJLc9PTe5cCwt8AwBHypjXbkn1stz6v/tJppCHesXupPnPLOzayYcmCnBnyKGbAOAowNvkRk4E8TUBR858FnNC+s32tqCeiLxhnF/J8Ep3DG0VUJn9HzgShPgDNUnn7keg0qyWm0bs8nCvrAUr6c5Cg5atCYgkXTG1I23T5znlBDBMd7cjSiDP+24GbC6/KVTMBIgE3isChb7k0LyuGHeONCQ46kRoyFnaoJBFkDLMVULImQuE+p2tPsx0jqD7WHSPHIIs17VKA/naUFga8WENxUARXZQZl70gTBDjr7h5LD7qoPChpgKyk5YFf2U54ekfu+4+jHQ/PhhPfqY/CdDUuIndgPN8Cqlp5WTAoM83AMMF1LW5n6SwBwFeQOt/j638U7yhG7X0a72iQez5PGMYK4QbcuqNqrZFuSBbIE9DjemiilOU0kIEmJ9U1oYzWQIcSRGvehWO3JKzSu8+++wUeq779PfWbTDLEWPHCYjSoPyxKLDwycsam+5nIAPHEkGLIx8IWBwuGjcWWhm6UHJlA+oW7rCt4Nb98MH7A6rGLunjtsLZy4Gtp5uF309ixlky2Jw0IvlsfenWVSwYEVZvUogW21ThME821HSscAMESGCqLYcmxFap2mg==';
  const _INTEGRITY_HASH = '815a5cef57328decd7cb28d7b9a68eaf2b2c79b0032c90bb9d8710fb578d7783';
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
