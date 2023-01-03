"use strict";
// import config from "../config";
// import axios from "axios";
// export interface Image {
//     imageid?: number;
//     name?: string;
//     type?: string;
//     image?: string;
//     produitid?: number;
// }
// export default {
//     async getProduitImages(produitId: number) {
//         return (await axios.get(config.apiUrl + `/flash/image/${produitId}`)).data;
//     },
//     async uploadImage(produitId: number, image: any) {
//         return (await axios.post(
//             config.apiUrl + `/flash/upload/image`, 
//             {
//                 produitid: produitId,
//                 image
//             },
//             {
//                 headers: {
//                     "Content-Type": "multipart/form-data"
//                 }
//             }
//         )).data;
//     },
//     async deleteImage(id: number) {
//         return (await axios.delete(config.apiUrl + `/flash/image/${id}`)).data;
//     }
// }
