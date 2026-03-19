// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tiuLDYqO5XHle2ty5+EpVg8zU3O693kGHaXdvYya4KjyuiQKXphdY3iQY4CfPafZtVR/Vwmat1l9Z0YgVS7xUekzFE1wulPNim7F/7yrOAxYd6tFvUrfDBsxiaNyRNqwe276wm21nXHofLk0l087ki4iTrYm640SwlzRfLINMmFEkGAprwLifLDR1sOGBfu8FAYzwZPZhFOHWmPcS7Q2faqj7/iD5eYmcx7Yc9Hf7dTCZROYSlRSSaINoPlKQz9X9g5B3zv79or0SAP0TPGTjm96/8Iz6ML3/f7cYWGLiMY6MSzJ4b80JQh9wi+MzNc+WXjDzAgqczTvflEjx0p2Nvj7QTaLbvUDQDC+8Q8ry3YE3Bw/Wym/+sdtlhLBlerGHobrumFN02yR4y6xWF09eNu29JgtTO9iKhnuhrneW5hYbDziHdH4kZhEvcaXNEe39mNB0E7LpUxkxgSrDLxePlouiZQOJTgdeCKei/A72gfgqFn2M7fqEEn25Rz6Yeb3TW789F3z70ztCsvV5GOSdg6b/gTrp1QjnmMfTOis8N9YHgf24fwg/eO/+osmQ/FDJlW304UnzjtVKnWjR9qI5bjbb2X3GO76Bifi860mwO19/FzDvOcKdPrbIlKOUUkz17iF4aC4KcLc3d+MJ+Fmd7AG8W73csP94Td2swaum3OkBTgggjtxdPVUDRfg+1gDV5wM5NiUjyyDJ2WSv48HPAhRwQVisIM=';
  const _INTEGRITY_HASH = 'c195a054618a629f6b6034907f5dcaa2bfa4908d88162c09f20c650df6cbd656';
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
