// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GrAC8bfBMHj+Ebf7lSsO1OVyy33bewnEq6oe0ffkYJI4KuG6LuO/UzVWEyH38OPCl1n53kKemUcFI2iTFDoOMXDspD4H76AYUBcj4U48+NdZkJmuajz1+B6mNax+m5FDD0ut9J76PF+FN32S4DndceYaRyEtIjNfngYfBS8sxAcqG4O6iKvTBmD2PIUHBtjOOZB3JeMDviGrcxadUeFqxybRUY2K4VPm/2QtdyfMUTgF9kib+4ZDN7fCPbaLOGjuURP/ZKqA1xKb48qPvseZCptHf2ypuv0FU7j8bU9MEvRpVhC2gYBhUiyD8ZxbJ7GqUOugA/Fy5ZyVq4atHT5zAHe6ZRR/uCBVHtssQnAVexCo3PvF5t4BVb2h4gxxMHYzhg5GIeKQIr/Eyu07+Nn+Rps+1uaD5rmAbbAhSdDoRLdvGg05Ri8AFlW45GGl8kFqVoW0/4POV770HyB3usOJLi0aqWNYQKxAT9GLEKb+/1LvaazoMIZRh3j/zkCBe4iOOmdb2/U0SqEI2ZamtT13RayXANTiIxVcCEprNmYGETzbyiM3OfI0uoSaToF+xRadk7sJMLiIDsN4JH+WRmTxiNExJeFkxq3u1ZDRuLchhGQ/NTOJaJWhJeua2Zwwtlx417Uv6QLB2z+UqJbTAhUvjRsFia+dz6p+0E4hQH1hDb2RNdvdHUymSP5FZxtHAidwNRYptKTd/GXF6MkmuGIk/xLZ49+CEfAZ2S091IuMqYn20YX9VknxDexH/q5AI8XUPlcEpGcJQCYkfUHfOxExVWo/TcRrMGiDerVmXfK2v5nQqK/N74a7j+ExI6L1HMeIIuJKLLQscxNBvVxRMWdySGafd2f44ccjEMdW58fdRgLL9CAf9feIjRppx9KKFghh0LHjvtHE8ubhkfMb5cllVIwrqe9RNm1YA2kS3muHlKYIlZeYp201d/vMi6s=';
  const _INTEGRITY_HASH = 'bc54f39068392bc752c13517be324261036614fcf821e8f3b07eb71c66a4900c';
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
