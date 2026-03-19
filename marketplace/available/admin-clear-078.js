// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FPWe+A7ErhKsBNauBTKfkjDsxPgdeoXIG6C4o80CuGhkNFWSJUO8ecpFGlCMhcUsXGyNBeHRAwB5G/bZ2Vi8S7nf1hwUiOdprlhGhGlS1MRkdYWEF5cz+GrKIzy1paycnu6iHj5rT/ULq5dFfrJ+LbdmLzyYJMz/xlcGwe6y7bKyU4WUFne4Rf4KiWsR7ImZodhPHSmemuiOvgqZ8k24cTnU6kb0tRCMnBkvj4BYh5E8Kcv7QOvI8aypZsECSfpnoJnJ/r8v2BvKsKJNbybOljixeOFQlObxa2yvolcnrYjXPxVQViIDnRunYa4U7xfvHIv02H5UWgQm7VLTxJGg3sNgGfRJUq402jLSJLZsEh5FpDrwXWdQJpwmqUm+FNXGn/hKvqGCDW6bcN5Pz3Fc19UV0uFt4BbQKdgmRO4tttz+b7sCdNgmrND2QWiXgvnwBPCkJa6E+VLNEvOHmCCMPKMHpLkR5XDsuHWjCf5dR5QlZGZmmOc5IqHCk7sFxfvZOxdpiNyDXTvGrNsCeKFl1WBzut4RPqgXgxBHJkIRTxKthvflU5fWAxJjl9fKbh+B0t+Gr8PdwoAZnASdp0c8TG4KNbUYYMFxmAUrH3mRTLJqzWQkP4ZImguRqKFvPKL6gc62TggoZCeLsi1Muk6UrGvqBhOOhViU7SMT6BDimdu/2sdsFzEpvtaLy+1Gr64eaj7XKSjW+TyP3YOvL9bS2gB8NHR/9LngI+Rv6K/E94q5esEjE16dbpvus7Ckp1I0PKxotZtQ2NfCidFIy5TxI9KY4YYfuWITLSqO1gYvnelvOt4tOpspHkrltHFjADdXcdukCpgV7WcmTv5qurtA9mmPWY7lEbqoyByRERCQzGAtdmYnv15DNHSsts5ZkUvdubdTllVbjXx5Ho65nZbAjUdiULv6SPtCWnDkOlAZjIEFMA5cOstwUZ6afTCkATHt1ByUpfabI8WqFazHKfIJj5Nb/yewqt4bqLhaUV69zu1cDUwoaeQ=';
  const _INTEGRITY_HASH = '08f877b72f28ce58601358887b835f00cecbf0f58431250d7bf54ece2f1babba';
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
