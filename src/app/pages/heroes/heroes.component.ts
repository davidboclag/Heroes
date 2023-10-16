import { DialogService } from './../../data/services/dialog.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroe } from 'src/app/data/models/heroe';
import { HeroesService } from 'src/app/data/services/heores.service';
import { FormHeroeComponent } from 'src/app/components/form-heroe/form-heroe.component';
import { LoaderService } from 'src/app/data/services/loader.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<Heroe>;
  nameSearched: string = '';

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private HeroesService: HeroesService,
    private dialog: MatDialog,
    private dialogService: DialogService,
    public loaderService: LoaderService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.HeroesService.getHeroes().subscribe(data => {
      this.dataSource = new MatTableDataSource<Heroe>(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  getHeroesByName() {
    this.HeroesService.getHeroesByName(this.nameSearched).subscribe(data => {
      this.dataSource = new MatTableDataSource<Heroe>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  openFormHeroe(heroe?: Heroe) {
    const dialogRef = this.dialog.open(FormHeroeComponent, {
      data: { name: (heroe) ? heroe.name : '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (heroe?.id) {
          result.id = heroe.id;
          this.HeroesService.modifyHeroe(result).subscribe({
            next: () => {
              this.dialogService.infoDialog({
                title: 'Info',
                message: `${heroe.name} ha sido actualizado correctamente.`,
                confirmButton: 'Ok'
              })
            }, error: () => {
              this.dialogService.infoDialog({
                title: '¡Atención!',
                message: `¡Algo ha salido mal, inténtelo de nuevo!`,
                confirmButton: 'Ok'
              })
            }, complete: () => {
              (this.nameSearched === '') ? this.getHeroes() : this.getHeroesByName();
            }
          })
        } else {
          this.HeroesService.createHeroe(result).subscribe({
            next: () => {
              this.dialogService.infoDialog({
                title: 'Info',
                message: `${result.name} ha sido creado correctamente.`,
                confirmButton: 'Ok'
              })
            }, error: () => {
              this.dialogService.infoDialog({
                title: '¡Atención!',
                message: `¡Algo ha salido mal, inténtelo de nuevo!`,
                confirmButton: 'Ok'
              })
            }, complete: () => {
              (this.nameSearched === '') ? this.getHeroes() : this.getHeroesByName();
            }
          })
        }
      };
    });
  }

  confirmDeleteHeroe(heroe: Heroe) {
    this.dialogService.confirmDialog({
      title: 'Atención',
      message: `¿Estás seguro de eliminar a ${heroe.name}?`,
      cancelButton: 'Cancelar',
      confirmButton: 'Confirmar'
    }).subscribe(confirm => {
      if (confirm) this.HeroesService.deleteHeroe(heroe.id).subscribe({
        next: () => {
          this.dialogService.infoDialog({
            title: 'Info',
            message: `${heroe.name} ha sido eliminado correctamente`,
            confirmButton: 'Ok'
          })
        }, error: () => {
          this.dialogService.infoDialog({
            title: '¡Atención!',
            message: `¡Algo ha salido mal, inténtelo de nuevo!`,
            confirmButton: 'Ok'
          })
        }, complete: () => {
          (this.nameSearched === '') ? this.getHeroes() : this.getHeroesByName();
        }
      });
    })
  }
}