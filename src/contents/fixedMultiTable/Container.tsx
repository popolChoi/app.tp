import React, { Component, Fragment, useEffect, useCallback, useState, useRef, LegacyRef } from 'react';
import './style.scss';
import { Card } from '@mui/material';

function TableComponent(props : any) {
    const vlewHeaderCol: any[] = [[]];
    const children = (e: any, index : number)  => {
      if (!vlewHeaderCol[index]) {
        vlewHeaderCol[index] = [];
      }
      e.children.forEach((childrenCol: {children: any[]} ) => {
        vlewHeaderCol[index].push(childrenCol);
        if (childrenCol.children) {
          children(childrenCol, index + 1);
        }
      });
    };
    
    if (props.headerCol) {
      props.headerCol.forEach((col: {children: any[]}) => {        
        vlewHeaderCol[0].push(col);
        if (col.children) {
          children(col, 1);
        }
      });
    }    
    return  (
        <table className={'table ' + (props.className || ' ')}>
          {props.colgroup}
          <thead>
            {vlewHeaderCol.map((child : any[], i: number) => (
              <tr key={i+'_h'}>
                {child.map(({value, ...create}, j) => React.createElement( 'th', {...create, key: i + '_h_'+ j}, value ))}
              </tr>
            ))}
          </thead>
          <tbody>
          {props.bodyCol && props.bodyCol.map((child : any[], i: number) => (
              <tr key={i+'_b'}>
                {child.map(({value, ...create}, j) => React.createElement( 'td', {...create, key: i + '_b_'+ j}, value ))}
              </tr>
            ))}
          </tbody>
        </table>
    )
}


function AutoBody(props: any) {
    const [autoHeight, setAutoHeight]  = useState(250);
    const resize = useCallback(() => {
      // setAutoHeight(document.body.offsetHeight);
      //
      setAutoHeight(window.innerHeight - 150);
    }, []);
  
    useEffect(() => {
      resize();
      window.addEventListener('resize', resize);
      return () => {
        window.removeEventListener('resize', resize);
      };
    }, []);
    return (
      <Fragment>
        <div className="multi-table-wrap" style={{ height: autoHeight}}>
            {props.count}
        </div>
      </Fragment>
    );
  }


//   leftTable = {
//     header1: [
//       // [ { tag: 'th', value: '??????', style: { height: 75 }, className: 'grey-bg lighten-4' } ],
//       [ { tag: 'th', value: '?????????', className: 'grey-bg lighten-4', colSpan: 2 } ],
//       [ { tag: 'th', value: '??????????????????', className: 'grey-bg lighten-4', colSpan: 2 } ],
 
//     ],
//     header2: [
//       [ { tag: 'th', value: '????????????', rowSpan: 5, className: 'grey-bg lighten-4' },
//         { tag: 'th', value: '????????????(11**)' } ],
//       [ { tag: 'th', value: '????????????(12**)' } ],
//       [ { tag: 'th', value: '????????????(13**)' } ],
//       [ { tag: 'th', value: '???????????????(14**)' } ],
//       [ { tag: 'th', value: '??????(1***)' } ],
//       //
//       [ { tag: 'th', value: '??????????????????', rowSpan: 8, className: 'grey-bg lighten-4' },
//         { tag: 'th', value: '??????????????????(31**)' } ],
//       [ { tag: 'th', value: '????????????(32**)' } ],
//       [ { tag: 'th', value: '??????????????????(33**)' } ],
//       [ { tag: 'th', value: 'Utility????????????(34**)' } ],
//       [ { tag: 'th', value: '??????????????????(35**)' } ],
//       [ { tag: 'th', value: '??????.????????????(4317)' } ],
//       [ { tag: 'th', value: '????????????(39**)' } ],
//       [ { tag: 'th', value: '??????(3***)' } ],
//       //
//       [ { tag: 'th', value: '??????????????????', rowSpan: 5, className: 'grey-bg lighten-4' },
//         { tag: 'th', value: '??????????????????(41**)' } ],
//       [ { tag: 'th', value: '??????????????????(42**)' } ],
//       [ { tag: 'th', value: '????????????(43**)' } ],
//       [ { tag: 'th', value: '???????????? ????????????(44**)' } ],
//       [ { tag: 'th', value: '??????(4***)' } ],
//       //
//       [ { tag: 'th', value: '??????????????????', rowSpan: 5, className: 'grey-bg lighten-4' },
//         { tag: 'th', value: '????????????(51**)' } ],
//       [ { tag: 'th', value: '????????? ????????????(52**)' } ],
//       [ { tag: 'th', value: 'Utility??????(53**)' } ],
//       [ { tag: 'th', value: '??????????????????(54**)' } ],
//       [ { tag: 'th', value: '??????(5***)' } ],
//       //
//       [ { tag: 'th', value: '??????????????????', rowSpan: 7, className: 'grey-bg lighten-4' },
//         { tag: 'th', value: '????????????(61**)' } ],
//       [ { tag: 'th', value: '????????????(62**)' } ],
//       [ { tag: 'th', value: '????????????(63**)' } ],
//       [ { tag: 'th', value: '????????????(64**)' } ],
//       [ { tag: 'th', value: 'Utility??????(65**)' } ],
//       [ { tag: 'th', value: '????????????(????????????)(66**)' } ],
//       [ { tag: 'th', value: '??????(6***)' } ],
//     ],
//     header3: [
//       [{ tag: 'th', colSpan: 2, value: '???????????? ?????????(???????????????|???????????????)', className: 'grey-bg lighten-4'  }],
//       [{ tag: 'th', colSpan: 2, value: '????????????(??????????????????|??????????????????)', className: 'grey-bg lighten-4'  }],
//       [{ tag: 'th', colSpan: 2, value: '???????????? ?????????', className: 'grey-bg lighten-4' }],
//       [{ tag: 'th', colSpan: 2, value: '????????? ?????????', className: 'grey-bg lighten-4'  } ],
//     ],
   
//   };

//   headerCol = [
//     {
//       text: '??????',
//       rowSpan: 3, colSpan: 2,
//     },
//     { text: '1??????',
//       colSpan: 6,
//       children: [
//         { text: '4??? ?????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
//         { text: '?????? ?????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
//         { text: '?????? G/M', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
//       ]},
//     {
//       text: '2??????',
//       colSpan: 6,
//       children: [
//         { text: '# 1 4???', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
//         { text: '# 2 4???', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
//         { text: '2????????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
//       ],
//     },
//     {
//       text: '3??????',
//       colSpan: 8,
//       children: [
//         { text: '#1 Grinder', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
//         { text: '#2 Grinder', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
//         { text: '#3 Grinder', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
//         { text: '4??? ?????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
//       ],
//     },
//   ];

//   bodyMaping = ({ dormant = {}, working = {}, hours = {}, workable = {}, workingRatio = {}, hoursRatio = {}})  => {
//     const dormantTotalMap = [];
//     const dormantTotalMaping = [...this.leftTable.header3[1]];
//     const bodyMaping = {
//       hours: [...this.leftTable.header1[0]],
//       workable: [...this.leftTable.header1[1]],
//       dormant: JSON.parse(JSON.stringify(this.leftTable.header2)),
//       working: [...this.leftTable.header3[0]],
//       workingRatio: [...this.leftTable.header3[2]],
//       hoursRatio: [...this.leftTable.header3[3]],
//     };


//     this.props.m2ea063020Store.scarfers.forEach((key2, i) => {

//       //?????????
//       bodyMaping.hours.push({ value: (hours[key2] || {}).eqpDormantTime1,  colSpan: 2, className: 'right' });

//       //??????????????????
//       bodyMaping.workable.push({ value: (workable[key2] || {}).eqpDormantTime1,  colSpan: 2, className: 'right' });
  

//       //????????????
//       bodyMaping.working.push(...[
//         { value: (working[key2] || {}).eqpDormantTime1, className: 'right' },
//         { value: (working[key2] || {}).eqpDormantTime2, className: 'right' },
//       ]);

//       //???????????? ?????????
//       bodyMaping.workingRatio.push({ value: (workingRatio[key2] || {}).eqpDormantTime1,  colSpan: 2, className: 'right' });
                    
//       //????????? ?????????
//       bodyMaping.hoursRatio.push({ value: (hoursRatio[key2] || {}).eqpDormantTime1,  colSpan: 2, className: 'right' });

//       if (!dormantTotalMap[i]) {
//         dormantTotalMap[i] = { eqpDormantTime1: 0, eqpDormantTime2: 0 };
//       }
      
//       //??????????????????
//       this.props.m2ea063020Store.eqpDormantCds.forEach((key1, j) => {
//         const dormantValue = dormant[key2 + key1];
//         if (dormantValue) {
//           dormantTotalMap[i].eqpDormantTime1 += dormant[key2 + key1].eqpDormantTime1 * 10;
//           dormantTotalMap[i].eqpDormantTime2 += dormant[key2 + key1].eqpDormantTime2 * 10;
//         }
         
//         //????????????
//         if (!bodyMaping.dormant[j]) {
//           bodyMaping.dormant[j] = [];
//         }
//         bodyMaping.dormant[j].push(...[
//           { value: (dormant[key2 + key1] || {}).eqpDormantTime1, className: 'right' + (key1.includes('***') ? ' yellow-bg lighten-1' : '') },
//           { value: (dormant[key2 + key1] || {}).eqpDormantTime2, className: 'right' + (key1.includes('***') ? ' yellow-bg lighten-1' : '')  },
//         ]);
//       });

//     });

//     //???????????? ?????????(???????????????|???????????????)
//     dormantTotalMap.forEach(({ eqpDormantTime1, eqpDormantTime2 }) => {
//       dormantTotalMaping.push(...[
//         { value: eqpDormantTime1 ? eqpDormantTime1 / 10 : null, className: 'right yellow-bg lighten-1' },
//         { value: eqpDormantTime2 ? eqpDormantTime2 / 10 : null, className: 'right yellow-bg lighten-1' },
//       ]);
    
//     });

//     return {
//       dormantTotal: dormantTotalMaping,
//       ...bodyMaping,
//     };
//   };

  
export default function Container(){
    const leftBodyRef = useRef<HTMLDivElement>();
    const rightBodyRef = useRef<HTMLDivElement>();
    const rightTopRef = useRef<HTMLDivElement>();
    const rightBottomRef = useRef<HTMLDivElement>();

    // const c = useRef();

 
    const scrollEvent = (e: any) => {      
      if(leftBodyRef.current && rightBodyRef.current && rightTopRef.current && rightBottomRef.current){
        if(rightBodyRef.current.scrollTop !== leftBodyRef.current.scrollTop){
          leftBodyRef.current.scrollTop = e.target.scrollTop; 
        } else {
          console.log(e.target.scrollLeft);
          
          rightTopRef.current.scrollLeft = e.target.scrollLeft;
        }
        
      }
    }

    useEffect(() => {
      if(leftBodyRef.current && rightBodyRef.current){
        rightBodyRef.current.addEventListener('scroll', scrollEvent);

      }
        return () => {
          if(leftBodyRef.current && rightBodyRef.current){
            rightBodyRef.current.removeEventListener('scroll', scrollEvent);

          }
        };
      }, [leftBodyRef.current]);

    return  (
    <React.Fragment>
      <Card variant="outlined">
      <AutoBody count={
        <Fragment>
             {/* left-----------------------------------------------------  */}
          <div className="table-left">
            <div className="table-header">
              <TableComponent
                key={0}
                headerCol={
                  [
                    { value: '??????', style: { height: 92 }, className: 'grey-bg lighten-4' },
                  ]
                }
                bodyCol={
                  [
                    [ { tag: 'th', value: '?????????', className: 'grey-bg lighten-4', colSpan: 2 } ],
                    [ { tag: 'th', value: '??????????????????', className: 'grey-bg lighten-4', colSpan: 2 } ],
                  ]
                }
              />
            </div>
            <div className="table-body left-body" ref={(e: HTMLDivElement) => leftBodyRef.current = e} >
              <TableComponent
                key={1}
              
                bodyCol={[
                        [ { tag: 'th', value: '????????????', rowSpan: 5, className: 'grey-bg lighten-4' },
                          { tag: 'th', value: '????????????(11**)' } ],
                        [ { tag: 'th', value: '????????????(12**)' } ],
                        [ { tag: 'th', value: '????????????(13**)' } ],
                        [ { tag: 'th', value: '???????????????(14**)' } ],
                        [ { tag: 'th', value: '??????(1***)' } ],
                        //
                        [ { tag: 'th', value: '??????????????????', rowSpan: 8, className: 'grey-bg lighten-4' },
                          { tag: 'th', value: '??????????????????(31**)' } ],
                        [ { tag: 'th', value: '????????????(32**)' } ],
                        [ { tag: 'th', value: '??????????????????(33**)' } ],
                        [ { tag: 'th', value: 'Utility????????????(34**)' } ],
                        [ { tag: 'th', value: '??????????????????(35**)' } ],
                        [ { tag: 'th', value: '??????.????????????(4317)' } ],
                        [ { tag: 'th', value: '????????????(39**)' } ],
                        [ { tag: 'th', value: '??????(3***)' } ],
                        //
                        [ { tag: 'th', value: '??????????????????', rowSpan: 5, className: 'grey-bg lighten-4' },
                          { tag: 'th', value: '??????????????????(41**)' } ],
                        [ { tag: 'th', value: '??????????????????(42**)' } ],
                        [ { tag: 'th', value: '????????????(43**)' } ],
                        [ { tag: 'th', value: '???????????? ????????????(44**)' } ],
                        [ { tag: 'th', value: '??????(4***)' } ],
                        //
                        [ { tag: 'th', value: '??????????????????', rowSpan: 5, className: 'grey-bg lighten-4' },
                          { tag: 'th', value: '????????????(51**)' } ],
                        [ { tag: 'th', value: '????????? ????????????(52**)' } ],
                        [ { tag: 'th', value: 'Utility??????(53**)' } ],
                        [ { tag: 'th', value: '??????????????????(54**)' } ],
                        [ { tag: 'th', value: '??????(5***)' } ],
                        //
                        [ { tag: 'th', value: '??????????????????', rowSpan: 7, className: 'grey-bg lighten-4' },
                          { tag: 'th', value: '????????????(61**)' } ],
                        [ { tag: 'th', value: '????????????(62**)' } ],
                        [ { tag: 'th', value: '????????????(63**)' } ],
                        [ { tag: 'th', value: '????????????(64**)' } ],
                        [ { tag: 'th', value: 'Utility??????(65**)' } ],
                        [ { tag: 'th', value: '????????????(????????????)(66**)' } ],
                        [ { tag: 'th', value: '??????(6***)' } ],
                  ]}
              />
            </div>
            <div className="table-bottom">
              <TableComponent
                key={2}
              
                bodyCol={[ [{}], [{}]]}
              />
            </div>
          </div>
          {/* -----------------------------------------------------  */}
          <div className="table-right">
            <div className="table-header" ref={(e: HTMLDivElement) => rightTopRef.current = e}>
              <TableComponent
                key={2}
               
                headerCol={
                  [
                    { value: '1??????',
                      colSpan: 6,
                      children: [
                        { value: '4??? ?????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                        { value: '?????? ?????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                        { value: '?????? G/M', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                      ]},
                    {
                      value: '2??????',
                      colSpan: 6,
                      children: [
                        { value: '# 1 4???', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                        { value: '# 2 4???', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                        { value: '2????????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                      ],
                    },
                    {
                      value: '3??????',
                      colSpan: 8,
                      children: [
                        { value: '#1 Grinder', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                        { value: '#2 Grinder', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                        { value: '#3 Grinder', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                        { value: '4??? ?????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                       
                      ],
                    },
                  ]
                }
                bodyCol={[
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}, {value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                ]}
              />
            </div>
            <div className="table-body right-body" ref={(e: HTMLDivElement) => rightBodyRef.current = e}>
              <TableComponent
                key={3}
                // headerCol={
                //   [
                //     { value: '1??????',
                //       colSpan: 6,
                //       children: [
                //         { value: '4??? ?????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                //         { value: '?????? ?????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                //         { value: '?????? G/M', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                //       ]},
                //     {
                //       value: '2??????',
                //       colSpan: 6,
                //       children: [
                //         { value: '# 1 4???', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                //         { value: '# 2 4???', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                //         { value: '2????????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                //       ],
                //     },
                //     {
                //       value: '3??????',
                //       colSpan: 8,
                //       children: [
                //         { value: '#1 Grinder', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                //         { value: '#2 Grinder', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                //         { value: '#3 Grinder', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                //         { value: '4??? ?????????', colSpan: 2, children: [{ value: '??????' }, { value: '??????' }]},
                       
                //       ],
                //     },
                //   ]
                // }
                bodyCol={[
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}, {value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],

                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],

                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
                  [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],

                ]}
              />
            </div>
            <div className="table-body table-bottom" ref={(e: HTMLDivElement) => rightBottomRef.current = e} >
              {/* <TableComponent
                key={4}
                colgroup={this.colgroup}
                bodyCol={[
                  //???????????? ?????????(???????????????|???????????????)
                  bodyMaping.dormantTotal,

                  //????????????(??????????????????|??????????????????)
                  bodyMaping.working,

                  //???????????? ?????????
                  bodyMaping.workingRatio,

                  //???????????? ?????????
                  bodyMaping.hoursRatio,
                    
                ]}
              /> */}
            </div>
          </div>
        </Fragment>
          }/>

      </Card>

    </React.Fragment>);
}