"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const axios_1 = __importDefault(require("axios"));
const flashSdk = {
    init(api_url) {
        config_1.default.apiUrl = api_url;
    },
    getProduitImages(produitId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield axios_1.default.get(config_1.default.apiUrl + `/flash/image/${produitId}`)).data;
        });
    },
    uploadImage(produitId, image) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield axios_1.default.post(config_1.default.apiUrl + `/flash/upload/image`, {
                produitid: produitId,
                image
            }, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })).data;
        });
    },
    deleteImage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield axios_1.default.delete(config_1.default.apiUrl + `/flash/image/${id}`)).data;
        });
    },
    creerProduit(produit) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield axios_1.default.post(config_1.default.apiUrl + '/flash/produit', produit)).data;
        });
    },
    listerProduits() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield axios_1.default.get(config_1.default.apiUrl + '/flash/produit')).data;
        });
    },
    getProduit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield axios_1.default.get(config_1.default.apiUrl + `/flash/produit/${id}`)).data;
        });
    },
    updateProduit(id, produit) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield axios_1.default.put(config_1.default.apiUrl + `/flash/produit/${id}`, produit)).data;
        });
    },
    deleteProduit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield axios_1.default.delete(config_1.default.apiUrl + `/flash/produit/${id}`)).data;
        });
    }
};
// flashSdk.init('http://localhost:8080');
// produit.creerProduit({
//     nom: "A product",
//     categorie: "something",
//     description: "Anithing",
//     prix: 100
// }).then(console.log)// .catch((e) => console.log('error'));
exports.default = flashSdk;
