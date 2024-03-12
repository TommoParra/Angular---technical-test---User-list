// mock-data.service.ts
import { Injectable } from '@angular/core';
import { Iusuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getUsers(): Iusuario[] {
    return [
      {
        "id": 1,
        "email": "jhon@gmail.com",
        "name": "Jhon",
        "surname1": "Doe",
        "surname2": "Smith"
      },
      {
        "id": 2,
        "email": "alice@example.com",
        "name": "Alice",
        "surname1": "Johnson",
        "surname2": "Brown"
      },
      {
        "id": 3,
        "email": "bob@yahoo.com",
        "name": "Bob",
        "surname1": "Smith",
        "surname2": "Jones"
      },
      {
        "id": 4,
        "email": "emily@hotmail.com",
        "name": "Emily",
        "surname1": "Williams",
        "surname2": "Davis"
      },
      {
        "id": 5,
        "email": "mike@gmail.com",
        "name": "Mike",
        "surname1": "Anderson",
        "surname2": "Miller"
      },
      {
        "id": 6,
        "email": "sara@example.com",
        "name": "Sara",
        "surname1": "Martinez",
        "surname2": "Garcia"
      },
      {
        "id": 7,
        "email": "david@yahoo.com",
        "name": "David",
        "surname1": "Brown",
        "surname2": "Johnson"
      },
      {
        "id": 8,
        "email": "lisa@hotmail.com",
        "name": "Lisa",
        "surname1": "Taylor",
        "surname2": "Clark"
      },
      {
        "id": 9,
        "email": "kevin@gmail.com",
        "name": "Kevin",
        "surname1": "Wilson",
        "surname2": "Rodriguez"
      },
      {
        "id": 10,
        "email": "olivia@example.com",
        "name": "Olivia",
        "surname1": "Lee",
        "surname2": "Hernandez"
      },
      {
        "id": 11,
        "email": "alex@yahoo.com",
        "name": "Alex",
        "surname1": "Gonzalez",
        "surname2": "Perez"
      },
      {
        "id": 12,
        "email": "emma@hotmail.com",
        "name": "Emma",
        "surname1": "Moore",
        "surname2": "Sanchez"
      },
      {
        "id": 13,
        "email": "ryan@gmail.com",
        "name": "Ryan",
        "surname1": "Jackson",
        "surname2": "Lewis"
      },
      {
        "id": 14,
        "email": "chloe@example.com",
        "name": "Chloe",
        "surname1": "Allen",
        "surname2": "Young"
      },
      {
        "id": 15,
        "email": "eric@yahoo.com",
        "name": "Eric",
        "surname1": "Harris",
        "surname2": "Martin"
      }
    ]
  }
}
