import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';



export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 mb-3">
                <div className="card">
                    <div className="card-body">
                    <ProductConsumer>
                        {value => (
                    <div className="img-container p-5" onClick={() =>{
                        value.handleDetail(id)
                        }}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top mx-auto" />
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() => { 
                            value.addToCart(id);
                            value.openModal(id);
                            }} >

                        {inCart ? (
                            <p className="text-capitalize mb-0" disabled>
                                {" "}
                                inCart
                            </p>
                        ) : (
                            <i className="fas fa-cart-plus" />
                        )}
                        </button>
                    </div>
                )}
                    </ProductConsumer>
                    {/*Rating*/}
                   
                </div>
                {/*card footer*/}
                <div className="card-footer d-flex justify-content-between">
                       <p className="align-self-center mb-0">
                           {title}
                           </p>
                           <h5 className="text-blue font-italic mb-0">
                               <span className="mr-1">$</span>
                               {price}
                           </h5>
                                  
                    </div>
                    <div className="card-footer-rating text-center">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    </div>
            
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all .5s linear;
}
.card-footer{
    border-color: transparent;
    border-top: transparent;
    transition: all 1s linear;
    background: green;
}
&:hover{
    .card{
        border: 0.4rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: green;
    }
}

.card-footer p{
    color: white;
}

.card-footer h5{
    color: yellow;
}

.img-container{
    position: relative;
    overflow: hidden;

}

.card-img-top{
    transition: all 1s linear;
    
}

.img-container: hover .card-img-top{
    transform: scale(1.2);
}

.cart-btn{
    position: absolute;
    bottom:0;
    right:.1rem;
    padding: 0.2rem 0.4rem;
    background: green;
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0, 0);
}

.cart-btn: hover {
    color: yellow;
    cursor: pointer;
}

.fa-star{
    width:1px;
    height: 1px;
    color: var(--mainYellow);
    margin: 1rem;
    margin-bottom: 2.7rem;
    
}

.card-footer-rating{
    background: green;
}

;
`
