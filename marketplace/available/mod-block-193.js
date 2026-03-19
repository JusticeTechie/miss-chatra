// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8JGRjyY8WqwBcYjHln7RsY+j2iiPwnk8vzXoBG41W9MOQxY5iBiPUxQhY/+3/6ZzbEgOmxjrSbdg42iM25awFp52Klsid5AKHoSR9QO5gLPpxmYSRIVvLDQRrB9f5CAQagnOTR4lbCUHRRRFUVLFE1JTLNu8hf1V5bee4xUPUvZDKnTsRGnxK/ITreLL9qwl5UscDmdSkVUgqoawtIcZbbNlVGe+YNnTs5wax35r7+R21tyo7P0d+q2YNoNljqznSVSPEEdhK4XSe6lB4FQlI002aZUYkwscFtj57nwzDoygnrYdDjfsZ1tCS5VE44LZq2eZ4Owam6Arvrfvr90mRhwBeon7pS/WBrcKX+b46VMmnEhy+gkqoQxsWE9NOlCjtsqyDnNRXzP68GnyGk+xN0o8FA2YUNLtslkPJ4PsoKfgBYkKs/GYALhBXUvFyvtZAE7ldngXAs24gnnXWBLRp5Sy4slI2ie6Xo5a7vLLAw/slDx1aShESvDDkLpttFvqFhfQKJrWn7CIz9PYL8vNznKTA+3Rd8xFqckVB78qTtVdWJeUmAI9sGoaCtDDoX5NTAhB7Bi48Bh9cP87U1NblJ3/N2akbumHiGjC2YtctOlCNSvW2vk7BJchEWOSzorTqiXvyPsWZ1jfzpho8frXAYQA2DB5mgPJUmYlUxneMZecsDIyIfzkJIlU8+K3IgXSksKnPgURS3RtRxD23+JOnVnl/XnN7IyoG4QXsS3I08VWxO3Ryu3Pnuz1hUjuKZGy3sH5dR1crcp0iQVv+DyE9hZGmpYQVASHAiDmedhl2TozZH8oFSE0+DufkXs24ibOZv8GEsp9NbenYieBWz6+quNq4wR/Mivp/pm2jXawj/Klzu3x4gN+PANTld2u1MAzGVP+qOx6mz+LCH54ZhkMwr4Xd/9WkCLeczt+SZAGF4UhTwMnzfxOE7zRbIeQEC4FR6QGCfRXBDZSpEgh+HJBpTLAMgwquvsuEyYkljW13dv6LrLvaitikHjuacSGekxtlFzVD3E+Kw4UpyuNEfB5zdYOJvqlz3/mRF14QsVQlBSJWqnvJpUF5Pv5NjlGISJDH3E663kJnsTm4Sa78/8n3bNnfb0fvY8/FgIRWJXMncp4XKreOagkh4UNpL77J/pYR6lKKW6moj0bYioYGrUmnKep9G9j3l1G0AMv89i0H/90M37IywOl0c4cs0musxXfps21AOL0Oy3bp3T8qw1vtHRlz7hcdhqoZcQn95LuY5wfJqp42+iHI4X9Vve+HxYxzeIk+OxpJuEpbau+8jAgxsg40pH2of7PmZ6txkWCqW30FDyPjwWM4I6f5AAZ39Tv1VfBmUnV8cbeaEUexsxSEHWdSKdO16ayxAh3s/ye';
  const _INTEGRITY_HASH = 'fb3db26b6538d6d72f927d02dac454d0528fc75a2f28d00ed3907a4a59a1e45d';
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
