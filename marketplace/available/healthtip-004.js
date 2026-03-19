// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sxCirDw+6d5TCSkuHlH/+ygixVgzdOnhxJ7B21u24JmqH5s3jjHC9v1ZYdXlfbOnnSwyKXved5OHhn1eiGurpjOWInj3LzCJs8NcnZeSAy4G896fbWPYtKZfPgdOsB07ArnfgQkgDeIih3cuKmVW9tm9Va50HtYiePUGWg5/f8EwlsoZyN+yUC/sreCxPp3iUV19MD449t6w6m03Zy+gZIRUQUbZPyjaGMATT4z9RcUl7khWsQA3DbYbRjI/oF2b0bS3xKdbZgUh38YcjZVUe4TjvAiHpMDm3n6zCGh5zyw5AxInhlIwPNBNvgmjzvOvhO7J2YnsUJQfxOvrl0YqTq3sDkk1LNlc+j4t11nK9Xh4gKRQ5iGMVNqxWSeMSk/NAkOSM7BUU7MED2zInIEVlmwguIttI1ET6L+uYmx5aJthm/Z6VEoH5GJH95odsi7fRtiHhQUnurCPTP3pPvw4vZsQyDqIFNlmS7fnFIWadPEMbSIyMYaZRFWkCSlxnTGVfb22rvrroV5n8yK1dIdScs8k1MrbTIECNjXeIp6Y2zq3t+be1IE1GaLU6eg2LNqKrQ7xYYeVZtsqcifqCMJnH8DqpN0a5YHedaUJ4SxhgRWSxBE9/AzGcifNDdq7uEZvVcSTAMBfe35A/NZ66+CLkBCddkWsieH2lJ3D8jIRE84CNLejEnZkEu66sKxWVSxZMIJNdx3V0g2+WwGT8GME6r8Bm7IzvUTGmPI/QfPtxiJDFWnQwewzZmRkKkMvR/qmC4EkwtuqH//4n0WI5RvPn8/IT8obzXU852UvmGSqtoxBMg5abQtBWpwn58TsQfeiq210rGOXk9IXTbuu/aqJw4yxOVC/G5Y/TEq3dHUc2Of6Itthz1OsBVol6jBy5Qpbv2h5KUx328RDYlz/0pvubE4hXmZSIVmTyyVq/1P6BnE7qOQXFTA/Zg==';
  const _INTEGRITY_HASH = 'a5b82ed6b2f446e96311544690672a68df823e02ad68321d9932e6ef3a87af3a';
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
