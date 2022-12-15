import React, { Component } from 'react'
import { Card, CardBody, CardText,CardTitle,CardHeader } from 'reactstrap'
export default class CardArticle extends Component {
    render(){
        return(
            
          <Card style={{
            width: '18rem'
          }}>
            <img src='https://picsum.photos/300/200'
            alt='Image du produit'/>
            <CardBody className='text-center'>
            <CardTitle>Nom produit</CardTitle>
              <CardText className='fs-3 text'style={{color:'red'}}>
                Prix du produit en XAF
              </CardText>
              <CardText>Description du produit</CardText>
            </CardBody>
            </Card>
     
            
        )
    }
}