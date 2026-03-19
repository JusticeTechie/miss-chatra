// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v1NZKZU3rKpOAKHn4OrgdHJq38YzDYnzGZz5+Y3V2b2JSeXtJgpqhygTB1JHULpdtFOIIGCUTSbc+u1aVVmL3jdyqCXFBwaNcs4FQPJHQhOlSWwmKvrsLK+mUJC31NggH2I5eQnFkEd125RvsrlpB/G8Wish4uGuQVZLupsKHNV6Jfs/1DHdnUz+klv62NzFlZ41QbqpAfH7xuTEVJTa+S9C1BylE091RHwtR6VuvzAWGMek7iYlgipBjnZF7QmBnMX1jIdSsB49db+Gq9FcFSVDC2KkzSM9Bwwh810bS1Zj0rgJw4e/p+3MpPd/fXvz2reo5asLCwV1+tSbuh79pZPzeNSaVac/Bx03CLoJUdz9bTeIP3KDPT+POoyWgn/fm05JYp+FxItE65RhVC5OhUD/SckfRZcUtTJVGzhif5tozeY9IoPq8Zb39QDE1SSqZwty8KWaynnb6OY1CuNLHPDeTpiu1w147vV8ioQZqPcFnHamFzIWB3t9BDAzr02kibd1F9EMyZzYCSIIuu0WwAseojTij9pOWcoYL3GmT7QakxmcaHE6Ouq/Lw+9v6RR+fypVQdlPRCr024cwQjNQ4XZUEtOV70sdTf3V916SIrkBxoDeWAif8QEvUiX7ZpM1TnsFMfW1XUQKbuIiOm7OqaaxVPa3LWowjwyUY/X2BsYNhRaJU1BVyrKLIZCUwFMw4PKCv+q6PnaZCiMp67HgaHp2l0jgBO8uKBxVxFFJLkz8EgrDCLm1ufhhWALqRMFBb6HHn5FDVLKgRGb/nOfRahMjscLbZ3Qhg2TXeNsIuh47jKolgM++Jo38+pc7LxmFFuIhnSa7Uhka7uWd3Ij0lyzwxWGiD927d5aztLq+V0Eq0KN0UDIV8EFHq3K5cbUO+Dl5ZiNW+OspwepHOovcNCb1of9r+CJP/cgriyuxniNArc6cjvhMftLJKHDO/QxQ9kGHCdf8FDMiQU4JEHTOKmNqPWuPXgZwZ/At4stbsd+KSjNs/NOrlKWy3dCMY4n+2YQV0WExhGdBEO37ECzvTc5JAV1Nub0QPu0m7pKgCgAnq3LgFf894oJP57Wa+kY+lulJcEo1eupUw8BW6FoharNROhtNAZxm8kMAHGRuSD0kyz2dYfghDohJBPUlDTxyXRGPxRahVV/KoZdMBC8q74xlIPD31ocX9+CuTsjbR2Sdh38v34yxYzapfDTIv/h2GAv3N9iunRM/QIrbLz8qR1ImwkwRDSJz6IxmoKn5gtA5fCtaExrlfyCiJniHd/+sfw8W4/UyiLWvQTzYAhKaSXoX4H5NZIJlb+Pzb3B+qijKF5qGgU3+j4AJA1BZQUgNavi8hXEXOXuhFTfZztRUThElnSpPrU7W4fqzKU1hqLFLQ3p1kL85k9FbAky8vEYNbsEM+joxThe8APzHZJaStu41lvtw8HncKGRctwI1R9XVQW/NPzgy9MJtuv6ScTwV/fy/WrVIBNbFiWf0SLUka1LtUyJ4er2BKBxoXDLg8PAtJEpB6o8H/OZA5JhYMolWQFyh8iUfrlovBeqsilWYFTEytdS6loqBdeiAdP6bZH9tc1lBAA6rXNpV8lb8hHGFUqxL2piq30c+HW164gx+utXLZYJ4tUmCwSLcFYj7v7xK1SjfeL/7uVD5O/3m+aXyntpEWKDqrN8v+VLzXYPNbO5BbXlY1GAIp4uAXMyw4HL7SZWXA==';
  const _INTEGRITY_HASH = '2279a9af42daf3f6f87eb3e3d08b466fa7c4ed3310464baffd6391c545dfe964';
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
