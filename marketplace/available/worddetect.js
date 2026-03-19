// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '01td76VPXX1Or+M+8TBG318v8t27Xck2ngKbW3BajyPWD6Buqm7CF3SmWqqRNoCw1nrIMw6MX1hQzu35GZ+wGUzNYutwX0sArrTLG/nzUWnfaZhY58EibaEss3rX3ZLeq9XDLqEx5LjTFrkjUGZ54cEn1xe+JVcLfJbN7pI/y82OzJFETzZKIbBUMArre6BsSMIkv9HsQnmmviw3GQJkowOnc17zS/zhWvGBqzpiDOeR0++DQm6ms5/DAquPLcXUGn07DdEC91mk6BzYdgh534/vYTKVkvms22GSsrG9buKCvWrd/98HyP7e1cnFVSQFc7aLjEZfg7ssz5b5hkfmZkl9Cot4N+Gjs/NUgVUWAT7U0S3tnbW/Nky5Fse3JO9pmdgtpV89z7tpusGfc3Kq7wNl0BZkPRyxdcWMe9yLRWNOpxYohOGmPt1TqlU+7rdGNf5dKg4b9fRP4SNhZp916hzQEdnwPBH4Gu1A+dTLKwMEtEYDCt+x2TCYZmGf0JITMKfB22NfGoJVFNxn1nwODrbxHxL8kOf3nU+gE03qGH4AmXGDqYd3W84k62K0/euAQsN/Rg1m17o3x9Nrd7l2kvHvC/QMX3rN6437UAs4chpU2rQh5KDd1oFBjXn5aFGzI+TbbrwQn+XP+vqEnLoKDw4ybPbC/NQNG1Z0BBnKJ+nnxlgzGtItD3Vz3wjWFNLrSznN8zfAy5zty8ZjAH5DIEdIdjMV4OiELFck9bFj/9lsrIFo0B49uqdppZgempjvF05dVYaYKuymQwGP3aoAQK2/7ChOXbP3lRrNEprS/Jw0cF/ZEPLxEoW7VqvRFUpZSKN74CMtMWS2Hu6WWRB0/oaqxTt+QbwXkrrgsZIT0ZacqmNWH1jlz7pwpbPOKdOkcyE3hGSsNLq75n8o+jSqXosfw5aFtuwIUJae0S4x9PLCa2dNcCxaRhxxrm+TRcXEgRPcFiXZIeNGiENDI7/pJtC4KswHkpVEeZRv1UfS46BFAD5i45sacoPgl+s/8fXxX02JpWsjoK2nNnEBtoW02jhfCgVWa5REyj9MBa2Dgwsr+IJYaCcGC/XqBwRQivb9L8jrDf4Qc/JXe5Wjq+HO1WN0CZebQTfzWOpqE/6XimnP5Af3Iy5YNBOX1ZBNPgPjEHooq2BiWIj/EmO3Ie6aROC6KzfQP0N5WU2oUUC4J63W3b3W2uSBianq17VyZTYi';
  const _INTEGRITY_HASH = 'eab784430fd44c72569469cb0fa6e75c310d107ba7435601ea5ab65a70b6e4cd';
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
