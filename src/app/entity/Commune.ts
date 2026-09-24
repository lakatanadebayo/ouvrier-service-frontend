import {Departement} from "./Departement";

export class Commune {
  constructor(
    public id: any,
    public nom: string,
    public departement: Departement,
    public dateCreation: string,
    public codeUtilisateurCreation: string,
    public dateModification: string,
    public codeUtilisateurModification: string,
    public isDeleted?: boolean
  ) {
  }
}
