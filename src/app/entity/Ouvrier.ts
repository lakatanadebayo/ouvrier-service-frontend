import {Profession} from "./Profession";
import {User} from "./User";

export class Ouvrier {
  constructor(
    public id: any,
    public user: User,
    public profession: Profession,
    public dateCreation: string,
    public codeUtilisateurCreation: string,
    public dateModification: string,
    public codeUtilisateurModification: string,
    public isDeleted?: boolean
  ) {
  }
}
