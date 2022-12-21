import React, { Component } from 'react'
import { Card, CardBody, CardText,CardTitle,CardHeader } from 'reactstrap'

function CardArticle (props) {
  const {nom,image,description,prix}=props

    
        return(

            
          <Card style={{
            width: '18rem'
          }}>
            <img src={image}
            alt='Image du produit'/>
            <CardBody className='text-center'>
            <CardTitle>{nom}</CardTitle>
              <CardText className='fs-3 text'style={{color:'red'}}>
                {prix}
              </CardText>
              <CardText>{description}</CardText>
            </CardBody>
            </Card>

            
     
            
        )
    
}

export default CardArticle;