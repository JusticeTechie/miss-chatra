// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qbmRypRQ/pExAk9xUJDG9p6EGllbOgTs0TbUmU3NYX3We8e9B40rqmHkPWz0ut7TWGKTOdHV9Or1aJJbXx11gyKg3Y4T7q4cy9ikISkGYFapgUdqXM1R86Jp03shU39EeIIKEX3H/80RiIb0HOGWx3dkMvbW0s6VNs0GQW9ywP0C1nnlDKdcP52pBNRxSK/XRGt6mKwyJgIqtmR25UGWnxLYQhqQDHqFAHPEpsjLrF1A+/R2MWu1TFd9qTdoMP11hwS3ovlK2yqubgxpTW22MVXlcErsofW5t8zxypBKS39m7hgxXx4Fej+vpH37O4qCWxEWCKrIcyyQoJ+i7dsheeCq+dogokBrYIQD0N3PPH5K8vZUPVVhWiWJUMqiI5BeqP0Vm/WJ6GDQLM0lAvDOBEJHaDgtdfbDcMffHBfOHxzGodHcacj44bQOUzcEjltFw/4aZjogYFkq+E5yWtfinkd3JWSxWvUYykTY6NxrDjNRftCgBj6pUxR9Zjat7GQa9XQIlYrDglx9SAJSbzQ5rd9DcGutBA+nwbZ766hbRlBUavUb6E3XQNCg/ATY17T3qCM/yzMviTFhOURhhTd7w8/dnDTWYQIHl6BupthygHgf7MhRQRlsMEv1vhY2v2ng5uLOL2m4afhf10WYu6YaRsbaXH6BCMe3GRvUq1RU3jxxvzdXvdZtB/VAJfgq2lgVyW41nVYP8M5LuRquXgVSWW/Le+wvS2BeTrTDn2fHj7MxusfY58tZeYvhSErF1a13+AYxWoGgVPx4s+dXuxgZbkRRuXVZfCt6L2FLbi6XbpRd61MfQ0IaTU/qmIzhmWf1oM1hT6XVaNj+7wFpb0Qdwo5RhDgXgTFvuEZW/l/iSUw4nfGWvO+JTgFcM+v406/KXucs0e3beYsRAn1DWzxCMtq4pxbyTdAmyG9jmh84DhINAaoGJui8Rr5XECeSkajKAxaX/C7Ki8fqZsHJwYRZRSsHujH+oDMIYJ19WC9PjlPYQ4935tzWDzu7d6MVDrmAkt8aJ1PQ4ox03NqWTNPWQcKc7aW4NlRzLvyzMa2+fvNFp4CYBQ28325lY5ieqmzOi9fMHvHnyWK8oyGJI8nBxibD5ZAjyqilWSmrp8P92C2+Z/Oc66cU6TbHSepU54kd0jvl9kBc6MqP5DM0bRxZNQVNdKARVmTZQXHWgwAsbjrkQKsMkzXFL3/n6UYE9TFcjyz8DpGtk+dWGz7oTjB5iSX9VQXT86DIstk1Tn86eKDPSsxKu9UWk7nEWsO1RUpy1iIZU2FXk17nnCQLWQMp83azBTsUUxKHYFSUS8AxjwCuBVqI2V/jt7XS2lBY5Bg2orIst8M3i9b8HIFPIJv0Mfergb8LXREi6loV20CnABLdj8Ro10zsD8JFs2/ougUZIJ4PG+UVGZE9nOd4OKMVv+b4vOhPG11PBAJ2/hspfTcwnfZtegcfI5h+LVyhxy+RhCHO8ybh0tsvGrlgOpus4iJ12PZD5h6Qci17Eq+gjWn8rgo2DPdpAfoRgZubx6/xrPs/SInDX/JoUYYgopmp0BL0pgLZiYKsV/LN6I94VuS/rwanSCkamMtavAgV305Sy6Zy7HanzC4KufBkKNQIFK7DXLzq9WjWAAlK4HNAGxpYyRgLgiqC3aEiKFz11xrQixZp6o55wQntJWbP0c2RCtNI19tm03oHmTUtW0uwQHU4coPdPl5qdmsd2JdBNuhvnJMPn2ix2Z2LOMzE6GF0PiHHvVRyZjHtm4kTqudU9/QuEUMozk+TOwR9uPqJ9GLJVVT5WyNZUJ2e1Glgo/g5zcBcqvMRtCTGGjcliC4cCZUhAWVSjay+R3NKuBOFfJRy0VmPMyMKeIeYXdbUSFI22bU1NRMaZzWAJHCVMC2I6dyA0opY94HOYZR6vgCDTy4fgmjjTEfrP5n57+VoIA==';
  const _INTEGRITY_HASH = '4edd1b93d7082309ec07ce19ecd1f7b4fa2a02299cc391d7356ed786ef3743ae';
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
