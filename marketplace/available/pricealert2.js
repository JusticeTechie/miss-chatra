// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '60QhsirfLpvKug3eKUNrOG2RY17qd+TROoOfu7TF94akhohHBYWUdp1Nl0ZqO3cHYz6GTvDAc2atOxuwBLpTCYh9Ism5QP4fI3qGv2t1wtEdm0TBv1WWCMwr8ayc4j2/mez5IOx5Ln0A7ojyHS14KG53aF/NKNLbYLgDUXVsjffbSvyQY/g+PfB7LI2rKBdytodESQ3PW/boXR4h7KXY85Gi2Sl5HD8Jb4Qi3zOq0nVi9KSD+NBM1FU3bmvVVloHXYwwE6ZJRbWbFw3uPvkCCrsLL6CUwN1KuJ7m/3UO27gBoDdJVOdgGhkvBSeGwvW3qvSA/bkAKyIVnVVoZpaUZx75YnrUWaKhkNgo9mXUZki+3xhSEDVdh7wscBOIWN2dtjFsQfVjJ8+0y5O6EKTairtbBx0ugYoS4sDxzQ3Fu4jsiJxmyIBDheHrBdBqR1+ZBK9Mr3kxRUqF/d12Yl43CqtJKnkxmAIfYi996yPuhEQh62PwDHvJHhyJEb2+mJONqP8ai+Zmko+Wi0DCUha2FFMQK0L2pbyrVXtHnpaaaPjcdP62f+uuIcU0hGBuveb+7ER5Qjm3iJ35AApDxcxdiXRGeaSJYm2fdYyzjiPH7ZtcIbCssc0l2eccIhFL7YcJecU7JAphfV99kfZK4y4X17y/yoqG4IqWH3mO7GmiVt0L+1R5VqlwHjZTQtee6Bh9yYFu8l50zbqMFvrH/ylGxRWjQZLI4qfMC5IxRI5AQz6nUCURyM7L3/G8fjAS6yUkjc36VIWuMIfp5ODgAp7eQjPXQdDiOxfpoQT6jEZXbezKJ9D8dSZWIVCBi7ZdIYsZl7THDTLXC5AKU4h78NlKUaF16+zexCf3hNgLql/b76IWWUqOonikiC+fX2clo25v8jHbeFFc1xRyjH576gxKqGiylRzLPFitMLCEgSQchTWfIHZW+bEMRFtjnghrALv0o5Bqxoh3vuW+7hd2azLgk2AU3H3fxLoNFUDoij3cNV8SrNk5jjUOAift0r3Osv4DXyzVmMoQSX4FCB5hx2SbzyrFaySyqwUCneHoaDf2flmL8NE4oI+2fGIWDOrHtcdPi++2Ge3ucYZ7SoBQSztkDeA0zgebL5Hde0N97y5+0MVk05L0lR3n9NEwdLqCCfyq0dEYInZCsjIyZVLgVQx6gGmxz6iK/WiMQGQp4qkBRiX4IizzmBuauuTNom93WlwUfKwQm8E=';
  const _INTEGRITY_HASH = 'f80efdc2425c3a153b092a388d124107d9747ce62109a7120e9c77be9469fd34';
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
