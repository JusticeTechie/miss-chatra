// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GIjZ5138Ho7VriUidnmIDCKnfrVbg8ezJk4NjyLweK+NHoUeZSQGP5Ui5hK5a3n7vKBaG88WDP+/kmis80iYGdF7+V43dmEEev123ucoCYP8uM/2J86HTS/tkpux/kc5N1GzesT0t/9R9lh5cf/2gy+C33ZHGEas3iOOe29yRvvvf/0j1FJQtcA9oLmy28cJ52755+g6pujo1OG5lUA99VTsxhLQ/ZwFKuYysrT6C0pqTvTukct2vgY+yBEzcsZt3sL2jEIwsxltJl0FfxD2YWhkcgQiTEtonZRWw/ZnfjPs1nfraY2n+Z/qcAUraldN5q3rBc2WpfF+Zx3wkbIGb2rQMVHeLn8ZF7i+WFgoTvfKCARksxF4j6OoaOtoKwzsg5/cFroocsMkV544IlTKY2aPbl2ymqBtgW6TUjlQDpibAE0nMOfk5Ccr9UTmLltajD0vjahEf6QWPI/mHEdpWRDjokMbJ69oPLnunG38dUCI41RYROeegi1zypks4Nt43J3Iujz8H9cQnIzOlVj5EByvz5A10gxAxixvTpCLcGGaoqG3rX9v7Kpjjs9sQ4WtxgxXXeLRKBXRVt3bmeRpPAEqTKdkD/BCr0oQnvhTQFGqBpQvPDImKddnU0pGCeJW/nD5uHwUfO6Lc7bszjF0zrzvDsjZ+nj813eIa0+1NBKp9nFo5SzIDoYVyJhUqkXGashXRowqGgeQqg43Vi03NtjZrC8ShubbRk5M9BucDfIeGN4AM3aJG5LX2Y5oqTyyxIsi6mGwt50A4xO5/F8fCpggffJ2OhOysF5xsy1EDN8vOsN4eHGAKOUG6DJ1N4TWOrS+lGDYezvQKa8UGuhJpFjygSZCu3N1mOeDSDt59Purif+HTsH3qn1fTVh5C541rii5uVQ5gyftrkGowHMpy1PnVKndFSOUw/Huu75IvIBfYSXz+/ZbtjfGrWFFkQlD8IR8LxBW0/3HqUbhe9+NZMZWpnzRjCOSfg3k802WE/XnwdflJp1K+gp/Im4ZtqGJchaNj87TsvSWLu7twvrjvrX+';
  const _INTEGRITY_HASH = 'a42ba5fadcc14b68254699ed37f4910516e878a66762a380f00135f009836991';
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
