import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button';

export default class Details extends Component {
    render() {
                return (
                   <ProductConsumer>
                       {value => {
                       const {
                        id, 
                        company, 
                        img,
                        info,
                        info2,
                        info3,
                        info4,
                        info5, 
                        price, 
                        title, 
                        inCart 
                       } = value.detailProduct;
                       return(
                           <div className="container py-5">
                               {/*title*/}
                               <div className="row">
                                   <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                       <h1>{title}</h1>
                                   </div>
                               </div>
                               {/*End of title*/}

                               {/*Product Info*/}
                                    <div className="row">
                                        <div className="col-10 mx-auto col-md-6 my-3">
                                            <img src={img} className="img-fluid" alt="product"/>
                                        </div>
                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalze">
                                            <h2>model: {title}</h2>
                                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                                made by : <span className="text-uppercase">{company}</span>
                                            </h4>
                                            <h4 className="text-blue">
                                                <strong>
                                                    price : <span>$</span>
                                                    {price}
                                                </strong>
                                            </h4>
                                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                                some info about product :
                                            </p>
                                            <p className="text-muted lead">{info}</p>
                                            <p className="text-muted lead">{info2}</p>
                                            <p className="text-muted lead">{info3}</p>
                                            <p className="text-muted lead">{info4}</p>
                                            <p className="text-muted lead">{info5}</p>

                                            {/*buttons*/}

                                            <Link to="/">
                                            <ButtonContainer>Back to products</ButtonContainer>
                                            </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false} onClick={() => { 
                                                value.addToCart(id);
                                                value.openModal(id);
                                                }}>
                                                {inCart ? "inCart" : "add to cart"}
                                            </ButtonContainer>
                                            </div>
                                    </div>
                               {/*End Product Info*/}
                           </div>
                       )
                    }}
                   </ProductConsumer>
                    
                );

        
    }
}
