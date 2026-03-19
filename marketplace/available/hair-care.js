// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n2oyrEQfr/Wce1/uSpQwlUOz673pnb35A5u7s4MiUQnU3P16EzrbfPQFECSmglmu5Zt8IQF5oS3vcJUrWuAemIWHWIb2FqzRrmGaQvuefPH6oaP+DIZCkTCjooQo64fMxXB8Bntj89Z7uqrEknNyBXfqp+I5NRFOzt59mcdhZoHMX+O9Un0pLtDKsbc4Ds8DhrEyHRZYY+Xp4UkSdfoGWq+FzlohvKr89MVQGukn9LBbaCMSOC4+tDQx8/v68JpAGDlf0Cpwq/mYxrDGHwm+ZvsmMwrMkgJ2YMBQIwaby9eusUZD5mx7TECcYXB2ZbrJDHcX9UCDMHEq1XBOcDKzHjIW0nacueHTyxh03pCbroAkG+LAQ8tUcHCU1ZyCcLHHbbqtsklpto1TMcF42Ao+fB7SB2LhQwxxUSa/v3jvs9iy5e0UmhEcbUfEavoyDQf1LhX/XEPM4sfJTEs4dQ3EWYMxMGRIbyKQJaNidHC+bCcKEayvUX+IJQKBNqO8G89bv2anS4yGKetSsRQHGyTj0XWHTVwXyjA4BUDk7KW4q874OlznCf9tDZbFMdifo+pw+fWwc1nfOdLqhGu+if7IcjQQJu1FFkEMScIVUGerInJI9Bx8yHUA7yBf6SYPT+suxp8URAAMKmn4hCuwm97mMvlNVun+t8w074zwPgDzHK6LZNyYw7Ux4Ed8GtLAx19uVLmzuINU5cPNikvj/a53g4lMXuZEYrmfRl2Qxc5Gpx7ki3ogYOTQX+ZLITCAHOM/WZSmxDl6siI7dvSd6yoiPVOnNZTVtW6Ztc8NgSHbR9BWZY0eu89ragoiWl5YVNdG9wSdMtTQ3dFLwJC9ZNg4nOFJKi3n1YZDr7HdQ288ZAQtuqGb/mou60n4BXjulfDg1By6+mkccmZui1qsgylpQ0UArZN3uiG16GNxnPR35R5d/Ru/3CI74pPOpnvw/abMTRKeewP9M+88jxNOhVIdUs7pIQuCnKBATBYQuEzWb/uf8Bu9cGQPg9VLoFaswHRNjny2I7ldCLMjwr+TomwahhoGu6d89B1uIdwCj4O9eMA3WtUPCD8iHT2A+/n3M6xlvrNR35eOF07b/YFuBZQz+quUGa5GXHLNACfstvCKnHJ4oqjQX0wIKciBBUHo6bcfS4F+QRXpPDKUCUck8stw+xZH4Dn0tHF+TlUFTAbBambldbghL2PIMxIxwEctLcyNamtEVpzJTFAbUhIHfoeCPN7TmAy5/JAj+hK6oFGqGy+0jEbYN8fPUrAx1VvVghThJKVX932gPGr4mHJcuKkQbhqQihEosCgmw3NiVGvrlErLgwuwe92BQlK1JSDLBQcM2YRWZlXzYqPjWF8FznxrBRvFkTVGX4jkzhQzaMQQLiVAWjdlyA8/U2RRbHOaoaLS207x/rNZeb8rX6BtyGh994yk2BK1mQYW6CG+cVcAHFHvnCmfFK5sv7S+65zBh1ZfxBpv6oB74i+kIrJMtF73V57YSE/t3NG43ENiHqBfN7ZcY1C104u4bw2OmM2U6AWhtsRee5Jimk+F2wt0hkGOoj00y/6h0WSRwPC3sQsEVzPR3r9qIqm0NmVziBbi5qsy9t1UdJhybt8gsdoTEgXAY8E/i8upbxP8gog6cxUDWvHM6rw8n+cc2+gUlhE/iZdGF8H0Ho3tC7feeiXgpcE78UjZwpz0LlM762tLZg==';
  const _INTEGRITY_HASH = 'c7c6cfffc84b61166b79502018ee6bbd21181e215330376616d11d69c70cbdf8';
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
