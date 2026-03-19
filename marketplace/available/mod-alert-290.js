// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wRZfl7Xr/jzB+WM0PNPqlujTWJPoSph7B+JhdHoDHZWiwJmssf+v+5T7WN47HgUSL8JqbPZAX1wH7ZaZ8JJxgCzRlxJmg7Id0Tj7dEYZUJsTOpDK1HGDRnuOtmB3738OqZxl3VofoTWFJiaa22+Tmj2n2OuF+ZbuEicaHXcDwBua+10lcBBz5cylLkwMYnznaUHTv0VxXbbdVViwBNu6g2WUKm7tE+gJsdI84bP2eGEe/BvXNTXy+27Ex4BFjaVSISgsl21f90nEkAxUZL03zs4wBkEYCrI2JwdLkk+4CS8IhXdM4Ni3PfaNkzYz0H67bghoFXvp9UbIf81b4r3X4aSNsZN/3qPLq8LyANznzHrlyMCsJZclNiqDRffgWc1t4aCtLLSwVT6CaDFH0faxx2rpPPCUveoWsqvftEdzHiJQ9Q2px8YbHfwnGupzVuzuLqyWRdWyAgrgqhWXkxke/tu/TDiaAvLcPqDVgLAs9E8vLsdhUA3wtSZ4ht/hiB2scL5x6s/k3ZxAJIUlN3PncjnG39VmcRd7/sdcnqXbsCyrC8J+orvrI1jeVCzDCYLUr+ew4S1ZUZJ0vbUUFWond+t5z+Gl0FPwrPllYZlBM/+i41WEQt40ani9qEmJtM45n/vrdb48bQR3WTiRuxPZlKKzbVBAefTR6Kh8rqZ3i8VGsA7A9LHyj0h+z+QBBtA7AUZ0ny+Rs5F1yjfS6XvzyUtVpN4RPemS8fvwRbk+gdCT3dtKRif7fa32BfIg5YAv9UGzRi3LSjkBfL/0Gyf+2sbO1fR70nJhaZMLYup5vQZvASx8rXE4Sp+RcjOlYPnGpDVC/t0Oayz/d+h8JoLOkNOQ6ikFctyOMKnH5jli9qcg4FTqEyaIvoyZMomoQnmGHIpvgzsJ5457RY/RV5OkO9ep1qHIqwkBEfZlhSB72auhj0wy+Id2jjldiuivcVj/X47vD4EpgOznC/V/eRU/VAoZRRAYVVJ3JsNpXl71knofCTipRIcHeAgeGQ4QteUrTLAhuTmyEVBtcovSK08VcblyyFGG/vidvDcTwHw9gD1geEeshyTj/q5OOOI7hCMZuc42LcAmrP4bhDIU1HzKGUoGPV2G4IhSa0UVHjUcpdGVKP3CEFnFwdjtFBMeHMsbwH9mIVhWsVqJ6iTcUPbDNFTL7tNUfcvsdz4OsmvsBoV6p4w/UCZPRLYkyytfCXIUZtdiiMJ0JIA2tYbBO5+qgKxfIlzYUoYJPlfGfNpxl7INf1FGIb1XHJ44Yf8ryiNCkb5LlxUOeVMczRqY0X0znlgQ/WrSU59wsEBzf6887vGkutNjq82LIDXIIdug+8lahjmyWGvd2o0Ys3rX4mYOhf7hritylEUpx/mSj3Il';
  const _INTEGRITY_HASH = '0b7dfcc27c1101a9a9c64e6c6694ade965603415b06b17abd449601daa7d8c9f';
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
