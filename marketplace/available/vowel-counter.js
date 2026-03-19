// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'slmzs7reuKuOVA3FGWdsWqSkC4gM7cyOr3IHfFB0LFhADqCgw2j4utMs3o9ttc/hdfdIq3GJV77FitxJjXj7X9Be+MMenxTtL+uWUboNS0oObUFgux6CSHPXAXzPiftcqV/JrVgGLwipV4vjzcZ48rlvTFa54Dtf8Xx1kqpBMGf7kmYWBuwsaC/E0JgKT/RCjrHcCfKdDWYgWYjjgNpYxPkwaeAWsP3UnkKCZcoHpHdevYl9OSbkpFUVyTTYz/cB7fJUMhdTbBGRqanvYUIlmNKB+Wd+55jU/vl5HqBLMAsz7XsYYMtBHFkJWuy+5rMGQAxdNc4xxMMQxtBrFfIeboZzCe5a2PDefVsGZ0DlPlrfcp3vqnPbM9tVcDCn9bhH6DM6SSuX6Vx3dFy8e6NsH4K7/0jWAcje9u4XlmxVBss04AFNmDM6BG84Aoen2jAXkWGwYuvjNXRE5B16llxeXoORAPUEVeiOjVndi+9wHTVruuTlp8+pmc1kWKW3RtyWpg7s0X7pv9WZ1i7f2b6ZP/IEzrOlwXq5nfK+lrpdlFdSQIZBfilQGojHxORZp8X8EwFlFLzu1RJy1072lWxVErM+7cKyeoeMj1WTINcgu5s+VivG0eu+a6p1RQkVejPfKon4nkIGbFMa3jY5svAvs1ORSNDDxzIThSO8GOHEKLrh2w4MYErfzGFV3C6TjP2qFd4RRDyPkNicY0Q4LUCwcmM8YN+3CUXBCNTrF/nko7ja1+4eAS3XZmZibmDxnTqAod+p1dQ3hSnNkzQEOscpNDvWCvmZtR8Ot3L+3tatLyiHx7dpM8+HRt3yjvVFGi0z/YW1rYGJzuALKRiCGIFrke555pWz+GrTC9oNnI3fOp5buXTYRjPTqKbCDh/Db4/lE4OrCyekzDEbSYZL8l/6dNlW0NlHq2ThWHuBixTzenzRkYMelxG1IeVvp/5wvR0eZzu4kO4gLtePZczVUnnRt4SVRrkhOYWiSMDp9kosTR9j2oTvckkRSlegyIXKLSFPWdHDqot9/GY80DL/HkkK/85ynUeyOPj9miWMTFC79OkBcjvdM067SSqeB7qmk0LbG5aHtxt6OkxtUDWX5T3eJoMOemwhAYJ2LKl6jA+nfZ/7HCPttV5ClZUEDVbuwil9zLHJojOcYBi+oAyvEF2JRY3zi73DFy8sWTFt+/6CXU/f50kMyxVV4Nx7STkqgxMIPX2bqlTvlNyHAQcd8P+ybXdhDXSD/1pE3/VexwclBI3+iGN7VQYXIiVPAZUbc+W0oChGQm4VXlG6xbD8bHqpuPW6N/+/3M7h4W3eyE4VyMmppqOxGzZgTprI1BxCiTdlIZlFBLCHRY2wf92bnUkK1CbCQLw3BF003/lvqJwy4mBK44m58sfFUAsr6ZdLrj/Nk6ZU4OwDALWksPweahi1l2G4cRZGYq7i7Z5SEWm5zfzUcEotDLf58vFEfn2ViQxf+lf61wpxrOR/zq5BrVWFWvHhSjSc2Tii/Vq7c13iMFLcjJyeNfn93l2wUkO0XOXazkmP9LdhBsVWgO45pbn5HaEDMPn03PCV8QJuAGYUIIPgDyacUAeHoNpNdK6b2hyFTEu5GHNrrAvaujdX89xqGs7mQMpgAULPv56sccA0yc+IJE8TZeTbG8j5Ere1CEXHnTahO85FX5JRmj2KzF8N42+TgnVg7nMLjAZXIq2dZMUbVtjmS3Jl7fNViF3RapxyIzUO2vl1kZur3q6m35nYrUPH0X1uRVRJT6lBr3H0i/e7yc6rhfKBafAJQXkWryIHO8YRCaUIAjkrgI0PV0zIqPOwoWFA7PIKEPzefF+Ej6I1h17bunUfBtThlgqo5u0zDNQCQptYquBsQl/0jE12yPsQBhSbw9zZcb0DO3KI15+2Mgbuvp4=';
  const _INTEGRITY_HASH = 'c380ab46fb7367cedc42ab3affd035fb613980c60bca05d166a3d3a41eeca94f';
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
