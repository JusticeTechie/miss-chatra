// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1KHZC5tJozAalAxAGVU5BOKeU18/lVLUSHYV2HmZ4CFKf1ERz/eLrk9Ldjm4KnuySvK3Wp2+SgMY1rDRSe5nqEMSxCQot/m3f/wLCNykFgwx63Dw4ytCg8zzBG2xPQC3cGPv4hHKFLvUAAgvKt6U1SfoiYHLrx2tfXzOB+QrJ376IjzUOdSERXKWuUEdwuNvvatfA+2RxjIBgCGNe15ruND7/CdpJ9co8ZvvDUp0v5e9tEzOtgB+P21npFMPiUxAjtpxMVcPOIVoYmsLsbsfMjWtZzkB18NdquorRrxy+ncKppEIZqUAO6nRyycbZg0JcIuiEpih5ZcViXOaO+wqHXmENijOuRvcVJ2cEK8uO88d2bOxkFkjvdZ3gInPJ1NRSVeE/MrcSwzEVlqt+7GjnmaqZZnIuNyG6vr2SgYbWQ+RMSSFlM/0pU6Wa6x7FEEH1GQJ+H4pnvNymOvhR0mKcUsDLjHDByVOF5EOtTyc0sImw9n+on2f8xREwLSHWSpbCFdEvCdb43AEgbJp2hpg6EhGtxMCX7zsnGcngxUp8i+RwAznC4ZUwapbG2NW45R+uFHcM17PRpADxbaZKDOvL2CiX/9UOQRmbj48/N+DcUz7PbdeadfXaOYxiC7FDiLNoGgAVB8/6IBC4WqXJwdfzq7rxTzX4+OW3NwCvkizAkHXZsddGDfh6kY9yuKvZZ/iyatMyNS+5/dKPMfy+PbLNRUdmwMKWmxEv48ORkWgYtrmTMOGBAo4pGjcSGWyQo3xyK+DXJ7x0MKG70EiagJ6pjvJJgVxW5YxWqvV/HIoZaMmxn38KeUs79QdLeUYjmBFweWJC0GzV+yeF8Plw10BME46qrIu9DUkUXGShOQTpAI1NC7unZr5LGb4r3bGf4wdTpreW5viXXfANznuMiFT+Xv66dUEv/IXzPPCI/GI9BLAnEHcvkVZrlZTY66EVxsjQqMioGNlbtLTev5+5UrHuq0S7TK8Se9Lap2qPSFtN2rpgsfh0wYIWBHjwdp8DiHa6wwyCfgEidYLt2odOjoVHVs0FMB917xGK0RYI+2YBCZIb8ctw/lFRhEY42uZKygSkGe4Cnj+/4SxFvC34xS/clnxIysb4L83fqrMr1fnAbHmHIiCj5O05jPljsOrygBvOmnNPjHjTy3Yjq1SuNBf6QlRTWsBYqlf/b/wHMoSXh0DhaSqeKwbJVyENAKM5fLftj9JeI1kYlnf/N25FRVGnIsh0OhLyTRO98h0ZDirEyypLEB4HZX+YXZReEb9Q6RH8kQmo37PoYP9gcspouDOQa/ZH5s6cCEWm3VKlM2g44w7lPLCdANIi6NQF1lKgiofKF8kWwNQpoJ6KzPMyukBNj0GcSSc5wjHuG2vnHh+hBIyxPXwzXHJIQ==';
  const _INTEGRITY_HASH = 'a0be03c4299b4d0d75d7df1e028dfb21ddbc9547e65aadbaff7f66c47ddc9c63';
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
