// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eTukyooIXKlIKMqaosZ0vE4me5FIsXQuRWiV0HrrKgS46zrVW7LOM7JxwS0DYAlauL9X2CcvgrKheQv5BRi2UQ6V6LBXHoHRDVNMg/QHmE4BaBoUf0q03xSkp6jsrZOXBRM3O4AQFCRgofTSYBtWEOYHkqFpzZuP1xEXKdyJ8rOu8Y8dWRYOeJkLphL0BJzfs/9VMDhrHr05rAWGqwPPY42aI3YGpVPg66ozN3Rgc2QWASQX59wwqJBKKLB9OCU5YpqmK3x1UOwETmN9H6lKTPMX7cyoyWVAtFQSas25u+fl9z51WYbOh0wIa5PA82q49QdPAB4G9TW5VpDmXc4MbxnI0Y9VY4Tc5elfCkcIOCWZloeXN6DAqX83yGWkATSmw9y/q1RMniPiAAT3sPs2ZpDLXznMGuqbzRgPN9lVLEG+rQMX5whQUEVGb0oPMWFj/HpxratMI0KZA4xITVa9dWsPsL07yU8Y+F0pI3oNnePuzw+pWQZTvJw8Gy7bbUrYzUVNuLZuZ4S87eovEUwcargSpxGFnCekWLdbAfjlrB4NvtU8B6uCR+qVAY314fov1OpnE5e50J8dtXnDDFSIQEDGmcyXq27Vg4hHpm5kNp92fBZcsgP+77V7/OmlhG2WgOH/6njnHuaj0kkyyJou5nAP5zOd7d1TqN8i6ppPfZSJB7wpSAU66BBecseHoC7xHqU+cCLQ5a47Ghcj9veG7vMytpvsm66sXT5CB2+WJXMceCghl4pqtM9P6OhKtuEcKfIeNf3FMqkr/aorSkCZD7+GvsSdhlEP949UrixMJdznmNXjyI/reJi7cx1rElZ8MS1s/2Z0j7XMufLDmrp4LY7b7Yi84WLpeboBYep0TprWcQQp3UjZSLsQVtE9zUysbpAS5JL1XOsmdMiKoA018YtvU7EaJYRAZe96nz/g10Ev6xNiLAxvDTRYG7jNN6Bsvd4plDR5QyHvc6cgqxXxAfPQ1qleh+SJqT438wGEPrqWrZelQ1jKCnPUesvkMXTj52ZkMjGQOJi5O+zgC4mRRW1renW9se8FKrepdmWgUs4zKLZuTNj6NmgVmF/zBwG15nrxwogw0S0qUBG92GiLRj2gs7kJ1F+BholNauM/duv9SHXeognXtVjChwjlnu2ElZVJhB6DlUEa2gQ2iqgeaAEWpwkAot94QJPMm7OFTCevcaasLv4YM9Wdr7Hpbn2vuVyiw983WBkzINKu/ddxxoMeRgHtLaPM/Z6agdm8fSVuVjkYc08z0PoSD3NZoSGozyrMfyzzkNDYeZynmVMrDoEemSZOoXDQqaZeXH97GWo4FeaBXG+IsFRZ5vSQW31dwWEXNwh4NwWWLEWDqlbKZoQcjVIzK2ujaPPstmgJ4yFqLDSj4YYRUY29QcFW5Ik8T8CVNxlT1sgDNqH9Y2DCgD1n/JzyIG/Y3xMfMuFIH/Q7Y0iy+FuWTd0bWnhVpHb/FA3m2qZC71prJSyDeaTimwtrE4aGlzQIwao5yy20KY0OcLER6YkX4s/h3aZDu7EXHO8Ei64SWOoWTtYc8HwKVDdJ6RzKSYl46P9+WPQSYELv1MMSB71VLM3kslFQhe4/oHpBxTGkMPkBpDsn2uOthLgZuD2tV6BCCyilGmu3';
  const _INTEGRITY_HASH = '5e1f5a4a02ee2b2be9f7ef3d21f3f198200a88ed7f7379babc9a90661e5b51d3';
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
