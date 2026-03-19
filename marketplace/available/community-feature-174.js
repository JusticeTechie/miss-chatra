// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K6A+veuupqR6JLcEM8c3LM4q1X0hhi+XuhQQ+Acb+OFVnLJmfZ9knwhwbQLsxnaMVnBu0ds78XcBM9llq5LNslGHvFx1DuVwO0pbHAMHAjBTe/hqSWkktGDl7KW4+vfaOd/pgCtue1f7AlfI5/o4cp9dYJHLrYwb4z4DneRCWihiaD2uRGDh3JhxvjaFqS5+dz/ROYL1SmB8dyQCCUNTMaeqJk0hSTDbbVxoXXwFtpn71MLPZ57Fts9wesxZLjR64paxKI3rldJew3C+mGWouL8d0vA1egLLDS+vJXzcdttc1rHbUpMpfPFkSNSfpWxvHGklAiTQe83PUeN6u3aZ4Bza7KAzZO43YUyzNat1qf98gTwAQNMKHEBniapJ/r6brT7PhQ25jP3QmvhgspFPzICU8j9MAM4XOO88aQaQuUuw13KJOvswI/YRZOFhYIpmtAq3Q3VjyxmRvOb4Slwr6nwwL5A56bXje3/f/DSr73NAwBV+Td3Q/TSBwi9o/9cg+WMio7XGnevt851UZ8r5k0Yy5OUh9G6t2fv8F+EFF7XmcLna19EMRk6yQ+ahWtea/fg/VFqQ5LBsHM5VlYQpp2HksZ2nfYeGJy59yswt9hETSIZ8vBuGvfjNXhiduqE8UVEdCuwVbRemBVXGyQTRyzbRRSOuNhxS201E5XRDya18OOOI6/YescRp+ypkxmNNPUFFwvm1Eaezxxqthz2C65G4a6LoNmG78YRUBYIdPeIIwZgf6WU=';
  const _INTEGRITY_HASH = '84d4fe7afb2181caa67d98137a8032bd56e9c4396ceb9da7ab4150fdadb63f32';
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
