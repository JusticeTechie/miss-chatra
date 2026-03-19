// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'o2QEeHjyQPVo8xrqkZelRKTR7bwDf1M34z8M6bHYRBIA4jidcqiEfopXiHe4CyR6SoP+VcAX0007mkfQKhwJAnr5JNHVFMsaCZspjPBqWKPgb9cEv6qc40AzUotzerJPtiuzIv5hlZaCZxSrJhGgbY3PFvjGzt/vEpFYSMAzR576zWNP0sXOqnYDNTQM8xo7RXyK30ZO2QeEaux7UwnKyRSFaIUYOKaJwiYkDggOoGPKfpFg8kfz0rNWabM1aUCq3gFkvLrgdlObjpyR67PK+Vcl45NOG7xsU2SWLe8dWw3Dvq2grHCKfGU98LwswgvLEjyQ9T4UDWuJIeNiirvzAoyIs3PvzFcA7vG8jd7Hs7K9a6zOZ/iHBRCqavGJg9qTYPmaWAiGcPjdwfix3KMGKkMvnNuSUKAXyXBGB13nYrKE+SyrF4sU2LJGZJiksuqAshvH5Ar0xubhmoeTcYA8BU6zORe80RuXaiU0+mUctRc8jTIlv2BZ+EGpcGNVB/VHuJveiCJW8IRGg7FN47HoI+HHxiY9l1iLXfGJAI7Zn2qI3qek5uBhnSznGHskWM1A7wQMmyQe/WEQPF+f4RmI6zOViB2ZuHbYuTXzeSk0ymnoN4jaEAEC8+uSWhniJ/8f20iZ3GQe3QWmEO/Hbc5ciQVqj+eNR21TqSHTu9wxG7mckBX66+5l6olQmC1fBQaxSzqvfGmckjavjUYdTEtqpKaaMiXbNSrnmaLi5SK9ROq62loyamQAfRKgAmzJUyWiLbJ/Q3L9XxclhKr0JDZk3cyb00lnAulB8yc0ggnSl9zZ6HrP2WsUY6va3z2M96YXf2HNU916vzLn5yPCqcS610kOgW8utBlWem7Owvo0KYohX7bmupP7JkLJ/4I8BaxBafHxXa4WvKlr7nt3WLuzZ+7kI6beqnyA7wfmiTUUYhegpjzasSNpB8Fk4SfngXXzTiF0nopuRZYh14W3CBFJ9LvFzfCyB+VKNBi+8XrVfWJKHz03q2BpdbHgA9uoiCb1vM0BHdRHJiZBct+MhlE+2wwQWYuXkvrAMM90t2JKXUvEdDw9EBDTCCLq+I+KGerHkGb3f2+3VGMHYa7qzCrdwByWypk4dbtHQInMqMzd96y7Oh8PYB3SXA8sgLSmuzKm9qC3oxhU36FDLhV1ac7G7n5jHQhMb+5NmEPDcMvxtQv8kTburGI6SfjbmcaPn5B+46YOsmYm8oCG0cfpCD3Mw2lci8icS3G91tpOp+zD3LSiRqGaoGsJUZsiJvGRz3eJhxs0mSs0sIqKGcXOKdo3ptrVQRWqZzXJKzzNyEegv5itCaDwoigU4p2uWIsNjWK5sDZIs0uPwJZFGbYUJiwWijzFa+IPOvYSCD+aqpeW';
  const _INTEGRITY_HASH = 'f3043924a0fe980583b8c9aa24c90037f24bfdfbb91e5be1fb80b14b1bc6daf0';
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
