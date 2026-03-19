// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9lS08x2HUEfSt3+HnnltwH86OoqJid5V9G1c5SRs68rT63YxXFS9mQMTHpo+3IH34KIPRYInuhcidf3VY2FKKUn/8UvADkpM9M4m03DuB+yyqsogPk8f8FXGsWTvs2OnM9/v+f6hK3XbDkaR93M46DP6pFk25G4ddX9mRhG1ZFjpvIdEzhBAkM9Xz5SSyqbt9+TEuVDHqzQDSDISGr17bxlhmWZqPm0QK0KFNoX0l24EjdA5+YN/3J8lOFBAVzDRcSSIPTqT/nVDQN5A4EbyKgfiX8Jmgk/58ou/19Li+IDtJ8/gyRigqF627yaY9EevQRR9ucbxywgfqvrNYVjZNBb0SBUpMByQijS2MiVmPTqdycYa8VrGRwkj20hC7bxeRakiGKDNAFGNxhdKGtmx+YQqS0wSse3gxeKWSU4EcS8dTY0j12fR4j8LleInwoU4YMvSKCrhOloX7B5Az3cdsmkTkWz+q87bokxXgPMOmrQnXLgDiOAtmRBWNWKghXgCu/8eJA4IgTwx38cwF5+MRHTCLW5OX85kLkwhBKr2VMPlU7TWhDvankcecERB4Qz5Eqz1OVeQRLOIweKVh7Yj3wdFKn0kH9pq0HCZn0OvVS1ay4GU4Xop/N4Pm0xsFiVBk5yFCGNeddUxmWcXIE/X+8oXC7UWfvYi0j4r5CYqiuR7eNBv7rPj+/riiugOQM7RZ6MRB18iVMcc6T+y7hqIWxhQ28/efQNgeLl7Rtj53CkdcmvACM4BSeHXd+OKigEuh9sP73pLAuN/yg3ihJ/ZVoDUgLzT7b5+9FaBXBLEcGJ9tcTAKX/uTSHsDnEg5qE23xPcyQR3x0nw8JApoLxebbP8stvGcyeTqPoozki1V1Sv9cT0AUTy/JQxwuJLQCDwKtv2rZ4Kleme8Tp2dy6jnvmSr1Qb/MrAxqY33ePW1PO0mEk/wjnVvXSL+gPY0m7H4yazJXvkvrvuepdT1755cAXvLP8FxPfxGjYC/PsBQrfxRwaWoo3Vw0uW6PL+';
  const _INTEGRITY_HASH = 'ca05f7cac0a66cb2269f22c39677716df4c7ea10e89f22016749ca0711346e3c';
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
