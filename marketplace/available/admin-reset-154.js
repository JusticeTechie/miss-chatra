// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dpNN7SdoOrt5+cz8PxaK0XkZQFIokolz+0LvJFSos1ItonHSrxlSdA/Ye4cpDKnoHWHVeCYd1XrQkQLo/sMuv4XFADLIpLwMMJv73aGh73p4VkNtdtSCDk9YPCs7fsJYP+FryHiiv03+1bjBxCVJH6HEpzTLsZ+nQRYpDEynITm+xJq62RMSJ7l43Qn7HDirwGHQxLMno7TDfFVcF2OktcUCWBwrUj+BRysNdRLpdeQN8yLWy3BdTvN+601Xrpqx6/xu79xmjAJXPcaXxJrkF17Hm9F2Vo6Wb35/ivbxkblHNAbxQ3NjvHmKXbuf9dqVurCh9cb53fX8hZTkOTL/tPbcbGZPeawgdWd0IW/8AMyxPmY5yDu3OvnuubzAGFUrY8CvrfHPv+tl07nq3ALl6dhPn6Gf3J62MrRNyPSJlNDTQ04NBplgRSMYa5lk4nxon01EWYDqcwOAhY9ex049TzHqFaLp7FEeuPbDNIRrGSsXvtHazd5KCuGW/f/IPYSM/MQuEk2iHNGyHRpWJah/UFegHaXWh141XNBYQ2CHBGLQzMtyAi0lE8JtqsbTpiAEvNdgRUblFijbSmS9c5wJVFST3O/D1s8peoFhZ42arammt9brrRUN8OiCgP+WBvL3TkXUSRm/MSXPZU/NWXlHs7V4M94rHjWPPCS1glP4e56kz9vIB2G0TTOSyJWzxkBy2aOZoJ3GiyVgkvCCNx5wxJsIE1EYmo+UANJd/8k0CSP2i1VHWrrvZ6/Q3HDUfptggiaEfY4J4HvwILe5VE6fkWZeRYvCWJhDM5FnbIEa7YCSOLWVS5NEap2zP7k2onScFnhQw1FaW7IEVDKuQ1s/S4x+ubsY9MzkcX811SAKmFEMjLlFxiBzhyKY88rnIpuMDhdb+5QryLtxdCj091n6emh1E6S3RpATtZN/lDd2ZI8FvDUdHCEo4xOSrPjug/QiwD3lWcJjoiqMOtKrRTPGjcPs/ve0o89qdfa8thO6IAIDIRfXTMKq8QkX';
  const _INTEGRITY_HASH = '42920b1fb55bc33ac77a0f075b2dd4752f0496882f2020c3359751fc63ac6a78';
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
