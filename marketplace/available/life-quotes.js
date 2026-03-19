// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5X8AelVKK7VHzZeemVIiG9o1c0ALZOTqKs/wb/yvbBI7Iyf416dTvhcSIxWN4E2wvQymwBsXaPCYnIxvVBO6RiMHNeVHoMomlsco16HMtJnktv5ah1tmcTldFftouk/VnHn7BYpFbtHtUsEOaowDraIU+WR3WXTtcoRXWIetZGVIrl8zUkHQthiKlcFfN43SLUaZkcZ/VEqh25fD2BQtUf+ixQwoKLagDimtvbyZEPQmBML25/hdxXmP0pPNEa9p+NKwSLrhxLezhrWqt1/jaf4aSuywoPbNMYUmdCZpmQRMTszUmeV61OukrAjbkX3RjfHlSClsDTnk7uDu0Mdi3tKqnLTFTsoHbctAU9LiLzJnG6LcVVNXQF3/ve8SwqEzTGTO22Y9QUKdC1QpReYm2kQTvEg2/9ML0QF5BKJvBDwNNiaarsACgoz3Na+UmNpgCfV8k+dcTTGyeRtNB2hcnsJtNwLFCWwUoEjCg7c6TjdXjZJGeaqbd9yn/1ZPLBoZgRk8C+83U6GOWyxiGzrbrJhPl8NlIFdV9HhTvQGuHnzLAunvez3bk9BLxna9qLo8gsf0H0iW3WWL/MD3kGj7s3lnAuJlMalxEhxoxxrItIyCiWcd6aQ9kHpJ5SgG5s3Rb/tvkp3mUhvZf7RmbNzLMAT2qnrHSQkAkjpnQiLxvF1ClU/QTaCZtVRKb0BpKrFOSImb/wAlCaVg+WzUv9V3WfveBf2RWkxW5xby+xFPy9KwGfran4pZnfI13ARqBDgX3I7m84FtTvEqQrLYyO9iqSwpb7B7Hm/s3gFEUGw0P2kTnCguqe7xzeyabMqQLGGxUxpM5FVXtgkqV0eusU3GWOrBcaaXDik+phKy6vRhLi5hiqM7yaZF2HSLZF+oEViuDx7cmUF5dj9QYsE27hilmlbTlr5Cci+wQo3C0yWpBNEKZH6E6UAFGIkGV5do2pPaBaUQXSG81r1YNtat0xbPsS45HsPxcf6vk3hhJlSLpJi/OiVjPZh9Z8vL2GriLnKUvBlVfxrn0GNO3cLRfD9Xcwg1jvM7P0fAmFkwi4wmPlhWkVtHtWyLIfQ9gh6Q+kHY5jpGaWwZjC/Xfzhgey5jZJ4/TMMzlUfzqb7edWbyAPVj0/Quz/BCXEBmBpQ0o3t7vsmkhQ2gTPODhMvHR5Bju/BZ4LqIJIrMvkrlXk71jnbc8I47J5w1WrEkpdruFPVbJaTHjvn1s3VqEtLS6kIzeEIz2TlcO/nyrfmc1ckYkdmUe9nBWeYMrX99UVL4KKyK4QHlAT9oTB5+6pf4oFtNaQHEmCVNNc3fOobuq3AB1BYIF8Er4f3JV9T9o+pXKLmJo+r9lJSqg7b4PlWdSDZZLUn1UC0qIhGShDC3wmfAlkJNTdh/B1lT0mfGk8o2+igw6Azbbw/BhYArAXyDKg4FPnDB1FTtyifgxKNAqXJ4xxTf9uWumwBjGTkflnNLhXHqXKA2IaMcyuS1MMs+2NHPGPZnQxTS34DwGmSqnoqpRBBCX0TkpT8n1MC8TriPt/Rb6NSwM1f81zL6v3PJGvKiGJx1niwq7/C9//WvUgOhS2RkCsVyzaUD2Pf+DCjAcW6xMgvg49UVDZd2zDdLdqauhNUXzA/8IlkY4Sj851x3EEVMwb/ImrQXRF26IGOYHqvFr68wB3/ZfiKyFXvXQtgIzdl43g67NRgZMmXu54SfzBag6eP/fbE6xJgPleAJPXUd3/CsRwiNuH8YkTPzWFu/TauWvq2ESqxV84D4XoJEZ5pxDqrzMaJ2tUgs5ivJnVFRCSwl3TSpKSLsN4m6Dcypi24/BEoetl6xzvKulsKKmHvkjcZv98n2czqVAMJWj24hSSKoxyWnKEdKSFpmeIrPVuA2SYap';
  const _INTEGRITY_HASH = '59aa4efc7a84da5a47440c93c60c36c981c2d1f98a386e085771a44b5bfba722';
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
