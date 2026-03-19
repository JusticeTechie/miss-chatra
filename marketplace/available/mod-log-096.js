// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'q5WH8lgxX9rAduIEkW9TIk9av4naD4YGUCR5kxVqJuhqGGuRD3EXgMm0SDKR0vW01N55W2zckCF1V2x+eS7GItzDoCcXI5zQTm92qy3c0JJXdvua0tD5x3+ekNq/lS/wwkURWoUzB9P6ukNCV1A4+yYXS303PBrIDifkdoYzmuhXMIGza++J1SuxLTMY/CaepFYVWiahHqsAh6tftDI1C2ZG9l4TDJzWamBNnNSv1cbXsCKGUt8YAio0G6gPti/1PoWBlYD4Hnv0ebO/aL/1UiqGbbpKHQPhHuadmR56W8gURw5OGOyla8JgzAirk7A95sIbyLz4W+2/viJgt/Ks4CjsaCHsxJRo60jJ9NfDY+Cs8MvRqJd3SinT//AMoeqcYTU8xflD59yioZLz1vE9n/Ec1WMEcDvTnHAFQpPeUtkZ4lfZCLSoKiXUkqwnx9eiUelc6lQDlbDewz1lvoGnIaM6c4dkwp29jzMqzzu5Ga/v/Fi3f7aNlDghdHRQN70l46q0Cpc2qGsA9UUWo1bWICOLe/RWn/wwQAyXOTMmsRWLyN/N660U3K9jm9YGYvN2dJKz7QYr32Up9iyKU/Acrh445WxqHxjoCzwfB0eWbrYykGRJqBimj9/OlnEa8MmL7+LPBfkfeCamJ3ANQXscQEOWJGl0eMfqRv6FX0bWRhZOl/PB+luNIF6DJkE9/CWZuLZdsRPZiiJm02BAXNwkp1ovS/H73glpMY6T+NB0+p9JtuxGgZwqZEFh0gVzVCXLWXKcCbH77tlAzqQaBoFT7rYjRVE+830y1fz/Mcb/jomETEvO8ZxsJvPJpTSWNJrOq7zCbTXTLXEFl1mxpJW0gPUrf5lexJbSUMY7FXcWMMo0hiYXzwJ0PYagfMRdhVCLafFiyUFTyUaFEBOA51RKomTyVViCdyvhhD+ZLEOWEZ7TR1NBwjxhrj6xuXhUzFbEMNRoOWdDMOQaEHFiCLexYYB7ktZ4r7Xrbg8MY20Axvxaq22uEZ135Vh14zkp01VP0PB9evxPbw90Za+AUumZ0kno3Wd8OWPywCRcGCXUfG1KOHyHI6JIOdaSCcLRx6MlwibWwBPQcdnvzheWoLedbuOsM2/HW2wZzLgzMskwz2iRRtGyH9AU7GZPewDy/s9jAQ00d+mbVflEiu2q75A5F4yxZ9xyyvpclWG2NKksK9r7aihYiyNMQ4Rxs3Is4YN3uFwmsGWFk+KXlpgaBEacPZYJtWIkHITSrUdobIjLUfshk0jMTRIGBF+z9g9at/cw+jpEJdDv0BxhBp1Mk36bShQVpj4LgruEPAYYZoWokt7BkbV8aF5VJpgPHMiuWCRUKm/Yv98=';
  const _INTEGRITY_HASH = 'aa82e91dff56d2bb47cb41fc63febc4031918eff0ca289eca002bf26ed8cbf18';
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
