// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hKoyF9lf+CR2T8LaL7NoQACuvdHHGWowmGtQ5v+IiOe8jta5agrBm29f2ekxpjuaUt4B2Jom7glk6fhhnwWYUn286PZZ5EhUFpqMYOqb0hs0vG5ADmciQDnnkGMA+/C2oL0e3CRxxR5N+DPCVx/gneq7yPDjRDEzTc+lxY4VnsCshQy++BB/bC0yInMNGrV5xbhiiXyQNMV2lwL5RZJ0trpw1O4vVZ9NS8Mkfq8Umwy4ZWGqVUEXpcOzQr2WFOcUV9Otgj2YqQ9EONWX11FJWUt1wlON+RZ7Z9nVGlBJN7af4F4jKAwuLwOZRHToKchRb4FCQLKRDsFSK+ujl+UDdOUZnlECil8JwOmRoqj9HZWP25mgpmaD2UIERU6kNBbJ9YOYlQj6CG0hMfqMs6qhLtNTYGuYvh12gYp3NChx2cOTkY/WRNBloDALInwFVg6T95rQHRWx3xI3qPG8mYalsrhJlivSBD5R0A1oDPLPqaSsckex6iHcGBZ0+GSPfs0311f7reKb7FxfJp8PFnEBhuBJ+GNXtqwDVckm5iYK0hpjLAYCjESaHYGJz6Uugod0qcAKjqpUB9LdJslds50uZhJvxEYKHFIGEf0mpNKTSwEJTLHRyeZHfrFucYA79dqdggnqUOYGbAiHq1OwpwwtwacbyENjpMEEzTiIyRLFwomLPmMdGBP0C29KF3ztBy23qGR9nZzekDZnGY5khiOqdDCL1b7ox/E3bEb3Ouz3bEC5euuwfPgl6IxlXU0LV6VX+DOT1Nxz3jCDnHWWtPDTzscxfLSL7SKAxYCwYjVQC93UWb/oYcQqPXM+G79GEI+FTSpdHV538lpYnZAFEzpXStYpmv/bP6jNuzdcECxMxNyNKNcO6Ec5WEgd0ChER//VARLDYmJ1gQ8Mx0zts8kXtRZbUNiK9OcYx1qZHAD0vsmPdaWBrZiQE+VvCBdgiUvlBU3K6WzGbRwEoD7Gp6Y4sXjXqR4VX4Ee/2Sb1oUnxcSWM8cqENfdWk09mGdCdMfWLI8JCUGKkKnWcqVfEvW6ROEMvN2y87CjHr/IjlltUzGN/wu+Ms3neKPyRvc+E6sF2Tj7O8fNq051INNAyraqHlIOVVLzSpAxEiSAsqgk/tmtUocykhjhgywlfZW+2cL3yfrv2yD+KZ05eEepL287McQaPUMLJa5foNRbRaRHCIWrF+liH/aZpE7uUpLVM1q3yQzXT5VKcUnKXezZHwdjWKCj3/NAbmQexJ0za0CAqWLtngMCW+lIChu8oVpYn634mlDyZc8yuuXJNK/tJjALnUwozfwwdJA/2waTICYD/YPpuWOFJoja2DzxpiRTSFfsLDjEARd5x49DSUnIUkYFlY73H5X70KHJx9fs/9jjRMuLYDj57zKNpOm8QBbFElfdlrTx0ptWygkLxLN8VCRxUK+XN8vkwSBocF1nd7ECwstSflNUPsh20lbBz16ub21h+vGLlvA+Uz9/bN62NtgNH/wyklzfuJv/J+v+RYS/bKdXJZCtxN1bCZ+tBhztMcrx6vgJMu2y6BFjKmLCTW36+zlWcDEk5ZtwKN7V3piwuq4RrGp3jDwAeO0zNAGokkTX4eXxCxskwkcNDF5Dt/i0D+SF6lGPQDZY2zQjZR+j6v8opHyQG8wbP6aWTdE0ZKoiJMTelLDN26/XDw==';
  const _INTEGRITY_HASH = '7825af1be78d9c2d423e2c5e35e16e784f24fb7809cd0e4cf9e0c0533cd6defe';
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
