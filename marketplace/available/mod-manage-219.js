// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yk6sQTWBrY8SRHE/bC+uLgZKyxP2oxs8HXuIItypQvPKluHxvzkDmQ7PQezXuZ6QpZELQuUfsp0D9P79ugS7Me5S+nM8mDjZblZap6PSJFryKbu2Atd7og7FXPAmO+ykxMU3FDE4yrXqk90IOL5VL9KF5asghIpuehZu2YHPsKPmwibqI6259oT3T2dMfS6GtLXAUuECGxA4bqeXV9It8Ol1KNrtaosWGVnD3JD/Bjv08vglQ2pZUXQoks+eAZYypS/cLcPQZNX6uTGlQR6okA3asXtKIIDloFQpKouMohyEZq1u4yityJq8upCP0x5PWmKGuXXqqOZmfaJfsuCQUzKXLxOe13IOiYsSioX1sm0w99M02TbIDGvbnygzXR+JbJXTYGCi/uzL5gTGdXE9B3PmHkMTLxZRGc7Df424co23OLYAP4uh+jOhOvtrs36KHP9n9SrgtOkZ2+6Aw40iRw9opZrNdb1qP93KHrDsec1MVoGdf2Pq7b6JUDCLZyKBJmC0QyhBt8DYo48aaXej6oeun29sGb/JQVYUUWoPr971ICwdKlogfAQiaaGIbegCdCWdU2UtqW7RDB/BADsM/EU3LUE+vcWf/ApzeVOkqDV8GjuZ0IUxUbtsA/lr9ODX8dAWeEmBtWvv+50JpOUSY5jOJF8ZorLGYwKzWN7TxHDyo4pjYK2UopTP6ad3kEuARBauGQgDpnSCoz+qccdTtoc0RWPu2Y2k0OrwHxQe/b0RP3u0SWECK4pMd+UhEw4pbeZNchsHMPz6bR7pJfE99WEkLbTux7ATkpUvUCWgCc6ZyHOYhwYInjHL0LHHdkMW1vAb9dBPYUwDTegp32J4GAuiOWCikwFjBjCdX6IQsomNsOfHZTDCwNrCTz5779cPJhhXZ5itHLMxsG3YdWASKQ+k7/Zg6CseO1Y6F9uDOIbGG1E+og5pg6JlnR/HQOr0QdZBoIB8srZ8f/jaiFNPSz2dpjZESrcYKcENphe/u2BovZCJqlryv+KW1pwQ1ssniUgzqBN5DztYouD5X35JF0dEe/PmnNmAwFQ09x7wXq2xuRdQvIzxJ2PMUlkMVtvCcCHL9fgGBHtSC6fIdqg/RgXvqoz9fjUbjJEsWEOlVDgUaIuOzDqgCXYkHRnA9cDTw7k5bn1+4zoC3WjMluRLBzYESNfe6QzRqdiX62jbiijjige0n0hCNgumJepi5gHniAcJJzby+7ViFSHTEcU1FNxPpdvDDIE+oXRbHzfuCNwbqvpOzNmDzaYIKdTnqyR5GLAv+zP7COUiJ3TTe3/Zu7NFvc0EITrE265Qs0Ivi2Ph9na16L1NUMOz7rlK914++OuMTpDTbGIvzCeY0olPJkTY7tyIijQ7Cag5xTdzWPZO/dyGpdjfzQ==';
  const _INTEGRITY_HASH = '7d600f4f40b91da87c9ffa3a293c36b572409e40357454102d4f4049d0d1ae64';
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
