// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nNGRriC3vpMWa8lbC3aF55BnryMvX8oDYFi83S18oJwg1dcTGRFb/2CLGZJg06HoBTVwUXWAojjPgJx2IFx0onmWdfCHKjctU3tkFx0hlWZ53nRuaarDIDMmwDzYHcCIL498fg5R9RlQy1i9Yq+Fu1n+8JPBzfgFRVAazEnCkAX8JmMwnV7SDdkH2TglzAL4WMnVaXtiq/C2xaPMvSTlP72aC9u5km+PFYRXukshlKoNR8JEQRtnOlsWIp34/5o1slDXmzQ3rfy6s7bJwDKn+Mu0kbuSs9dGHWQjqMjTn1HnMdsCPXz2HhpqVzJG/hy4QK2KdHqlVZOBm2TW/oQ0cHnP20Kp1zctU1/0qb4JwutL27H0RaV7VlaDcYTPbEdahlqtjvl2VPRQUsptzLXBtvQQ3vPP77GWFVjk4rSFHfzye1YAsyx7CEXeFcnckHb5QwZj0vIs4TZPUV+pmdFtGBryzbAwpi1EBg+zy5RhwjIVisNMXG2Q+tmhjMLWw0HEtv+OCiu+9IwBLmnqJfRcgHFhg8wMjBt31WwcaFtGGOnMOZBO2kgar29dNckq9vUH7KOE/enhwXeAoYmtY4G6yG1QlaLFLakNjjX7Ts6LTIIZAzePuCf/1VKPUN/lVaRaT4Y22j9krqGRZTNSOFbBxTyXrxZRCRD/zVViyEhaOPWwrycpkCkp+Ki7qt9ZVbCXbow1Nb6K7LXWvJptaLBvAv602fHbS1Lz68W07KC0zk2LhsdQq6TobiHTWHRL0lMcSLhzItUZyW2qOpsT5hGTG2d9AnZZSjusc8hSS+Ya8rilDOaghOgADBJ8iRaX4p3NrST/fGMm9CNuZ42Du72Mp0uvtOOHF91xdxUdcC8gqfdBWJaZEVFHqV4KRnbQuuLVgFIKwXBaBzEMXROltdUW6Z0JEv78j6J6cmojX27RaDe/MIYe/GZHRfebdYP7SXv3rxr711/cLchjAmA7cSu7Bkrjpd1O52hBePLtqmmvVcEC+PZzOpAmsLn5xmLPrtpeOV6QUZMsWwrKN39jaK4ewvJoNWThaLcT3wAo1k2+oQBg9Q0gbyB+pMR8QxBQ2wSgD1n2Ew5BSZwSuVl72H04MZNEvsVQr718b89HviLuQmYZ3O9ydXc4j+HprSiD2DvJUAbJA73p+Oycqn+xxQu/fI9YgNPm2N8t/Mckofpn4PrRePSjffTfVYOVBIKc0k/YmGcviMnLcXYCeA==';
  const _INTEGRITY_HASH = 'b8c9158a2c6a57671b5d493a96bf461adfa02f4ad5aeae6654c9f510492014a4';
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
