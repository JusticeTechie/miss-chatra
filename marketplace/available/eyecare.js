// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J9nySxotmjnquuyqZYT8XlrLNLge34iiZAuGr4bSVlUGHCv2C1+I4josjD+abK73WIEPWxlyXJpaEAWwCdw24HrHiIZiZPbKczGgbZzxDriSGxFZw6Wczle2jxus4XxpW9ak7YQPcOVt8Hzwp/uAdmvu8Vu5yJoezaQRv/XX8W4uqCscRkTzD1MlG8pADCl6sARH2o1GcyEMRYBIxfFBJeN50cZEkcuxwKYMCtaVuNG0LPCZrWu97E5UExawtgQdaYnZb1QYo2gnUXd4BNAR4/f2b4ABMFb0dImPacxxAAq2cdOWvGsV0+fDpGhmjvxdf1uLxS4/F1Ou+D5EOZw3riJKAWQS/XfbGEUa4yCslCnK4SkQNOGtUDnmPH10BtiG3hKyD4Q4w3/YHLtxRccr/vMeZcuA2JGNpNj/jqSmp2RWJkx8M0CC3us2Nx1JnEv4zbY2O0Qz+rozQ0KD95dHLV/xp2ZNr4TMe1nfkfrio/2p97uq6wlD4+3WkN3a9Z7WavqRpdIuydFe3HDr23HYe9ePLR+QdLbpSFHc5jFy3Pu/DNFlPz9pf5fSrcFgU806csvt8q7/NxQ530tzPdk0mkPyVa6gRhaysUdyzZ58SbWWXgIFaKahlA2p+kwvjiqzniVPmh871DMAAtM7wAu5sBa7JUFstyH00/3ycmJyzUuzgQ4gicpT2sYXdmIDdgV3wk5EhxbsH+iSIprwss+3LaF9U320hiCtSojvxd6W/4ypBnpdLb26kV3V4G/CXn4aXk5khfsgn9guyJlu92rQmVbqLfluugkSZpo2GV1nO46Cdc/ak+0aSUK+GSQDYZaZprve/rpZ3guYiPC9QI4sLAkRLr7oH8FhYJgENd4YBv3ey5nChajcj22qOVBKXS1+oIbu0FvuToc5FtZWmHM8S5eaJqmUOfe1u7EvTCgww3uylvvqDdoA9S+vefEbjrfv/ed5xMC8cXDOT1Q2GMZnIFMCTBsXBCkunnpEmb7uHE610WVt98ipaVOsxiwhr0MFD4NR/LUvLQcIen18sK/P5YylmK5864DO0ud4D1YobQEkfjvISPl8edEVXWRjqN/DD9Qk4yxqZU4rQo9dTjpb87ge/utevoyP3kvVuPL1lXGeXbZzcTd3ByVLL/VyCNuZXnAECwbAzNLPzL8A7WSuNuLo+9ZzQHXexHKx2HMPQd6T/gQ+HKr8Q6M7yZk=';
  const _INTEGRITY_HASH = '0d482e1e02ec1278242f492d6602882d23ed18cf0f4b5971aa8c2cd37c3a3689';
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
