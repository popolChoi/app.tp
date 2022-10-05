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
//       // [ { tag: 'th', value: '구분', style: { height: 75 }, className: 'grey-bg lighten-4' } ],
//       [ { tag: 'th', value: '역시간', className: 'grey-bg lighten-4', colSpan: 2 } ],
//       [ { tag: 'th', value: '작업가능시간', className: 'grey-bg lighten-4', colSpan: 2 } ],
 
//     ],
//     header2: [
//       [ { tag: 'th', value: '정지시간', rowSpan: 5, className: 'grey-bg lighten-4' },
//         { tag: 'th', value: '계획수리(11**)' } ],
//       [ { tag: 'th', value: '계획휴지(12**)' } ],
//       [ { tag: 'th', value: '교체휴지(13**)' } ],
//       [ { tag: 'th', value: '설비합리화(14**)' } ],
//       [ { tag: 'th', value: '전체(1***)' } ],
//       //
//       [ { tag: 'th', value: '작업준비시간', rowSpan: 8, className: 'grey-bg lighten-4' },
//         { tag: 'th', value: '생산설비점검(31**)' } ],
//       [ { tag: 'th', value: '운전준비(32**)' } ],
//       [ { tag: 'th', value: '정비설비교체(33**)' } ],
//       [ { tag: 'th', value: 'Utility점검조정(34**)' } ],
//       [ { tag: 'th', value: '부대작업준비(35**)' } ],
//       [ { tag: 'th', value: '식사.야식시간(4317)' } ],
//       [ { tag: 'th', value: '기타준비(39**)' } ],
//       [ { tag: 'th', value: '전체(3***)' } ],
//       //
//       [ { tag: 'th', value: '공장장애시간', rowSpan: 5, className: 'grey-bg lighten-4' },
//         { tag: 'th', value: '소재보급지연(41**)' } ],
//       [ { tag: 'th', value: '공정작업부하(42**)' } ],
//       [ { tag: 'th', value: '작업지연(43**)' } ],
//       [ { tag: 'th', value: '생산관제 조치지연(44**)' } ],
//       [ { tag: 'th', value: '전체(4***)' } ],
//       //
//       [ { tag: 'th', value: '운전장애시간', rowSpan: 5, className: 'grey-bg lighten-4' },
//         { tag: 'th', value: '운전이상(51**)' } ],
//       [ { tag: 'th', value: '부정기 설비교체(52**)' } ],
//       [ { tag: 'th', value: 'Utility장애(53**)' } ],
//       [ { tag: 'th', value: '설비재해장애(54**)' } ],
//       [ { tag: 'th', value: '전체(5***)' } ],
//       //
//       [ { tag: 'th', value: '설비장애시간', rowSpan: 7, className: 'grey-bg lighten-4' },
//         { tag: 'th', value: '기계부문(61**)' } ],
//       [ { tag: 'th', value: '전기부문(62**)' } ],
//       [ { tag: 'th', value: '전산부문(63**)' } ],
//       [ { tag: 'th', value: '계장부문(64**)' } ],
//       [ { tag: 'th', value: 'Utility부문(65**)' } ],
//       [ { tag: 'th', value: '설비공통(기전복합)(66**)' } ],
//       [ { tag: 'th', value: '전체(6***)' } ],
//     ],
//     header3: [
//       [{ tag: 'th', colSpan: 2, value: '장애시간 전체합(적용휴지합|전체휴지합)', className: 'grey-bg lighten-4'  }],
//       [{ tag: 'th', colSpan: 2, value: '작업시간(적용작업시간|전체작업시간)', className: 'grey-bg lighten-4'  }],
//       [{ tag: 'th', colSpan: 2, value: '작업시간 가동률', className: 'grey-bg lighten-4' }],
//       [{ tag: 'th', colSpan: 2, value: '역시간 가동률', className: 'grey-bg lighten-4'  } ],
//     ],
   
//   };

//   headerCol = [
//     {
//       text: '구분',
//       rowSpan: 3, colSpan: 2,
//     },
//     { text: '1정정',
//       colSpan: 6,
//       children: [
//         { text: '4면 스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
//         { text: '부분 스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
//         { text: '외주 G/M', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
//       ]},
//     {
//       text: '2정정',
//       colSpan: 6,
//       children: [
//         { text: '# 1 4면', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
//         { text: '# 2 4면', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
//         { text: '2면스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
//       ],
//     },
//     {
//       text: '3정정',
//       colSpan: 8,
//       children: [
//         { text: '#1 Grinder', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
//         { text: '#2 Grinder', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
//         { text: '#3 Grinder', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
//         { text: '4면 스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
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

//       //역시간
//       bodyMaping.hours.push({ value: (hours[key2] || {}).eqpDormantTime1,  colSpan: 2, className: 'right' });

//       //작업가능시간
//       bodyMaping.workable.push({ value: (workable[key2] || {}).eqpDormantTime1,  colSpan: 2, className: 'right' });
  

//       //작업시간
//       bodyMaping.working.push(...[
//         { value: (working[key2] || {}).eqpDormantTime1, className: 'right' },
//         { value: (working[key2] || {}).eqpDormantTime2, className: 'right' },
//       ]);

//       //작업시간 가동률
//       bodyMaping.workingRatio.push({ value: (workingRatio[key2] || {}).eqpDormantTime1,  colSpan: 2, className: 'right' });
                    
//       //역시간 가동률
//       bodyMaping.hoursRatio.push({ value: (hoursRatio[key2] || {}).eqpDormantTime1,  colSpan: 2, className: 'right' });

//       if (!dormantTotalMap[i]) {
//         dormantTotalMap[i] = { eqpDormantTime1: 0, eqpDormantTime2: 0 };
//       }
      
//       //휴지시간맵핑
//       this.props.m2ea063020Store.eqpDormantCds.forEach((key1, j) => {
//         const dormantValue = dormant[key2 + key1];
//         if (dormantValue) {
//           dormantTotalMap[i].eqpDormantTime1 += dormant[key2 + key1].eqpDormantTime1 * 10;
//           dormantTotalMap[i].eqpDormantTime2 += dormant[key2 + key1].eqpDormantTime2 * 10;
//         }
         
//         //휴지시간
//         if (!bodyMaping.dormant[j]) {
//           bodyMaping.dormant[j] = [];
//         }
//         bodyMaping.dormant[j].push(...[
//           { value: (dormant[key2 + key1] || {}).eqpDormantTime1, className: 'right' + (key1.includes('***') ? ' yellow-bg lighten-1' : '') },
//           { value: (dormant[key2 + key1] || {}).eqpDormantTime2, className: 'right' + (key1.includes('***') ? ' yellow-bg lighten-1' : '')  },
//         ]);
//       });

//     });

//     //장애시간 전체합(적용휴지합|전체휴지합)
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
                    { value: '구분', style: { height: 92 }, className: 'grey-bg lighten-4' },
                  ]
                }
                bodyCol={
                  [
                    [ { tag: 'th', value: '역시간', className: 'grey-bg lighten-4', colSpan: 2 } ],
                    [ { tag: 'th', value: '작업가능시간', className: 'grey-bg lighten-4', colSpan: 2 } ],
                  ]
                }
              />
            </div>
            <div className="table-body left-body" ref={(e: HTMLDivElement) => leftBodyRef.current = e} >
              <TableComponent
                key={1}
              
                bodyCol={[
                        [ { tag: 'th', value: '정지시간', rowSpan: 5, className: 'grey-bg lighten-4' },
                          { tag: 'th', value: '계획수리(11**)' } ],
                        [ { tag: 'th', value: '계획휴지(12**)' } ],
                        [ { tag: 'th', value: '교체휴지(13**)' } ],
                        [ { tag: 'th', value: '설비합리화(14**)' } ],
                        [ { tag: 'th', value: '전체(1***)' } ],
                        //
                        [ { tag: 'th', value: '작업준비시간', rowSpan: 8, className: 'grey-bg lighten-4' },
                          { tag: 'th', value: '생산설비점검(31**)' } ],
                        [ { tag: 'th', value: '운전준비(32**)' } ],
                        [ { tag: 'th', value: '정비설비교체(33**)' } ],
                        [ { tag: 'th', value: 'Utility점검조정(34**)' } ],
                        [ { tag: 'th', value: '부대작업준비(35**)' } ],
                        [ { tag: 'th', value: '식사.야식시간(4317)' } ],
                        [ { tag: 'th', value: '기타준비(39**)' } ],
                        [ { tag: 'th', value: '전체(3***)' } ],
                        //
                        [ { tag: 'th', value: '공장장애시간', rowSpan: 5, className: 'grey-bg lighten-4' },
                          { tag: 'th', value: '소재보급지연(41**)' } ],
                        [ { tag: 'th', value: '공정작업부하(42**)' } ],
                        [ { tag: 'th', value: '작업지연(43**)' } ],
                        [ { tag: 'th', value: '생산관제 조치지연(44**)' } ],
                        [ { tag: 'th', value: '전체(4***)' } ],
                        //
                        [ { tag: 'th', value: '운전장애시간', rowSpan: 5, className: 'grey-bg lighten-4' },
                          { tag: 'th', value: '운전이상(51**)' } ],
                        [ { tag: 'th', value: '부정기 설비교체(52**)' } ],
                        [ { tag: 'th', value: 'Utility장애(53**)' } ],
                        [ { tag: 'th', value: '설비재해장애(54**)' } ],
                        [ { tag: 'th', value: '전체(5***)' } ],
                        //
                        [ { tag: 'th', value: '설비장애시간', rowSpan: 7, className: 'grey-bg lighten-4' },
                          { tag: 'th', value: '기계부문(61**)' } ],
                        [ { tag: 'th', value: '전기부문(62**)' } ],
                        [ { tag: 'th', value: '전산부문(63**)' } ],
                        [ { tag: 'th', value: '계장부문(64**)' } ],
                        [ { tag: 'th', value: 'Utility부문(65**)' } ],
                        [ { tag: 'th', value: '설비공통(기전복합)(66**)' } ],
                        [ { tag: 'th', value: '전체(6***)' } ],
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
                    { value: '1정정',
                      colSpan: 6,
                      children: [
                        { value: '4면 스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                        { value: '부분 스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                        { value: '외주 G/M', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                      ]},
                    {
                      value: '2정정',
                      colSpan: 6,
                      children: [
                        { value: '# 1 4면', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                        { value: '# 2 4면', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                        { value: '2면스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                      ],
                    },
                    {
                      value: '3정정',
                      colSpan: 8,
                      children: [
                        { value: '#1 Grinder', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                        { value: '#2 Grinder', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                        { value: '#3 Grinder', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                        { value: '4면 스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                       
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
                //     { value: '1정정',
                //       colSpan: 6,
                //       children: [
                //         { value: '4면 스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                //         { value: '부분 스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                //         { value: '외주 G/M', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                //       ]},
                //     {
                //       value: '2정정',
                //       colSpan: 6,
                //       children: [
                //         { value: '# 1 4면', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                //         { value: '# 2 4면', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                //         { value: '2면스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                //       ],
                //     },
                //     {
                //       value: '3정정',
                //       colSpan: 8,
                //       children: [
                //         { value: '#1 Grinder', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                //         { value: '#2 Grinder', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                //         { value: '#3 Grinder', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                //         { value: '4면 스카퍼', colSpan: 2, children: [{ value: '적용' }, { value: '전체' }]},
                       
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
                  //장애시간 전체합(적용휴지합|전체휴지합)
                  bodyMaping.dormantTotal,

                  //작업시간(적용작업시간|전체작업시간)
                  bodyMaping.working,

                  //작업시간 가동률
                  bodyMaping.workingRatio,

                  //작업시간 가동률
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