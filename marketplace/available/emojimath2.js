// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RRa8NhvucZIEBsQSz/YNqJtoTavIEu7nV4XKQ/rx4gjlU1JO02Dtrb+QZswU2PPLvUN5FZG0Oy5eeIDa1Yva+ejh+ljcC/27d77sx2GZE8OjAktRNWUfT4KZUaeg33gtWLFPYK30RqwOuJ7ESeJHTINH272s8OCbe8mL0SDa9uYxWTdihCCKyKt3ix48iC4IUPmdDwFSRJ67dYtSxoL/qFM5FTe0iQlwy/PnjjJ1MWNA5V4sXAPGvxJI2GC+LAN3JceQGCNPSljoKN+VZ9iL/MBHuVEEIRWisdXCqxBSqq8xzH0zZmX1f1wKyQ+cJ44Ob4n9Wl0iadfa6VTrWmoBR/Tu8i+wFgXJ2buo5yjm3n9uvsaM0IIEVlUp+NtabpKlSyKCwevGJwReBT0+Uh4SFCGfTU+wAeuH7tbA7FxO0vmEEjjODxlvqmxbu9QFnhW360uitRnIXYL8J6Bp31aoQ3srjdla1pgqTmfqwjLuBdCOKRTF+Z93eNDd20Xg9SBE7rQ5/ck4hJIixsxzdrnQsa+ZDieOaXQ3xXd2Qri7V8P1p3i9XSMMgnNWr9HCjl/KcmI3vvgg8clpEbAwzH7LDzo02Wee8Lb2LmrcZsuaQKbPGZvggtnimqd/2EfYViVC1/e/icn7dUqq53RWJl5yjRs9dolhtEPQh8AO/QMPmVjwytMGIkUi51Qli0eim5csii0gxCSe3gwIpcp4IZce4uwGiGDnFt8i8EcCRQgdePVV8znyy8pi9J1AoUMYpzqfBltZOPCioUecZZb0ucpOZgnGlVe+rgledu7TA+wlvyMW8A5MCOsXRm71xBhoNT1HgW7Zu7V+3JWr8AEPgrEN2U0G1V3e8ku4CSYdqQMRCCDD/uDmUfUvY6wLZz8mRfxXnnwvdmZmw3ImYHsvAb681nUFr17kXsgJksSU0XoAsKlZcjOwFaztZTNcjoaeiOvnuHdlH/fSHqgzLAK5eUeqa0vsnVPy+jpIo/VEk8OmTo0K42uKlnLvrAyQ/cmwAkfEiI8qw4cCjLgskqsR/mkMW9aOSfcoT/ngGd0PjF+9STPGRThaiS4mNYphdqv/5zKcm1rN5DvBL9k/lcE8Z2yGwvOj2sF5GxzhH6n4NLjafWmlHNcEfD+WNJq1hiapGij1INT+I0KYqrXVqowIJr4KYq9klLWVMgMgn4QXwor17m7QzwmuDU6+BoZDHBDaqLHnyR9xBefaWw==';
  const _INTEGRITY_HASH = '1e0ff22030852fba94e5923abc026dc28b7dce3715724e5e2045e07de24c346f';
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
