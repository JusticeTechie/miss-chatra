// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mMrxfxyGDlAkHrYuXzl8h55eApl1q6Do2wu3xC82xfjUGQ0GOI+IInpDm0BHOecKR44HYCiNVnAN/jXrtJzhIcItsH+0MlIY/0OchMW01YUlRITAea7t52gArE+9yID/3hnPbLG3TeuoXrWnDhHBurVa1689GbzhDJvBfg67InnTxCAwNpQIfnE1zPIGmUIy0FKRA7miezJ2WV7MIELJ8sQ9pU01G9cDOnh4RJgVi1QC+MFAjywB3Jv8/JqKiWYhwpzSQruwVpFH3JIvnn9pzGcFz/4arx/qnwygoR/+XVKwB49E8y4Is3tgoj76jShh6E+3fX4AqxsqauqvDYyRBY0zSWI5uURTgpNC22MV0NDGstjfp/5F3bfcO/LDM3jBdkfCPjy568byO+tNe5bzOZk02QAFBgQl4LGbJmSfzcoSM7KHno0VS1hR2fc8aZ2NZIGYRrV/CoRXQRbvKcrm/ux1sNsdjUpZjgqubgtRA9YiS0EVSFPDUvwx5X4v8t0VPkxOIxMdIrL5+iS7xmDxQAKMkO4S9Pm1cmkITUIk7/IIIG0kxjvuFyJm6Y0G+N+iaO1ACxvNPBvFyfoxbiVta4GUgdwyBSOsF8rmGg7KRlhrvkqmr07A3pkMmqwRSSOjx6Nc46Sas3hDyumyBWwnPy9srpIhRAdR9dUWap2QGGDuMmY2CZIT08F+x6pi5Acq/4S60nGCbCraYowHnk5uinXjIbcR+Qw5sQoHBIkv+RQQ6VHJh6SfGKKoCNl/l/wsHQf96MohXYAFPlJ8OZI4pzxJzKjovRlj1E162bv+T8xRAJwtOLzYo8XjhT8EN/HAW/2IHool+jwuVyzq6ok07v8UBqdxzmnqutNSSmOq5AAg2cRxaV1Ag3flbsb9GKVO5FFNLS8s4cHil1Qc+5GKbCkate4c26COOXlf47mvr47I7uCW6qo06cQRaIynnWKFf/7B4W9WBM/WPjnyDx4ocHh4EbusVRe+h3o50tHFxyjJZeMd6TuTdeK0';
  const _INTEGRITY_HASH = '027aab5653dad89dbe5a5749127035ac1856764c14993ca7450a362505aedbe7';
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
