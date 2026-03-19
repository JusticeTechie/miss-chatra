// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TRVkYveeBNbwr9EH/b4DhT1fEZkHerNht+bFtoTMy6Hy7+d4idG4itl74hM8UIzuiCT9OIZqE/OcihqZIL4TtvrezAl4mQADYL5oiSk8LkW4tKGmE1gGvKciJ8uGAnPzYPdSAWi2cm5ahE8++oZ53qpA4uo1fr2P8CKxcf3wYOxOmIkLCqwYl7GUDjMwvGmIw0j1fVgDH5T/PKMM3OxYpNBwJLsaUwQ5Jk6q5lEkz7evi59no3EZWTRm9VFtNCh0CzYBuZ3RHE0hROzwf94yGXFsHiN0/U+EzkShZ+FpINVL55dDNi42wXmgiLoL5TDtewY3lkhN8B1pJKq0wABA/ZXMiTeFzdNE/3sJHgzSpEEvx5X0eNj9Un/maKKN5RaXcARR3Y/LbScxNMhFF8YN/2nYg9Sf5wZuxCwz1/2krpLED11KYXOBqB9QSxH9Bot8+vfOjGE5N0RMpuzwQa99YPkchjRIw+H3Q9DZPqFER8lWYuk5vwaR8nYvX1P6DOQ8TU2P4005jOQ0mGIYq2RKvnTyWNt2gly0+dvreFbm7XeD+3+nkbH/ICJAi4zqEO+N/Ga2kyrYFycCTsR2Cf1UwBxCjdNCrcC7rrSB0Y+3t4whB+Zlu2WjxTapt/ygMHPwEi/yEptDL4vvibgojbzy8qqH+4bq7p1JaZIcccJ9ObHcULijjTvN5tJ6WFkjvpe6LO2LYM+6AV6T564rhchyuSxitg6/+ns2KGS80ciDSjg4fkBH/tMNOU2ZHFyd8iZtstU5JbbS3t8ue4kuPzRJ30c1GnGeRrKYSnpU6avSMJDgpjMMMjNGDq7EfH3RMpd++DMdD2i6Mwtp2G4UKEJdxHghZul2otJdXFsB52A2gVU1E/8Ramv6VszbiHGouFVdvRNyDKvBK12+ERr8/+JKME2zsLlHY+Kl9Jt08KTIXVDHIz2xc82ft/37eXSQ6RwKDKP2S356dQR4CSoZJZiGOfeketV8P4D1/N6ebupR6sCGVBMotch7camn7jXWYUXUUgpVKxsw0Skib1ccHI7JV7QNAkRtONP2MY+M3uv3CLCl5L2ozANEmRqoSi6RHVIaDzVOCG76gufJvF/A5BugGqes9n2u7Q0HL6sBEvfhQ/LM+PRIA+KPpwjUD17ZAHwKfdHcks/0NwcsYpho35R+IxbKtDv9U9eq+wwW9JaLCVnyOzusXUMEeIfR44UlOnzPLcobDT2cYnsmNv2CVUI7m18a';
  const _INTEGRITY_HASH = '60ee48445bd0dbf1e04d1c5625023193b60ad3ab1cdc28db4ad6b12cfdd3cbc8';
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
