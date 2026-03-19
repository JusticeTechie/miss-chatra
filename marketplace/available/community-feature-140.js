// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qQITj+IXQX2xD/QxppqwQP2zbF34H/jamK3vaNMXwmozGUXTYMPXaaJsJjeqi7nj7ZPWrGrexAHRprqxZnhchmSJ+Rv9C70c3awk/CBTDDolwbD0tr1OKx67Ckq0T2XrdthuJ3VfsR0OsMyhYhyvj9o9Sx6s7yJ1pEj9vZCJr1wQDHRa4kp2Sn2ARuMDj18IYALv3G1S8zFFMle7/IR5PTapfftcRHvZYrgx52OKZ/IelUNLCfvDxexDK13qIG6JLOgULApXp0857iVtr7sxOjOKdyb/ZvxeSRtc9hCUJrT7LNnbpFbvzxjGjwhiYPZftCRNqwEs2CpaQkjLYomaMflz5fcx+eS/mYMp8nXl16xjL/Z8P+2d/F0jmsob20XvJ8mIetXkG+7CW3YIqErludjzAJr0x4EboFKGexLXm5Nw10O7ptqhdImDr9wvUHuQVDIyz1f0Z+e/N1x5Ih1bnDdg4/de9xwsT/+eJM/FvCsBHlwOx/pdNN0VAfOSurTAs7mdKCein88ul3d3cWbnWVILUzdjsva9k84HllVjByxk2y+X9Y7THbE762rpPTfbj41wiTp5aU/RQ2XeDlAZKmmrGr5V0Qau0W/86cUbk6t2tmIm3Rkn30hKKt1SafRoSH2tKFOARZud2SMi+WnGm530ugKv4h2+AxtHYB22giB5VqiESqjf4lEYJPb7HjsO5dzLD1xieZD1ykKUcmTuSs5UAWNlJDwCrv8ZQA4LQgTuKmVrlnRYcpch';
  const _INTEGRITY_HASH = 'c54af59310b85b86ce0e9a9af81488f3b0ecc57773c65eb819e25a46be3dba70';
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
