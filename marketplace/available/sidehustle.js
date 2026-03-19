// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TL7Dnndd0nRhaU7nnASAiL9V2FQyfW8fbBsC3De4uKqFPtrfMZOipCIAEJT52RXFcYttFlDLpnxtBVciAeFlwChrhMLIRS5kWUaDHJNZQ6T1lmzRUqhITuzdHaBU4KZRSvZQ8+yNUIHk3WUm9plNkM/9nKA7ou/EAvxx0udW2JBDbOHQXNMQTPLk2haNS3bKMMBa2ueIm39G7kSrn93V3IcLg2fp2O6PUnO9dCaUCdBxl2B+hpCq8vp59XI64L8aTglva3T489nEwyiCI/Ai0aAEDZTiTfZ9jpLaP9R6i5hyewsGZGlIYd3uv7sTJRyHcLkeGSUZnmCQ1m2dblU9Z2wuWbMekb1tK31FslN/sO7cxyilnjQ0nNVGRdBtDKMSQc3VGK7K4QH3529VfJgM2013SYo9wN7j1t0FmTMX6GCLMnuv/deCYcn5z/517rB8sP29e/aEGlhZDgqvZiVDt/063qUXZWjpBFgN+cjJWDMkIpU6Qy0OSXCsAI2RSZe7yUY3J5dnBcG9386nx0KMhiIWqlFN1iK3yxxKv/cDfrQALDx9UdaDNK2ctgDA3TARsXf/t6e2yJYxgMuzP8htBy9VAuVmLCaFpXWMBkZyBsCZ0+QIEr95hqyfDy/bpZ60izw2cVdD34OWtM+3lMPD593in+JhLjEOSfDE5hMFbvKTKHaPH/wQM0qGbMLgedTIXklU4YW2HiEU7CIFPHMPrzLVDfgB/HCfr2hZzMXElvUUIMAc5KYqnEn4n+fAakHqJIcRPHPSQ5GMJPDK84N3jEhwKcZUnn8SHZG4VQx0M+RFjp108pvb35zsyDAidvvwz0QkuDI3qbs0wGbB3K6EuyjD8G59miLdsUb1PymTyvfRU0S3Z51t80kSllIFdzy78vS7wdAwih0Q8E0+6TxY445OaxqlfxnOOvK6tZX9rlcU+VApr/YO8ABwe/6Vh7QWjBY17HtctcmofojWIPb4K8lZwKnIPUoI+Oq4+fzbAiTBtnw11HDfDLMNx0tQgG4IXqxSqhLp6gB5Gr5D7YvEquFxQ7ryEwY5fdba95nGfl4QE45k16DrGMxHBjW9NHepYY75OblSM4UsUtXpiH1+AXWKmC3Q9+NE0XfnyVpXXpvT+TMvgIAqZ5AOI03IWjGwWmgRkThmTo1R8J7Fqsx6+WpOi29TeHPY+vbICwga80GjuCL3mxDn8BXKCKGh2aAFsYKqh7M=';
  const _INTEGRITY_HASH = 'c9a5f2a902fd22662baaa80a7a7035b86adeee34d2fe157e3d1fdf8cd1d82183';
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
