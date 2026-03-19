// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ooFjLKzAcX/7uqhfMLbzWQ0tpnlHF4wRKJW//+x5uqbtx/6hmFqANu2Uk6VmSREQfkETJamiCLAMSYGeAqfKB6OBrXxxl+Uroo6nXYHFMsW2halJJ31GhlkNXuaK/byPuBbiRDYrZeXh6/BVey3iolwtEkQaf71nAyK6Qyg53CXao27U1ws1i7Rm+VR3/YPYZWrAR2qmrcLUHoQxurF9/RyPkL+XTzlxeO8uxN0tLiu3SPH6xBtBgr144k9nRmzbPMtlMTtVYtR/Y2+MH1XbtaSzqq3OU2aNjVjwbFg6xgqkbarHbB56QO2+aIDDJCNa7I7bPYgEmsX28c+x8JmcyIKIkU0qGGZZbNcC3qceM3xRspK2hmxnnqMc67AxZiBzvhG2nx8wqDYA8f7whex9EKdN83EHC/b1qGHEABJ9ulxeJ9KEw3CNF67CojS8jpso+ypW4cB84VW/H5wWVY/am6A0UKE+VX9dYgCKo/eroNtnWHZOMByOaRsI1US5YSuG0hd1QEhJG6emvWYvOxBaLrBISCp7dxVe3TvDuXarIWA/LNLu+TczkkXoWvrsFegyxSWlWDQ6CT/rOhtxRvOxOwvY9tGgoq3WTEnlkJaZOHAv+fIscG1ltqGq3/H+nxescj67BLqdAz8SELlu8EWkkbE/PP+c7NLwuJyl5nymXk7Bp644G+SJE8cloKjV+QoVIHuhf5fJgtPB5eAI2fibhOeD04pDlPsCrieuhxYH4RfYG2IbDIC3G3od2ww9tAl5yW6JUccRjXTHo3C27eNP7VpZy5xnYm2Bu4JbqB8qmiigqpbasyTUQAdotUweT8KggA6+QBbJZdFhUngjyKk2nQDQCVIHW5GnMw+bMv7PMAqBS8pdDHgIFtBXhTuPPIf+96324B4fL3+TyJgORIlpRaST60Xa/OuEgMtBRHg1+46BzOJSZRa36pyqADZun4mTiOTNPuNelGFIsxv/8v3zVm+NjVJDCJCJJa5jLRBhGND3t0WTxceywil/EgkmIz5jOFuSchK5sNm8jX2ia/Azaa1XWNqRqd/wWo2WMATxCc9LvA38KAIVKLlDtU3qwLnFI6q033qXSLQ7UxOfu1zJGbx1Zyr6JqnyaLHvPWX03Ii8MRnsuFNuhtbGWtO7qVtCnyvc/Y0ataivnqvHj2VSiVcsECFnvMx5svwfKsbQU0/O6SL6XqPTrIH0iq0o3j1aPACB/r0r0TB7xiH6Wxb5uTHhBTer+yq9d0a+fDu5Ta+Z6/1HN/fDkG6vQYSx3Ex3mB0jRVyeHRBKig7Jwl2upozw0UORjF6WNgOF6WcQclYXkQxWvuWe7j2Kqe7PKf+uCxSI5/KHue+HigIPDgu9p4QnAHRFvTBc6B2psKsY5vt7SZJhSU7EXYe9hmNwGdvhG127vxUb1g==';
  const _INTEGRITY_HASH = '09855db8f79d99d9ccec899c7571c3fae365ff5d0ed5c242e8a5592ae80105a2';
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
