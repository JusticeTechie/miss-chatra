// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qJg/dEguiWSODDwNkzZZlf0GPWUBDnwMfHfXA+ModVeLqoX+kp9niPz+CxjeTBnX72HGdsc1TzEmkxQiNZ5jN/BvsCmVM+bFMkWGhvcqnio3QH1yXP4wSxBN60RgiEYMHzHXozQ8J85OReHsq9RZNu/mA0N5ONSxMZx9D9wLvAY/k7jaSNhePsCpvfFAegCS7sAo/98wCo1GbfQglc2rB0gUbyBzE5QOkYTsRDdgPi9DLQNCX7s7m/ygxd9Coxa6xgdcBgAttcFLz/+E870/7kEcN8g5Aseo2TQnUV+1d9Tn1f3hvYCjMTtxSW+RKLXSALgZvTqbVk1u76QttDEjS5eQtChXB6pOkT2YxbjjxCx3UzmGbGe4nrAZ6o/wyarmkfo3SnIeG6rB1lIlZuz8tGNmWv3GjVUODuRCN5lcdXsNZXrod9eIRXkGVT8UxPXwvVSxEyegWIV730/5Sz5JICf8mP0XCoSUIp6Z0NZoqT8OcQmXYfJDsni5S7pFrg47n7z4xtE8CbEcKSDTCYGOpRx/SQ9RiSzB+pvH5q4XeWrXkBoLvjvl5+ndvMTk2su3VFwK7+k2dG6odW1fA8nyp856V/Yj4kt7SwJSdclcGBtad1GRVjUUXkfu9S9leb0Ppn+pmPxLFneTPFviEFMgTx5TZgWrZ62zTTmm+O2HZwKQPHy3LMjX6pB4yb9ikr0+1nZLytpN39rzdN+rX8Zstg+6FnKjFx/zXomLjq6SEF1b09QcK26aUotEpJ9e+rCCrc+/wrrs0ooNryjfVxRegXVPO8m23j6Kof2qdXgo8TYzvgoKpAKUvVUWftUxfEmJODbh1liFFQDS7weGydneFxcciub8zX3QKP5vUtSwGyyxEV7S9/dqpXKEqylYXubXuYnD0CD8UM0Y/on/YeKbXQ94MNGVDlad1XlyWpPN8fZMOmV8nJqw3XBb4dANf0VHNa7/3Warakr9z3l8W42fDA3XIITG6xD96G8g6gY1fs+oAtvfKIominIsW9ikLRRlBOlAWunbXzwQn0C523NNYRT6IplTjbsLktxCrTNbCrKM2Loz+NPW0G8eY4cUBaTr42MnRQvVsaAR7v4UY1WtBklpaUgVrvRpYmffCvv2Tcql4vlgzA8Cvk9tnCu0PKfPUtyelPzVdmbdIY5gc/MNd5gittSqvHcJTgdGytXZLkpXKZqAKpIDwCTaNE1+JT+YLj0gpdKq/1lms5lIfgksXMhI2of+QnhZJZ5pwqIXVEVatzeQWDQUxZt/NIRtHZs1T4vjme/cFye36PsBdwySXmCEf09ybMcKGFvcF5StM8Ar+IUBVrqAaQCi6IPH21xGdIG2wLJJY7YkQncDRaTaYCdl8DWwHRcf6eDpSOJtkEqn8XQJegRSS/wTVqMtQzh+OUYUtMVXdScgdxSCoIGEAZLxm2OK0Fd/X2bchvO6mnM=';
  const _INTEGRITY_HASH = '726e671c4114732b2f2817aae2ba183ee05c7af5d88df436a3321f3106b49918';
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
