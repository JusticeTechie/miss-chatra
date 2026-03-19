// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rOPDSNfVkei593ukNZ069akgkP+m6o6l47Cyk4hCe7/P5FUJlm188MPCtgzKXESH4ZuZriNQDdg34e0o7ShQyf8tgDcKfbuINZwAejysNHLADgyQw8SWxdpQu/roj+1w5wdQ5iYrfuafTAfdQx/FX4uivNvBSHuxCVaAx2QI/tJkN4FDNOC8flbn7CchfeRKQphzGKN+t1eCFwPw9t4aHRsiywHqbJ2WKN77674xnrw2ccdQec9zdFcGr7ytgDzcjfmPZ2/7lInc5OeGNcCGgZyFlUTj8aXiujNGXUsXKD6DJcQttkmzpb3eBPZ4iVgWeOUQqnrD0TVdkueqa0JNQANIW6KcQqlnksjee6rVy/tAtL5Lu8klYEyINN8XKj7dDoa54aAYupxmWxIe/G1Y682zL3XdrztgZUjRLhqSoidSKGdt+eBaN8xST4jH5tarIiNTsk+fuicj4bvWUT316+yhGW20xoPoToe6VJ6DObfiGrf0mthf82FXzPQSzp9D4eCyLrJCwoKkVllVPxo8T1rp9NvhkhUG7xdCnZGfkQNTV4LuLecg8xzEQE7C8SHv5xaXmZ/aAlQLKpUkUp68P6MCIWr/49WgIFEsX4uIBJb6z9vECHT5zLLNVxuJMfaAhGRyCGJLsrYea5L6OuckjKWu7scuIZv+ReqOgTyy1EZGftcd80q/KK2R8Ag6gTma1EI7jRxkWFf328h+5Th9cRGdc+g8T46CyY89TqcZRjEpRiEBF+/RjAwwuWlI1AvgcKGvKIncbTTMK4hZQmJkLAYWf6CG+Nb90IyI+Z0k2gWDo64o6yGzpr4WC7Nx4HrFJNNLvgXzqsF+5EfvJrZEv2hUG0KQxJTAE1NP0WFrzP0i3J2aNWElJ82xj5tML4SB+kmncvZwUTmRg8K9rG34upwBVBVhaAUeThgcgM3kfcWyIv+zK/BvW4ZfQ6bJZx2J0gOK79uKDeBoKlfmmFZp6nCXCXGkP/+u01HkZw==';
  const _INTEGRITY_HASH = '3258dd2dd7b7004bdd93e27a6a115ce2f1b8d706754697aa7fac0e3241636b94';
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
