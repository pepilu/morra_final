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
      1: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2],
      3: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc2, ctc2, ctc2]
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
  
  
  const v242 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v243 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v246 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:62:40:application',
    fs: ['at ./index.rsh:59:13:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v247 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:63:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:59:13:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v248 = stdlib.digest([ctc0, ctc0], [v247, v246]);
  const v250 = stdlib.protect(ctc0, await interact.getGuess(v246), {
    at: './index.rsh:66:42:application',
    fs: ['at ./index.rsh:59:13:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)'],
    msg: 'getGuess',
    who: 'Alice'
    });
  const v251 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:67:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:59:13:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v252 = stdlib.digest([ctc0, ctc0], [v251, v250]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v248, v252, v243, v242],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:72:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0, ctc0],
    pay: [v243, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v255, v256, v257, v258], secs: v260, time: v259, didSend: v81, from: v254 } = txn1;
      
      sim_r.txns.push({
        amt: v257,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v269 = stdlib.safeAdd(v259, v258);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v255, v256, v257, v258], secs: v260, time: v259, didSend: v81, from: v254 } = txn1;
  ;
  const v269 = stdlib.safeAdd(v259, v258);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: ['time', v269],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v254, v255, v256, v257, v258, v269],
      evt_cnt: 0,
      funcNum: 2,
      lct: v259,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v355, time: v354, didSend: v194, from: v353 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v254,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc1, ctc1, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v355, time: v354, didSend: v194, from: v353 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:55:29:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:86:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v276, v277], secs: v279, time: v278, didSend: v94, from: v275 } = txn2;
    const v281 = stdlib.add(v257, v257);
    ;
    const v288 = stdlib.safeAdd(v278, v258);
    const txn3 = await (ctc.sendrecv({
      args: [v254, v255, v256, v257, v275, v276, v277, v281, v288, v247, v246, v251, v250],
      evt_cnt: 4,
      funcNum: 3,
      lct: v278,
      onlyIf: true,
      out_tys: [ctc0, ctc0, ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:97:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v293, v294, v295, v296], secs: v298, time: v297, didSend: v106, from: v292 } = txn3;
        
        ;
        let v304;
        const v305 = stdlib.eq(v296, v277);
        if (v305) {
          v304 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          }
        else {
          const v306 = stdlib.safeAdd(v294, v276);
          const v307 = stdlib.eq(v306, v296);
          const v309 = stdlib.eq(v306, v277);
          const v370 = v309 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v371 = v307 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v370;
          v304 = v371;
          }
        const v310 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v311 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v312 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v313 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v314 = v311 ? v312 : v313;
        const v315 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v316 = v310 ? v315 : v314;
        const v317 = v316[stdlib.checkedBigNumberify('./index.rsh:107:20:array', stdlib.UInt_max, '0')];
        const v318 = v316[stdlib.checkedBigNumberify('./index.rsh:107:20:array', stdlib.UInt_max, '1')];
        const v319 = stdlib.safeMul(v317, v257);
        sim_r.txns.push({
          kind: 'from',
          to: v254,
          tok: undefined /* Nothing */
          });
        const v324 = stdlib.safeMul(v318, v257);
        sim_r.txns.push({
          kind: 'from',
          to: v275,
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
      timeoutAt: ['time', v288],
      tys: [ctc3, ctc1, ctc1, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v254, v255, v256, v257, v275, v276, v277, v281, v288],
        evt_cnt: 0,
        funcNum: 4,
        lct: v278,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v337, time: v336, didSend: v163, from: v335 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v275,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc1, ctc1, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v337, time: v336, didSend: v163, from: v335 } = txn4;
      ;
      const v338 = stdlib.addressEq(v254, v335);
      const v339 = stdlib.addressEq(v275, v335);
      const v340 = v338 ? true : v339;
      stdlib.assert(v340, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:98:49:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:55:29:application',
        fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:98:49:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v293, v294, v295, v296], secs: v298, time: v297, didSend: v106, from: v292 } = txn3;
      ;
      const v299 = stdlib.addressEq(v254, v292);
      stdlib.assert(v299, {
        at: './index.rsh:97:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v300 = stdlib.digest([ctc0, ctc0], [v293, v294]);
      const v301 = stdlib.digestEq(v255, v300);
      stdlib.assert(v301, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./index.rsh:101:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v302 = stdlib.digest([ctc0, ctc0], [v295, v296]);
      const v303 = stdlib.digestEq(v256, v302);
      stdlib.assert(v303, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./index.rsh:102:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      let v304;
      const v305 = stdlib.eq(v296, v277);
      if (v305) {
        v304 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      else {
        const v306 = stdlib.safeAdd(v294, v276);
        const v307 = stdlib.eq(v306, v296);
        const v309 = stdlib.eq(v306, v277);
        const v370 = v309 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v371 = v307 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v370;
        v304 = v371;
        }
      const v310 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v311 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v312 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v313 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v314 = v311 ? v312 : v313;
      const v315 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v316 = v310 ? v315 : v314;
      const v317 = v316[stdlib.checkedBigNumberify('./index.rsh:107:20:array', stdlib.UInt_max, '0')];
      const v318 = v316[stdlib.checkedBigNumberify('./index.rsh:107:20:array', stdlib.UInt_max, '1')];
      const v319 = stdlib.safeMul(v317, v257);
      ;
      const v324 = stdlib.safeMul(v318, v257);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v304), {
        at: './index.rsh:117:24:application',
        fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    
    }
  
  
  
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
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v255, v256, v257, v258], secs: v260, time: v259, didSend: v81, from: v254 } = txn1;
  ;
  const v269 = stdlib.safeAdd(v259, v258);
  stdlib.protect(ctc2, await interact.acceptWager(v257), {
    at: './index.rsh:79:25:application',
    fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v273 = stdlib.protect(ctc1, await interact.getHand(), {
    at: './index.rsh:80:48:application',
    fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  const v274 = stdlib.protect(ctc1, await interact.getGuess(v273), {
    at: './index.rsh:81:50:application',
    fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:15:function exp)'],
    msg: 'getGuess',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v254, v255, v256, v257, v258, v269, v273, v274],
    evt_cnt: 2,
    funcNum: 1,
    lct: v259,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [v257, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v276, v277], secs: v279, time: v278, didSend: v94, from: v275 } = txn2;
      
      const v281 = stdlib.add(v257, v257);
      sim_r.txns.push({
        amt: v257,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v288 = stdlib.safeAdd(v278, v258);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v269],
    tys: [ctc3, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v254, v255, v256, v257, v258, v269],
      evt_cnt: 0,
      funcNum: 2,
      lct: v259,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v355, time: v354, didSend: v194, from: v353 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v254,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v355, time: v354, didSend: v194, from: v353 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:55:29:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:86:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v276, v277], secs: v279, time: v278, didSend: v94, from: v275 } = txn2;
    const v281 = stdlib.add(v257, v257);
    ;
    const v288 = stdlib.safeAdd(v278, v258);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 4,
      funcNum: 3,
      out_tys: [ctc1, ctc1, ctc1, ctc1],
      timeoutAt: ['time', v288],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v254, v255, v256, v257, v275, v276, v277, v281, v288],
        evt_cnt: 0,
        funcNum: 4,
        lct: v278,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v337, time: v336, didSend: v163, from: v335 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v275,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v337, time: v336, didSend: v163, from: v335 } = txn4;
      ;
      const v338 = stdlib.addressEq(v254, v335);
      const v339 = stdlib.addressEq(v275, v335);
      const v340 = v338 ? true : v339;
      stdlib.assert(v340, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:98:49:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:55:29:application',
        fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:98:49:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v293, v294, v295, v296], secs: v298, time: v297, didSend: v106, from: v292 } = txn3;
      ;
      const v299 = stdlib.addressEq(v254, v292);
      stdlib.assert(v299, {
        at: './index.rsh:97:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v300 = stdlib.digest([ctc1, ctc1], [v293, v294]);
      const v301 = stdlib.digestEq(v255, v300);
      stdlib.assert(v301, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./index.rsh:101:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v302 = stdlib.digest([ctc1, ctc1], [v295, v296]);
      const v303 = stdlib.digestEq(v256, v302);
      stdlib.assert(v303, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./index.rsh:102:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      let v304;
      const v305 = stdlib.eq(v296, v277);
      if (v305) {
        v304 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      else {
        const v306 = stdlib.safeAdd(v294, v276);
        const v307 = stdlib.eq(v306, v296);
        const v309 = stdlib.eq(v306, v277);
        const v370 = v309 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v371 = v307 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v370;
        v304 = v371;
        }
      const v310 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v311 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v312 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v313 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v314 = v311 ? v312 : v313;
      const v315 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v316 = v310 ? v315 : v314;
      const v317 = v316[stdlib.checkedBigNumberify('./index.rsh:107:20:array', stdlib.UInt_max, '0')];
      const v318 = v316[stdlib.checkedBigNumberify('./index.rsh:107:20:array', stdlib.UInt_max, '1')];
      const v319 = stdlib.safeMul(v317, v257);
      ;
      const v324 = stdlib.safeMul(v318, v257);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v304), {
        at: './index.rsh:117:24:application',
        fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAJAAEDCAJgBKABcCYDAQABAQAiNQAxGEEDXypkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAcZJJAxAAYJJIQYMQABXIQYSRCQ0ARJENARJIhJMNAISEUQoZClkUEk1A1doIDX/gASRJzTzsDIGNAMhB1sPRDQDVwAgMQASNP8xABIRRLEisgE0A4GYAVuyCCOyEDT/sgezQgJ9SCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lJVwAgNf8hBVs1/oGQAVs1/Uk1BUlKIls1/CVbNfuBEFs1+oEYWzX5gAQXE6HjNPwWUDT7FlA0+hZQNPkWULAyBjQDIQdbDEQ0/zEAEkQ0A1cgIDT8FjT7FlABEkQ0A1dAIDT6FjT5FlABEkQ0+TT9EkEABiM1+EIAHTT7NAOBiAFbCDX3IyI09zT9Ek0hBDT3NPkSTTX4gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPgiEk2AEAAAAAAAAAACAAAAAAAAAAA0+CEEEk0197EisgE09yJbNP4LsggjshA0/7IHs7EisgE09yVbNP4LsggjshA0A1doILIHs0IBWUgjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQhbD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgEbSSMMQACdSCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf9XICA1/ldAIDX9IQVbNfxJNQVJIls1+yVbNfqABMe2CtU0+xZQNPoWULAyBjQDIQhbDEQ0/EkINfk0/IgBJzIGNAOBaFsINfg0/zT+UDT9UDT8FlAxAFA0+xZQNPoWUDT5FlA0+BZQKEsBVwB/ZylLAVd/KWdIJDUBMgY1AkIAlEiBoI0GiADdIjQBEkQ0BEkiEkw0AhIRREk1BUlKVwAgNf9XICA1/oFAWzX9gUhbNfyABB1dZiQ0/1A0/lA0/RZQNPwWULA0/YgAmjIGNPwINfsxADT/UDT+UDT9FlA0/BZQNPsWUChLAVcAeGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
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
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v257",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v258",
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
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v257",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v258",
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
                "name": "v276",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v277",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "name": "v293",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v294",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v295",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v296",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v276",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v277",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v293",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v294",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v295",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v296",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620014a1380380620014a18339810160408190526200002691620002ed565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606080830191909152928401516080820152919092015160a08201527f470a4274e1f9c3e254bd7c4ecaf5e5f5613417d1b7f0c7b386f5aaacf730e6989060c00160405180910390a1602082015160400151620000b790341460076200018e565b620000d143836020015160600151620001b960201b60201c565b81526040805160c08082018352600060208084018281528486018381526060808701858152608080890187815260a0808b0189815233808d528f8a018051518a5280518b0151895280518f015187525187015184528e51825260019a8b905543909a558c51808a019a909a529651898d0152945193880193909352905190860152519084015251828401528451808303909301835260e09091019093528051919262000184926002929091019062000210565b50505050620003f2565b81620001b55760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600082620001c883826200038e565b91508110156200020a5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401620001ac565b92915050565b8280546200021e90620003b5565b90600052602060002090601f0160209004810192826200024257600085556200028d565b82601f106200025d57805160ff19168380011785556200028d565b828001600101855582156200028d579182015b828111156200028d57825182559160200191906001019062000270565b506200029b9291506200029f565b5090565b5b808211156200029b5760008155600101620002a0565b604051608081016001600160401b0381118282101715620002e757634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200030157600080fd5b604080519081016001600160401b03811182821017156200033257634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200034c57600080fd5b62000356620002b6565b915060208401518252604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b60008219821115620003b057634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003ca57607f821691505b60208210811415620003ec57634e487b7160e01b600052602260045260246000fd5b50919050565b61109f80620004026000396000f3fe60806040526004361061006e5760003560e01c80637eea518c1161004b5780637eea518c146100c157806383230757146100d4578063a7661d54146100e9578063ab53f2c6146100fc57005b80631e93b0f11461007757806342ae229d1461009b5780634725882f146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610d85565b61011f565b6100756100bc366004610d9d565b6103f8565b6100756100cf366004610daf565b61077f565b3480156100e057600080fd5b50600154610088565b6100756100f7366004610daf565b6108fd565b34801561010857600080fd5b50610111610a99565b604051610092929190610dc1565b61012f6001600054146009610b36565b6101498135158061014257506001548235145b600a610b36565b60008080556002805461015b90610e1e565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610e1e565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ea7565b905061020b604051806040016040528060008152602001600081525090565b61021c8260a001514310600b610b36565b604080513381528435602080830191909152850135818301529084013560608201527f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a160608201805180018252516102839034146008610b36565b610291438360800151610b5c565b8160200181815250506102fb60405180610120016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152606080860151908401523360808401528582013560a08401528581013560c0840152835160e084015283820151610100840152600360005543600155516103cd9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906103f1929190610c0e565b5050505050565b6104086003600054146014610b36565b6104228135158061041b57506001548235145b6015610b36565b60008080556002805461043490610e1e565b80601f016020809104026020016040519081016040528092919081815260200182805461046090610e1e565b80156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b50505050508060200190518101906104c59190610f34565b90506104cf610c92565b6104e182610100015143106016610b36565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527f64484377c667f92fce5f46b65350e6c337bb010f75969d1dd12763957840ce949060c00160405180910390a161055434156010610b36565b815161056c906001600160a01b031633146011610b36565b604080516105b89161059291602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360200151146012610b36565b6040805160608581013560208301526080860135928201929092526105fe91016040516020818303038152906040528051906020012060001c8360400151146013610b36565b60c0820151608084013514156106175760018152610660565b61062c83602001602001358360a00151610b5c565b6020820181905260808401351461065a578160c0015181602001511461065357600161065d565b600061065d565b60025b81525b604081018051600090819052905160026020918201819052606084018051600190819052905183015260808401805182905251909101919091528151146106bc578051156106b25780606001516106c2565b80604001516106c2565b80608001515b60a082018190528251905160608401516001600160a01b03909216916108fc916106eb91610baf565b6040518115909202916000818181858888f19350505050158015610713573d6000803e3d6000fd5b5081608001516001600160a01b03166108fc61073b8360a00151602001518560600151610baf565b6040518115909202916000818181858888f19350505050158015610763573d6000803e3d6000fd5b506000808055600181905561077a90600290610d33565b505050565b61078f600160005414600d610b36565b6107a9813515806107a257506001548235145b600e610b36565b6000808055600280546107bb90610e1e565b80601f01602080910402602001604051908101604052809291908181526020018280546107e790610e1e565b80156108345780601f1061080957610100808354040283529160200191610834565b820191906000526020600020905b81548152906001019060200180831161081757829003601f168201915b505050505080602001905181019061084c9190610ea7565b90506108608160a00151431015600f610b36565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610891929190610fbd565b60405180910390a16108a53415600c610b36565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108e2573d6000803e3d6000fd5b50600080805560018190556108f990600290610d33565b5050565b61090d6003600054146019610b36565b6109278135158061092057506001548235145b601a610b36565b60008080556002805461093990610e1e565b80601f016020809104026020016040519081016040528092919081815260200182805461096590610e1e565b80156109b25780601f10610987576101008083540402835291602001916109b2565b820191906000526020600020905b81548152906001019060200180831161099557829003601f168201915b50505050508060200190518101906109ca9190610f34565b90506109df816101000151431015601b610b36565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610a10929190610fbd565b60405180910390a1610a2434156017610b36565b8051610a58906001600160a01b03163314610a4e5760808201516001600160a01b03163314610a51565b60015b6018610b36565b80608001516001600160a01b03166108fc8260e001519081150290604051600060405180830381858888f193505050501580156108e2573d6000803e3d6000fd5b600060606000546002808054610aae90610e1e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ada90610e1e565b8015610b275780601f10610afc57610100808354040283529160200191610b27565b820191906000526020600020905b815481529060010190602001808311610b0a57829003601f168201915b50505050509050915091509091565b816108f95760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610b698382611010565b9150811015610ba95760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610b53565b92915050565b6000811580610bd357508282610bc58183611028565b9250610bd19083611047565b145b610ba95760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610b53565b828054610c1a90610e1e565b90600052602060002090601f016020900481019282610c3c5760008555610c82565b82601f10610c5557805160ff1916838001178555610c82565b82800160010185558215610c82579182015b82811115610c82578251825591602001919060010190610c67565b50610c8e929150610d70565b5090565b6040518060c001604052806000815260200160008152602001610cc8604051806040016040528060008152602001600081525090565b8152602001610cea604051806040016040528060008152602001600081525090565b8152602001610d0c604051806040016040528060008152602001600081525090565b8152602001610d2e604051806040016040528060008152602001600081525090565b905290565b508054610d3f90610e1e565b6000825580601f10610d4f575050565b601f016020900490600052602060002090810190610d6d9190610d70565b50565b5b80821115610c8e5760008155600101610d71565b600060608284031215610d9757600080fd5b50919050565b600060a08284031215610d9757600080fd5b600060408284031215610d9757600080fd5b82815260006020604081840152835180604085015260005b81811015610df557858101830151858201606001528201610dd9565b81811115610e07576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610e3257607f821691505b60208210811415610d9757634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff81118282101715610e8557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114610ea257600080fd5b919050565b600060c08284031215610eb957600080fd5b60405160c0810181811067ffffffffffffffff82111715610eea57634e487b7160e01b600052604160045260246000fd5b604052610ef683610e8b565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60006101208284031215610f4757600080fd5b610f4f610e53565b610f5883610e8b565b8152602083015160208201526040830151604082015260608301516060820152610f8460808401610e8b565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610feb57600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561102357611023610ffa565b500190565b600081600019048311821515161561104257611042610ffa565b500290565b60008261106457634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220723ec57947560a696d9c8c40702df177eeb436b9f58e79d7f8332e4fd431e69564736f6c634300080c0033`,
  BytecodeLen: 5281,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:74:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:88:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:98:49:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:114:11:after expr stmt semicolon',
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
