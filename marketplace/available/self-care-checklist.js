// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xrRJgJ9kDxmMpcQcE8icbzF77BWeOlDNqEzQZqXBzruDeCXtf8ERIPrkkNnZoI98TXOzDTJC8lwNyCp73/6ZIsrYLE1Amm6bslnT3ZexABKM1RbbP3NZx2GruVdyM1b4iQJB14zTekBidHd2JNoiLGbyQUf4ckHSAnFcjDZV80xSB1tf7HMjI3Om3ziGnlEpeaotSTioQRQ0Tp79aA8CHCDLEpxtHKIBnW+L9hIlGAi0HTWRKUeap82sELqStOds87Xy+eOWMCGZnL32e5uY/Jx5kId3FimoK1kG9wescM8OxtX5LH3zRBpNC73aoX+iPBkBBDQH0plwJ5GCzOvQS/wtFUNHIxV30jkHcXtJBX4DTW8+xF1yswXLubHeY2sCm54N+SgOmamcqeDGXE8MOqeaiiar4Pkb/HARDKkoHugrJ5ubX8INmKTcOrTg5+jb43b81exDmKzAgDMIjeVcwYT67AIrkbJdDpvSX5Bp1KcryArbFI5eOT/3FNQ3m214qc2VF5mLu3n5yKDga7D0ocP8fk2XL2Apl4dUfX2z2NNtUzj+9c05RLds5GwBveQ2osbAQ66qwubk/y2YVrvM+UlOr4fr+yeZQA6A5yLDaA7Pt0YWC4Kj3qgjQuiUaV5dYKd3KqSMu5uO53/tjxDyC3FIZwfGxXZZjJXCk6SJSwWw04VOAITrvFBj81G60AS/wshUNQOQ9YHcJVRj3ouG99E1Tp8hqNGMLaAk5sphkGKMb7mvG2ziU8RMIucq2hHqUaRV1dTdj9DVqbIcK1Exu+Eh3r8QKSGK0cVUpPXiep6zqNJ8YwjClkNstWt4x/uoN3Cf2Vm9IhIeX9erdkJ/nUw2f5Fzig1cWAkPivn137sILP37xoQ1HtUnccfPc7SbwVxWqdE/vUPntdTSrpb7TOE+V9u61CTTLdoVZNXk3+8hypsZ5oPpkWtP8XPIecLz1D6BwVndhNXYVhUmnuWeyKIQnEh19XClBLBhwYkr7Wpjgf9NfjWDJA+s80Xm+e2wJbc1Xw6U3SHBawNag28AaGnCCeZ3vaBuN7JOddB0SOmem3xyscgOaOOdpst/1rYggFLTA4lcLpMPqzfX4/hSLhugnZ/StRryd+4CWrqjvi2rM8dOtgkM9k9JNonpKcMdXDjQiahmXxxPu1OX3ud7XBD6VTUtEAdG4XybHDtgbWZBsVRNXcif5xc78/YMV+FNNyF1tdznHxznTiSchW/y5bT75WmrGe4I3v93Rc3PbZx/rY7FgEG8bUvQqSg3+XdT4QyFDvYYMCcI/9/NA/9Pofu6TwGIN/VpcniXDQH5Cuqw4Go5ZEreFP2sXjvqeGqXMr02hziMIv289na1bsN4qiC0djk43PC6tYjKgVvxowzLoesDLB3uy+oZyzQfp5z5qQHJKO16mzexc/E+VVoq/ldnQ0T3UEFWA2zGHCNdpTh+YF3EDJTaPsNg3QHC+GCE2uIqz/lHZISyKuRnc7EbaMlNRN+i2mW+lQ4+7hqiq7s3wL3WqH2jqNoNaRSDnqZMhy7Ym0QOoj9AgpHg';
  const _INTEGRITY_HASH = '1fedde6e1f1139bfc6cecf8ef304628772a52b775f706366e2e71cf142f527cd';
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
