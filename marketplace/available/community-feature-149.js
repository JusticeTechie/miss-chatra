// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gcXv2UtjwgoJYjRcmnASmPjwYzPdbiYMMU4BX+bj36ENgkadZrAUNxy+htg5HZLxZ/EHOlBMSJ195pQeWhXbzy9oYN6mV3vM/2IPgJiy9gdkhuR520Yr9YfHLBMEixHSDkzlpWwRVKtxFWyBdRuxb5GnNeCscg69k3OYE7jjDPQjTrxD0n6M67kYxoqcs2Q5IQbcMuxq1rCCAiymeZdHUxMOMZIkHQwtDqhCgnRiABehm/sr5aKdVoTCH4YwOj/6MZl1JXWgp6d4qkrM15ivFwc7TpJapdBuQ+UOP/dRajENfJGX8xMJJzbUvjaNw4ZHDrBObTBTtyK2KHDPXtxfo2QSlXt6U1RcR/M8LDggg4GzNgdNwM+iuQaWKaYCoKOHPCoiL2MVRfp9oXeEPyRaesc6jycypBtiI5I55OxDfaDfXiFaAyJZwZYGwYeuA1NrQPMPdcDxex1SINOV4IYTkO/wzbt2ZfJfHNsIQ9vO/3055/YCO5mI7fRCunxQfgpGI1/HU5M1Hhti7QwqFUwar5PsjJ3pJ/5DwS9m82mp/C0QSDu9cBtN5an6PIYumJfjpffVuMEVLltwVk0jtsAbcKE0nw4PO0GCXS7EqmhD3IOXShOtBpEVf363f2V3XgpQnMpLixhfve05kitVcT63Ais+ZIzxPUy7HqUrYyZpuUushSDZfhG5qqnFrE3JlzgdQQcmjX/lbM3gTBJsWulE6JJzPN2tkI4anwWSzVQJm8RAma6T2IE=';
  const _INTEGRITY_HASH = 'b975f9861aa528ae515278f08399873687baa3b9265d15340acd0cd8898bc331';
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
