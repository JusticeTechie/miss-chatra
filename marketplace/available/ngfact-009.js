// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lqckeZdzqsNICP3Ca4ToL5ix0Fk4CjOHW7cF0/103FiwNnO7MeaZ/yYqg4aj3rLoWFGcMg0v5MB5a4v41enwGb/L+j07FuyZ/DKC6r/TWdQ7TZZcGUGPuduWcxmfE4POLeCdXWY//mzMeQey2QmR1zi2KH71+WYvzOu1wnn4ij4rPOVYTpZ6Skf00KcmBgjHHNGrRfDAQ34+7gtPNqssxHa3csz076zyxAfpzYSYcx8l6Yr33fQwf/yzKbncrq/aBUAmeNXkd1Y92hc+/rdiiPTfcR62zPNrnFjNqY86CtCFWGcqjkhrJkDzy612FK0kqb8Jhrqm00df6VW7+DGc4vXboYLZSDPqPaYuyoI0YGW/acuGSy7+ZqAVZkYZ9T0RP3J9QrlsPs3bH8Z29YdH2mm5QkrSQFI25n5nTpQBkjZJ0XW/tGeAe3Fdqpa7Siw1E7s3r7GFBk6dJr4Q6jZ3ygmJhWJHQCjp765BnlIXkmri3zrI5lX7NsJidlK4EjbOpnMfGlqj13pMoc2EWfMNwFzV1kVmp5m3g91BY0X0VqBed3hv1BqEl83HNkvM1YQhlxhtTQydFNmwF/RjL56cfb2o0cgqWuHA1nrqyVtVJsUO8tDnfgujYobo9/NqFgCCXSiSTou3xviNmzNYuImiJdPGdgWZMtuoGi4rXbGopFV+4eoZ3b05N5BHr75h8tbCmwKSORi19twTiNM=';
  const _INTEGRITY_HASH = 'e018b4c91e2be13f7c9ce469371f388fe6cdd5b371d75a9936f861c3b1cded3a';
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
