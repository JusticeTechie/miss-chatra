// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hka9wRa5x/bwaguAvj8g2LV32Oez7yA1nLPorxZYvJlvggh5JacnDJ+C/QAmSqxZUlUTlzQfDyp2BdHyib4ASdT4IF1SQ9YU44nUYWcmMFMTEHKoViYgk10LOU6Vr94wG94intNUIjtha0AqmqDJ2iwk1a4OJ6nxkUky3Su65hLKP+c9X0Vjvmp8Uj/35nQ/vWMu2AnkQiQRX4X8XX6rXkyz/5aZItAKtyksYTeG2UH7TSuNi1/IeCD0sC+EzfnUgpN3leqpjWx8iXlEug/yi8DHc6xRgNbCjXMvCdXEZwyXxipHWbhJbmhHV+Oi4aR08j6ogIKM8dvV2C3NAeaQdknywmrMv74E/eUI2txFhi7MTJHE0TRjmdCEH/y4HjnZsEqL/xL7fCn1XoiXPz5CHt1yz7Vdxhrd7mrLsQod1pJZbJy2Klm+dIGqeQ4a7+NDWjtJz4sHBQ+eoRdUgHtLS78I99fguLcMfJOt7KgHTnnD8XUcAYDD0TzXyEuzfenk/Xn/60nm7Ftz+WXqoSGHO3mYJLm2dlW5bEMyVgGXHhxY2GIG1J6FYyqyBxOfptvUQ+sKOmPKhJ0bUoKO4gSexd40+EatZn1/ogVZuPYRer58wXfPisH5zXucGKuEDkT+Ty/94lnwgDgIJs0H2lEoSFDyjPTMQyv28hc4+nl67ceb6+gUT5BT9WCdCOxl/zq88W+XwrlDw5JBegMO4N1zzBLHDTwoMAAr1PqQB0ePU4NvGTF3f0EofRNRBNpZ35iYzyYxeSBHhgY6lF8+d85tj4HlNHk8mCieCB3ZjjAkTg4Qd+auzSErMX3iiOFwcsDVSnuA76T+tDu4b+KF5FVjj8Gc0lWCCFlxLWORZWADeUwdvXLxNYQMYsDkPT1E/EH/AA2NnDYzW85NZTpfC+SlS7l7w9Fk9kmP8q4z7o6Z9AuQG2VMRDl5UDWeV4U=';
  const _INTEGRITY_HASH = '4ca2396a2453a963e7e6665cd1d3652cfc8bb1659bc422489596e051da52a83c';
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
