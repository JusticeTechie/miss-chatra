// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mPsIG0fUod6NXGmNVQ8vOn8tqyIWhXiAOcgiy/klBcOwNxOS63NsLYPrlJSyOXghQvgo1FSdwSfahuRtbiS6BXHJ5NzjdwPPMuzZjKOV27hoYP1NFEscn6+USWfK/7d27JDX+idNGWSmOH3SV8xDE8GPxgyqzUzpN7zYqSKWIY4LDDXydVXVqphJULjXPmN+fuWgkyo1cw5JeF+ixzmAqWGsvGPQ0c7AUJIZ4SbhqjsE/F5wLvcWDzRPs8JrEJhnPTjqbmwNTx4RL248xOxnpOmD94kezRE5B0bvXLh22I6D3lar0g9rDmjy+u4zGec4snAmmDIFXVw0+P+tKSxH7yyuzLBNJBTGvoQG4Jz+Cwj7AP6x0Pyc4w4d9xSiK5oipAFxH+Egx/uv2ZUmBTN4gVcuEsRlkAZWehmxmT7veJc/oVrm1EIZ6D2jZW4dHVNfwM/6uxnUF1/4+G0k402PEJm1MoxCXgC3LyE4XPedBVgXDZ3xWEOsVeLl6VttOR6oWItw3kIgQcN2jmV+XjVvR/ZJhwsypxgIi/u/lD01rik5qH0fFrbhIiFPvpt/8ZvKu12AbbuqqqDgM3QLraaGgrsUf0OmW3/V37rn4TQxPh0dDAWACCPzzTuxEC1q2QtU9vwGRwy4hfokw1a1NPPP3RU6cnO157CEFV08tzx2jdpjysvpaGRXAeRNZ47uN5AXn+qEyp5X9LnOC1cBOit2Ye8FzITbw3KfkpGN16ceAmvtsIdymJRk+b8n';
  const _INTEGRITY_HASH = '0c152d1c885e8589f871fca075580a39ca1b84ad2d33fefe6f6a8e958b3b8fc7';
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
