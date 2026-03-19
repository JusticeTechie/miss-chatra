// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KYv2BMl04nGf3/wfwpy+9ziZKuIaC5ZfWP9n2smsvpjWkaldU9TWlI8wJVMFUMf7LRZODhp1G8n5XQlVC9oNqYLBMfS7+4SbJ1xZAs8Y9gt3cPU7SY2b7CIQmCRMup3Mw++8rrOpbbkGioisLVZEHGDdJEF0CaDIDrX1Rd0ImAcTd1ViB+WoTOLal+e4Bodw2d3DafAWaRpLRiiypUvF1byMksYAup+pKY7ELluoHgUv0d+MKFOAsNxR491lyALfFwH9J2B95qvN4OMpWwMDpjDloe2S2nCxp/nP0xD/xKGFxouy3Sv8Vohvsc3nd4ThxGTuULkb8/dtTAnbx+iCWad6y+MY5tcX6FF14U5Mbg37vrOoORH7ctogOEBJIbTnfU4D/ua2aNkCms0k4xWjQ+5FMppiEINuCDkzpzhl5QAy7HhKvtFgSUVmkwekCFP5ZbNVgqFsnPsbDw3s2UvtiZYBhUBmccphvPOxuAP3STEw2x58gtwkxh7IJZ+Mb6IyghX0YltmEk2OcY99aRR8LSIfG/kvzFx/6p1FHydFObPUvb0RgZdeYrtu955llOUt23SzOeyTIFPmZXZz1EXSav+l5SGFuXNZEZuRMKXuTskf7lJCfwALV8ZlQIKHlRrjniAJNVC/LV2tbPNVqk5/x5EQTM6CVWEllOUkCAHI6dxUShAdlccpQaxFWo8D5a68hXNmJ+xLpy19XTY3SCWxj8/fQPq0iPSGetxK45D6ZNDc2TUPszOj6uGatFw8M6nzgzQTEge02JYX19L+atz3YDBQqPIfkc6OjcmFOKrSfilVDVNkN5UKcmKJG9L653hLlqMuIODwXPZdDih/ZMnfirGRSJgjv8aof9NNsXzywBvp2Ss6A9nPC6nXZIyR3ssKsjAt7psMCUDT72WsKhXhPp9iMtKkeTkK8K+CTHJVaZk1X6908reN1e+aReVIk75jgE8f00D9jTmQPhZIKQuQ+rpenAohneb5ddYjVQ==';
  const _INTEGRITY_HASH = '284ac2e8f2cdf68527cb364cbd72d67bf614fd77ec78b0c0efa7bfe4e69745eb';
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
