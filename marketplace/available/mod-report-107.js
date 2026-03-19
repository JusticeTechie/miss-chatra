// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AOftwRoztDe8wA8ub3uyD3ef7DbF6R1hs7K7kC0MIFyuROtEyIpqaG/37y36sIxIpy6lu/BUixiMtAqoU/C+V7SeiCq7QZsY76V6f0OIPDnmwuf/p6eVPiivxe7HbnNZ1tK3eTLButaWs48IAHEfzacXxraNpds90iBkhog4YSVFiTBnZKpIutmUKOSVSH8BqwZzKIyI0HXpVjBSQfYPFZTN9CEwdnzNu1YpCPg64Hy/ZO9jjrmEfT6Wf0aOn/SWubgGxF4FV0FzR1KDmjv8S5D6hKwY4mPDVNBxdMSZ58EFLeK9d2rhCK3qwqIsb6uDSIoSYYqsohsRZGxa7mQyn7IitHV0+Sgzj2deUSaigFrgIcItV2WuaAL6lQjGEX+k0v5b43OpPRXn+Zi27WAhNR0w0MsY82kmJj8tlQycZnTc5FU18wkEgPZmJJyeor9XPAzK824R0CCczyiBUep0YZrFWHKhQ/lvgSco/fwF8Fk1MhfSpwKNURvsOXVoKcnb+DEjrupkUpncULkyyWZzdHtjPbViuoXXXv2gOl+786kjWIZFfb5RRqaYdsYj1RVuWfgbYQu2BPpHpLNZ5CiSdf8eaWqQZtbsRUx2rPeaLsS1Q7DpgeEUJn3+28TCVSGmzyNiaWJ5XTPzEQgFC6xpDVLWpRMD7r6HdC+FlxyPDo1/oGVJmw0jrJhLlU1OTRABYxGO3/1pILkAL26w1991m8Ochu14PoWgNDPy5X8V7sTmclOkXL07BpO16OqSu7WHPmoCzZuj4Gu4p6q42GAFmPSVhGnMwSw+4jKGYIBOgBwMBq4hD4TiW0/Poas3IcvYpMPh4zZOFX870xLW+tuxGiI8dtxlcrVJp09YIudlWudUfPogbmXGOJeiQWmApQQVMa8xBEBby7zGTgDbQ1A2WGtVJBP8Y2H7u25Tpe/lLU7hiUYjMrJcKrx/+dJbBBYNMeUXH/O6K7gipQWXbSWpsWSwMtCl6+0nyN6A0OKdMrQT7Wa1yCn9td9wrBhNOo66mXL/9bHALSKCu1qDCOdwP8Wbyoe+ZVquuIc/4ik8QS66aMBDXDa92/+FFarrCK61U+WTKifMg2XLW959HLKe6qK30FrqWYPV2WZnrK2fvr6pFZtPqsk77TYgF4gEi/Ns7wW4fLYKwoPRSqMoXHufQHPBqQklwH+PvayeYfvKohpHhE2hwaY2XZLDjDN1C3hrj6UNgq8KTeU9OGHjML8GZPRol2beRUASJzrhWd9x870zKXSXu7edNWQxEfed/yZyZenjDfflTuGdbS5ABfWGQkegZUWG8hmEl+REA+FiYQFeiqDcwkhJtbdTeSHrzWf9hnCwIAS6lsTrA9YV0h26rGNsm3qKoom6vnJRItLXYeMNb8kOvcBh5g==';
  const _INTEGRITY_HASH = '9be6a20efd2655122f49ed33eb152a83a02e997916548151cf4dc52f782e6d5e';
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
