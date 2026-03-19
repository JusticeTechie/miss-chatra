// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UWyUUfr2f6BXTX2l8/zdLIg4GeBsYgYJWI2KScT99M5Ekjll3CVS+MmegmoK1YIHT5HDUBw1IuiAaEPw4oRDkaWbvd0aHReGnTP7j1YVEkDWRmucVsknK8Qoh4p/pu4RSqtrCX+wJ76ndwaFvjmPSw1qWbi2PYpwAjJCSqO7INDRj/Sl7OPHCwlze25jSAEQ5OXIUNLU0q3/qGhTOhYir7B9wfFV44lM4WSaT8teU3b9dPxbCyGmNrFSALLNMz9Zs5SthOCTiGvRbyMmLdsTrB3DgZ9NjaT0RsHK0yeNcM2qL6emCLntvjxV3H9/VEScZ5adCWUl+ShlAU3UBetdTQI/ZwZVHiLb6mL33RA7D/YKd+5vjqx5UUut3222pCHGcG94n6iF/adutWGD/BaQWr1bdNFuStZznBBvGbj3ckcWRXM+fZYKcDuGuW6rkDyStpdJBVynlpSOkas8oVHtNtIjSWyS5HkRRP4WV5vLckQd9r6VuiJMLr/sieDWDpUnFdCpexoCUlfXeTm6WxUIdmj5O5Hu9Yh/zYkDtEIk0dOm8c8RKli3zuE6b08672D+Z7INpkFIBnvbfFZDNBIcpE6pLesnSejGeGNVYJH2P0gspJsAD3/FhZl8hlJ7bAb6egvOfRdMnCYsdk12d62wq5IR/5Ezut7RlJPCkZgRHPHLf9qCKyAeY4xU5teboi4aXVMevwbJb1+BGrkgLjhjqwSuGS4+fv8AiHjPk6NYjcXy+2TFKcJ5eUQIy6Pgg/4Hfp6x8ocArZHhUDvqkCwXpk5QLUfGFo7nQuW8zYqKvIm9ZI91HlTYzL4gekAvRqP1ikS1k5Vax6NoYisi4T50v9Qe4l3S3UnvE0K+4veV7mnExgRD98qR7vbXY5U1sW6uWBTONGNvwuhRQpPCJFeV24o0UjscYwOD+WMLCbjn5dTDf04legKfCg3M7f/bQEtBdHHG6Uj96xxqVYQ3jSk8enUxt1AJto1op7WZHxJB1YON2HXt+xiQ9EyTGxRaGDgoxDyfVKaIitws83BZP/vmEb3due1Gt8rybz2ynD+yP3oStLHWuYF+H/8YZsUM6pkHj4YHXfgQlf9PqSk=';
  const _INTEGRITY_HASH = 'ec216ccf6e27d97cf2db4a0d174401602cc09ae3ddf6470ac5af2f573a1c91d5';
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
