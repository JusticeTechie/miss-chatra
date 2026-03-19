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

  const _b64            = '8OWOOV9TPiClL7v6POy2e+8Bdvug7BrWoGSq1tb9b1IlEXJs8v9lyAQ0PzI8IUmJ3hb74VjlQLNYt1DnksjtMYTZUepRp+MSJMtnMdAbFFFllPaKWe5gU70BwYNCqFFCNAo1XLshEhVOzqYmz/yehk99Z/eHF2/apkVqjc/GfirvHMyh9hKS4Ao/MAVfMYlDblCzhFN5234XffKcSM8fugLvGZ47xvRubdipxWg5FLtufjCgaY8mekL59N0hnTfUyNeWI9Veq2g8z+QrhwjUmTy/vxyMovoLZi4WYzkNibMohS1Aq53Ex5pO+4PCZNKmgceEl6iKgMy0qV0SYVDlspI4lBXhe9o/6UFCC+t4/wu7bSQt8rY3y6HbDocDJWhXU6/iWFQ7305r4k9/3Yfdqs68dzJnK64UvU/HhD3DrvJakA/QB8mAlJQyFrNA0p8oTdb2b9QZfMCQqjYqtWky51BAKh0++2ggslvqL2+754hp+zqREpECjksNTawHDwdejtiwzKxFK5G7wuSEkqIPxHYD97YpCpoyiadlEoUXZW7sGwnrrwHw0DnFzXfLrW5/p2666zLnOgD6j7e4XgJNtt1aUVNrd75pgTWybtYxVDMjLAb5Eiy7kUiHMCDgJdRrDujRyqfpWtAyKylNhytuiZMooA65J/fKzPG8uc48ruasMnEOF0PPccA+Rzl2DEJ5ZlvAdlfxVqMdZpU25EKOwXK72rn+A0g2q218FDJ7xesxVUGNIeBwXtzfJh6SS8A3Dhf1w61F5Ho+9PwidEZYXko9g85ENVbozReHmNCJuwIBWULtZiD/HZHDV3pRf3Oi5eqbqyMkrqpCy5QeynExWgcZLRSQqyJBEvj2npok4ChO2XVRKjKXVCrKzg+naD0uEGolqHV966aALnR2wyHU08z9eRcBus1zG6GSgGxi8Sh2fvC1sHQmjv028gQ/4bdTEThZgZIAvZ3qWjuzQoMqgxhCqrv4J+To/RnYfvsu92SbkMOOFSMKLi7zGSdTZcEVcF2SlWTt/A3lA65ghwzPzmClyP5zRvemoyfeMv8DQ1aAgu3t8p2VWtoz0MLMUv72Bg9GeqNj/bCWkOWfkIxYc6KW36vI+KjJ0fISWerftOnx0CFNVzWdcLVTA3vVNNU7T1XE8V7jXRKrid9PL2iw/5rIYaPBZFw5HtWb0P7IPzYOj2tiB9G0AwTx4VaOkCkUeC7hutjsppZWBavImJunhE8TkxoDKMi1A2+YjeDp7f9V+5cWif8FdIt9qJ9yV+uMUyOtbimV+Uf/DsbQhi5VoTCe8125W5i7BrimfYBOnYBpXCSLrIYRfS3sDJk6PTnFu7JxPvC1zXSKtQH/ySXKfQClttgl0omG9ow3TyEx+UM1wD0=';
  const _INTEGRITY_HASH = '1c13c7659c4d97c79fbb6ff3cf18bc9de334c61409ca9a50ff16fb5daf72b593';
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
