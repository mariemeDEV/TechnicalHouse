import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editerDemande(){
    alert("Editer la demande");
  }

  validerDemande(){
    alert("Valider la demande")
  }

  supprimerDemande(){
    alert("Supprimer la demande")
  }
}
