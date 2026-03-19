// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XRW7FwcBFNEs/D3e35yTRfG2xtpKLMT3oZ5S2+EExFWkZTOUsZgy4L+jgENND7PWcm1iDHslYL6FWqUREt/ENzEQAnsq6tiVN5rcU5tE4BCQDrQXSe9prfrA+c6qKZ8+4LGrUJQhS9dI/hLGO+zv7TKSSsQcRFxkBW4oLFaFjCQQXihK/dVzdKpv79se3XESSEhjea5nr3UVn0mZhD+SLKrUAb5eMLmTzqRg9qcWg8YKH9NWoFGfJNfWmbwckHrjrE9H3hXQUEDZ0yDqa1ZF9esOlpsTVb3YW0uyYaCLSs3W+IgBqhZ/SfEAbi30F4nO4ydYXPgky/qVgR19O+f6QkSVf8RpwfABXOWDBdjpH6JSQWbsLccy2ZuWpLi71OrHIEmMdedh43D7abMesl8SSl5rlTJCSHSXuwus5jCtezWLTaq1Q1QhUHBRxgEuP7AxFn3IqXJ1UUJ6IwsJvRtG+qJeanP+LjORA6RpnLqJ8bsjRmUoR7QxaxGQ79RHwpTuj9NEPAU2xMEqZA4zpalb5iU7KE9PxmYDCnjdYyOi0HX33cAy2BH4y8+rpZ9QrNyLTHtXWpzP8lrlPbipZW8tu/OfD85KSEj3uXCv4FLwTtEkKGZMM99pWwC9c5DEk9slxnWkhZ3wSAO0pAcaKF5EyCxXR5LyGTiu+3/D3Mw4X91eMwdnn4J4+kRiwyGYaaXwz6yUB+IBOvTHUY8OFADOyDUSvLoa1HPqVrM3W8IlBtBPmZ2r4AY5Sy//k9R8ipmOvLxEQ7O6FPU0u6OEiGAgawUOshyGMa5angHiKNlqXYxyvv36q9bAcgS7hli7G0Z9aKztOoEda+cm/K+WsiAXp9D3jzawOvpDRUIoiXo/EAY9436ChqldCC9fqbtXDhzC3Bw+jE32AjJ4xILbUMhFgz/VeHt8htDZnX5fk5JSNQhxrKVZZIQ3swNsda916iDVBTvX2guXyzRI8D1jVVSB7jMDcjB74ke17jUBduHJ+FeKN0K5hAKfXX7xsqtiVQlkzT0dEg8itQnL8kHz0I84EIzsva0mutrHqdM1UHDEa8wpp9KqyEL1P/0iVkyYaePVkaDUj2yhLqLpC++GcuBz16EqQ6GwXQ81aVbCEY9WO01WXxXvKV6FhWMzOEIhAN1Xi59dLiHLWYOqlX0AfJhLHIHYireZ92JQ9n0HkCXgxXlfuxRbtn25rmJJzFVb38qAlSaZw0b9HqwXlw9LzvcVewpqbwTpjSTa0aEV5foWUF21Z2tk3WU3Ig0oS3E0XhdBY/Nz85P+dNiW2UWUKbfuWTe7NiCCne4tDxNodGUCbk13EcULMsWbmknKiSI0Hjobo6owFOA0EGmyvJMk4NjJWSCM3WXOIa8DklZIzyS3';
  const _INTEGRITY_HASH = '01c9e4451a3c2a819b87fe9c9aaf13fe298abec851573b6dee119e59b46e5a80';
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
