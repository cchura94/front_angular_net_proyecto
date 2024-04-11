import { Component, Input } from '@angular/core';
// import { jsPDF } from "jspdf";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-vista-previa-orden',
  templateUrl: './vista-previa-orden.component.html',
  styleUrl: './vista-previa-orden.component.scss',
})
export class VistaPreviaOrdenComponent {
  @Input() ordenes: any[] = [];

  constructor() {
    if (this.ordenes) {
      console.log(this.ordenes);
    }
  }

  generarPDF() {
    // Default export is a4 paper, portrait, using millimeters for units

    const doc = new jsPDF();


    let yPos = 10;

    doc.setFontSize(12);
    doc.text('Lista de Pedidos', 10, yPos)

    yPos += 10;

    const headers = [['Order ID', 'Usuario', 'Libro', 'Fecha de pedido']]
    const rows = this.ordenes.map(item => [item.id, `${item.user.firstName} ${item.user.lastName}`, `${item.book.title} ${item.book.author}`, new Date(item.orderDate).toLocaleString()]);

    autoTable(doc, {
      head: headers,
      body: rows
    })
    
    const blob = doc.output('blob');
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');

    // doc.save('a4.pdf');
  }
}
