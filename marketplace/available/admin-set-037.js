// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'B6IJz8YiGkvlbJO5929cmSDILpg9L4IXfFX8oKRozuySf/jTYtkARS3mafn0gpVrjSAyIFzXzTTUpa1kTs63mez5WoVIdSpOb8PmgTec3O2JqitR0fXtg6iKNYIsw+C3parDKt6dQToj0gX6TKQkgwkLvpwDMvjsiac8FL9rQD7cUYlPHFZ8imSse+G0lx9gKXSz1P4VwAM1KSKosCGkQypWbIQerH/wCfeS8R3pdE/5EvQS337qOzwnO+88V8E8e8p43Wbf+V1ZK2bqXqMxmdqy4UHkSw3JFSBsALg/ctblYsmXRCCdNrHcO7oAr/FEIkfFabfr6sIwR/mFIyOAtqQBEz7wFHvPGQqfkjLw/KaOTkmh9Azc8KmMtpyPUrnuiHndDEKemxBvmRqYu3BPJihknR1xLocfUYe2NDNB5vabAT6bpBB/aBIFgTT/huGjXvIMNVC055dWPAD1Rv5mixdOIIyOWfFTN2nOgO0YrGt3kT9ORT1POVFsImVjiOgfSb4YDV79ED/EHhe2+DL1+Y59PUt8hhfxc2XhO4hV99M0E1DW6/vXob1Ch27Voy5Vm8GDRBkURX04FicTbLshK4SoqFJH0zqAN+4T2A9T/nknXMJdud2D3Ky1QCtbarQ2ajl6CAQ7mkADZ8AcpPvl7GhUcfDgdqdREnDLOLSwOdzpbDPIh5AP/XgOw7XyQ/ItOQIt7zF2q5XyknHIAnRD+V8jl6hYME9fm2FBQJXVac9Z6HHPALvnV54Sb0rmDdG7cnbkW8KmUbFPkscCWvRWpf9SxzqAVcLiqKNISWFGdTLQqodH/USe9ODX5g8+vP90KzFqfIcM9t7KK3A0+qZ1bsbsWypCXuOP/WiDUH3MW+sZxnMdntMlt+aIMNxx9DKcbS0fIIJfq8xFhGdYRNQDZxbNI/q4cGDR4JpyfUbGLXmXf4NKnVLKyfY1OGz2WBtB0yJitXD9bKnADNzrt1NpY/3LVoHCzPmX';
  const _INTEGRITY_HASH = '60b959eb31c5160ca02ca5414fbf52a140d6a5b262ace694e30da6f9fd2a61b4';
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
