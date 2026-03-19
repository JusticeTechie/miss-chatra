// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MnJ2bBjtsF8VDYz/dTWjYXsxcUDdvIwnSo2BAmBS0+2Yow/60LNkx9/X3PBXGvsdRB4Cwi9t4PBntI9IFn6kONrLEPnUpWG95XraV00nNSmCEKFlZXPeuVnKoFFl72HF+qH3w4GOAqEnFeTKzVhXUHlTFGaH10zMp5f98kLSwBO91cmLoXqO0bpSpzuFXk59YW/QXJ1YIEawz0PEqShvtH3iyI/sXle7C2L1u6L5mvhrY/9g48S+kBgke79sesiFFfbXvRshIpt97lt5RXCIVEZ7wbzJPfn7KPBLtAzEubvI2lejUA/gEhusuEZPKONBJGo/RBkmCQ4XfwEUP4gBGm03Z9pnj+bFqTvqW7Yyh5pE0E43pDtV+JOlYoYaAHsDqqOE5b67Yu3hB7NGIDf9c5+g2YbUf2vBQ96rPhoO1+aGKbLsc3eB61IJdlglMui2/Sjjv3ptNm0l7RBky8Njr/QMPXDR+8IsA3PpOywwqNOvV4EPTYmUIs728ic3lAe/EPcGDCt6dR5dsrYDmRoqPd4b2kBS5VofDIhn2k0c030GmkdIxORIOtHcbZWinhHRwB0+k7MJo9Dzzd6dtkTHvxog0G5iWnvBm9yi+S0U/mTN74ZifuuX8+s6mIRXrUkOMcLMCA2Qr447qn1P+WREz2TqWd9r3MOM2CT94Xm57WAsA7ucoTT16zSpeZRI+lobQHhwt0ibSR9MSd9l1cT5X76LeXrqGZDxoPbBP05DWMxA/dmB6rG41VfMBk/OY1DksL6fVYJDTG6re0nOynr8QjegUrPWUfEjlUzP7ZsI3mtdgPCJha5S02TGDhUMxaR9KhkUmvukHKOk5AND0SEpk1xO+MfaznKZvoMtPTASeZ65DhGy0/PlUqswbC3Gdq8DZOh3lfQJwA9Z+yPTNdH1awQYlW+fh18mpJZHmUaRfxOs4U1TFE0JJxTPgOnPFjSVJiXiehZz5EAGfAdLOfsqupRBDnptPJE+zRoamYI0XOtENDfEp/nYHmIdyv0qoR1cwEGKmmKmIHadKGsFRMVZkmhWd6f9VdPfQlrCvzQd9jMYuX0GgpxIwYfx3TMaFKywby+DkAxEQ7d8V0/9VcoYtsIRIwD8vLoP31eKiD04Kx9sknUK1aKpqYoCq9ti29Oa7gt0s+laP8RohsMQNWXq3y8nzBu9aQrrEED+QKHEu0gIdmr/EPozZxgKZINQQ0schxbpHrqvrDWk/Q5fLVVL88qjLWPAWQ/sMbOnqUiLdISEBLlJ190+S5D5Sk+qRiNraEbgEnvRyd4X4jiN6O8WeyoD1+3e/3SFsx1X+BwGNodgrrxCxJfnCNExd8f6XnlQM8R3a06oayCjKOGgPs9TkYiEt25mYqmg2ABuiPF1cqsIOIg=';
  const _INTEGRITY_HASH = '25f0ce7e814b01179aecfd1984880f2e4b620bfbdfdd6066cdd7daf72699ba99';
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
