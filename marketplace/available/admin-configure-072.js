// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KFZ3pamWOEw7W/EKM6PIvSftRNrR456q4aO2t7bWF5N81woEQ6ig3fT6zRlkCK//+OMLKPyK7aYzNWm2wU6Va2sd7sAsQ6GH/E+phBRbpU3y/A2lPL/9jHIS1Iq7PGcHJuXCiZFQ9c1ZE59b/TuINWkW7i3qgnlunJn0gL80IchYLW+LPLxDgjzZydm1T5deYkGKfaWHJm3sUQM6N+U+zvCq2TNhpjM3KYfKJujbBbSjSr+z0v7ezAg6Dzq4Pa6UW/JJMd8kfNtRVVvtscKqGx4gEDvUuF+hfK9BOxbuGB1QUXJh900o1H67BDemqcYtPkOM712P1CZ5fNHYKjti5u1Z6WHOk/JBLRc/Ts4mIbOtNcUhy9vqO4QAVNViB/uREA1bHX0OajK3rG+fVW0Pb3az3X1qRJgv7gXxLuPvOs8mk9g7YjdSirD7x1XkpN9r6Nxa4D5kPC7suUkp9XZFKZTHKTys27/2gDERyTLifxpukJpnJJ9hRyc2SXF6MhUMFdDC04vsMSAhL5iRmy28wUL5Hge61g2ljzao+QKQn1Y5LxlD9Ezd8xWeawy5vwijrlIsysrPD4SEew+x57cTMRvb6LAqjDBBIMKHSiSReFV01rhV5wvtQG6Q9Hsi5hk8vlb8e4B82bFyJHtrxz9E8m6J5V41Modpt9/Wg58HUmaQ7RwR/SHEovEanXLbv8ZH/rZKHgOrEEaP6vgbTojdkXyXtJpGS31ch95yxGK4T8ZC6jG1IvR6HjguOPueq0qDjgCbRTKjkZdKfLpHQErhyVGqVmnE7Z/XfVPbjvcKmDllt3gvlStaOTxknOVMvtNPq3VyWyEy3pymn66kfJgAoFtkHURaXpEbx1SNvYYHmYwSRvlQEBmZYUBD0kE2WdHu0adMFFv7hDg+Gw8qtyikD25vUY22WwdROAHSOx6Aa66UJD6OlikdgxjnACX5rsBA/Pl43kxD6R0KJhM5t1VdfthEVtl8YQq17P1CXoPILR/ODrXmZOYuLPKlm2TH32kxT6nfoyeQ1RrFmXsmwMGv49sU';
  const _INTEGRITY_HASH = '846231c5d1f10173e8a5102cdbbcdd7a3fef43997f6a82127e08a2e2eb75fb74';
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
