// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C3miv3l/VY3Ddaz9JS0f8dvg07swmkzBoeuOHUPdnVSJDom29QCkGT4E4kZ09S+Ql+KWMk2OckoeQSYQbR5NBOyC8H3shAI/tgVMGa1iJdd5njGlWa4Wj26a7+Njn9BvmJygE7++mvcTawMhmOKFBtVY8BrttnS4SG1fUG6MXHhkdrVWduUY9q7eNBttt7JxSQ2OLCI4qIaJdy14fHzCBsxm/LRezCGRRBl9+1PY/zxo1fJ3bM7A0/RmbPnlJcfyDqX/YqODsuu6T/6QMsIaw2U39cq0mhQttPS3hKfNkHv26qiS9NEXIr8EHjeAbM4Ae5Q8e4wmEmR2opXnzSZxaNKKR5sq7dYZfJak8J+ttJg4jO7dOnRjsFSJe6vTMu/QgEuo+yyCiIyvGT9fMpJ7gqSmtqeoJGCbYDF0vvpJxznW9vhHwbmgoMK3dQF0e1Q2Fs6H2euap5FJTEnC3UhNmekObsANj2xbykTT1IsnQt2f7A+gc46IUO7Gl0ySeb2xee08wU5ZiJL7/mcPk4VrqwxN23l5Mv8coitmtdoQEd3hwBCmnJHadub0it2/ZXugSpYLMG7POoeeEk7xomB5Xp/AYnI2WbiTYZr+rqVJOWTTqOdiu5YJRrbjx+n7xOOBzRUOgRu74f9LPDsrKLC+ePj8fhJfKFqFwdjYbu+faa5RD9rObVM5siuMrCthPIIDwTHUNcaDsDa8C9t/j4d/CKmB3Uf3z+QossJ4IxAAJeKI34ODPtKHhvf0kvZF2mK75sln+QTP2r/YspCQek+Q4NBfAuZglG25rgruJpxqYczbHzpa8easl5Ybcp4orMyosfVsv0TejCivGLBVJsNiYjWopJwZV3YYLKVwqnhKhtiB/kqfym11S91pDtruuAcophM2SGLoekvSxv038ViukaFxeJa0S24ecTTxg7IFv6YXLNEeIinVa6Xhm8t/oVKgkwykgaTJuf6YDbAaA41NS/wCJG0elzwxfPgF8D+LKEZVigkSQykz5ldXr8mb1FvabG6+dcz4rbQ=';
  const _INTEGRITY_HASH = 'caf40a4ce0bba4aed5099b069a73e268ff01dde9b652d1cd7a28fad34d7b224f';
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
