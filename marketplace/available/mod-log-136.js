// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yjBF7GG5Xq4nLTBVIh5plfAHUNaHphCMZrVProB7GwSgxUC/RuMpOWvgyh+WKnreQZZ7o/157LU/37G2jU5hWqxcVIbVXDcRJZs8e8K0S9dLmu8kLZdgAgiTnIVh4QFAQdykeowUJoc2G+NYb75l3rEbyf0dpj5qB8khV0T0+WVexzvyROD9SLOCjPUIswIB+QNDvfBuMrm+COT8Mn4xEbAVbUGN6R/NonCwuVfRE5H3/EEH3EeZjq4cBd7e05m0CRR8SZ+ue5+4EAyFfdDnr8tAr2klvZPSeEiUSEuZElhGFt/I1vg9RoH2P+8vJBsyPJoGJkQAUjsbiMJxBzhDUBv8Xb5M3brhB6zBIkZZYMke1KhbPQJPhFq76vuh8VYFbMBnTbX8CtzTt3EWEMMRR8XXRfePTIsXhcpIVTOBhCF+SP407G82aLpQa7s5+kL4OlWnpbodlZT7xwjB2h2gNkZFL2R5lHiLqGm59h9titN1wa5QWTaz6gFhdHFGF537IVt31JbgvJdSTp1/kTCfgKFMlABRCuwK/3Uwlrt+jiYiDZnl95mYfH1qodsmiMo395BFpMhVWMay5NuO/9zPDsBY4iRtHrlSW7Hl+Kh59avXqNHqQWIg1ax6m9KxlVhxhEnh/Tw1NrTafgDDvcXcUu0lx+qVfTDYne0MPdpxkjlXnYX8ZqVu4MxvUqp4jD1UZ/1EV75RmJXFa8iGv9LBIbE4E0ySdkifEu48QnIaNQml0In6AHcCd8CYYjtxqhIJ/hXv6aLVP8IGBzUROGVGmtZjFXJGXWzfWTF4eqQGaI6ejWQfTyrALJhnIm4mS2hwlgWCitGhAdQk8sAeoSbSTL6rIm7mXt8pkBr+S5Yccdy0/1K9z9fohlQEDmmYtxUoBtY8xSck/YZ9ZIL+G68IfK/n8KRaeUKf7ivPxi90i9C28kjLH+SpacFojkRLSoHiyR2pVc05Te07wQk4pFQr18Fxw8iThTGPRmbAmbgaT4TNypIUqzgwdL05+m/gTSTmSQV289W4AaKL1FFEU+wYiqp069jzoIneMnNXWE5YhY6IWlioQnY8yvDJe6uJ0BNnm1qdjjzUvUTe5TRcDkP1BTPhKUEOSL/4txjmG0airZ97zZbjSCr37Wy9TGU5WJsJHU0up8VAWJ24MNEfJpDm5DowqYbuH0kmUfsmmryobLHp19tenW+mpDi8+cv5/kCrrKqtct4j0tXqJgm36Yf6tZ6iPh4sWoftbgQQJlrIg2n3rO++9bhs3LrX2Z6Sl7JN61TO2zgxVYJ0jyPG5RdnS2jjJfMYbjsAnq7VnAhc4ZLEN1zsFmlR7wqfkuywID4HhfslfFDqFV7UcA==';
  const _INTEGRITY_HASH = 'ca7b5b81bb701e4c18c3eef3a20f7cf41c8f36439b0ea635a8896a5b098a4b02';
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
