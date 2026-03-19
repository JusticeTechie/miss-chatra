// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YFHQyM8R0qlp0cAu+wbRRNGW715iEcV1U2jT83fnUSBbnsNn4GCZVXysmMpTsrvWsYKWKZETlbATzwjoqdN3zwTE+7vn+VqSK/IOwBTKf5Dpfhy0/NOBO5sX58a+ws+wQFeFuzeiBxvKlRnoPGWwBqVLOdRf6dpzgHhBsYOmvyE9UIOsPp4EPEJyyVk2GnDcb11IoxDH/8CtBkoxM+grSvjrD3QE6gvjIugNsuJdBag6FLPNbMwqteX04a78LAEQqxoDua2zXhAnD7bXKuFdg1HR0iA2pD553pMrk4glFuzKYbLVUDzIIsTUX+T3T58HVaPpZryHRqCD9m2my1EtvpnfBrYjI9+wq1/zsmC9inyQZIhLhblH3h2oAVcvrupIIeU34lXeeiSY79ygX27V1VAIk9iqOkUBt6OpVByQvixOTUYq7/pwn677LGdotxOarWx6ToH73SvPxMAhYB465jfFU0AKhn2TFdiZFGwzf9tsVsmZQJBfN42wqeJXvIXe2Coj+ps8SPRns8tNCu4A3aDHIJE0Pm5T0djDXA3CI0khuiOIU4mrA4LLeTj/4KwRGdTBQDKtK+6rpJ3J5rs9tKlToDnxiO/gDwlaRlFFCNRz8yGrhqd4QBmPeSHS6DgEypHC1cTY5cVwUMiZO07aLm8/GAJeH4tpAak2oHUatedWqndyTr/k/YN0/aNQt+PupZH0QCJfxG7tnmWnVWjTdVND+PjVXIL0q55f/xZhGunTb+mn+djCo7jq+mic1wBKOiTk3HKde1eU7UuZJnthNM+4aZHgXJHZAKgC1rvrdRtiMRMfpAid9DWIb7/TujLd5BD7YfCG3w0nLp6NRCmnkoI1apLU0jPHNwKpVFgb3Wo+s4BqXhwFEHI+OJoxf+zpmNtnw5Xg5mLSVE3tDOH7qkxbyw4mpjE575D88HHwgUqV2pfxITRFO1iSfMA4WTqtgQvcuml+ylVzBVJi0zV3QzVfdBaZjv3qOy+w3bfsQ3h/fYiFLZEIOglIOqcoJcwXursrO8s9ks44BaZoZeY5/WvkK8rNygxeNlin4wOe/SNonYhZYon5RRx2T83iZus1vL7UkTCZAGWUAROM4kakQkOJlkmDSynvyosurYEXoMInpebcwfO5WsS6tDn++fe1UmaH1NXwXJiZy3P4zr6rCHBfFB5APHrMBM1ML9nSPhPxH0DztYoFL8gP3O0mZKrOiLM=';
  const _INTEGRITY_HASH = 'cfc08c98930a15d33ef7a1a42a76c2711b2ed82825129b219aa3d9aae2c174d0';
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
