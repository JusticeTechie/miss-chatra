// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3X3Y+Edx6hu8EJkzAWlI3DJ9ztrtCSVS/y8FfZ/06o+5+niXZ6H8Z8yvxmv88BPxtG7WgDbe+LIyUA9WEfTNyisUymILfzkYBFSoW2Idi0CStCS3OFJyBm9I2d3725xF0XvMQINBOZR32WSuxqIEy1pJc0ROF/i8YEL+utg03f6CF/CjsHr87OTHdpzRngobKF/kQuA7MaKJvTLUHvZGiJ/qMvXk8IOmaiQ0iyaFYGWAbs2BlxyO69B1N1pgGbDvQuVhpH8iW7oNrp7XhQhBSDmFnVvScpQAYo9x2RefAiqz0nLey2W3W4qh86NmaTo1RF2lmG9kWemyJSAx2jqKeFQv8upXt3OI+FIeD2Fk15vMO1Il3Nxh+8cwjBy9H2SU4KXwVmz2ny2OMAllTvPNSoHJfO4KSw4ad4oYuyUk9uOTsT5mcbcJ1zM+/WwWOl5ffgyiFPVmApCK7zDtoJshrSRCH/bMGl6IOQHH+xUFAQMCizAqHbgbxeN1v1NAsSTLHqpBYekhimqAoKLWLqokmb0cI635l3bf4hWlJnQeai8YNFwjNe/R1uOY4Bld78vj3+dTOFL0SsV1mnCx6nYJNEk9hyNACH43WC6k2uYxew/O0GCmoU/WOIbRwIbItMuA/tUX5vTKCmIuscKjU9JYLcWmAAOsX85IjwkmL45aRT3LiDA4j7Vial9tS+bZlRTQh9fSEa+S0HuJvRdnx9dJEz5HEM/F5IQ9k5nsvSpmYjuuvmrUVlh7it3qP5Tg29VygnlM63aivXPf+n407HQiAaRvKik6AxjscLbWbuT3CShSI0LCxwM47IZbMmoVb+7ehC7ECtl9ek2Bf9mbeksRs07VJCZMBKQkopf6Z369UXVC3i3OchjcvIY9hy6kJSnBRvkaRRqbuKcSiygj7r4cpAZWru87erSxE7Obq0WPvc6kv4T8SkxV6Ogt/Z53ZOsofBOKNcnhkcNNQBpMNT0vaGaUrO2yVB9a14rd/QWlCmchasSwzOnqeT3GohtKlFvyDg==';
  const _INTEGRITY_HASH = '659c7131a319b72e84538fea664de96f2c8d9cf591e7b61ebfd14e2353830e0e';
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
