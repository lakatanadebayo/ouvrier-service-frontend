import {Arrondissement} from "./Arrondissement";

export class Quartier {
  constructor(
    public id: any,
    public nom: string,
    public arrondissement: Arrondissement,
    public dateCreation: string,
    public codeUtilisateurCreation: string,
    public dateModification: string,
    public codeUtilisateurModification: string,
    public isDeleted?: boolean
  ) {
  }
}
