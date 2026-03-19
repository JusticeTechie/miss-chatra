// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kOlGF6ibDgWOlhjzfaCyjOlCYuuOkfGNxuNQqtBZNx+iBY6Xgdys4baqLR+dQgnDD4awMlGRc+i59EV32bJ/Y1joJAxkg9Br0TygPZbPqeUa6909sJMWbNGDpQym5Sevp8U99ddn1oKNKmhuT5ivU9hgXJv/05Bw5I43+6vH4vMSEkOLPMbdUn1o6rf8aSR2qwAMUjCblIPzg9WiAW7LEEDY45UT7/rYwM++YVrbIjdAkHmZjvfzrhpg72+LyYwCUBw1P4ZxCB6ar6vp4G16JUOEHrBaTFerJ8C37+0oGFYnSwf/zRt7mXQ/w9rp1DJv0ZZ5FlmgZUjsWUe1wDbrdU2sKTQsCuJd67jF4Tsx1+UDNWs0+wPUdGIMY9ozPmjlikOtdbtecFj/7Z5QVaTQz0h0J2OEnrOHl/HZk4azDVPcjhCQVvB6iJEbZKdFpbtbFerBOTdykDo6ctSdhs4ufBlJshhsr1If/oeDzlTFR/jSOHmt16vAhnJm61hdXpICvTZhX5tMSeZOpmf2+d5DV8yckTukPJCDzHRIgSsiWwhPlVPEoZIYySTkXEu20qJBlDIdBBn9IoIsPOrQpES4Ni7UcnRHj/7S4pfdpfRz7a6B5CQ5TLCWaOLtxh3DAw3z31SYhJUiZEQlmu5IZVQUTLLhDpzsZx4WjMQKmsVqvxGJ4mUiuH4hPZ/Va7QTk1cMzgy15xoKz+pIOw4Gq2OYX8AwC6aD0yXBKL/G5G8hozmJY9aXPj4wp7DtOAYf9xVCvd26b+2AuIIeZUDwOVPJonF9taB95MhGZ8gRf66tOyw6ZWTLkHhyqMqvWTR9xuqINIA0ploMbALOa/n6zSje+W0UtgSAXNAE++WoJQaj2dXcUwuz9kg79Yxy5FrxwdHc053PXUA3FOKu/2dGvo0SI/IbO4q8tY/B9c38W2aLAgw18z1/Lx6cEQgdKxr3o032GYdP+HTUBRi5ORYN8MeEQOa+6QYloNTad4hHjIhWtUo7mP6XqupBuU7KTfytMWsBI63Lsv4Jo8oITaRcWjwsyD2/+2cn1hYZApSYaLWOk3Nj88B6kWh2+P2sNuuSpUHLCoGvGRhXGTj4xZFEaWlno+m0um40kDVQDdiBXZa9f7WTfd2SVV+9qL1MBrZLqtX4Hdfq2bTnw6DwQTWUkwtJftPGf4fxwVZkHz/XNcUkK+MHdShHYdoBwKfqvXi7LNiDeJPbK06mUhuALmGzDEzcxfNdfTN9YUJ6DCIslb/339+Y+HO0WS/WU0UJpenUz+mK69mybMzlIUIkSp3iN2f1ONr/UI3tkN/++nwl2SotvcW+ej2CfPROXhD3p0GP7Dvs34XMOPsKrO+TRQ==';
  const _INTEGRITY_HASH = 'fb9e3d5b9d5bd1b834751064bb4975215745bf772b7e3c5c6ef50ad66659f5a1';
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
