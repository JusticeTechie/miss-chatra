// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r8s1l1qvNbqCK14rsmaIN2OqI5n6a7jzDrH07oPt4ZmQYf86LgmppCiljKIJg1ZzkBZsecI/VljG0WZmqwEzuypxKFqsvsTQCZWFCTMbiHU9ntKSoiWwXPQiMzrhc8vfgvxSB9lPo2isEzCKmPfsBmNRwRbDypm7VAuZVL15/tSrpEP2CxPWm6pdPr7QfPLcOYZJhA3LGxlxMG3fQvRip0jo2exwTPW3J6+IPKCPekr2o4Bp4u8SM/7KvJwM04o5MmqtG6TwR5W/qvASifUtsxQHQJ/YdHKelbBaiDpLJgUZ+OWVH/CmZb4+Uoh1Gs+LgKTSryexU5shRHhGwk4P3adCOmcBFkh+BxtSFq6e43buAKAQzOXboYSnHiIIi5zu3SyiIop+EdOC5gK+jFSu63XMVqr5E5QDU0V+5LztvnZGEY26n9+gttfl3iB8YvHFfDY7ZqrKWnyLiuV0sxxz2oMZsewObdyTjA9WhgXSiFySntHIbKAbfaUyWFIYJRT6pLd498v0OFBLcChuwQKVxwYDEhujfTJF2G3lpLvgduuUVFgBmhqfVWd9xNjVMaJ/jdUzBVflwasOKpDcrsc+C2JTrsycwsqocQ20YmwzljB2lLnb8Ah9izKSS9zxoEjvhTHz51/FDmNG4lwKmo0kB4z8B8LhUEStlpgSIb8PF8NGumLAykM/xtf9VgKWyqC7Lgrv05P+UQ9zhfx1xPmaUh7xOTLON1bm9P7UqAjmGMAElD9dOPGXR5zsYk5Fk2fmqvbK1UOUVmDKeuq6kkpoTn5Yynn5MxuKwlCOrzmSuxiBIwUB5k8ZMITw1rLWA7a1f/OEpLYL+htnmxqFVa2TnNDBqh8glylj7zP4h09xUY3RaBMW6OfMU2Sd+kXjo55onGXYBznS02FtmB6vSdmxgDOl4O6DCGcHlnPYe0SuYTajVbhCoplTihcfeR3biz8wlznP8p0g+3xGVKY5LKv4wKJRDG4wtPlYA6Z+P1Q5rOGVB8YeA5U3WAh/qJz1awvJnmM4JPnrYNBVDBUGqGYipO2cJKv0PwbuCLJayW3zA6j9cx1g9xYfbwhpbO0FIFvZp/gCEezRDNT+zH2MW0RRQZt1izpPLc7MkGNgoWp4oYzgXin3p7c9h9gCwBwtamrxYDPI2xH442W5GvY5Xp/YrRdNnrOe7shF56BacM28noXSOFyc/L++MSZ36D986tfSEbwSDh9duZI8GiC7qv7FHMWj8DirYlgVuxOuf/5NV6dwjgntfldSGyfXqgKNXPc5ApQVG1bvm/JmDTxc6KxhzWS7yl30J2jDK6t/xRkNBsQ6E1zbyxFlBKPajo2sYK51/foFyaEg4rHSRnyiXedkFvPJZgNlgjBZgtqq/hpjvoEerIK9pvRbGFlWiMH4UC7XgbwJ0Azr7OZCH7dl';
  const _INTEGRITY_HASH = '0f15f0ff17e2649cfb4e82ff92edcc60a59012acbc6e9ea1f2cb0790ea94b166';
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
