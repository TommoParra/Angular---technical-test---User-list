import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { Iusuario } from 'src/app/interfaces/usuario.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  searchForm: FormGroup;
  users: Iusuario[] = [];
  currentPage: number = 1;
  pageSize: number = 5; 
  totalPages: any;

  constructor(private fb: FormBuilder, private mockDataService: MockDataService) {
    this.searchForm = this.fb.group({
      searchTerm: ['']
    });
  }

  ngOnInit(): void {
    this.users = this.mockDataService.getUsers();
  }

  searchUsers() {
    const searchTerm = this.searchForm.value.searchTerm.trim().toLowerCase(); // Trim and convert to lowercase
    if (searchTerm === '') {
      this.users = this.mockDataService.getUsers();
    } else {
      this.users = this.mockDataService.getUsers().filter(user =>
        (user.name + ' ' + user.surname1 + ' ' + user.surname2).toLowerCase().includes(searchTerm) || 
        user.email.toLowerCase().includes(searchTerm)
      );
    }
    // Reset to first page after search
    this.currentPage = 1;
  }

  nextPage(): void {
    const totalPages = Math.ceil(this.users.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get visibleUsers(): Iusuario[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.users.length);
    return this.users.slice(startIndex, endIndex);
  }
}
