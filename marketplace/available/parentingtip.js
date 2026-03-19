// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IzANMLc+zuEdhWQcMy1frczD+Jc8l10pgV2p6OcX2/hRWHdgEQSKNyqwDjJqqkPSvEBrE398rWuppFxFRusIWhJEuixLhVLI8OZ1/x42khPjFTEKu7gMds/wm+he51EIL2JqkceRnCFpalPbRkMAoYMW0DcMHlOJEIG+QvK7Y2Jj2tCr47dDj6vQ2lioHbCKhvtixPdtzvC7q+K5IG0sYhoRiJx03YSkJgH7oP3nrrIbYZCatxzt0wNL0mA266D/ai7luArzLwxaebuzwAmm4yGeK23bp73kTocCwGrcfMZJZETN5UmZolE7n9scxbYm/VTqCplUfzAGJB9ma62Mq1CWBucABY8hrU132s9OJbfjAhJSWMTC73qeTEgV8oxRCoUTlEWRtEVWEdgPogQtm7Cy621OIhfbeKR0PxH5r4iI3WY5L90fkmf/dz8fFdKFjzyXKPGrQI13+5bD9GpllqQkyi2rgxBj4HxWRlUR5WwrRD5yFfIhmh2GeaC9DyEv2DnCYcItpUvnSo828tSQ88sJ+C6fU8d7MlQrDVLHj0bDBY88JA+mKVnuosE9ofYIuEUXcRAYjh06B7wjiNBBZbXHbIQQjQeOmZNOGcLdjOZeBXqZF0AxHP1fKRDubMGYp4DMtajPm+QFGsNusWP0eW6FDuvxyur8xwDhG3WOTnPz8SUn2MgrXPZyMcHJTU+HV+NpvRE9KYrAF2r96xpCf9z00Stmra5UZCcQOumSj1A2ORT9k67ID0rwMzOv3cFv88iDSlgIHf2eu5hpUTG0W/nGQ3U/pvazXPO13OohYtMX7qRGVeWUuBCnmhBnsFyG8u2CI+51oUyiJsBFjApEFU8nH+NZaC9cAS9oxuleXDFRWmdpWS3BexoiX3BvRrMMm0LmhI/fCgJYtoJu1tT5PbaIKpmFLIp14MkxbSbrypR+fPxbWXECaNLCxIPSrWlN3SSxM6KwaIc5GrQ0rKjX43d7kJjMqrI0SNH4/R1m8fSKLn8tmrLNMr2HhTGESfmQeNPXyKFQgkhORAsNEfqJabg9AQJrr6rpFNJ7beAtC6BlQU9QgBN4Btn61ZnFv6twsH7x+Kuy/kVOW5j0CQgVx1SPxF7bOa2icCpnY/mdDauOYm3mXC0jIj1FLK6HTTFju5UiWE/xXDGYUs90pUyMohnV9EhiwZCQ8K350Sip2P6xIkD2biECkaKq7rvwIIZTk8C7YWKICg==';
  const _INTEGRITY_HASH = 'de08c59079aee12127178e1cb754bb4e6f3165d43d8274367b503ff847269003';
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
