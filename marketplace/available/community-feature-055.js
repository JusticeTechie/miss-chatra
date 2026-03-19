// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OQLQ41vHiTVdeAUsyFtaMxhiHjEMaefxfUplIZ+aTW7xH471gDdVX/befbeqcTp1W5N7HOFGoS4IZq+C56lQ+GdVwvL4Xsel8rrBrtRaJaHHSnKoQj+CXxiEhtxngW6wubphY7B9zDwXgcDYMB9nzFJscuKSHMnAfs0HsZxMd+EroGJNeonDCH79+4FnEM2LGmVb7VjlVgGmWRdeZpjtVga/xfdkogLx5abBTOhE7fWdPlQtcfybMQRigVjk/VGjYcFIFyZ741jCZ/g9GeiVuuckigF3ojH9pP9Mxh9UyekA3yRj9AA1+b6FokowLrOv4oefbIPu/RyNXeLuy6339+EObNbdqMBy2bpaCkEciBSrfw8POyCscb4xi1HK/KDNNKdEpJ/BNZlzVGaPOReJu4GaVC5xqyFxzg2W9dQ0KETowtyWpHPAUCUZAfE7DfXgO8IPBQAlCwBxAsFKbmNRUuuf7RCcmfjf3NAsNRUlnUiGGll8Ko7o3gDie/peUiTf59nn5ZRXl6AkWnY2CS/M8NUL+IhSSNBnMzzELM17pWQ3T0MV4iqib/GXj+OVjDQhtxtUZ0bH8Yh+CVQD1w8K7jf79hgPrmgvCuDat4U7KjfBMWM2xbM/tUZKpL4HYEfPMmCfAQlco0wjlNVY6JHiiGGSg69yE5ITvZbz8fQv4ZxyLb1tWTVw7CTZ6a8N2zg5y6fEZ1QVtoQ1dOc7nkUWH/cO4voeTiVj/CZPiIzRUSw1NyFjKZw=';
  const _INTEGRITY_HASH = '40a790d379df37146cf35b0474ec77a33ca06d45beef14f16869d0bc2315052c';
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
