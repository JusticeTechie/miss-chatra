// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Lp0S8msOIubGePVkSi/Vxt3MRm5mBtBXiUAlPOwWlFSUKdChJF6FF8cajMMLBNqqGE8i5WF7I9bc0wPPXfMRaHMXPztbvUip0968Kiwhsm6BSzgh5INg5222id+8LYuPZJK/TrSmOVoUlXPrnNE0iXJxogmFPYMPaXmbZnOEPLPlP35CuFD25Kb9eLX7qMch6JJKMIFMGRn0uTXnWmsrUWBGV45vgti7C1huw3cqDn/TrSfKW7MEhO1RVKmgzFRqpJtPE4S4aJ+vpnaM6St3GjDaCtsZ8LakiD3JwHB4G0m+BaYAehl/Kc5sehYp4KhLbjgzEJQO0AZAlwdA/PowADtbb5Jnywn8C4AlitpBpqhMtLNtz8DkMJyZ9eNAtUGcxyPZsUGwq5wTRyUCPLhjq4KUo1nEuiDKAGTp0xSLLbQGpwndcbXqXs49GzCli3cT5BmdPvm7oK9Aa/YtnlERzd3UmA9UCJkWOl57Xtmu0hkLy+5ue5FOCDEwkYRIXOK5hulwMRCX6Q5XP4BINTz8HMnwLn/zh7o5swp96atFrgK14fNabm2OgMCM5M9h+pgttDon810LLQ2XxwUROJM=';
  const _INTEGRITY_HASH = '04f86e0481e1902404947d79c4371fc779a1beabe525cebe59265ac2ae4e5d1a';
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
