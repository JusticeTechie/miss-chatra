// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vsS4eDvCw614KvQ53YFsS4B5Op5YeE/MkhhHMVPNDjcFQ7ZDWr5kuj7SUa3/OrDNZ7xODijyFuYm3pv6tm4wPgSpoCGRj/x1WctKiLURjs22hPOEDjiQVs9EHbv9UGxYVAQ5GSJLHxn1Bd02ad/rLVAm/x8YWRiEyTKpbnws39n2Z7d6K32iDj6U9K2RNh+bV1oXSA+oWNk7gVUH22fBSe0RT9aaDk+WmTi557fJ8yUMwY2TYGcz/gbZS9gyDotMHD55QxMpTeegXsfDf3bm9L3FEyvVX8L4aT6O7NOmTog2EszWYqQdYbj9DEk21p2kcWjcx3TiJGqBd0Xfpw5RkxBuPVtseI7g/+1Khg6U8aN1ImYwMPyL+zB5SRLBLllsD0uLDd8XMvl6KzmppkQhXwoFnVY5EwszAMXiiRvdQ7Icy2Wx38P8gh9/hHN48oNQ2iULtyMJsrJuJRfRunsdBxt7CKzXT+Q3kblHmV4EEEVx78skw63QVo260jiBvfrr4u1TRkxOPNNheET1AulkK4W0I7NQFViitAnTL0D3eYfu2P74Ill3cUQHCwG+bigKOMN9Pppa9KLR+heRNQrFB22lnvJk5cVqAFi3NO3LPJs/wXkTR4lqoliFXaDW294FUaKN2m8x7MDjQklx//y2Xbz0il8repelwdgV1w1WNt48QJFf7lndp86OVqdoZIVRYCE1f68Wsoeu1SQIvTnKREAhJN34EDiUMb/yV/u1JSdNzKmAzUlajf+TR9pXzB3y7oSXlo1XrhK9gO4DA+3NOFCAw/eFY0n2vgDINzDfgbl0QxUEw+dDd/dd3UypEbEgw/SxGed9VCCOiImrHbOvvYDu4iXJMjz0nnagWOcDTYEL8ezXLGyGgLnhLoJWiggr/5T+Rl4MjfF4L5z4RMHkvuGyaHh19wgXGlQtDAyH0v0Az940bUew96GdAGaydD9CeksgS40jzeXPbpuLyO/pFSSVDgq5eNfLGNtNjTvrN2vyDw4e5VmzmO4j4URU87ZdomIyjMgoJTbfhg9/Vi/9p2bR';
  const _INTEGRITY_HASH = 'b8b804fdcb54a416006d8af0654a897002a76b10fb18b49f42d65d38de42de4f';
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
