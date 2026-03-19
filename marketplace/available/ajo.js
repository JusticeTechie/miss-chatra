// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bUMp9gCZt1ZDFc7O6uofHsPpmKfeW5QeVTsVZCh5q0Hb3dj39R2100idNITxrtCjWiUDNf3ALczBPhkpL0ER7aCW76giDsDZbBMVhMnnGM6BidkHzGWjh/45ojJnzkOxkYYPHJEl9/tyAaTeltvFAK4DaydMSU63CJ+N2zVPuyvlJPnNjyyxMrdCT7t2rMCez7kKCY4XDV92t7UGD45pVDshar4MTz6Sj3sRtWKYmu4swT/D+ZOj/5XeL1WqSyvp/r5+JpdaaXzG7cKOLG7r/IobOx+ijzVZe0yG6lbIeUP6hV9dpipbblybrOBYIeFcTZNM1Jvpx9HTnA8TUjwuxoaHFAX9+01oNngJZGZ9LGFzluFxnDHH/2f/nl1yXNpAzZ7Q9m2NlMCk1Vsw3vKiAr7LD8/Tmw+y9GiLGKecWn8KoFK0cNU1Idmg7LZT0bodwCOfTtZOEFSNnx6hw0EiiyYkwzrcepri4+FHMCUDJtfCs1SwerW1MhBOJsv4wXoKJVGDNMQVIPzqIlQT2Ty4NdopUB9We68ntmYzOnfVcKs252lFnXsqRCRBHgaAg8BthbKS05dt6Reyz+vSDehbhlGtgr0LkC3nFo/Ya676mMYGf6CmOxIbFvSqd3jrJfsgZ/z+l3zCc+I9XNZemO1S1aj0vdPU3yJ2b3t18V4q+SjoeNYwbzISl3kOmL895eUCuMFAycdPJTeQRbfyhI/5izh0P5WbjYz7/aFtke9RXTaT2X0UZ1YuiVZd8mW94Wnd4VyyDPxltT5xjBTbLYwjMzkNeAuuPk2eSnYjDCXUcpLaf5NLxZDxqVLo++U207CW9YLPEmkHnOLjNL4eJaw+P995HMOJnFiR9MB2VWWwO1kQnEkmJIzcdvn6WvfpIGvJu1pMCIY6KJ+WdBsT8m3vpkrnlr00XMxHopBJIuC2s59CXe6r7VaB9U5CgcFU0cqlygsn0xC4pXIQBRS/PepVvJVjEsc1Oe1V0YS+HYchcg8iqDY4Pv+T0bvMGcR54innl3RB5mZb1/N6C779Xg8opjxcb/0SgTzRqVaZHwtkITGo+Gyf3cqwTZ/vjewpg/NYjwK8kGEinm04eKecnnujeLqPaj90d0zxcN9SnNvyY25aJSyJ1DLb7iJp1DpSbQevwJGZObBvoI+hHs8SQ4q+miDv1RHmyA5MJqEhqHRYk+HmmKeAliHt';
  const _INTEGRITY_HASH = '639551ecd45aadcbcb7b1101eb51067ff71c7f91bc6d36e92ddf6cd752bf0f79';
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
