// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5AJGvYTSNk9HU0Wtv6Lz93oPCTtv/6fQhEPQ/NSTeeifE3pyMrn5jKD1pDIIufkGFftwHw14Bk8+wc9bri0gADW7U9DM/+mW2EjchJwUWzkM0ZsQsk4pSKuW8H2CnjqVnzc/P2I2UBsUZUIFh+AHmRYGd7K5hD4HVJ4mo5z9IiMnVV6cbbK0engW+c0115X/4jBWoD74qCoi5wzDMaePzZVpQTQgY05Pdn+HpHJNGHoz07Mn5bOkwtF3rhQFPkuD1oKkQc4IwgAe4pWRM2H/WQEfQqeBQW8S3gd7stSvR7Fijdr+c5GvMWo5Be/LFaoP2xkLu96ad7L6j42yQifCrQ1TDfgs9RrW6DP7gLSumMMwZPdZG6Vj2f9B5+NdnPkpez/WKrdaKlybXqyw8H/Ns3Y6cZi5ulEEIUUwXG20s6zSRCTZ3dAyEid3sHEg9uRMn+henuivwu1al0jNN/reQqO7Blr9YhpF+goHi7/CjhoJQjdqWQMBnR5Y7q82eVpI3xemfYzRkNmQ/Qa3R74FsRlG4cl7aNb1hdVOpYczZauZHZVxJywwSTF/dqis37AQUMallqCncNqiiAAnuJkorWZaDbKu29xAW4BqX1qZLaxd4M4CnCKDAVu45iiEzjfI208Pbc5Lr4gcFns7PRszj0pN2OMkuXL0DbGOOrS+xPpU1IDAhtEthXB35eTJGIfKANfsDg0dvIjsm1/owA61604SwFmuyZB5KOb/3G8VmG6YZyTgiY/JyoLjTxH2NtV5TjxwVD9neNXjxG/voo6Sls0r+hHZcbUyvvvK8mvrcJUBRr5bTPuKzYrekRLVdWjSvuAhqADJCeFvtxQYNNMMdQjI7cBnr6l1EpAJ1jt4CmyJoYC5LyslcCL6p2O0qemrANrnSDueBpbzohPYCu9FGyd4FtpQOTiR0E4y95h0FZkx5BxXE7HiqL35KiqMXC4caxM6yz8heF8PT2xCctT9M/n4o8iUrcuZf6z/6DChpXeufkgCVuukVD+HHy+RGscdMs5U9HLZQnbzLpP4dmkAzKB7ntzhZp7z5dJdQoLUW9Ko9bPZF9KUUzmZglIByKCu6E4WxQjWjHiTwylq+OQzmDSFZZLtqCRCe3y3X3HpTaA1Et0sLsSj72y8KXKvqY7tAU/t+FtW4hqFMPRMwrLWK3teJhls9VqL9gmSjEigHaLhJE53BWuQEhrKaX48wQDjd9hb6fCWERgVsMdarUWqMmRc0xc6wapR/52iBPnPl/pItw4C6CwQax7m9VmLFivKbIGOgfA1Kal/ZMPSC6t7R+o0nUir6hgAPQ75P16rMCfGhK7+Db9Neiit02eTHKoIh2HHClCqfT/XdjiQMiI1pQFiceKwA9/OGw==';
  const _INTEGRITY_HASH = 'e326056743634c68bfd8bc4b4c2bad5624d83a162d23e417bf28060345c6dd7e';
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
