// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2],
      2: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v175 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v178 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:52:40:application',
    fs: ['at ./index.rsh:49:13:application call to [unknown function] (defined at: ./index.rsh:49:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v179 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:53:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:49:13:application call to [unknown function] (defined at: ./index.rsh:49:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v180 = stdlib.digest([ctc0, ctc0], [v179, v178]);
  const v182 = stdlib.protect(ctc0, await interact.getGuess(v178), {
    at: './index.rsh:56:42:application',
    fs: ['at ./index.rsh:49:13:application call to [unknown function] (defined at: ./index.rsh:49:17:function exp)'],
    msg: 'getGuess',
    who: 'Alice'
    });
  const v183 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:57:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:49:13:application call to [unknown function] (defined at: ./index.rsh:49:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v184 = stdlib.digest([ctc0, ctc0], [v183, v182]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v180, v184, v175],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0],
    pay: [v175, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v187, v188, v189], secs: v191, time: v190, didSend: v79, from: v186 } = txn1;
      
      sim_r.txns.push({
        amt: v189,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v187, v188, v189], secs: v191, time: v190, didSend: v79, from: v186 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v199, v200], secs: v202, time: v201, didSend: v92, from: v198 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v186, v187, v188, v189, v198, v199, v200, v179, v178, v183, v182],
    evt_cnt: 4,
    funcNum: 2,
    lct: v201,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:84:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v208, v209, v210, v211], secs: v213, time: v212, didSend: v104, from: v207 } = txn3;
      
      ;
      let v219;
      const v220 = stdlib.eq(v211, v200);
      if (v220) {
        v219 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      else {
        const v221 = stdlib.safeAdd(v209, v199);
        const v222 = stdlib.eq(v221, v211);
        const v224 = stdlib.eq(v221, v200);
        const v252 = v224 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v253 = v222 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v252;
        v219 = v253;
        }
      const v225 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v226 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v227 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v228 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v229 = v226 ? v227 : v228;
      const v230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v231 = v225 ? v230 : v229;
      const v232 = v231[stdlib.checkedBigNumberify('./index.rsh:93:20:array', stdlib.UInt_max, '0')];
      const v233 = v231[stdlib.checkedBigNumberify('./index.rsh:93:20:array', stdlib.UInt_max, '1')];
      const v234 = stdlib.safeMul(v232, v189);
      sim_r.txns.push({
        kind: 'from',
        to: v186,
        tok: undefined /* Nothing */
        });
      const v239 = stdlib.safeMul(v233, v189);
      sim_r.txns.push({
        kind: 'from',
        to: v198,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v208, v209, v210, v211], secs: v213, time: v212, didSend: v104, from: v207 } = txn3;
  ;
  const v214 = stdlib.addressEq(v186, v207);
  stdlib.assert(v214, {
    at: './index.rsh:84:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v215 = stdlib.digest([ctc0, ctc0], [v208, v209]);
  const v216 = stdlib.digestEq(v187, v215);
  stdlib.assert(v216, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:87:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v217 = stdlib.digest([ctc0, ctc0], [v210, v211]);
  const v218 = stdlib.digestEq(v188, v217);
  stdlib.assert(v218, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:88:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v219;
  const v220 = stdlib.eq(v211, v200);
  if (v220) {
    v219 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    }
  else {
    const v221 = stdlib.safeAdd(v209, v199);
    const v222 = stdlib.eq(v221, v211);
    const v224 = stdlib.eq(v221, v200);
    const v252 = v224 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v253 = v222 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v252;
    v219 = v253;
    }
  const v225 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v226 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v227 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v228 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v229 = v226 ? v227 : v228;
  const v230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v231 = v225 ? v230 : v229;
  const v232 = v231[stdlib.checkedBigNumberify('./index.rsh:93:20:array', stdlib.UInt_max, '0')];
  const v233 = v231[stdlib.checkedBigNumberify('./index.rsh:93:20:array', stdlib.UInt_max, '1')];
  const v234 = stdlib.safeMul(v232, v189);
  ;
  const v239 = stdlib.safeMul(v233, v189);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v219), {
    at: './index.rsh:103:24:application',
    fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v187, v188, v189], secs: v191, time: v190, didSend: v79, from: v186 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v189), {
    at: './index.rsh:67:25:application',
    fs: ['at ./index.rsh:66:11:application call to [unknown function] (defined at: ./index.rsh:66:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v196 = stdlib.protect(ctc1, await interact.getHand(), {
    at: './index.rsh:68:48:application',
    fs: ['at ./index.rsh:66:11:application call to [unknown function] (defined at: ./index.rsh:66:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  const v197 = stdlib.protect(ctc1, await interact.getGuess(v196), {
    at: './index.rsh:69:50:application',
    fs: ['at ./index.rsh:66:11:application call to [unknown function] (defined at: ./index.rsh:66:15:function exp)'],
    msg: 'getGuess',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v186, v187, v188, v189, v196, v197],
    evt_cnt: 2,
    funcNum: 1,
    lct: v190,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [v189, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v199, v200], secs: v202, time: v201, didSend: v92, from: v198 } = txn2;
      
      sim_r.txns.push({
        amt: v189,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v199, v200], secs: v202, time: v201, didSend: v92, from: v198 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 2,
    out_tys: [ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v208, v209, v210, v211], secs: v213, time: v212, didSend: v104, from: v207 } = txn3;
  ;
  const v214 = stdlib.addressEq(v186, v207);
  stdlib.assert(v214, {
    at: './index.rsh:84:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v215 = stdlib.digest([ctc1, ctc1], [v208, v209]);
  const v216 = stdlib.digestEq(v187, v215);
  stdlib.assert(v216, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:87:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v217 = stdlib.digest([ctc1, ctc1], [v210, v211]);
  const v218 = stdlib.digestEq(v188, v217);
  stdlib.assert(v218, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:88:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  let v219;
  const v220 = stdlib.eq(v211, v200);
  if (v220) {
    v219 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    }
  else {
    const v221 = stdlib.safeAdd(v209, v199);
    const v222 = stdlib.eq(v221, v211);
    const v224 = stdlib.eq(v221, v200);
    const v252 = v224 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v253 = v222 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v252;
    v219 = v253;
    }
  const v225 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v226 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v227 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v228 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v229 = v226 ? v227 : v228;
  const v230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v231 = v225 ? v230 : v229;
  const v232 = v231[stdlib.checkedBigNumberify('./index.rsh:93:20:array', stdlib.UInt_max, '0')];
  const v233 = v231[stdlib.checkedBigNumberify('./index.rsh:93:20:array', stdlib.UInt_max, '1')];
  const v234 = stdlib.safeMul(v232, v189);
  ;
  const v239 = stdlib.safeMul(v233, v189);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v219), {
    at: './index.rsh:103:24:application',
    fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAFAAECCGAmAwEAAAEBIjUAMRhBAnopZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAZ1JJAxAARskEkQkNAESRDQESSISTDQCEhFEKGQqZFBJNQNJSVcAIDX/IQRbNf6BkAFbNf1JNQVJSiJbNfwlWzX7gRBbNfqBGFs1+YAEuefdADT8FlA0+xZQNPoWUDT5FlCwNP8xABJENANXICA0/BY0+xZQARJENANXQCA0+hY0+RZQARJENPk0/RJBAAYjNfhCABw0+zQDgYgBWwg19yMiNPc0/RJNJDT3NPkSTTX4gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPgiEk2AEAAAAAAAAAACAAAAAAAAAAA0+CQSTTX3sSKyATT3Ils0/guyCCOyEDT/sgezsSKyATT3JVs0/guyCCOyEDQDV2ggsgezQgDcSCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf9XICA1/ldAIDX9IQRbNfxJNQVJIls1+yVbNfqABMe2CtU0+xZQNPoWULA0/IgA/jT/NP5QNP1QNPwWUDEAUDT7FlA0+hZQKEsBVwB/ZypLAVd/GWdIJDUBMgY1AkIAfEiBoI0GiADGIjQBEkQ0BEkiEkw0AhIRREk1BUlJVwAgNf9XICA1/oFAWzX9gAT3cC5PNP9QNP5QNP0WULA0/YgAjDEANP9QNP5QNP0WUChLAVcAaGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 152,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v187",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v187",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v208",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v209",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v208",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v209",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f6938038062000f6983398101604081905262000026916200025f565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a16020810151604001516200009f903414600762000158565b620000d4604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014f92600292019062000182565b50505062000333565b816200017e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200019090620002f6565b90600052602060002090601f016020900481019282620001b45760008555620001ff565b82601f10620001cf57805160ff1916838001178555620001ff565b82800160010185558215620001ff579182015b82811115620001ff578251825591602001919060010190620001e2565b506200020d92915062000211565b5090565b5b808211156200020d576000815560010162000212565b604051606081016001600160401b03811182821017156200025957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027357600080fd5b604080519081016001600160401b0381118282101715620002a457634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002be57600080fd5b620002c862000228565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030b57607f821691505b602082108114156200032d57634e487b7160e01b600052602260045260246000fd5b50919050565b610c2680620003436000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806342ae229d14610078578063832307571461008b5780639aad84dd146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610992565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae3660046109aa565b61032d565b3480156100bf57600080fd5b506100c86106a2565b60405161006f9291906109bc565b6100e6600160005414600961073f565b610100813515806100f957506001548235145b600a61073f565b60008080556002805461011290610a19565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610a19565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610a6a565b604080513381528435602080830191909152850135818301529084013560608201529091507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a161020681606001513414600861073f565b6102586040518060e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401523360808401528482013560a08401528481013560c0840152600260005543600155516103039183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0918201519181019190915260e00190565b6040516020818303038152906040526002908051906020019061032792919061081b565b50505050565b61033d600260005414600f61073f565b6103578135158061035057506001548235145b601061073f565b60008080556002805461036990610a19565b80601f016020809104026020016040519081016040528092919081815260200182805461039590610a19565b80156103e25780601f106103b7576101008083540402835291602001916103e2565b820191906000526020600020905b8154815290600101906020018083116103c557829003601f168201915b50505050508060200190518101906103fa9190610ae3565b905061040461089f565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527f6f154fd5b715ecf41fa770da8f116d6724d4843cd02ab82a721b1ac3e36d0d109060c00160405180910390a16104773415600b61073f565b815161048f906001600160a01b03163314600c61073f565b604080516104db916104b591602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836020015114600d61073f565b60408051606085810135602083015260808601359282019290925261052191016040516020818303038152906040528051906020012060001c836040015114600e61073f565b60c08201516080840135141561053a5760018152610583565b61054f83602001602001358360a00151610769565b6020820181905260808401351461057d578160c00151816020015114610576576001610580565b6000610580565b60025b81525b604081018051600090819052905160026020918201819052606084018051600190819052905183015260808401805182905251909101919091528151146105df578051156105d55780606001516105e5565b80604001516105e5565b80608001515b60a082018190528251905160608401516001600160a01b03909216916108fc9161060e916107bc565b6040518115909202916000818181858888f19350505050158015610636573d6000803e3d6000fd5b5081608001516001600160a01b03166108fc61065e8360a001516020015185606001516107bc565b6040518115909202916000818181858888f19350505050158015610686573d6000803e3d6000fd5b506000808055600181905561069d90600290610940565b505050565b6000606060005460028080546106b790610a19565b80601f01602080910402602001604051908101604052809291908181526020018280546106e390610a19565b80156107305780601f1061070557610100808354040283529160200191610730565b820191906000526020600020905b81548152906001019060200180831161071357829003601f168201915b50505050509050915091509091565b816107655760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826107768382610b97565b91508110156107b65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161075c565b92915050565b60008115806107e0575082826107d28183610baf565b92506107de9083610bce565b145b6107b65760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161075c565b82805461082790610a19565b90600052602060002090601f016020900481019282610849576000855561088f565b82601f1061086257805160ff191683800117855561088f565b8280016001018555821561088f579182015b8281111561088f578251825591602001919060010190610874565b5061089b92915061097d565b5090565b6040518060c0016040528060008152602001600081526020016108d5604051806040016040528060008152602001600081525090565b81526020016108f7604051806040016040528060008152602001600081525090565b8152602001610919604051806040016040528060008152602001600081525090565b815260200161093b604051806040016040528060008152602001600081525090565b905290565b50805461094c90610a19565b6000825580601f1061095c575050565b601f01602090049060005260206000209081019061097a919061097d565b50565b5b8082111561089b576000815560010161097e565b6000606082840312156109a457600080fd5b50919050565b600060a082840312156109a457600080fd5b82815260006020604081840152835180604085015260005b818110156109f0578581018301518582016060015282016109d4565b81811115610a02576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610a2d57607f821691505b602082108114156109a457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610a6557600080fd5b919050565b600060808284031215610a7c57600080fd5b6040516080810181811067ffffffffffffffff82111715610aad57634e487b7160e01b600052604160045260246000fd5b604052610ab983610a4e565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b600060e08284031215610af557600080fd5b60405160e0810181811067ffffffffffffffff82111715610b2657634e487b7160e01b600052604160045260246000fd5b604052610b3283610a4e565b8152602083015160208201526040830151604082015260608301516060820152610b5e60808401610a4e565b608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610baa57610baa610b81565b500190565b6000816000190483118215151615610bc957610bc9610b81565b500290565b600082610beb57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220105b9b70bbcb54085287a70c39db94c2c7b4f63f307db3f0443bb322c1a2bb4164736f6c634300080c0033`,
  BytecodeLen: 3945,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:62:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:75:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:100:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
