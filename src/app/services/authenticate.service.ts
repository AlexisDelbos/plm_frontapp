import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';
import { Admin } from '../model/admin.model';

/**
 * Service d'authentification qui gère les opérations de login, de gestion des rôles d'utilisateur,
 * et de cryptage/décryptage des données utilisateur.
 */

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private Admin: Admin | null = null;
  DataAdmin: any;

  /**
   * Le constructeur initialise le service en récupérant l'utilisateur actuel du localStorage
   * et en le décryptant si des données existent.
   */
  constructor() {
    let localStorageAdmin = localStorage.getItem('currentAdmin');
    if (localStorageAdmin) {
      const DataAdmin = this.DataAdmin(localStorageAdmin);
      this.Admin = JSON.parse(DataAdmin);
    }
  }

  /**
   * Définit l'utilisateur actuel dans le service.
   * @param Admin L'utilisateur à définir dans le service.
   */
  setAdmin(Admin: Admin): void {
    this.Admin = Admin;
  }

  /**
   * Récupère l'utilisateur actuel du service. Si aucun utilisateur n'est défini, retourne un utilisateur vide.
   * @returns L'utilisateur actuel ou un utilisateur par défaut vide.
   */
  getAdmin(): Admin {
    return this.Admin || new Admin('', '');
  }

  /**
   * Vérifie si l'utilisateur est connecté. Si l'utilisateur est connecté, les informations de l'utilisateur
   * sont chiffrées et stockées dans le localStorage.
   * @returns `true` si l'utilisateur est connecté, sinon `false`.
   */
  isLogin(): boolean {
    if (!this.Admin) return false;
    const Admin = JSON.stringify(this.Admin);
    const AdminData = this.DataAdmin(Admin);
    localStorage.setItem('currentAdmin', AdminData);
    return this.Admin ? true : false;
  }


}
