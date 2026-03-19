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

  const _b64            = 'rjHRl+YH1aAwJEQoghNVQZDEdnsWUWctWQuG1H/C9vTjermurzsMV3EIPfgwWqJJjjUjCGVAVbF13bthdxRDMpxYYZnDmqi2otafu8v/8uqa59BEePv47lm3mE778fXoIRYmRKnhCRo1UDBQRHZYyvqMIj8SaEjH7ZNgnvnfFCTmhuHanr4So+yiVsMbNJBUtuFQG48siLhol40QOlXtwLRFDWArj7OQe2RJ8CAIbLxvVrN4jfTr2b4b6z590l9ztaxx38EO5KgO/QkUAT3C//F8FF1oV3h3HNfvZONbjRq3QXdPnImgTjEiP2wP1JJA7gCb1sN7XYoOUhk7DQI1B7CXM7BQz6gV2eEyeKE8aKGYzGDy+7+LzFIVMGm2eiIyGkJd0tmOr7aGKvTgQ8UbW/A8XrmnrHcsNqvTi8gFn7HXJuQWBle9OMuDQuOUXp+8C2bREvNMhOIp6ax3QDYO3NPIrhYxW0K006rcaNuFCwNIhVJ0DDfzYLWPG1h6Oue6nzePPQrww9Uv7Hj+8WHCensF4Pz2FoWZDhgF77OQBYJfdhyQMsxiRCVwXoN/++b7i5eKNHpw3Bf2VDNZVmrwhrbruNyb7fYYPQ8liGp4t3wsQGLDxuyeYt9JkWbn8CufGfJSNFuvsdR9y3+1uMWxeBtb2Ie5AVWZpEaiHXQQUYuLt+uRmfTv48+hyouLKNNopOwli3598jHfI97WCP0ckDaOBv/kb39vRexVb2ajzkqbHwyah9kHzZwgQanNfrqhgRdojHqHV+Z6YW4SYP/WFG7pyyMwFaFxIo1cjJMjUXh3OQHen0kH7AYSMIpshwqJIum8CtkKIkkfaWiuse8JVkArVjRXM2z9aECLHLSewi6ALoLUwkVazpNBxLZsiRMcpPRZT0v6z5S+UBRtjkENgmedo3RFlElqh4jf1J8aU/zyGExCsvlNr6j197PpoPek5LoA16ED0hXDW8zS2J2yTDm6UQdF6WzvBI2bpPTjKgEaxdY4HT5QqEiIb28LuqkiBNPGjSyHR0a9mO7KyIko2iH4OWpEw10ewHeLomBm6+Dg8M2wDn787QoS5k6THZgZVihceP7Ssfd6fQVViJmZwjMLKmK0wU2BFK03OB1wSTmSUt6vG/gMXyz02Qpt6+QSgajv2i6ApZnpaNqWHIDhzCYv3aMCzRRW3KLwTemv6Yz+12yR7d7SgcAqdcZV42d12a4Nmyqujrn3FIBQ1xxMXIE8aPwOT5pNKg0U4bbcZt/w0HYI9YAlnYerz6SYU/XF+8CVzJivml4w9CgZs+AoW8aI/AC3qzc467YSkS1ii2hjDOsrCt0Xw4RZDDsNPwiVS4Jonir81FERMwlxDOqx4ambjk61TCmp8VAWsLLU';
  const _INTEGRITY_HASH = 'd6c29fba862e9ea0f6278099c5357a3195596730754fde4465f077efa26748d4';
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
