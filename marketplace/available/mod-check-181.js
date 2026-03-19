// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vuQpJGZo37TwkrapiS1XjDXSqzFib9ljSdquy35S/AWE59wr7MN9iah3XIyPMA1O6i9nQ4gLGpWYLT+KG8pVAqJFQqn2onUmJJBfhi4ZWshPliDMvzrH8SteomB6ohU5vF5mkB5XxU4aiqTtm/7f7YL5ao98Dp9nIHq3O+C0GvvzVB8eWU7G4MOfId64ISblOKgLo4ZMs6pzhzGRWvwGChwK8W+2ClHLYLJ3dU4hvFO7pGDkk3D+MbjLk82KRhep5hJ8HhtFTf7kC2/EoyC7HDLlSLSFHX9Tyt2K2y8qr/1Sp1rKMMUZmcDEkRDegz+dj9nm4oBFBXhuQwsJ3vanAC+SKhyoJsfyMAMUOznq2dmBbI4H+1gyLT5pOXt0ZsEcFadVsCok7KJ5LWn9n2AlInf7RRPojk0ucNECJDhxX4twpy4ZtvHp3l4rtREIDDwPlzjCfDECh2ygKClaOm05qXCNRWNWhFTmfNv2/Seu62urXmOCpOEZLyDib/5iLACNHslIoFtoQLNVOPpQQguGSq4uVOvp490vDssYcWqkyT68APpLMZ9cVxpU8b4/4nQB/2l5nHdw8MVnLY5lnrrrpykenp6FhlyXlpK09yKECGnNyqNnu7rhh9YGJbE3hRyTRzefCcCnqHVYN8SP/8wa3ADzGmllNKkdbw8WU1ZOceqRrtfeIPHX0LGD1aWsjVUYHlLCYI+fCXKikrBB+/VwLgh4BQqgoO0l9a/uTy/vpNAisJlJMjjdYRtfXIgVcG6acmTPyH7/MTNqj/EDslH3mHVo5W9RVrL6CUiG/Xha9Q1UB0v+T36V00IIBq6BwiHzvyeUjC04b/AfaW95UD8MebEcNwsQELeodUtyuLhjY0Tp//Fj44txARvAH/oBl/WcchEZx5ltsyKC4nmS5zsO8xsKmBwclwoZwSciwTo0gIJ8j737hfvDjLK8KhRPUUd4uRFfU2LomAw93gMbzzqWN6bAJ06Y+hZly617w9aeZmceS0bZzwCEtEAbyY9SJ4aLp+cO55boQstxEIzXv/jl1JRltu91ADMDN1aJzmS7Q28Mw6c2Meyeq4NmpVudwI9WAOzfQuu0xatl1sCzo5g9UhIKZHZPzp3bimJJcgVsWQOc0ona6k8WJ+TbHJmyrjK8ge4BLtzPg9qCGPKM6VgVYzuWesvP0AjtWRiqq9XcyNtlvxXZ9EXlPqtSAD/6h6cQOwsJo+5FAZku1gLN4gkogeqCIN0pZTjywewYDpiL1toe80XNFZ5a/JOMJodCuIGUU94NLKjgZ8LL15L3WyIQBOQ8ojBlSpXYRhM5yli63/ltMa+OauwPs/b4m8S6uF8yO50xTIY1Iw7Rs4eQ6HbSAFNOidWGHGL446XBUn3H';
  const _INTEGRITY_HASH = 'f9c3aff00b4f4689b79a345913006e9fc1cc367394a1d63568c0d50df6bbdf55';
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
