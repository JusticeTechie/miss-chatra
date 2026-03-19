// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nUMYJr/TL6enF4WQD17xZiKNjOQQIPMUvqIKSYTypcGz5tlfbPspGfuEjXnwm4GenTXpwdm/yeJko9I/6BL0ic2Iocq12cwCuUsZb0pJsURwCxbVs7xs/LujiehOU4kd0QHomcamDQf5WoO9Izx1f8B/e0npdBCpGBHwY3m8FsMXn2NSqaNajaK7IrHuDye5nEad9pWCVXfImeVZtqma1ObTpStQwj0786pPZ+oVNUHkMjYyDGXE09Elqb67jyAgsowOmVAvG4TcoraDNTk22hDQwzhq9GKeOEyz0Vn2S1b5bA4M8M5MFo61huonsSmgbr+38RawLn616Mnhoq3UHf+atSoufYu5kdbK+b++TUhYKL0c+8wPeS1n9NxpobNlxYWBSclxCui0G14FNxvLp2YBK2bJ9flLbLrJAIcicoOkRXCrTGjdbXnQeHnxP/tBKrJ7CSPu41Nmq1UptmanoPh5ZTI8uRC7WbJbgQBLmJz47TP8GxDNsQRPIrZ1kSyP06T+XILcssRViPEOXh3tDeGHhfdFTI1ujCwsLWE7ueCvtwnwalt1n4cEmIt4HWqzh+o9V1lOI1SaU9daS7ocuT5YqUiYnMKiBSc7CN5ke0cVzwZNzHkw5Ia2yyHuMGhfxvgasubXPQvZ6i040osx3OadmvC7Chqx/R53/f/bLuukJhftoYKtxWb86Ww1b3A5+l6B8HTOT9fPWn5x8kO14Q12JONXv8gXWT/eRd3eHMOOiy4xLZM6GygOct2herbSJKxXfiwPxta3nfEk46pp01LgxvRvqj6zHRDeSQ4aL7468b+aMDQQarIfj50v5UtHyxxozbwL/P5/d3Hkk6wV5Jtmd8K9rjJFB3TB8tRpLJOSMkhQ947o1MkT39LnbcPdmc3rS2Kg2MVT4xB5EvOk2F+EnFIzG6poHCY9CLXaKBRcP8XnCndRCu+iPGykPYQsoYQBve8iDud4VtUv1oA1YaWz/GIpL7vmcw8YSxHV1TjIEJOCU+BSzQuHYUzE1j9peHvooMLn2P5oeqWGnzBaokkxFPIa5NHy3RYAJB7136EPapI81cZFIKb3FHq18faWaowjkpXKxWcmWxtO1DRE5MchiFVzDmL0p+u+B4K4fFuWAC6dmIIbEDbgojpONmbcHbGqBhfUNxYWkOO1K+QsfHk8OqIcEGGyb2oHnj83gv41d8iZwyCD57IuK7xoWj6IFppM';
  const _INTEGRITY_HASH = 'f54c8e75548fe6156f1fb592ac56ee6de138d9e9534bada6c702aacc66203382';
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
