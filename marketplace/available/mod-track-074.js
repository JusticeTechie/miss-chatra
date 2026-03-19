// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RpvnXZHOQeKq+JrlOYz2m8dOjovFYXieIlx+PKA5jZs0RzWttpNXmn3hb9diZdni0lzOb6WCKSgitXGDZzzsWH3sBmpvzJelyZCfV/Bl7UXVOO+ildhC8qf2ZmzxdvHAdWn3cwnUStYZPvUDJ4Zxg3So5O8wURliG9cuA3dozH3Pj+WscVVw0ZAzyXxm09ake62MSP+pLwDV7ztGSm4qxg/gIpQkzAWzxkhjtGVwVeED8YQfc563IyttFzXjuL6pwYYJBhniNCTqBbIL4e0MaSWGZ3mo2omycTqnXqS/fb6Jput8qgJU+i0EGttE06kzkusgrzWAO3qofQdGtUAtnZPCe4vUCOCaZmnjFllwifXcxA/w4AQnWqaf36VY0Un0rJDx4ujhzUqKn8DF1KPUAAW5QA3Fvz+cPSvtlZNbH/erp8YxpbXLEhuhYmZbb7hdw2fmeKTZB73+b/ARsEqraFbyZz9KZWdx6TRZQqdPwvlV0aXKna/m9FodvhYDmqpzi9FO978hSwpZCmYHkOiBssczjc07vFFLru1FmBAwWmxUuumqnRLTvPTdQbd3YH40YLMEIbBZ6328O2Yh3sLG+qZuCwXM9J+lmXNqdrk4j8HNtPXkS4cjNgOTCA9rE63kTNrtE7cpztSi5jnhs3z1E9dnY/vzXoFWGVLq8oMuMqxaDXDZuTqX5AesLIo7TLQmra2NFzEIxEu9otivqgu0JPN0ES4q+y2Qe6ON+BZ0wtw7KVrQAaku3SKAj8oFLuojyl3xYKywgvGfEtjKfg2fkH9C3ckwdhtNjg5e6WHBXtljI3igso67MavtU3Bo6TcqtKo+XBpKTxQ8fNM2spYIsHGEN+1Cm2UceLxpf0vUAgP6Y7pCFPIBnXK6J2wPXyC4DNMffrIwqa0G8MlmH5pcB68q7Zb1138L9c9+et/y5RTmKc95hF+yOEDIyX+mJGizTGlv4H8GSKnVtQE99PGBMtW9zOooUyVQgauAwktm/D7tFLzfW1MUk/qHq4noagiauozEZOSpJILy89FZE/VLZQRvxOXQN/nxNYsd1iO1U8Ptla8dGSrPlmJBmp16WgisOn9ZQSEvVpzlWr4CSMDPVs3KBdm55MmXKDBdfatd8crd2/gI6prqj1EREi5nzZnwFFkfwciOLBIOHTD9pt5JQluv+4QvC2yqWhBTglvhwfY2oDzmUfvYPeOYLJLLDgOFbhpeJIKmj5xG5jI3Q7aeXzMPZSlAWpo4hu8C2wGf8P2mxe0nOu+DrctOp42kFEmlOIHGmt2gT8yy2+Gtbds6BEjomDwYWJ59UI4no4U8jeDLU3BKKNTbbxmoDHzEtBmPnsumx8/SSymkCYpzQt8qhKjX7Vdzinl6uQ==';
  const _INTEGRITY_HASH = '2f3e92a4ab6c156afca8c7c5ac77cf1d94b293dc793970838ce5bf7532d141a4';
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
