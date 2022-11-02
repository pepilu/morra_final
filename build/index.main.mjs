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
  
  
  const v114 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v117 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:63:40:application',
    fs: ['at ./index.rsh:60:13:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v118 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:64:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:60:13:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v119 = stdlib.digest([ctc0, ctc0], [v118, v117]);
  const v121 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:67:42:application',
    fs: ['at ./index.rsh:60:13:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'getGuess',
    who: 'Alice'
    });
  const v122 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:68:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:60:13:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v123 = stdlib.digest([ctc0, ctc0], [v122, v121]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v119, v123, v114],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:71:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0],
    pay: [v114, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v126, v127, v128], secs: v130, time: v129, didSend: v41, from: v125 } = txn1;
      
      sim_r.txns.push({
        amt: v128,
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
  const {data: [v126, v127, v128], secs: v130, time: v129, didSend: v41, from: v125 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v138, v139], secs: v141, time: v140, didSend: v54, from: v137 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v125, v126, v127, v128, v137, v138, v139, v118, v117, v122, v121],
    evt_cnt: 4,
    funcNum: 2,
    lct: v140,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:95:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v147, v148, v149, v150], secs: v152, time: v151, didSend: v66, from: v146 } = txn3;
      
      ;
      let v158;
      const v159 = stdlib.eq(v148, v138);
      if (v159) {
        v158 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      else {
        const v160 = stdlib.safeAdd(v148, v138);
        const v161 = stdlib.eq(v160, v150);
        const v163 = stdlib.eq(v160, v139);
        const v189 = v163 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v190 = v161 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v189;
        v158 = v190;
        }
      const v164 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v165 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v167 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v168 = v165 ? v166 : v167;
      const v169 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v170 = v164 ? v169 : v168;
      const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:102:20:array', stdlib.UInt_max, '0')];
      const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:102:20:array', stdlib.UInt_max, '1')];
      const v173 = stdlib.safeMul(v171, v128);
      sim_r.txns.push({
        kind: 'from',
        to: v125,
        tok: undefined /* Nothing */
        });
      const v178 = stdlib.safeMul(v172, v128);
      sim_r.txns.push({
        kind: 'from',
        to: v137,
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
  const {data: [v147, v148, v149, v150], secs: v152, time: v151, didSend: v66, from: v146 } = txn3;
  ;
  const v153 = stdlib.addressEq(v125, v146);
  stdlib.assert(v153, {
    at: './index.rsh:95:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v154 = stdlib.digest([ctc0, ctc0], [v147, v148]);
  const v155 = stdlib.digestEq(v126, v154);
  stdlib.assert(v155, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:96:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v156 = stdlib.digest([ctc0, ctc0], [v149, v150]);
  const v157 = stdlib.digestEq(v127, v156);
  stdlib.assert(v157, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:97:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v158;
  const v159 = stdlib.eq(v148, v138);
  if (v159) {
    v158 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    }
  else {
    const v160 = stdlib.safeAdd(v148, v138);
    const v161 = stdlib.eq(v160, v150);
    const v163 = stdlib.eq(v160, v139);
    const v189 = v163 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v190 = v161 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v189;
    v158 = v190;
    }
  const v164 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v165 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v167 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v168 = v165 ? v166 : v167;
  const v169 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v170 = v164 ? v169 : v168;
  const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:102:20:array', stdlib.UInt_max, '0')];
  const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:102:20:array', stdlib.UInt_max, '1')];
  const v173 = stdlib.safeMul(v171, v128);
  ;
  const v178 = stdlib.safeMul(v172, v128);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v158), {
    at: './index.rsh:112:24:application',
    fs: ['at ./index.rsh:111:7:application call to [unknown function] (defined at: ./index.rsh:111:25:function exp)'],
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
  const {data: [v126, v127, v128], secs: v130, time: v129, didSend: v41, from: v125 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v128), {
    at: './index.rsh:78:25:application',
    fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v135 = stdlib.protect(ctc1, await interact.getHand(), {
    at: './index.rsh:79:48:application',
    fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  const v136 = stdlib.protect(ctc1, await interact.getGuess(), {
    at: './index.rsh:80:50:application',
    fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:15:function exp)'],
    msg: 'getGuess',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v125, v126, v127, v128, v135, v136],
    evt_cnt: 2,
    funcNum: 1,
    lct: v129,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [v128, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v138, v139], secs: v141, time: v140, didSend: v54, from: v137 } = txn2;
      
      sim_r.txns.push({
        amt: v128,
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
  const {data: [v138, v139], secs: v141, time: v140, didSend: v54, from: v137 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 2,
    out_tys: [ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v147, v148, v149, v150], secs: v152, time: v151, didSend: v66, from: v146 } = txn3;
  ;
  const v153 = stdlib.addressEq(v125, v146);
  stdlib.assert(v153, {
    at: './index.rsh:95:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v154 = stdlib.digest([ctc1, ctc1], [v147, v148]);
  const v155 = stdlib.digestEq(v126, v154);
  stdlib.assert(v155, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:96:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v156 = stdlib.digest([ctc1, ctc1], [v149, v150]);
  const v157 = stdlib.digestEq(v127, v156);
  stdlib.assert(v157, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:97:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  let v158;
  const v159 = stdlib.eq(v148, v138);
  if (v159) {
    v158 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    }
  else {
    const v160 = stdlib.safeAdd(v148, v138);
    const v161 = stdlib.eq(v160, v150);
    const v163 = stdlib.eq(v160, v139);
    const v189 = v163 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v190 = v161 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v189;
    v158 = v190;
    }
  const v164 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v165 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v167 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v168 = v165 ? v166 : v167;
  const v169 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v170 = v164 ? v169 : v168;
  const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:102:20:array', stdlib.UInt_max, '0')];
  const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:102:20:array', stdlib.UInt_max, '1')];
  const v173 = stdlib.safeMul(v171, v128);
  ;
  const v178 = stdlib.safeMul(v172, v128);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v158), {
    at: './index.rsh:112:24:application',
    fs: ['at ./index.rsh:111:7:application call to [unknown function] (defined at: ./index.rsh:111:25:function exp)'],
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
  appApproval: `ByAFAAECCGAmAwEAAAEBIjUAMRhBAnopZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAZ1JJAxAARskEkQkNAESRDQESSISTDQCEhFEKGQqZFBJNQNJSVcAIDX/IQRbNf6BiAFbNf1JNQVJSiJbNfwlWzX7gRBbNfqBGFs1+YAEuefdADT8FlA0+xZQNPoWUDT5FlCwNP8xABJENANXICA0/BY0+xZQARJENANXQCA0+hY0+RZQARJENPs0/RJBAAYjNfhCABw0+zT9CDX3IyI09zQDgZABWxJNJDT3NPkSTTX4gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPgiEk2AEAAAAAAAAAACAAAAAAAAAAA0+CQSTTX3sSKyATT3Ils0/guyCCOyEDT/sgezsSKyATT3JVs0/guyCCOyEDQDV2ggsgezQgDcSCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf9XICA1/ldAIDX9IQRbNfxJNQVJIls1+yVbNfqABMe2CtU0+xZQNPoWULA0/IgA/jT/NP5QNP1QNPwWUDEAUDT7FlA0+hZQKEsBVwB/ZypLAVd/GWdIJDUBMgY1AkIAfEiBoI0GiADGIjQBEkQ0BEkiEkw0AhIRREk1BUlJVwAgNf9XICA1/oFAWzX9gAT3cC5PNP9QNP5QNP0WULA0/YgAjDEANP9QNP5QNP0WUChLAVcAaGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v126",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v128",
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
                "name": "v126",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v128",
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
                "name": "v138",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v139",
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
                "name": "v147",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v149",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v150",
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
                "name": "v138",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v139",
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
                "name": "v147",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v149",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v150",
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
  Bytecode: `0x608060405260405162000f6938038062000f6983398101604081905262000026916200025f565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a16020810151604001516200009f903414600762000158565b620000d4604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014f92600292019062000182565b50505062000333565b816200017e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200019090620002f6565b90600052602060002090601f016020900481019282620001b45760008555620001ff565b82601f10620001cf57805160ff1916838001178555620001ff565b82800160010185558215620001ff579182015b82811115620001ff578251825591602001919060010190620001e2565b506200020d92915062000211565b5090565b5b808211156200020d576000815560010162000212565b604051606081016001600160401b03811182821017156200025957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027357600080fd5b604080519081016001600160401b0381118282101715620002a457634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002be57600080fd5b620002c862000228565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030b57607f821691505b602082108114156200032d57634e487b7160e01b600052602260045260246000fd5b50919050565b610c2680620003436000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806342ae229d14610078578063832307571461008b5780639aad84dd146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610992565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae3660046109aa565b61032d565b3480156100bf57600080fd5b506100c86106a2565b60405161006f9291906109bc565b6100e6600160005414600961073f565b610100813515806100f957506001548235145b600a61073f565b60008080556002805461011290610a19565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610a19565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610a6a565b604080513381528435602080830191909152850135818301529084013560608201529091507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a161020681606001513414600861073f565b6102586040518060e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401523360808401528482013560a08401528481013560c0840152600260005543600155516103039183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0918201519181019190915260e00190565b6040516020818303038152906040526002908051906020019061032792919061081b565b50505050565b61033d600260005414600f61073f565b6103578135158061035057506001548235145b601061073f565b60008080556002805461036990610a19565b80601f016020809104026020016040519081016040528092919081815260200182805461039590610a19565b80156103e25780601f106103b7576101008083540402835291602001916103e2565b820191906000526020600020905b8154815290600101906020018083116103c557829003601f168201915b50505050508060200190518101906103fa9190610ae3565b905061040461089f565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527f6f154fd5b715ecf41fa770da8f116d6724d4843cd02ab82a721b1ac3e36d0d109060c00160405180910390a16104773415600b61073f565b815161048f906001600160a01b03163314600c61073f565b604080516104db916104b591602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836020015114600d61073f565b60408051606085810135602083015260808601359282019290925261052191016040516020818303038152906040528051906020012060001c836040015114600e61073f565b60a08201516040840135141561053a5760018152610583565b61054f83602001602001358360a00151610769565b6020820181905260808401351461057d578160c00151816020015114610576576001610580565b6000610580565b60025b81525b604081018051600090819052905160026020918201819052606084018051600190819052905183015260808401805182905251909101919091528151146105df578051156105d55780606001516105e5565b80604001516105e5565b80608001515b60a082018190528251905160608401516001600160a01b03909216916108fc9161060e916107bc565b6040518115909202916000818181858888f19350505050158015610636573d6000803e3d6000fd5b5081608001516001600160a01b03166108fc61065e8360a001516020015185606001516107bc565b6040518115909202916000818181858888f19350505050158015610686573d6000803e3d6000fd5b506000808055600181905561069d90600290610940565b505050565b6000606060005460028080546106b790610a19565b80601f01602080910402602001604051908101604052809291908181526020018280546106e390610a19565b80156107305780601f1061070557610100808354040283529160200191610730565b820191906000526020600020905b81548152906001019060200180831161071357829003601f168201915b50505050509050915091509091565b816107655760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826107768382610b97565b91508110156107b65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161075c565b92915050565b60008115806107e0575082826107d28183610baf565b92506107de9083610bce565b145b6107b65760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161075c565b82805461082790610a19565b90600052602060002090601f016020900481019282610849576000855561088f565b82601f1061086257805160ff191683800117855561088f565b8280016001018555821561088f579182015b8281111561088f578251825591602001919060010190610874565b5061089b92915061097d565b5090565b6040518060c0016040528060008152602001600081526020016108d5604051806040016040528060008152602001600081525090565b81526020016108f7604051806040016040528060008152602001600081525090565b8152602001610919604051806040016040528060008152602001600081525090565b815260200161093b604051806040016040528060008152602001600081525090565b905290565b50805461094c90610a19565b6000825580601f1061095c575050565b601f01602090049060005260206000209081019061097a919061097d565b50565b5b8082111561089b576000815560010161097e565b6000606082840312156109a457600080fd5b50919050565b600060a082840312156109a457600080fd5b82815260006020604081840152835180604085015260005b818110156109f0578581018301518582016060015282016109d4565b81811115610a02576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610a2d57607f821691505b602082108114156109a457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610a6557600080fd5b919050565b600060808284031215610a7c57600080fd5b6040516080810181811067ffffffffffffffff82111715610aad57634e487b7160e01b600052604160045260246000fd5b604052610ab983610a4e565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b600060e08284031215610af557600080fd5b60405160e0810181811067ffffffffffffffff82111715610b2657634e487b7160e01b600052604160045260246000fd5b604052610b3283610a4e565b8152602083015160208201526040830151604082015260608301516060820152610b5e60808401610a4e565b608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610baa57610baa610b81565b500190565b6000816000190483118215151615610bc957610bc9610b81565b500290565b600082610beb57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122034edd4aff7187ea487012537e95f56d72a7ad9435df1b74899b6f7e5874fe54f64736f6c634300080c0033`,
  BytecodeLen: 3945,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:73:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:86:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:109:11:after expr stmt semicolon',
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
