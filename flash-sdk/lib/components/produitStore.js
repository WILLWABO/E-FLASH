"use strict";
// import config from "../config";
// import axios from "axios";
// export interface Produit {
//     id?: number;
//     nom: string;
//     etat?: boolean;
//     description: string;
//     prix: number;
//     categorie: string;
//     Localisation?: string;
//     isRecherche?: boolean;
//     nomScientifique?: string;
//     nombreExemplaire?: number;
//     surnom?: string;
//     prixDetail?: number;
//     prixGros?: number;
//     paiement?: string;
//     marque?: string;
//     url?: string;
//     image?: string;
// }
// export default {
//     async creerProduit(produit: Produit) {
//         return (await axios.post(config.apiUrl + '/flash/produit', produit)).data;
//     },
//     async listerProduits() {
//         return (await axios.get(config.apiUrl + '/flash/produit')).data;
//     },
//     async getProduit(id: number) {
//         return (await axios.get(config.apiUrl + `/flash/produit/${id}`)).data;
//     },
//     async updateProduit(id: number, produit: Partial<Omit<Produit, 'id'>>) {
//         return (await axios.put(config.apiUrl + `/flash/produit/${id}`, produit)).data;
//     },
//     async deleteProduit(id: number) {
//         return (await axios.delete(config.apiUrl + `/flash/produit/${id}`)).data;
//     }
// }
