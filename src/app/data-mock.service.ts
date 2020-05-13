import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CenterComponentService {

  constructor() { }
  getDataListMock( ) {
    const completed  = [
      { project: 'Evil-Morty',
        name: 'Operario1',
        category: 'Mobile',
        disabled : false,
        color: 'white'
      },
      {
        project: `Morty's`,
        name: 'Operario2',
        category: 'Databases',
        disabled : false,
        color: 'white'
      },
      {
        project: 'Rick',
        name: 'Operario3',
        category: 'Augmented',
        disabled : false,
        color: 'white'
      },
      {
        project: 'Summer',
        name: 'Operario4',
        category: 'Development',
        disabled : false,
        color: 'white'
      },
      {
        project: 'Jerry',
        name: 'Operario5',
        category: 'Development',
        disabled : false,
        color: 'white'
      },
      {
        project: 'Bird-Person',
        name: 'Operario6',
        category: 'Development',
        disabled : false,
        color: 'white'
      }
    ];
    return completed;
    }

    getdataMachine() {
      return [ {
        id: 'machine_1',
        title: 'Machine 1',
        dataMachine: [
          {name: 'Data1'},
          {name: 'Data1'}
        ]
      },
      {
        id: 'machine_2',
        title: 'Machine 2',
        dataMachine: [
          {name: 'Data1'},
          {name: 'Data1'}
        ]
      },
      {
        id: 'machine_3',
        title: 'Machine 3',
        dataMachine: [
          {name: 'Data1'},
          {name: 'Data1'}
        ]
      },
      {
        id: 'machine_4',
        title: 'Machine 4',
        dataMachine: [
          {name: 'Data1'},
          {name: 'Data1'}
        ]
      },
      {
        id: 'machine_5',
        title: 'Machine 5',
        dataMachine: [
          {name: 'Data1'},
          {name: 'Data1'}
        ]
      },
    ];

    }
}
