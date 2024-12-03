import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Admin } from '../model/admin.model';
import { environment } from 'src/environments/environment';

/**
 * Service d'authentification qui gère les opérations de login, de gestion des rôles d'utilisateur,
 * et de cryptage/décryptage des données utilisateur.
 */

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private Admin: Admin | null = null;

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
    const AdminCryptedData = this.encryptDataAdmin(Admin);
    localStorage.setItem('currentAdmin', AdminCryptedData);
    return this.Admin ? true : false;
  }

  /**
   * Vérifie si l'utilisateur connecté possède le rôle "ADMIN".
   * @returns true si l'utilisateur est un administrateur, sinon false.
   */
  isAdmin(): boolean {
    return this.isLogin() && this.AdminHasRole('ADMIN') ? true : false;
  }

  /**
   * Vérifie si l'utilisateur possède un rôle spécifique.
   * @param role Le rôle à vérifier (ex. "ADMIN" ou "Admin").
   * @returns `true` si l'utilisateur possède ce rôle, sinon `false`.
   */

  private AdminHasRole(role: string): boolean {
    return this.Admin?.roles.includes(role) ? true : false;
  }

  /**
   * Déconnecte l'utilisateur actuel en supprimant les informations de l'utilisateur du service
   * et en supprimant les données du localStorage.
   */
  logout(): void {
    this.Admin = null;
    localStorage.removeItem('currentAdmin');
  }

  /**
   * Hache un mot de passe en utilisant bcrypt pour assurer la sécurité.
   * @param password Le mot de passe à hacher.
   * @returns Le mot de passe haché.
   */
  hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }

  /**
   * Compare un mot de passe fourni avec un mot de passe haché pour vérifier si les deux correspondent.
   * @param password Le mot de passe en clair fourni.
   * @param hashedPassword Le mot de passe haché à comparer.
   * @returns `true` si les mots de passe correspondent, sinon `false`.
   */
  authComparePassword(password: string, hashedPassword: string): boolean {
    const isValid = bcrypt.compareSync(password, hashedPassword);
    return isValid;
  }
}
