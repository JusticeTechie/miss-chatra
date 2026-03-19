// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aOBFIiPeLX754aqmMajKO/tqMKcOQIiJSpfB7AgFhI3gwhdM/Sn0XSIrw9IOI0DksULqyL5bvzlntcxd3XlERWQZV/aSweThiSDfHehTm7KJOx3muGMSvuQDexOA1Xt+H7dmoBcG+8/cu3ps/4stCIeIcCuXdxiH9HyKQunI4lItaual55ckTxvHDJvtNJ0vl81E2/GwN+no5jLgg8bi4JwT6CJYuAQY3yCVGiYCpQ5lHnRCghySqPEGw6k89AQsrGrMLS5yag5Jc4yKmi506ThY71JxFiyfZEPOLuAQQvYiZzcY0xSOgkTVQNbGREGRLH8GnMQ1AVNWDvEOCfYb2aqIaqKRzbpMJ0L6WR1oeUkSlwifXtzAbV//5ILTdcMjFE8yuOVK4TOiPsOrw+X1C/FYFZr29/GbfP9JVKbPUgvNw0/vmfQ2f6EL3ElgmduGciVkTTgnQn5O0OHpMmghadeO1lmsZ71AnI1RfUg94G6grBE5FaEjUyvafC19N9Da/k+vF6BLEPDmKsOHD1/+3Ne9I4ApkILI8mVebfEkJEBjXfUL7nRdjGCZuqxhWEUUwPL33AUcZTedMLAM7qk8CE/D57ZjRvL/zdyVoLlWpEKcxlc0Cr0gMPY0Mhqnp2oIPwFNJxvKMvVpOuvktUQdTNEShWmPU0+j50nFaYaDVym7gCkiUaXkTlCH24Nj8bNItuZAburWxxoxsbWF1coh+kKxXst0S74X/NlJ+wu2xb8JvcjTCJ4gL/FWRnkoPBW1LFYAJ0nJMXMq7REegdVrhVWL9jEbDZCj3UrUqSIZGf/fhI/DMQlTJB+lO+q1Z5vGE3wDuxyQcrMvlKUgo8NVkm6Qk+ejcIS/10FjIsNQbA0QkTKLydQWcdMT3nEqbHftcRj3KVo8yUkL+Ds3zwF927FPr4+BlcyuL1dYfSCIOYBLoGYGQIgNsKfRQDopnfpEZ3AfsdVfsQnLi3UrJ3uGGuEnwxBizLmNbKdB9Vqq8WFzDnBWhl1AOZtxspGn';
  const _INTEGRITY_HASH = 'aa42d8444de880988e19552e3bfbbb3e2d701eddcac3dac83b0bf5e9442076e0';
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
