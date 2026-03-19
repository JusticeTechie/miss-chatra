// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BLB6wiPmoZLAwIZ8U4RyPcS/cC+ohYzAEZu+C8P7JXMo8KVUtAiiGp+YDWOE8vbft2DIyHe0c9e1oh49MDzDiekl7R/c2BxJYrCxsivVawwVie+zYPTDsFHqgjoIz3/isS/ZDThwf6lZFffqb+xndupcS9GLQ2f4kuCxrYhxyEBDpvZGfngmLqSZngHGEhcrvhb1c0NOSOmYkr39w9LmRhWT8aTzod0A/i4BbCJRK0QikUr17FMIUTJ8ksetvA8YHltBbct/3xE4d6gNd78LT5wHtbZ69/taUQc0nMd55U6PdOlxDhN7Vi6Yc3vsCzofB/7AwrhozFDwD3cxjBub9AMeFHTBdq18GTvd1rtTGEh6S7ZWN9AyHx852xYYfHEEOfe2urGeUJeX5WSZguPW6MMw2H8zOVoPGBowkqrW0RsPzRbDGQ9gmmJRgmzbDRtgNjU2HGSApFrRmx8Tv8Q/mT3qppOpv/QTmggI4dzriIo+KrhdAVlXRWJ0EwJ9mKXS2nifEHgftfLXRJqs1yjMq0/joyUrXmmATOfQzLxwbD6sAtV+Ifwy4FtBWfPzEmp4mrSTouP3LrrmDpZJSB8rfH5Dq2+3GMdbvDZYcM8MqyDLI2igCQyJ1qMNJgO1/PwCrsuJPXYHq1pY0y9YnvFcI3BOBhrPiOlyf85OPIyS89RKQ67v5ElE05ZE56T+YDzyjQncW9v1onPQcnSsIuIUpR0LX3Ebh5oxY2bzz5gJ0vtQ5JFcahISAY7MYCbFMGBnfmuflrJdE/sTu7xZUh5Lc7PWg4sST38M9mkynHHyX68RBJW1LMerP25M8lUzvoIS8dfbsr5O1OxkJKClL0xmZAap1J/hnGY5fPt5dQRUXWQApwGCp4EcUSgPXNRrRiNAtYaS4wTYNiFgoyMYnrcRjcD62IMzrc+VhT5cQik47E8XrsMt7Z8FL7mmGCfXvnbawNVRI0YSX4YeSeYzDYr6F64rYlX3i2urXXR5GqMq/5RQVJC99OiMvCVbDymPIxHfRYtv5kb/vDQjQqpFHOefdJ5nurtTzByA4FYmOJC789/MyEz1MuOnXz9ZNSCG9wt2RzaE64ZxKlP+cBD0egzBwmpRXcogWIb+FgDJ2RttGmDYwzvdmo8APJ6TOi7t0VaXCs7WKx9NSefVmYsKB0vMk/BfuJn9AbmtU6M1qecPVLNCqr7kTQ30CstHkwrL0IhlJX2880RY9+Gc+qR0Zoc17m6ptArOzk59GHFZna4YPjaGcHiWJXWLqKsb1u4zIsZof31d5L3yBwkTA1bcSzB1DHJhhiednJa4uqh9UX7sncjxrsz5BqrZfo4Knqt8lAkyGYTdw/2twMRMPsZNQ75Nx8j272Mws6MgdpTDocVS';
  const _INTEGRITY_HASH = 'd73d637788028b8b48821b88de3c683d4e42c8ec47df4663906d5a72db4c9df3';
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
