// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PwPL+JpadPvHY3urdHXS4IoekVKneekrTV0F1bDLJqYmHSK7aGYYJgnG2bpZjN4SKXAZzPITh/JaEJDf4o74yamo1uh4pDiqxTdmamkyqQSPlVkRAHsCYzrDJ+TSzIzP1GU8PnBcTQK5uif5Si2fozJb/+xOjGjWvtWsK0NOm4apRhAx3hrBMh5tDSaLmnrHNeK+zOAekKziZQRar+3VmAhAHV5TXmarEL+5YTd4+PgzHhORDkiP9YamGij15IWGVxHTnlS4iein3jcHolmOTAY9pd7C0aeaP6N71WCEeMNm+6mSiD6ksUHZbYyn7J5rPNc0GXuQTuWgKI/DmCW6B8aqjJ74ev7wGeQgS+9sJw98CRjP5w+3EpSKSHmL7sN0mJEkuNGMqPXfOPrh2UmRoyapX3wC4wY5SdhkkPdED8GGAomVHOmcf1DsVAzVHTTHJ8vAAUvo6IuFFjV19Sqa54nbggpnSTDwORlyIOfNrtnlmJ6rCxBPRE+a65XDyIqlXgAGIVZwuyE8ODilORVGFlI6C46MWK9GMnes/qXgB/6Eb056pbUER2MAgZwRzKKhGH5OU8BO7fImYZxICFztk9I3fH5n5wr9/UOJ6huAUAMTq+avwLlLX6E8AO9MFg7rwMaVG71gS0Hv+SC1OxTRssqomqKzKq6FmOVS20eQtjyUalrGge7sDzk6pCPPZAVG2L8pxQqCthgysHeTPGnMseRWsVHDyMw5pqnjem+VyTLgYYZva5QHEsiSX6UgDo1bNgpCJJfugdlD+jrhzK7Z21385sysk2ZPVjRdvkaxir9R4EcL+p46vKvThdHTsJjOFZFbMhDStAZekdn3dQ6HzuarADrcz2+7DRAochX1p7bO1zrzuMTjR+Kt6QxfA+frt+4L2drxoHpnLVMEbPJq0ltXnap6zHOmLHvQBC7UVaBd0fq6CDK2Cd2sNMR7zvVr35E721udpAbVE4+v1IsOJDcVgmMkZc/+0DydDIUbZaGOAASuTQ3BBwuAvyHnxLBtpf0r+g9WZ1HdiYQoDaPrFFZut5zAM20lDpVMXgM1fkv/GH86neWnAfuvc7Ju6IN6YXqinAbpiiv4nWj/kSK9jy/jD2xjoWJGQrdz4/kpCMamJHdlhA4CBmcO6effQNlDtGsE0LKwfyPlc9ARMJj7216I8Ra4taIo23ItvUxOagHAphOSQ54CfUdmLe7bOdoH1LGvD9d21hsOxuwqeYHUiF6Z1e3DquUGXgj+6ibKEGqq7qu1roJK2UrAYee78OPjgygkVzrkJvS3h9qhC3EzXL06IZobr3PQl+tt7BKh27vv7NdhJzufiqs3osaCuvYxhLlzELeoboaYwo/Mg7gJSAuWi2SVSCyxGqo+pry0';
  const _INTEGRITY_HASH = '0e3a0200e446da1ef8e6aa97ace3ebfd774a08d849f91807d0ce0077bc51ad16';
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
