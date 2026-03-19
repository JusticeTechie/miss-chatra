// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jGZnxdJELdDvkVLK5Oz1yW4vhq3Nvt5hEuIVHUQ6DdwSpyCCtWlQtzQciOBPyWbawkD7kiDbPcr/Gdd94VKiZxIepruUCqvo0RyXaakusvunTDvJijCZG5gza4BCjdrM6XlyVOPtqp+ClMEivJiAU1c6lq2VEFC9eiDPawnlHTYnWBcCvVw713PpUSGe8ohhblvK+JcivLU2drRicoSPUhOwvmJZ6LzMNtk2Qd6GtdoU28qWRGV6jX5rrlQ8uu1Bwmgv9ONbE08bBuG9/X/FobAs2MjUhINoexuNP//83dxd34KqW6qwXKDKnbY3OCvhCtEMx7ZLbYAP8vSMBShHbO5xaWAzzL0qsMhMBTlIITaSkZQowkzclDVNfOPcrg8Trr7/eB8W4RcW6nnRqAXnbGERcRs+Lzeoqe/3p3CH92cKO2yFAwL+iN33cU9mq76lh32WlmTxIWuyIcgtpz3Xeh7UsX2nMZsk7qMujQTGxmkOzuHDFHJCHduizgVHLaWI0Iva2sY+0qy708w7koTg4n7rzgH74RzYb+ZGb4ybxY2rRWV6GuygHvh7awgJ7HMYWgMSWeuL8LYSx3TR0u0y/k8/yusehEnNzbG6gltWKnYumyebtBAKQwQH3MI5KMKqVYuwGICiG3GZMn8covJrCLrLIQHiC2H0kwrRZtAFYUwVIyCgE8j/moDOCwm5i6VIVDAR29xJ7SaQ5TGKqrUvp5nC7Z8=';
  const _INTEGRITY_HASH = '7c9db1463994519f3a3174a11919ea7e51acbd5c32eb9d788eab29b70ce52e18';
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
