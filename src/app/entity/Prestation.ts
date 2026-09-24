import {User} from "./User";
import {Ouvrier} from "./Ouvrier";
import {StatutPrestationEnum} from "../enum/StatutPrestationEnum";

export class Prestation {
  constructor(
    public id: any,
    public description: string,
    public dateDebutPrestation: string,
    public dateFinPrestation: string,
    public statutPrestation: StatutPrestationEnum,
    public user: User,
    public ouvrier: Ouvrier,
    public dateCreation: string,
    public codeUtilisateurCreation: string,
    public dateModification: string,
    public codeUtilisateurModification: string,
    public isDeleted?: boolean
  ) {
  }
}
