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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
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
  
  
  const v338 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v339 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v339, v338],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:63:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v339, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v343, v344], secs: v346, time: v345, didSend: v69, from: v342 } = txn1;
      
      sim_r.txns.push({
        amt: v343,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v355 = stdlib.safeAdd(v345, v344);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v343, v344], secs: v346, time: v345, didSend: v69, from: v342 } = txn1;
  ;
  const v355 = stdlib.safeAdd(v345, v344);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v355],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v342, v343, v344, v355],
      evt_cnt: 0,
      funcNum: 2,
      lct: v345,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v523, time: v522, didSend: v281, from: v521 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v342,
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
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v523, time: v522, didSend: v281, from: v521 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:55:29:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v361, time: v360, didSend: v78, from: v359 } = txn2;
    const v363 = stdlib.add(v343, v343);
    ;
    let v364 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v365 = v360;
    let v372 = v363;
    
    let txn3 = txn2;
    while (await (async () => {
      const v380 = stdlib.eq(v364, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v380;})()) {
      const v387 = stdlib.safeAdd(v365, v344);
      const v391 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:80:42:application',
        fs: ['at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:18:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v392 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:81:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:18:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v393 = stdlib.digest([ctc0, ctc0], [v392, v391]);
      const v395 = stdlib.protect(ctc0, await interact.getGuess(v391), {
        at: './index.rsh:84:44:application',
        fs: ['at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:18:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v396 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:85:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:18:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v397 = stdlib.digest([ctc0, ctc0], [v396, v395]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v342, v343, v344, v359, v372, v387, v393, v397],
        evt_cnt: 2,
        funcNum: 4,
        lct: v365,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:88:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v400, v401], secs: v403, time: v402, didSend: v110, from: v399 } = txn4;
          
          ;
          const v411 = stdlib.safeAdd(v402, v344);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v387],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v342, v343, v344, v359, v372, v387],
          evt_cnt: 0,
          funcNum: 5,
          lct: v365,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v489, time: v488, didSend: v234, from: v487 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v359,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v489, time: v488, didSend: v234, from: v487 } = txn5;
        ;
        const v490 = stdlib.addressEq(v342, v487);
        const v491 = stdlib.addressEq(v359, v487);
        const v492 = v490 ? true : v491;
        stdlib.assert(v492, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:89:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:55:29:application',
          fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:89:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v400, v401], secs: v403, time: v402, didSend: v110, from: v399 } = txn4;
        ;
        const v404 = stdlib.addressEq(v342, v399);
        stdlib.assert(v404, {
          at: './index.rsh:88:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v411 = stdlib.safeAdd(v402, v344);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v411],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v342, v343, v344, v359, v372, v400, v401, v411],
            evt_cnt: 0,
            funcNum: 7,
            lct: v402,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v471, time: v470, didSend: v200, from: v469 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v342,
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
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v471, time: v470, didSend: v200, from: v469 } = txn6;
          ;
          const v472 = stdlib.addressEq(v342, v469);
          const v473 = stdlib.addressEq(v359, v469);
          const v474 = v472 ? true : v473;
          stdlib.assert(v474, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:99:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:55:29:application',
            fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:99:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v418, v419], secs: v421, time: v420, didSend: v122, from: v417 } = txn5;
          ;
          const v422 = stdlib.addressEq(v359, v417);
          stdlib.assert(v422, {
            at: './index.rsh:98:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v429 = stdlib.safeAdd(v420, v344);
          const txn6 = await (ctc.sendrecv({
            args: [v342, v343, v344, v359, v372, v400, v401, v418, v419, v429, v392, v391, v396, v395],
            evt_cnt: 4,
            funcNum: 8,
            lct: v420,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:109:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v434, v435, v436, v437], secs: v439, time: v438, didSend: v134, from: v433 } = txn6;
              
              ;
              let v445;
              const v446 = stdlib.eq(v437, v419);
              if (v446) {
                v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v447 = stdlib.safeAdd(v435, v418);
                const v448 = stdlib.eq(v447, v437);
                const v450 = stdlib.eq(v447, v419);
                const v538 = v450 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v539 = v448 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v538;
                v445 = v539;
                }
              const cv364 = v445;
              const cv365 = v438;
              const cv372 = v372;
              
              await (async () => {
                const v364 = cv364;
                const v365 = cv365;
                const v372 = cv372;
                
                if (await (async () => {
                  const v380 = stdlib.eq(v364, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v380;})()) {
                  const v387 = stdlib.safeAdd(v365, v344);
                  sim_r.isHalt = false;
                  }
                else {
                  const v505 = stdlib.eq(v364, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v508 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:122:12:decimal', stdlib.UInt_max, '2'), v343);
                  const v510 = v505 ? v342 : v359;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v510,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v429],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v342, v343, v344, v359, v372, v400, v401, v418, v419, v429],
              evt_cnt: 0,
              funcNum: 9,
              lct: v420,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v453, time: v452, didSend: v166, from: v451 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v359,
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
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v453, time: v452, didSend: v166, from: v451 } = txn7;
            ;
            const v454 = stdlib.addressEq(v342, v451);
            const v455 = stdlib.addressEq(v359, v451);
            const v456 = v454 ? true : v455;
            stdlib.assert(v456, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:110:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:55:29:application',
              fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:110:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v434, v435, v436, v437], secs: v439, time: v438, didSend: v134, from: v433 } = txn6;
            ;
            const v440 = stdlib.addressEq(v342, v433);
            stdlib.assert(v440, {
              at: './index.rsh:109:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v441 = stdlib.digest([ctc0, ctc0], [v434, v435]);
            const v442 = stdlib.digestEq(v400, v441);
            stdlib.assert(v442, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:113:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v443 = stdlib.digest([ctc0, ctc0], [v436, v437]);
            const v444 = stdlib.digestEq(v401, v443);
            stdlib.assert(v444, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:114:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            let v445;
            const v446 = stdlib.eq(v437, v419);
            if (v446) {
              v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v447 = stdlib.safeAdd(v435, v418);
              const v448 = stdlib.eq(v447, v437);
              const v450 = stdlib.eq(v447, v419);
              const v538 = v450 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v539 = v448 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v538;
              v445 = v539;
              }
            const cv364 = v445;
            const cv365 = v438;
            const cv372 = v372;
            
            v364 = cv364;
            v365 = cv365;
            v372 = cv372;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v505 = stdlib.eq(v364, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v508 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:122:12:decimal', stdlib.UInt_max, '2'), v343);
    const v510 = v505 ? v342 : v359;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v364), {
      at: './index.rsh:136:24:application',
      fs: ['at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v343, v344], secs: v346, time: v345, didSend: v69, from: v342 } = txn1;
  ;
  const v355 = stdlib.safeAdd(v345, v344);
  stdlib.protect(ctc1, await interact.acceptWager(v343), {
    at: './index.rsh:68:25:application',
    fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v342, v343, v344, v355],
    evt_cnt: 0,
    funcNum: 1,
    lct: v345,
    onlyIf: true,
    out_tys: [],
    pay: [v343, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v361, time: v360, didSend: v78, from: v359 } = txn2;
      
      const v363 = stdlib.add(v343, v343);
      sim_r.txns.push({
        amt: v343,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v364 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v365 = v360;
      const v372 = v363;
      
      if (await (async () => {
        const v380 = stdlib.eq(v364, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v380;})()) {
        const v387 = stdlib.safeAdd(v365, v344);
        sim_r.isHalt = false;
        }
      else {
        const v505 = stdlib.eq(v364, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v508 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:122:12:decimal', stdlib.UInt_max, '2'), v343);
        const v510 = v505 ? v342 : v359;
        sim_r.txns.push({
          kind: 'from',
          to: v510,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v355],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v342, v343, v344, v355],
      evt_cnt: 0,
      funcNum: 2,
      lct: v345,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v523, time: v522, didSend: v281, from: v521 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v342,
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
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v523, time: v522, didSend: v281, from: v521 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:55:29:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v361, time: v360, didSend: v78, from: v359 } = txn2;
    const v363 = stdlib.add(v343, v343);
    ;
    let v364 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v365 = v360;
    let v372 = v363;
    
    let txn3 = txn2;
    while (await (async () => {
      const v380 = stdlib.eq(v364, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v380;})()) {
      const v387 = stdlib.safeAdd(v365, v344);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v387],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v342, v343, v344, v359, v372, v387],
          evt_cnt: 0,
          funcNum: 5,
          lct: v365,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v489, time: v488, didSend: v234, from: v487 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v359,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v489, time: v488, didSend: v234, from: v487 } = txn5;
        ;
        const v490 = stdlib.addressEq(v342, v487);
        const v491 = stdlib.addressEq(v359, v487);
        const v492 = v490 ? true : v491;
        stdlib.assert(v492, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:89:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:55:29:application',
          fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:89:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v400, v401], secs: v403, time: v402, didSend: v110, from: v399 } = txn4;
        ;
        const v404 = stdlib.addressEq(v342, v399);
        stdlib.assert(v404, {
          at: './index.rsh:88:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v411 = stdlib.safeAdd(v402, v344);
        const v415 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:95:50:application',
          fs: ['at ./index.rsh:94:13:application call to [unknown function] (defined at: ./index.rsh:94:17:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v416 = stdlib.protect(ctc0, await interact.getGuess(v415), {
          at: './index.rsh:96:52:application',
          fs: ['at ./index.rsh:94:13:application call to [unknown function] (defined at: ./index.rsh:94:17:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v342, v343, v344, v359, v372, v400, v401, v411, v415, v416],
          evt_cnt: 2,
          funcNum: 6,
          lct: v402,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:98:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v418, v419], secs: v421, time: v420, didSend: v122, from: v417 } = txn5;
            
            ;
            const v429 = stdlib.safeAdd(v420, v344);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v411],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v342, v343, v344, v359, v372, v400, v401, v411],
            evt_cnt: 0,
            funcNum: 7,
            lct: v402,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v471, time: v470, didSend: v200, from: v469 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v342,
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
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v471, time: v470, didSend: v200, from: v469 } = txn6;
          ;
          const v472 = stdlib.addressEq(v342, v469);
          const v473 = stdlib.addressEq(v359, v469);
          const v474 = v472 ? true : v473;
          stdlib.assert(v474, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:99:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:55:29:application',
            fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:99:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v418, v419], secs: v421, time: v420, didSend: v122, from: v417 } = txn5;
          ;
          const v422 = stdlib.addressEq(v359, v417);
          stdlib.assert(v422, {
            at: './index.rsh:98:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v429 = stdlib.safeAdd(v420, v344);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v429],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v342, v343, v344, v359, v372, v400, v401, v418, v419, v429],
              evt_cnt: 0,
              funcNum: 9,
              lct: v420,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v453, time: v452, didSend: v166, from: v451 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v359,
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
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v453, time: v452, didSend: v166, from: v451 } = txn7;
            ;
            const v454 = stdlib.addressEq(v342, v451);
            const v455 = stdlib.addressEq(v359, v451);
            const v456 = v454 ? true : v455;
            stdlib.assert(v456, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:110:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:55:29:application',
              fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:110:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v434, v435, v436, v437], secs: v439, time: v438, didSend: v134, from: v433 } = txn6;
            ;
            const v440 = stdlib.addressEq(v342, v433);
            stdlib.assert(v440, {
              at: './index.rsh:109:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v441 = stdlib.digest([ctc0, ctc0], [v434, v435]);
            const v442 = stdlib.digestEq(v400, v441);
            stdlib.assert(v442, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:113:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v443 = stdlib.digest([ctc0, ctc0], [v436, v437]);
            const v444 = stdlib.digestEq(v401, v443);
            stdlib.assert(v444, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:114:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            let v445;
            const v446 = stdlib.eq(v437, v419);
            if (v446) {
              v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v447 = stdlib.safeAdd(v435, v418);
              const v448 = stdlib.eq(v447, v437);
              const v450 = stdlib.eq(v447, v419);
              const v538 = v450 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v539 = v448 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v538;
              v445 = v539;
              }
            const cv364 = v445;
            const cv365 = v438;
            const cv372 = v372;
            
            v364 = cv364;
            v365 = cv365;
            v372 = cv372;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v505 = stdlib.eq(v364, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v508 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:122:12:decimal', stdlib.UInt_max, '2'), v343);
    const v510 = v505 ? v342 : v359;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v364), {
      at: './index.rsh:136:24:application',
      fs: ['at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAFQCAUJAiAHKJgBqAFYMCYDAQABAQAiNQAxGEEE/SpkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAolJIQgMQAF9SSUMQAEkSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgQVSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf+BoAFbNf5JNQVJSiJbNf0lWzX8gRBbNfuBGFs1+oAEf6I7UjT9FlA0/BZQNPsWUDT6FlCwMgY0AyELWwxENP8xABJENANXWCA0/RY0/BZQARJENANXeCA0+xY0+hZQARJENPo0/hJBAAYjNflCABw0/DQDIQpbCDX4IyI0+DT+Ek0hBjT4NPoSTTX5NP80AyEHWzQDIQlbNANXMCA0+TIGNAMkW0IC7EghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEKWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgL7SYEGDEAArkghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQdbNf4hCVs1/VcwIDX8JFs1+1dYIDX6V3ggNflJNQVJIls1+CVbNfeABEohy/w0+BZQNPcWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX2NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQNPcWUDT2FlAoSwFXAH9nKUsBV38xZ0ghBTUBMgY1AkICYkghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyEMWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgH2SSEGDEAA4EmBBAxAAJhIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQdbNf4hCVs1/VcwIDX8JFs1+0k1BUlXACA1+lcgIDX5gARgXaQrNPpQNPlQsDIGNAMhDFsMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlAoSwFXAH9nKUsBV38hZ0ghCDUBMgY1AkIBbCEGEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ1bD0SxIrIBNAMhB1uyCCOyEDQDVwAgsgezQgEPSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEHWzX/gASai5F0sDIGNAMhDVsMRDT/iAFHNANXACA0/zQDIQlbMQAjMgY0/0kIQgBfSIGgjQaIASciNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAPcyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAH41/zX+Nf01/DX7Nfo1+TT9IxJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghBDUBMgY1AkIAOrEisgEhBjT6C7III7IQNPw0+TT9IQYSTbIHs0IAADEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
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
                "name": "v343",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v344",
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
                "name": "v343",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v344",
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
                "name": "v400",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
    "name": "_reach_e5",
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
                "name": "v418",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v419",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
    "name": "_reach_e7",
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
                "name": "v434",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v436",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v437",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
    "name": "_reach_e9",
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
                "name": "v400",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
    "name": "_reach_m5",
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
                "name": "v418",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v419",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
    "name": "_reach_m7",
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
                "name": "v434",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v436",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v437",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001dc838038062001dc88339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a4b806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611536565b610197565b6100a16100e8366004611559565b6103fc565b6100a16100fb366004611559565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611559565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be92919061156b565b6100a1610159366004611559565b610941565b6100a161016c3660046115c8565b610ad8565b6100a161017f366004611559565b610dc4565b6100a1610192366004611536565b610f1f565b6101a7600760005414601c611190565b6101c1813515806101ba57506001548235145b601d611190565b6000808055600280546101d3906115da565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115da565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611663565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e611190565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be92919061170f565b60405180910390a16102d23415601a611190565b60608201516102ed906001600160a01b03163314601b611190565b6102fb4383604001516111b6565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d191839101611740565b604051602081830303815290604052600290805190602001906103f59291906113ef565b5050505050565b61040c6001600054146009611190565b6104268135158061041f57506001548235145b600a611190565b600080805560028054610438906115da565b80601f0160208091040260200160405190810160405280929190818152602001828054610464906115da565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c991906117c7565b90506104dc81606001514310600b611190565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d929190611840565b60405180910390a1610526816020015134146008611190565b61052e611473565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261058681611209565b505050565b61059b600160005414600d611190565b6105b5813515806105ae57506001548235145b600e611190565b6000808055600280546105c7906115da565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906115da565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906117c7565b905061066c8160600151431015600f611190565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d929190611840565b60405180910390a16106b13415600c611190565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b5060008080556001819055610705906002906114cc565b5050565b6107196005600054146017611190565b6107338135158061072c57506001548235145b6018611190565b600080805560028054610745906115da565b80601f0160208091040260200160405190810160405280929190818152602001828054610771906115da565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d6919061187d565b90506107ea8160a001514310156019611190565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b929190611840565b60405180910390a161082f34156015611190565b8051610863906001600160a01b031633146108595760608201516001600160a01b0316331461085c565b60015b6016611190565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b9906115da565b80601f01602080910402602001604051908101604052809291908181526020018280546108e5906115da565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b6109516007600054146021611190565b61096b8135158061096457506001548235145b6022611190565b60008080556002805461097d906115da565b80601f01602080910402602001604051908101604052809291908181526020018280546109a9906115da565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e9190611663565b9050610a228160e001514310156023611190565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a53929190611840565b60405180910390a1610a673415601f611190565b8051610a9b906001600160a01b03163314610a915760608201516001600160a01b03163314610a94565b60015b6020611190565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae86009600054146028611190565b610b0281351580610afb57506001548235145b6029611190565b600080805560028054610b14906115da565b80601f0160208091040260200160405190810160405280929190818152602001828054610b40906115da565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba59190611911565b9050610bc4604051806040016040528060008152602001600081525090565b610bd68261012001514310602a611190565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c4934156024611190565b8151610c61906001600160a01b031633146025611190565b60408051610cad91610c8791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146026611190565b604080516060858101356020830152608086013592820192909252610cf391016040516020818303038152906040528051906020012060001c8360c00151146027611190565b61010082015160808401351415610d0d5760018152610d57565b610d2283602001602001358360e001516111b6565b60208201819052608084013514610d5157816101000151816020015114610d4a576001610d54565b6000610d54565b60025b81525b610d5f611473565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610dbe81611209565b50505050565b610dd4600960005414602d611190565b610dee81351580610de757506001548235145b602e611190565b600080805560028054610e00906115da565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2c906115da565b8015610e795780601f10610e4e57610100808354040283529160200191610e79565b820191906000526020600020905b815481529060010190602001808311610e5c57829003601f168201915b5050505050806020019051810190610e919190611911565b9050610ea6816101200151431015602f611190565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610ed7929190611840565b60405180910390a1610eeb3415602b611190565b8051610863906001600160a01b03163314610f155760608201516001600160a01b03163314610f18565b60015b602c611190565b610f2f6005600054146012611190565b610f4981351580610f4257506001548235145b6013611190565b600080805560028054610f5b906115da565b80601f0160208091040260200160405190810160405280929190818152602001828054610f87906115da565b8015610fd45780601f10610fa957610100808354040283529160200191610fd4565b820191906000526020600020905b815481529060010190602001808311610fb757829003601f168201915b5050505050806020019051810190610fec919061187d565b90506110046040518060200160405280600081525090565b6110158260a0015143106014611190565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a338460405161104692919061170f565b60405180910390a161105a34156010611190565b8151611072906001600160a01b031633146011611190565b6110804383604001516111b6565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111c383826119bc565b91508110156112035760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111ad565b92915050565b6040805160208101909152600081526020820151516001141561132d576112408260200151602001518360000151604001516111b6565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610dbe9291906113ef565b60208201515160021461134557815160600151611349565b8151515b6001600160a01b03166108fc6113686002856000015160200151611390565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b60008115806113b4575082826113a681836119d4565b92506113b290836119f3565b145b6112035760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111ad565b8280546113fb906115da565b90600052602060002090601f01602090048101928261141d5760008555611463565b82601f1061143657805160ff1916838001178555611463565b82800160010185558215611463579182015b82811115611463578251825591602001919060010190611448565b5061146f929150611509565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016114c760405180606001604052806000815260200160008152602001600081525090565b905290565b5080546114d8906115da565b6000825580601f106114e8575050565b601f0160209004906000526020600020908101906115069190611509565b50565b5b8082111561146f576000815560010161150a565b60006060828403121561153057600080fd5b50919050565b60006060828403121561154857600080fd5b611552838361151e565b9392505050565b60006040828403121561153057600080fd5b82815260006020604081840152835180604085015260005b8181101561159f57858101830151858201606001528201611583565b818111156115b1576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561153057600080fd5b600181811c908216806115ee57607f821691505b6020821081141561153057634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561164157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461165e57600080fd5b919050565b600061010080838503121561167757600080fd5b6040519081019067ffffffffffffffff821181831017156116a857634e487b7160e01b600052604160045260246000fd5b816040526116b584611647565b815260208401516020820152604084015160408201526116d760608501611647565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161155260208301848035825260208082013590830152604090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161178060608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000608082840312156117d957600080fd5b6040516080810181811067ffffffffffffffff8211171561180a57634e487b7160e01b600052604160045260246000fd5b60405261181683611647565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461186e57600080fd5b80604085015250509392505050565b600060c0828403121561188f57600080fd5b60405160c0810181811067ffffffffffffffff821117156118c057634e487b7160e01b600052604160045260246000fd5b6040526118cc83611647565b815260208301516020820152604083015160408201526118ee60608401611647565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561192457600080fd5b61192c61160f565b61193583611647565b8152602083015160208201526040830151604082015261195760608401611647565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119cf576119cf6119a6565b500190565b60008160001904831182151516156119ee576119ee6119a6565b500290565b600082611a1057634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122062f08de214d74beb18d8a7ffbc5667cdc9ad9557e6d5a22ad44c41901747e1e464736f6c634300080c0033`,
  BytecodeLen: 7624,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:124:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:78:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:89:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:90:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:99:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:100:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:110:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
