import { Component } from '@angular/core';
import { Producto } from './datos.interfaces';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [MessageService],
})
export class AppComponent {
  title = 'AngularPrime';

  public products: Producto[] = [
    { code: '001', name: 'martillo', category: 'construccion', quantity: 23 },
    { code: '002', name: 'taladro', category: 'construccion', quantity: 50 },
    { code: '002', name: 'taladro', category: 'construccion', quantity: 50 },
    { code: '002', name: 'taladro', category: 'construccion', quantity: 50 },
    { code: '002', name: 'taladro', category: 'construccion', quantity: 50 },
    { code: '002', name: 'taladro', category: 'construccion', quantity: 50 },
    { code: '002', name: 'taladro', category: 'construccion', quantity: 50 },
    { code: '002', name: 'taladro', category: 'construccion', quantity: 50 },
    { code: '002', name: 'taladro', category: 'construccion', quantity: 50 },
  ];

  constructor(private messageService: MessageService) {}

  public enviar(): void {
    alert('Hola');
  }

  public show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}
