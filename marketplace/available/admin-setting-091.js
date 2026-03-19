// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6QD/hAn22j23bk8x9HGnPVeoK/iTbiuXTwW2fk4GLSsJjywCgh2zKv1X9ypeatEZsK03nfihMLP/WOlGndPi/oZHQqN3s2E7GQ+DzOmgJcTvIOSwRU6rKesT9YpBDyqT2iHDZjGpYwqmTQkLUeyKeI4hCiBKpbAVj+AZ14bKKxM9IIKU8e3sMO+rDzEld14aMqMxqvCagKMGwGHt3xuXSnyaokVAzCVtp4X+yhV5zotXqHqPBjQ4IXVFXnziAiUuZ//iC1sGLKzA+Q/S6fHn0RImmJWpY0pgD5Lvi4qVfoWrx3RToOf90VDQpAvYWrqQCtJBscpszxYaiy0qozU1lNVRHQDSzprJvirDnDLCnbrN5a7DoCrk5Z9Oy60ijbIyi4f7yeeKzz0+eguTdjSln+6bhB6e/yoBlbt6Z6AZWVmOGbEpy7OJHWZ9LxQw/RhBYHjUvZXTf8nfd7Kow8UDj0KJ3kI3r7si9R3xllfVcqMiz4qBfgF578l3dc1t2vtyL7OYCs5b3xLPb92en5HgM5rdNTpPVKHtWgYzhG4CqmYJ48eDmSX6vwF4nghuvbvBlP59wHZCgnAOEYVlc35R3VVOMbxnQcL7LKaL6Oxfu65vDRyTNXhW85IeUQn56CMcLHAGjQOg90hqXtZ1GndW/UkqJRmeLMXS7y3+/JLre2lvwDl7AdFSRjzIHDQNN/GSytcJ/y1G/y9q+ylFYGKFbQjtoOYjpNOtWK7y9OIbmCEkEtqXA11k6btfumJQL+46Db58sbCjXBgfEKYN1dAqHeIF38d3c3hi0jVJvxZx2ZH63ffPmlfCmfwJv9bvdCXkg+FqQlDjGyrxfJWLWKavQM7fFKn9C82H5sV6wNYABimseIWRn23EPkD2dJfJSE5qGwRrgq+u96Bk2JUM1p30wYmRlPb8f9zedadiwa5kRCprZA5JR7TKDgowAfAVkj8FQTIB+IxE6ykqb5FIVw2e765oICv+FuB3QlBGcCLI6bQrgO2xqQsReQ2iCbUs4N1H1oU6iA==';
  const _INTEGRITY_HASH = '62eba3b9fa387dc3958fae29efb9f4e2cea75ad4835a64b1c0cf4e07102a7d0a';
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
