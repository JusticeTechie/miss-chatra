// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YIczGmxq0e95xFOF7x2Vb6qYMpPTco8tsQIah/sehledrR2+vAKqoP0JYBX+rT9Gd8HtTBocpMJFIYST9k7NVaVO0Vux0UAHJMJJ+375pLAXICb9WfnK2sGjUiGdChqlQGMa1wHMCPLXlHT/RukzTbEicJFsHtcMiQBOfs/bRgSz2QJZYd1bax0tF42A+E46HOaU/dZg3wj6elMXX2AcZLAQkEMrxfFK1l6ilD5qsTk2sGIruO9kinOxaD30VtpneMFd5w7qvJW+CkE7tivYZ+RWaLShQwVVlR4e8oQdfLYOYQmgT2okbcLwX4Ds31wmpuFSAePsJvRZx08orIgL32i2vqDK/Udgx1qt2S39ClsAEr+Ut3tFZhX2rM0ykcoHMECb8Kc35t8LCi8p6Djce5+ktEqYfdnuA105tBa3XIgBIszKtvj/jI+s0If1QepLQsSMrvN7CY6Pb7lnNhyGil5qHbvCUbzY4hLNYRxf+mZ/L4XjpGZ/PTytrTIb/7+NY/z0fp1hWOXTFMeXi4gFPPMk5y+eygayimZ2NdTvxI5ax+16z3sfWUdCNC0m05T09XNoigkCCnwqGJxNKD+0f8K8v5hwoKUIDXR/qC6j7Eamn6b5lK+37M+B+T4HdOGBRn4DzBIWAvj7Jlkc4FMvd41EyKO1T48GrTyvcXEUmcxVZLObx8RmTRJVK+KDziz7dJpj5aNiz/aw1tPGJOoXx/e5u2aYiGocjByzUlsIqXOVUBFrsxKLHwUtOvRF2hopZ94WXBDBe557xunL1VaFQCjErPDdpWwBx3iiHv8yRC8mV30gHTY8/SJqdZdQ8BEK4zxVjoZ1VMWqaPs3I9hZGUrpnLHB7aZPuCHgoY7QC5M+CIgFtzheEy3dkfk+LNBGvu2vX5/meKOXvwFnSqpNhwR2usmn/eGVsil7lLTTuDUznGZMvdkkM1QDQvvWcp6okMRMYGUgx3GR0rPmZb+ff4pLHp0AZ4tUVo/HdsopFGkUJ2JwOLRZw8Na9lRTwDhA/uJZTo6cZAw2ye9xaeGHhhYuh4kOywpRQHqdHeA5apSW3dvGhjUfpXGTsnolNGQZRbzzREF2ujdwo3idjHNeV6mmX5VNZeNj2EvxWoprVUifs/cx42TWLOpLAGpkHk2wui2imVc8dwe7UII/9HpashZbYwh5UBXoGBcHlELWlwG6AJl6z53PnOoAgdX6wzO5v3inuMSXaIEDkjSvEJWnF1LbRzhenhMc9oRA7tYltqeioVToNrsn13SSSmx7wu+y4SbZOD7C7sy5u1Ujzo/zeXYaBNNn2REiZzWAKiC19oN/er0ud6dQUf2XR3DbgCfIhOLaCnDldGL+9GJlp3xF2Jv96Q6/iUiQoo13rXev52pqM5DDACAI1+yGPEiM1Om/EN2FMruqEFVopmVL';
  const _INTEGRITY_HASH = '4f754fe52202f7af59bcea3411a8cbc4f07cc3857237907e8f884e47790bbe1f';
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
