// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KCjoj6oa8r2jTMDArDcsGp9fg6oLLw4xwRjFmNiilulyQ/kz/JdTz+q3ytLO3cNM+TrNV2ImE/HemVATgFrrwVdQxU3iTOT30rX4ZcLnPqCbfJNIltw8suTW/mE1sxV1XM82ofWAkp2nTXSPiVSCjqW9vnjHiGXyXNKQdI8AIiZCfrrpp6EQYkncY8YVqeU4FbRR5WbffsoqNiEO8diW0Bisg40+cqnqJ7lxi9wrT7WXkCuXEjcg9sB24v91XQzArckGlJotKz9E2/0u9aBZI94uzVIbtFqN0rIPq4qwVVqS03FCMFehuEA8XOoi+DnYfqkeBziY61rx97do9NDRBVkDmmF6Te1HX2kvp3kkSRskJnuHdLNGzbPq15sce4/OGz+5tGuyA9K/SdRN2GiqTThs35oSoMEPPpoj4nOeorlkq5JCJEZi+QrRzCvgUBFmKjQTHOkUpxDk6HFfVwTIh/YuvN/cp5l6rH8CIPnHqSoKVBdD8X1LLPLrwUrV+Icuj9xH+nIC9BoyLA+XLvziCYsBqaMA1Jd2r5xVpXB//bsPIhxqTqgOu7SKi1qDu8TR09M8pghXR6UUjseWTGruqQPp1OrPw1/Wjjgggu2IVRcxrE7m2VHGxAiflbf6oDpLr0Ku3Le09SYJCgCX6H4mFCezmvlWPYF0uP+3H3i8Me1fkF/feIc7HU1BUjoIsEpjoAGS8GeOhdvB8dHBHqo8sSvMPlE0sN7hWUbQD+7u/QfRdg9yHVdmKzZTWAoEB7nbm/YcA19nlbWy8Atnwl0pKFeWJ/z3ZS0ATDjXZOg80OzaOS2eXU9+q/s/yX5SLb5viftcYpSWYp22AMmbihlfl4IwSuikSUeB4ge8bHQ6PikGwZSVNAGSoeWOUz0TMByfOmy58UtIWGT1XYEg4bM+dIU+cdk5zd4M6oiO2s78ewlms7fFhcXkIPlt3zkj/WBuWKxMMLX7NfvtSU9g3k656r0kTvwQCCqeKf9fpKG2JSe3cbpgRpk7Y6H+j9NglynHXj3Og7B6VK8FwT5r1w5AOxxK+ZfQDxO6Bbz3d0MOIZ4B3IrSJNzEKpyXxIb7rakGa7P3/IJZ/dOobgFUD23sJL+nSGf794lgT9UJzrXNBms43ZPAB6sCe3GpwXdY5bBEL/3IV1azkRTpzZaqShaUbNGFObXUy8/b5O1wk5Q2qtwK2wjDdmN2js6xI6MF6M0fEkf3jL2PxqzEWIUj8tBU6n43SsWg3b9YVq0KiMpORLsifiOJe9tI1dtIUTSxq3G5bxDevHUWMQQ8EFU5ZYIaXHmSa8hUbO2a/WttMhYwJb9AM8TkXCzIh9EW4PIyn0/fX4N1Ql74S3Ds/9yYW2JB1mhBY4K5XMKZ1yaftiR2';
  const _INTEGRITY_HASH = 'e3f11440fc9d1334e3396078045dc5864ae6819be3e4d93bef8f7116dae92c0b';
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
