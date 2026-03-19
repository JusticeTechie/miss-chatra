// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Pw14tmAZiGM801WNRi5L0limVc8dDxSDSyUTHBkqkcj4c99UNg+UNeifmjaue27pNrPG6iMFh93f7dEHECojEQuwmbXTZJaQiXBa+WwuHy7yqisTEiUFqCgmGZBE5JEhb02XzZJBo4BAtYhRmq0ZwCecPu95APuOGkPVwCnl1NfjLyX7JSys81f4WilMNAtInYu/hxo7zklOf7VTrrGngWaTXIMZvTMNeKmMYTPb1PBvrvAffTpxx1t/wRwKbo+0VoDS45XqXfJUG1vBe3o/9hhV9I5ssRJ4hCA3qBEvYJ3DNpre4LLaI2GPE/nxR4u1QzmDIQ6xMlQ/h6ZynkPIpLIMLJZ+GehgolqUB3NoummYcJCXSzhhaIkj5crdk9Jwhp7UlXLZOI+fBwi0yRMbiOeic9abx7K5neD5diEPMeW6mqm4oYpX4143hha/Dn73AzD49eYMysOHAEsX56FNQtsW7+GYbi0UDEDPE2GRHq9bUfACF5EWbS1dSCypk63i0/MdTUyDgMQB8SoLW/IIrUJZFfLbOiemORbFd1iGiRG4CepoPl8zkByLcT5rMw3pjuFlPKpZE4IzIsG9S2VOTBksuVTc5wRwtdqEUd9Mw50I+G48/P+hKE6Ve8V5PSvX9bygmef9Mbm2Ekft/fXknRP9tUJMte5widVnx0CRCnkcGfIjR8ncNCqXS9FsWp7XQ48U3gIiPNwf5Rb+WSjUe+2jyyunBBpPCGpz4mcVsoFtLRJv8RSdlttNZTcNLTFhJ5Opn1WLGKLg/cjmtZGXb6Zd8WkcjrSFCihRR+Ag88I4NbcjPPoylyW1ab6kKR8z7hYg76S/AA0X8dj2hH5qeEQatPJofi+RiRohj6YBmrUhaOuolpJJng1S6vgIARyLIpsF+9BoRDd1ljxn+OuBQvYT647IE+Y3a19XvJmtcXSj/SbPxVf7/zex5z962Uy7GiRcJA8wymUjmq/3IdKqRQm1jkLJNG9vSQ6hlbXF2Ss5wX5miXXJuG8hr2MorsE8/jP1DEm896rnIF1XMVf9ji6akVteHNoa4rAAvELo2gx9jS8WUB6H89aMCD3I6hfXh9okOut5ejDvGvE8pHlEXDOw962xCKJtKTfh2j3roFkH2xwsGrJaETYBIsgeVATY2+7ymaPg5rqSoTgQ3SLbLCU6Sl+WY6dQ7yrto1fMKOoEXBrVXCCPZ2kghj3IPqTNm8E=';
  const _INTEGRITY_HASH = '7259ccc4a63f315e4f5cbadef291a49498e128e406a97a201adcc46a8121b3ea';
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
