
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {

  constructor() { }

  getDataListTodo() {

  const todos = [
    {
      name: 'Angular',
      category: 'Web Development',
      disabled : false,
      color: 'white'

    },
    // {
    //   name: 'Flexbox',
    //   category: 'Web Development',
    //   disabled : false,
    //   color: 'blueviolet'

    // },
    // {
    //   name: 'iOS',
    //   category: 'App Development',
    //   disabled : false,
    //   color: 'blueviolet'
    // },
    // {
    //   name: 'hola',
    //   category: 'Software development',
    //   disabled : false,
    //   color: 'blueviolet'
    // },
    // {
    //   name: 'CSS',
    //   category: 'Software development',
    //   disabled : false,
    //   color: 'blueviolet'
    // },
    // {
    //   name: 'HTML',
    //   category: 'Software development',
    //   disabled : false,
    //   color: 'blueviolet'
    // }
  ];

  return todos;
 }

 getDataListComplete() {

  const completed  = [
    {
      name: 'Operario1',
      category: 'Mobile Development',
      disabled : false,
      color: 'white'
    },
    {
      name: 'Operario2',
      category: 'Databases',
      disabled : false,
      color: 'white'
    },
    {
      name: 'Operario3',
      category: 'Augmented Reality',
      disabled : false,
      color: 'white'
    },
    {
      name: 'Operario4',
      category: 'Web Development',
      disabled : false,
      color: 'white'
    },
    {
      name: 'Operario5',
      category: 'Web Development',
      disabled : false,
      color: 'white'
    },
    {
      name: 'Operario6',
      category: 'Web Development',
      disabled : false,
      color: 'white'
    }
  ];
  return completed;
  }

}
