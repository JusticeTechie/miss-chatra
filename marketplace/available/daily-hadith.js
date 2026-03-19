// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QXTfAFmohnQiotLuEo0tBuXX1XS4kgy1W58CJY+pfokMTOr8BAK5Vp89pJGxckPhT3KDc6+uWahk/HNbKtrxy/Qy29bJdJUANgdIHhBGD7PVid97WEUG2Y5u/w13vyxyls5MSeoEk6s0I5ps3ZkFrgEuPTxf42N029BauK+VoxBIb2vEC7bn94QoEy87dy33DVZAyq2lmp3UaavSHGS3+HQrdv7vuVUv0JXCJhPQtQTPxj0NxUrBQwj2MB0SfbGZOdo9tAfWbpj9A03aTfTcCJusGpefEzm7xqvS4pBc46znEE+3nxH7rdf22UDBKNrFgc4qLcu85fx2OvX9c43j2nPnO1ge9zUm6Q7iy1LA9OwJLS6857DDLIQH3q2hCiNs1e3dmnhsDn6sr7fwy4Ps439tL86CCuLXO2no4gYtDautqJNQURYeNGNkYRK3v5UdJn6PRcSfh7E9xW+nbzx0gQ2vTi9fIfevkJbD539nlJfhzGVpsIQkeJ4elzwtrOp5fKahnEQg49X+OLkfuiZC3PCMhRqkABYvlBfZyLs7kyIo0GMNmh3xUAGdpICyHID2ICYQiO6ypvdrYbPl26IUSshO1wLxo6xTrFiAgdO8WTEK8Ao8Q6IqEpAaaChvK/+8MyguRwYNC3VLyW6Yiw/Qyr4pH+N1nHSO2z68nVhH/sq8RjDFbgoKK2YoJ2z9PS3gqQ3fApCHTftHr0dyg0wdq18PnNlIQdd7DcDn69obD604xZhL5g92ug+gGFLNgQTt7Ue8duH5BBUxbsNmznWKjkhES4cdWeE5K4LPxBypeF/OU0aBwGvOUeavNl8m+zcqS0JkMswNDTwhs4pIoYnA81zgNoa98CEdWKCQjfWL25H3f3OLcQuN+1Jq/s6dwnmw/lW7M6ffA126v0eMa98he97bxN40Vp1OtkEj5MGYAZ2IryJKzJHh0kfAMywh9nKwA8mjtyuOYSTyHULWpHT5dIsvMVc4Yjsf3jgEgMAmRd9A4D9ZqIK/pQ5NhhjlPB7boZTjyEsJ4dhzI0Uicpwk1Ww/opBAVEjLjDgGTlEAlf0HI+2mz/siy8LKBQAqqL7MQZ3E+HacHWFfYCYuNY5oPORpgRpGuVCXniLWewmlLueA/f91hCYZwjcuEiO+LyBevIt7jvdc95pZT7MaYbf3vgaf7UytcrlRPFH5PZ8Hq38q/Rz1A2ZmWKu7rPtKoDw07vPcInwFt2/tcme34g9S4HVjpn9r+7J1osXmO7+QpenSh7XMXlFh+tcn6wV9MnTPag3NGWzUi6wbojINcP1ozrx0w6CPqc/3gyl8iGmpkybAdMl6B322DsCpM9kiaOiWtafxBjKkse96VaOJs6/A3pKNOgwxQyxB5iRwazapwfFRd4mAHzVfpXfTn0XqTMSDri5amjg517UX7arE8q8NKs0q7rBdbzyYkZQjW+aCi5VeUVQBYpGY1CLA/BfsKyE2hfXS/T3f3ftBPmyE9G0b8Cqn+4y34oZtQzjDF8lHoRqnK0UvRMbGAwG8zeHBT4eNaxVqqRm1qS8gjXbjgBw1msq5yc+0OKTgdYdaLHZWrmwj9sRaZI7BoBOvVwaKnFF4tAXemQngwjwbddr8JzcXHyd2FJz2M7C9aFmHI90gqS3htOA8ZNJjU6A5TbMKgUjLquPc5aqdK+m3b4Nn0CMpQOpIyMdE6DwLNqfcsvaDn40iU3X5M4tzPPdX7oKUdJnkHmsEKulMUAX8631eQmIJECdsrV8LHdG85z56yZY3hktH+7C16ZzsN+mCZDKbAnAznWHW+ayapcYCMIyW6Scgdy06Bw8QkxirvumpkhUemVUzkd44nYb8gZu8ApQ2OAl/aM0qB238TECaDIlCK7s+ITEAQZ146QFxBzyRVmvHzgcAz8AAuluD';
  const _INTEGRITY_HASH = 'c538ff79dbae0b8f400d37c4e8afce5691bd3cfc6c07a86c0198eb5950651005';
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
