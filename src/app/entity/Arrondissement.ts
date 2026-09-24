import {Commune} from "./Commune";

export class Arrondissement {
  constructor(
    public id: any,
    public nom: string,
    public commune: Commune,
    public dateCreation: string,
    public codeUtilisateurCreation: string,
    public dateModification: string,
    public codeUtilisateurModification: string,
    public isDeleted?: boolean
  ) {
  }
}
