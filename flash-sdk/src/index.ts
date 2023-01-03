import config from "./config";
import axios from "axios";

export interface Image {
    imageid?: number;
    name?: string;
    type?: string;
    image?: string;
    produitid?: number;
}

export interface Produit {
    id?: number;
    nom: string;
    etat?: boolean;
    description: string;
    prix: number;
    categorie: string;
    Localisation?: string;
    isRecherche?: boolean;
    nomScientifique?: string;
    nombreExemplaire?: number;
    surnom?: string;
    prixDetail?: number;
    prixGros?: number;
    paiement?: string;
    marque?: string;
    url?: string;
    image?: string;
}

const flashSdk = {
    init(api_url: string) {
        config.apiUrl = api_url;
    },
    async getProduitImages(produitId: number) {
        return (await axios.get(config.apiUrl + `/flash/image/${produitId}`)).data;
    },
    async uploadImage(produitId: number, image: any) {
        return (await axios.post(
            config.apiUrl + `/flash/upload/image`, 
            {
                produitid: produitId,
                image
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )).data;
    },
    async deleteImage(id: number) {
        return (await axios.delete(config.apiUrl + `/flash/image/${id}`)).data;
    },
    async creerProduit(produit: Produit) {
        return (await axios.post(config.apiUrl + '/flash/produit', produit)).data;
    },
    async listerProduits() {
        return (await axios.get(config.apiUrl + '/flash/produit')).data;
    },
    async getProduit(id: number) {
        return (await axios.get(config.apiUrl + `/flash/produit/${id}`)).data;
    },
    async updateProduit(id: number, produit: Partial<Omit<Produit, 'id'>>) {
        return (await axios.put(config.apiUrl + `/flash/produit/${id}`, produit)).data;
    },
    async deleteProduit(id: number) {
        return (await axios.delete(config.apiUrl + `/flash/produit/${id}`)).data;
    }
}

// flashSdk.init('http://localhost:8080');
// produit.creerProduit({
//     nom: "A product",
//     categorie: "something",
//     description: "Anithing",
//     prix: 100
// }).then(console.log)// .catch((e) => console.log('error'));

export default flashSdk;

