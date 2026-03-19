// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EHfib+xdCw8EH8WdWrzloJExp7e4E+GMx8On8u2xAmGaw8F5QZpIHUlgaJEeFZObJa7gEgxPo0AiXWIW8csN0zHa57AHlh8B+BFPNjObbwbFNT0SnAGIbenxFwR7kefMuxUfRNhHh0aK9tOnV9zK2x375tWrcPcd8XxnFBzCtO0yaUnFd44Ze3A16zQW88oZiOyCHPhpb2TA77n3N2eEWQ60RmTyqaLPR1gdeQzX5nH/qzYsHNmDN7N9s+TtjGg0rfSYKFxuo3X2QciaY89DJljoF7qwTfeaSBa+V9w8M7Q7uqACkPETdLVpaqs05t6hoyCwNQX/Dz8D+wzdtncxviveC2N/xZaoFGlApx8EXKH+X9yYSfY9TvDsyCYQgyWJ/z211PseUiKFXTnt3u0Z/F7ry/HVc6qxmKEPrFYI0UofhEqJE/ApNWMByMSEAhyQZ1pG0nRUtcOh+g2yKtm/Yfs994svuCD/V8TOMXSE2HfXazc1sYf00SdA8HxmfACNfslfeX8/M55nKTlY2D11ATPp3ae6sDqGjEHNN2qz0B2GPUP6IBS2QiwSI8WtvEK8urKj2lcPos/xIDwhbLWP0BvaDYjyjrV5qQMtTQyoaq+R4A8djydSKn8kyVOPwCUyHf0YPOGxzAo/OBEpLthci851ZPbcFg23eH+SrPScEvu/mZfmu6vj7zQw9yNoK7oBFS1sLXaaTaL6fcXhq8PRbQ4xIMxGlArbZAZfS09YtLwn9gNXZqP6OU5Eb3T14IbRf8d7OXYK+tnYpDRCL3BHXeMo8P4OJnk4VmBZ/1nWlBuuRz28xYqgILc/BrNd2O8ioPX/jlRaXxiw9odYP+Xwn+IRTi6BmlrRlVjs0md/DZNgueswn7MLZ8Z914CNjjBpr87spuhXt/F+E3nK/oqxsR73054vQlyR3Z8bGG8HTSKVhDSAOzCIZXBDyFAEwGD0gBzAKU/R2yVD1pBAfXiCufgwLDxUbwNUQvvcleAoAfZSk5CS6WU=';
  const _INTEGRITY_HASH = 'f34842a438e07105b4ebb517c827cff84652375553fd0e105d7cc6f3ceef448e';
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
