// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'On9X+SuvJx6pty/ZbdJ9LgS5VY/IEYbijnj2pi6l2gd/d6IYDx5ZAVSRnDYlyzS2g2Nr5q89Tlx2ZRegk4T4e0UAVmZnZMPiC21fVrbHxoauHXdoS1XH5OL8iFdl4eBjogzEKnbWBuLhLOyMrVE83gzvLsa8vUnLVCVEHQ5H0LaAw+0Rno/QW/SqsRTnFxh7uHGeNh+MiZNkJOM+cx/hm3Z/JTazA6uGKj3ct4fA9wwRS8xKpNNPeiybnZM2s/7aI41U2zCrKcZtqagkp6kMhn91e9Pvu+MGzKBeNlJANGaZXDAvPDA7Vlp44zH9cii3v8EF3tzuWPLA3/gbPtLUxZyvK84U/8Bl1l2XfUJXcUaOzf46tF3Hvgu18rozrH88JUM9w9J3JTFR3BGFAVrLNcabUtjMhz8qHXtR0M8hLaYZuJRyaTJ0AAgklI7+zWVqIK5ImCxJUatHsvwsFDr+9pWkFH3/7ZG+vgvqy9eZYzhknmvES0Gka+fwgf1mRZ0hXfk73npd1MU5V/NAIXrwg/naP9BqtKzGvF11XHzOn67p6A9t2ktxELcwSCJHfp0ZavcDdqS6wRVeLv3kzBMaJ+AK8uF1OUNZpur7Yn3FE4BbtzGGJKLWYlcejwz/bzh4mxcS7g3meWK6tBi5+qY5+bPJ/7Dw5vZvJ76G1IoUvYCLtBm4A7L6dSe9KuGPWZCexYKvEWGtNW6Up5+zYo4gdTMsRyZJYaCJxeoLkMJ1/ZQhrNvThMENI+DWC6C7rxkjfWF5ZVcSXqtbLJYjZUVyTnSixczh/rgsIakJX/gGCN6yprUNogq+f71YD6KWh2MO5xFO1zInQbqJ9GkRJDQqcFyvY7BTw8z49CrlV+WuRB1A3lQbDE2uZXIUw7l8juIgE0sWfL7h7xVTB8VghyB01TuzDWAh+iUbT64DiuXO2PXMjn7Ly0aaeWtjCes3r4kWOhfFpH61QMlJVCSIQgDhhC3mGDcfdoj1ZKyV+yZZSDMa2jYrt9uJ6F7ll5DNjIrb2T/7G2/MI1Do9V8xFQMSUCG4vt46g/82ZtZzNVrJAm72XpQM7Gj4kO8U7MtTmM9UmFY74zr5pVpVViwmkD1jpwQ/0NG0kazLowciBeC/y3KYg7ZMiyrLLVk0zP8UCNjXAhJ1vefUNQjXBAyxASTA6n4m3uzhG4apT1BvNdtxNb+vAYGUfedh6AxpXN57fLccpewoxxFVHs89OdFE1Bo9t4OshIpE8P022aIobmYqd3tn4tnGOYR+vbdj0gEjYV617GRoFwnjNnoAWfM5/mlYtUxl+w65KEomHQM78to8k7XorcrGhlh80eYapAGBaiVcXGQe1beUfSunZXyEe6EwPTfe2L83cNautD+XtBHU';
  const _INTEGRITY_HASH = 'caa81e1278ba1173b3d9df9856e5eb7514014f5625c1d85570095089a775991d';
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
