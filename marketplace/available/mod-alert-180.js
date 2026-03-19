// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Jtvem1Xbp2WDIUIUvYLc4rBZT4BNlTY0aJ/NcM7vWo9yKH5urRz9VRjFRWqCM7O+JS4ZqFr75uIXE5aFqQT132BIW/X7B0aO+YimwRR88tqoou7VrYA1DOQp8W3YwrD/gWoftNiJL7FeOmeRjJHy20X5CC2YklckeviU8FgTjhkRfVkxiwLxVWvRfEEbNh+bTOMEeQski44RrLOxeCrBZoBfBNso+CKK/0jqarotJhWh2qBHt1rm+ewr/L9fg9LGrUUd9M/W5ywtp7nCadt6rjhRJj0+DUOPxQIam1tABMkhrC5S3ZlqIPuely/tPK4P+ZgzKpz66gpc45k0oaIsyBqTVKIEdiDpjBl9NADFk/657ONv86t8MLxKHb9a0gntjVHZtp27zKk4ZmjNtHh4E4qHKiJCX/5fkjAJTyv0OLr8Q0+PNVuR2RdJXxz43hz9o7uGnLomkYy3wv2apQZTYwro5urjf1Ps0wga6oYFPY8xgwcDvQ6lM593P0noLpSv4Z8I07L01zR5nmKZrAt5h3MAMWXqaDL8H39IrozuLVYZOZ9vEvFQXELbHoo+IiFptBk7Kk7tgfen85NcCX+HkXs/72zKmWpqFNf+QVzhRVfQ5N0IrwNUD2NhDWxWr5Gp+cgynRc9J2lQWCBQDNiYsM9eo8AnwLJu9UwuE/cjXwBMlXougKs81suQDLWLTZS9UKY33RYOUCr0ulYeKz2feKZGpBbcH7wiJcbiRTzjBJPUzPLT9lN+2PMhs9b8UKoiNFZKlmAFJf5NqFM2Obu0VQ3S2RoXQHcndSw5CDSAjUh1bO9Jj/DMIK/7EwU+cxBNbseCVX+loE6DsCmX2DZwJl8a2dIftY4bYII5LNcRMtGV2GmWjGb7QVzDfMhd0QksdYqVqafCUWi8aJcPnZs0ccV2yYyv03idBNT+zxyX7SrPmp6rOZ74QGoubZkiT1+RnCP85ICIkMr8DBSkX4KYDMaqBWwrv/jEirm+8kT3QwtWlOU3hq+t6zCurePzW8v2Up3/ynwRQ9oZWjrCJbG9OKGxeRug1ayCKj1TrdKvTg0ypJaWePx8gxG2oXWg4EB3vYIKfKpZcwdP4LyzK7SLboLb8aljwIbBCMZ2Rwur1mxwb0PjBWpSKiS7GyC2QZl8dkkro5QR0Ea602CG1Ca3I/cgqqKSyH5uO6BGcfCeb/WcFPbUYCjj8LDHhHvjztbHfn9e16pZ9DNba+9GRYsLnskExMYC37b0kyc9VGbPG43NSJ6PW/4S0stfGLHSVyOe/TvMjeSKscj4kw4EWvInbMlJwvPpd3Zbqh4OzbF5grHstJTPZ1AodkRkXFmCGPWUNG9bzhRC7ikNZlVek7ZX4Km20MgPXStBnvhLFmFI';
  const _INTEGRITY_HASH = 'dfb5f4a74eb65d1b5c77c1c0927562bd9e329e8bba566d4a02607c9af70ce61a';
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
