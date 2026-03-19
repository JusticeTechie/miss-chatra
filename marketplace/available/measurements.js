// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IcS9NBhg3k90zgUHneQ+2ES7q3MvRpMnOEQv5eyGkJG+3zIqWSA2Vz3Vi9NQrstc1P8yiJAfwiRUSMatmcZwLkPQPnfcJmkLRLmwAOC63kWD02RcNkQMyD2LgINIpGFmnHhnyZ1ELS3U49fZ+wPxf6+BKDPeuc8ybnV3BaiMf93H1odRNrRd6+3iHsTSVtUovMPTyqeF80oZ47vuQWprxfa4GudPRNBWs01SW/0tj7TxwFpQ8lTIa6MiD67vGJ498vUxxK5jLtC3AZGu71Hj8eC2H2TYhREeB7CFXztjxfrnKOW+f1QpoD8MvbJco/SvuJVtrTmD0zcdyQYWCfXqDfiHr6s9WEhAzqcGLAawGW4EzkznAj20tuoR5IjI6vEiQLlIBGmDpXxc+wCl8zclLTfdur016pKjNkkte4Q2vxqOdnN/ZRBZmNL5BOHWAIz+3EHIzC3kde4U3QPF6eZ03Oyymhkh7vTjmEzEPBNPQAnWsHuocat5NdswpVNIZ8nogXf6qdKs525LZ8eBln+CFqdDCFqpJykQOkmokUJ0lGJ89syeQ3SzDeHL67gEPKN2sPLFu7IBPFkekSjsgDXy98+Tpcr0zrBwg5SVBmsxHVGF7oHvMZPr/BMZXJm+E70y+eoaPXVBL+6G4FkKoqtkGDfnvqgUO4yhNFpBIpReUmP62pFC8oWTe6hMzjcFZbHnb72bqi2NmlUin/STwFeS0S69hXFet9kc1xeKr9IotNsGM/hQpz/CBSflD3C7EUg5HD/Apul+lMQ4pVKGeh2Zygv9SGxM2ZXUZEjCMW1Bi8NwXHhUUZhfsAlJuKttRVnIF9pTzeeiJlVBKZfX/uH1pjgSFjH6HQzzAWF5TEZhEjyIn3MyX3gBiL70kMz62P5RMUfUHRKd/FeRHyjzOnQ7GY2axWBKEsPxbUwtOalg/klqRjsmTaORSDKQ8yv4Ans4hVt7gipq5zAZiITMpiWPieu8LTaeysksnk7FxavBIPjpLmSr6d8OKRhE2fFNIkqU7GNTB3PNxxvspy6NvghMTST4R6Xg0szKIiEnZFZTRrLaWREeBct953GHalrrSjIKPgKD6bELvstRcG5VV8N1UVFc3wsDAZETpyBI3Yz3aVpYo7XYIg6ZL6GzebB16FEVdIPla9i43sX19Eh0e4YkaXi0v77KZhr9XAN+MhxJFIjzq2CJ9ebxxFuUIBjUCF3jLhYCkrlcBa8=';
  const _INTEGRITY_HASH = 'ea9a131e5790f9aff74ed62adb57eabc488c966a0ce93eecb288c3d4cc4e82f4';
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
