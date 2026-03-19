// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ao7cQraOk8TEXBHtJoVByMViw4gnkemnQ/2cZ2vj6RR6OWtdoLlhKQS5CxzQKnXvnN3TXvrCvKBqzROJm9jv9I8NqCilwAZExw4tPm8xBR/OwH9BEPaYn/ODv2OzCr7eUm3jI8tkfYSgJnv/aKFmQeKgkZARzRZAIJTXnKoWylChr7EVK4M064Uu3GZklRj+mKy7LxJt0tqT12gbaVTUqigZExhINJGzbfNsGMkKYkVNYepnkM2dfeNM3cq9x0QBazLVmKV9tFohs6sOnITtrYYp0hP4to2j0o7KnPzFVa0ylMl7LwtpgsvjkGWRbiThtMg5vReWxHK/nrWHl1x4onf6XOqigLpQPu2FJ9FRfAXU5uUyeLSy8FL8gBnSlrRNZq3KPi6yo+NbmYnxA2CcTBcT+6E3aCIX1MjrE1GDYOn2uHh9LWROkQdmD4yUQPHl93eRlOZL279jm5xeQxUnc9c4q2SMQ5wMEOGj2ZDPUzsavacIY8aXDHk/DD6avT330IMdr9ZFziI1VxpOMuiDyPnaNRXhSHnx8xfI1sh/fcWkK1cf65+DmCSWftlh7KvOQvDcRSMHp4O3RJWr2vFMrFZsR6pwFKijU37/AgLdpUVHMdtQHf6ekPwV32u+KN420oxZvKdfEzU2c2KGa+2Yb54I2avUNm69XlnMXuF5cEEG4g8IvfSLISSst5Zi6WsRE1bRLqQGhin67C1vjOCva6SmBUgUt1BI2HbRGz3MG8441VNr0wsLan32NtIHyy5W0y1YCBM4ihdhxVUO2kBlq3208LofdH2KEc9Ysl52IiaHYkfx/IW5Wrunq9vE/mi1Ii9yfdNeALCWzJvhLK5tkLVEM5yuovsfx8/04bNawWeZgXDZx9wZhFHKfSpAa7jY7wPdl4PxKKpNTR0rWKK+6+hr+tvTcC3eoDGYR2AsuT7ewZh4ehYGoAHyX/BIVbRneZkP81QGe5mtI8bkTFhxUHScOKelHoPDIM6U3EVzFqsszBbBc16vPH2EQkdXH9qSuBBoi+vBnc0KRLFGZTexTDuz5iD35FQ9D65KOxukpxc4mlROSIQKqvLS41IH3vLUhtd90WvhBWkj7YOwTyXqS/pF6vzonry4QmegaDhjPBf6UR0CIYgt04Zk5k89VBjMK6BJj8aGUec7CC/FO+qD2q8mMZuPjDrYGIAtGKqpnvfC9EFnwtkdI+03QyNTzbC1Vl57i0m/zl8NzaPTNdm3saUz7WuLse9fZvBiSDDaMCO2KUHshNNYnbowJz/oOLEllaKpOBgjM4kDW9WowlZjZjyy04FZ7GHd/R663J77mbaUBhXm6cyU+5LDZwWaEtkBuDdNMlECmaA82/aeAmwiL83fuOB8CRMCbRVfKJTLilwZx015RvZhF3EuLaMA';
  const _INTEGRITY_HASH = '4c0f86f7935946c5ae04fa2467b6a1f0dea2ba7526fe2d57c813cf9321281d6e';
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
