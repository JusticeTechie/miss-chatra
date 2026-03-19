// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yhosQy8qqV4Pl2bQBzdr+1mLcQXB0KGs079XvXG7WYbskq/jQ4Dzzf90H+rBOWLQej/6mlbPjW8T8v0RKFwHLus4XqP/T4YCuEokhBW9I0lZCRtmtbA+FRfl5bEqbRiRBJeukrBFPW3q55x4iQ/ubbUXFfGmbvSi9J4EoJAmiLO/Ee2gBMRL8irQ+euBBJVBw1tp7KH7T2DoUZOIr6m7ym6JqE82LBdgStZ1SAQLdrQKlX5cCgMbQcljr+gYVW7h3CBmHz1k0cXxvCnigycXYB06gRYOa0e/ZpzFZVEiiL9swq/wCSqmQdPGWfsxVXtl0Gd5R2qUP4i2SsoD/CADjCArRjindVhNiE5RBd9Pau007c2OHkT4lbNvuhQYRtBcKjdecmMXSJVwo5kwwl7GnIwXrSKs12MPY27DbjYNU+nekbkFN7dEYZltgV17u9ohriCHxdlyeqhgzFu6UFCP+HbRQo1G4jAYFblvCuZnSGw/REkT1XQKDhBPGWgWDj4EV5XK31qe9LTl9jsv8MZgEs61LQD6N9QEdKJvG6K3BfTJFz5TojWB+Dc5QiGc+0X6pSIft5V3tf/O2EfjbfOp7qEeG0X/nGUcKCQqKLjLxtzV3TGEAIzW8FfwxOmFLMM7UR4FOFcg2IN6xnfHe7RBr41GfWYoUkID9LqHKE7lDw0zDZcVxBDvTtQHq0eKrkAyQyaWB8oTeEhu15FE9hYWe+RidBNLdtSbYDLK8vesYbala07EiGKN5tvboLd5lwCs60DvxKcGmPRkMN76DdsGawPXvWZSrWqG5D763ucLsH+KO+EoPAVTW2z0X6yP1sBUxLVHvkQLL3x0gk4T3eSle1S8Izwi8Laa3MVVh+wsMzKz31QGJ2JrVphhwvueZ3Mmoed/7z+KqjHsPPSs70mtAwHx6ccy2e5a14cg3Fc=';
  const _INTEGRITY_HASH = '4d830db84c05463ea1df9e6a5298c7309f73897bd11b922bcacb8fb4fe7733aa';
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
