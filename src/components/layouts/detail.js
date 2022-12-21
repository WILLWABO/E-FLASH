import React from "react";
import { Component } from "react";
import { FcViewDetails } from "react-icons/fc";
import '../../assets/css/detail.css'
import NavbarUser from './navbar'
function Detail(){
    return (
        
        <div >
            <NavbarUser />


        <div className="row justify-content-around custom-line" >
            <div className="col-4 bg-warning">
            <img src="C:\Users\SAID\Documents\reactproj\E-flash\public\logo512.png"alt="Image du prouit"/>
            </div>

            <div className="col-8 bg-warning ">
            <p className="font-weight-bold fs-1"><big>Nom du produit</big>
            </p>
            <p>  listerProduits line linew justifyContentferf rfe fvre rerfef rerfefrerfefrerfefrerfefrerfefrerfefrerfefrerfefrerfefrerfef rerfefrerfefrerfefrerfef rerfefrerfefrerfefrerfef rerfefrerfef
            </p>
            
            <p><div className="font-weight-bold text-danger fs-2">20000 XAF</div>
            </p><br/>
            <button id="button"className="bg-success p-1 mb-2">Acheter </button>
            </div>

        </div>




        <div className="foot">
                    <p>©Copyright Génie Informatique -- promo 2023 --</p>
                </div>
        </div>
        
    )
}

export default Detail;