import {CategorieProfession} from "./CategorieProfession";

export class Profession {
  constructor(
    public id: any,
    public nom: string,
    public categorieProfession: CategorieProfession,
    public dateCreation: string,
    public codeUtilisateurCreation: string,
    public dateModification: string,
    public codeUtilisateurModification: string,
    public isDeleted?: boolean
  ) {
  }
}
