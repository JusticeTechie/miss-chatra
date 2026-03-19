// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xIY8AJJjvyUs03zvx2KSuvq3UeuAW5lx4yQSCfgKGnb7cSWOeU602mkqNfEtHd1v6xrmxs/w/wxKtbnOjTjxnKAcwcXnet2c5I/c+I0t3aOZ1RLkwAw59uInIugNuGh9/iJrqJMN4GYsn9Ao4kG81SLJ2zhpYYD1Rj3uVi99hbB2rPpdMZVHTTRu0+LEdIdxxpmgknQZDWJZsi07VqVlLC2JYpkcLi8R3wN5aYhaKHr6FIl0idUB27kJdw5lZ83i5wcwrYbBhVNp9T4Fc/NUhTlQRO1o+AEY6dzh3UjKtBsUHpzZbVYsczcpMCrftMn+LeFTF+etfcoZeivOG2Dz9mmxMEIeDAbOpEHZfinDSHXosgVKqhT61gskM1tK6a8F5plW3PtCKkAHz6cSWd19Qt3hxAZX/icIJSfhiuee4VJdssT+hLObNzoDC6iw+Nc1gaxKai1T1zZ0Jlh0njFmJzMOJ3lDSiHC26x0I2RiKkcIpAJ9zAWSgy34osjLsU4Fa5xj/oyr/F9yYOy0asVlCggABNoihPsBkq45g2SQroquWnKzRsq4ahcQSiJ0hhEeHlrH5d6pTqot7A/NlGX7sDeB3p1yQx5j60ats6YMIrpfDTSeifTCN6uLHvCms8TRCrwt/ls+mUjAy69GuanDtpUi6E5Y0jpnZxRpFbUDcS3yLIx1VgoSdYHtiwdvwCzprr9IOm/28Ot24OcunfgjPTMuK1g/Q8hsXdlDCpoVQ+jyPw3kspoLSL9Lj+OexKAo4SecwzDrCwPMPbv+jKut+KsVIlML1ffHjaw65gCI6JuISClksH0sF0Wpdw8C8QB3e8Vifpn6EijBUz60h5AniGybT4fGqslYFtutODov/DpRrAIWTlYuDefAsJXvqA50U/2xHXJ4qYZ3u93vMbV5/ePPEr2yDI7vZifKslWmxRUb3d0ChNR5ODY+pLxJ+8iV6xKLtzqaXnp4+MRlWgNLCjztj6lIEY1Jkd4O+AI89oFRiT+0nkaeTNrMpiDCWK1oBeaM3qXS0kPGcf5KtzftvL//i+fy0j+3XV4fWcl33rgRc/dPrq+G4Nbz+FrwlEeeCQapR8Xus4Swxld54QlJHrWFto+xDief3fFH8Reep8FeM1Xitpp4CknYUGcnDgL930D4cd80itxsphcXHaBxAEcdM53ttwh/Uy8XTgecw809pkXOYmvrwEYojiT9Ja0V0/TZSLjebGHGFtrS1Kx8zbRtQJSP0CUC/vXD7DPbjVIk77fIeIt+NX+c7WUel1rxevS7Sonfe/H/KX1H3GnGVtsceDPA8N8eklecD2vx1eouLnBhw5TRT3Pkib/oMUMGD91hPPWDpXqZPt1yXxhCMovfjmEtz5dDZR4oTXUIwcRdNoSZCDQHJ6hxY8I1AIPgKjQ=';
  const _INTEGRITY_HASH = '43f349c44261ff8c4b281852f4cd5272406900f2cd8c87102aabce251838126b';
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
