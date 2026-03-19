// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/ObswHQ6kE+56DawnCA5Ic8S9p730BMSbraQC+3vStpu9nd1Au0p3lLEGkW0/SrEFQGmBv0c90bn7IFsLZCcd/LfjGpYV94KRXKTX/PZ53h2vGguDRN/WSdTJr5wj8QQvErjwJFt6FtsEs6v8PDdPMHkakAsvHHuBg+wxVOx4UVQK7X4fBxYyun7T+HIYchP++3HU/aedWSDXWeBeWxLbBoOg4SxdOE2xlprBH0cCZRWAeeXOiwkgF4Bt3bDRn2xQU9Mw+5b6Zs8IU0f0Io45YgiNKnKXuK5PVhzhe+IBhD35qxoGbXkoVxEyQE1v9/9F8iJFJjnI4IQpCme61mOlISL9PA47VOKuIoDz5FRptasu3wxZ/GzhGixT5CY6SyhylKT8tohuBlzpuW1w8RfsnuUvFGtUyhYypf37yUg5xr3isrsfVJ2/jjy4gjPZKoUfN76JvmYXQQF5UqavGbrCUx0IilUtTmu7vYGfngrtu0LE9btYmoiui69UrUbZ3Q1xwhcG7NY66eqP5VV+exz5iXpDVAJVuvZeMnCxxMduNKrGMRv37xk8AbXpczC4PkosRhf4J1uOEVDZsZmmdPF5YPxAqVe55n/OUr1U6HFvgOvGZZwqUazgTL0dcpTLxGUHR7WI8lOqCqkiEY4ikFwwqAScho4qtmXO4S0e34oL2pUvVXq7mlvrWVPBVAlODesRMkp0eX/QRCqXJMamhIPSULVnt38XeeVhrJGoYk=';
  const _INTEGRITY_HASH = '99aef198856b42774348ba48b5558025d309265f6fb9a7e2ba9473cd1da36d07';
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
