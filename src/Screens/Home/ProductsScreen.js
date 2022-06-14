import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../Components/Header'
import AddProduct from "../../Images/AddProduct2.jpg"
import { toast } from 'react-toastify'
import { CATEGORY_LIST_FETCH, CATEGORY_SELECT } from '../../Constants/categoryConstants'
import { URL_PATH } from '../../Constants/Url'
import Scrolling from '../../Components/carousel'
import axios from 'axios'

const ProductsScreen = (props) => {

    const [categoryList, setCategoryList] = useState([])
    const [product, setProduct] = useState([]);
    const [isAdded, setIsAdded] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(-1);

    const dispatch = useDispatch();

    useEffect(() => {
        getAlProduct();
        getAllCategory();
        getAllProduct();
        refreshList();
    }, [])

    const getAllCategory = () => {
        axios.get(URL_PATH + '/category/all')
            .then((response) => {
                setCategoryList(response.data.data);
                console.log("All data got from data");
            }).catch(e => {
                console.log(e);
            });
    }

    const getAlProduct = () => {
        axios.get(URL_PATH + `/product/all`)
            .then((response) => {
                setProduct(response.data);
                console.log("All data got from data");
            }).catch(e => {
                console.log(e);
            });
    }


    const getAllProduct = (categoryName) => {
        axios.get(URL_PATH + `/product/category/${categoryName}`)
            .then((response) => {
                setProduct(response.data.data);
                console.log("All data got from data");
            }).catch(e => {
                console.log(e);
            });
    }

    const onSelectCategory = (category) => {
        getAllProduct(category.name)
        dispatch({
            type: CATEGORY_SELECT,
            payload: category
        })
    }

    const refreshList = () => {
        getAllCategory();
        getAllProduct();
        setCurrentIndex(-1);
    }

    const cart = useSelector(store => store.cart)
    const userSignIn = useSelector(store => store.userSignIn)
    const onAddToCart = (product) => {
        if (!userSignIn.response) {
            toast.error("Please signin to continue...", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            props.history.push("/signin")
        }
        else {
            const body = {
                "productId": product.id,
                "quantity": 1
            }
            axios.post(URL_PATH + "/cart/add", body)
                .then(response => {
                    toast.success(response.data.data, { position: toast.POSITION.TOP_RIGHT, autoClose: 1500 })
                    setIsAdded(true)
                })
                .catch(error => {
                    toast.error(error.message, { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
                })
        }
    }

    // const onRemoveFromCart = (product) => {
    //     const cartItem = cart.filter(cartItem => cartItem.selectedProduct.id===product.id)[0];
    //     axios.delete(url_cart_remove+"/"+cartItem.id)
    //         .then(response => {
    //             toast.error(""+response.data.data,{position:toast.POSITION.TOP_RIGHT,autoClose:1500})
    //             setIsRemoved(true)
    //         })
    //         .catch(error => {
    //             toast.error(error.message,{autoClose:2000,position:toast.POSITION.TOP_RIGHT})
    //         })
    // }

    const getStatusClass = (status) => {
        if (status === "INACTIVE")
            return " overlay"
        return ""
    }

    return (
        <div className="Screen">
           <h4> <Header title="Browse the wide range of SPO+GYM collections" /> </h4>
           

            <div className="mb-3 text-center">

                <div className="row">
                    <div className="col-md-3">
                        <strong className="fs-3 form-label"></strong>
                        {
                            categoryList.length > 0 &&
                            <div className="col-md-12" >
                                <table className="table table-hover table-bordered pallette">
                                    <thead>
                                        <tr>
                                        <td onClick={() => { getAlProduct() }} >
                                            <h6>All products</h6> </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            categoryList.map(category => {
                                                return (
                                                    <tr className={getStatusClass(category.status)}>
                                                        
                                                        <td onClick={() => { onSelectCategory(category) }} >
                                                            <h6>{category.name}</h6>
                                                        </td>
                                                    </tr>
                                                    
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>

                    <div className="col-md-9">
                        <div className="row">

                            {

                                product.length > 0 &&
                                product.map(product => {
                                    let isFound = cart.filter(cartItem => cartItem.selectedProduct.id === product.id).length > 0
                                    return (
                                        <div className="col-md-3 col-sm-6 col-xs-12 myCardElement">
                                            <div className="card card-cont">
                                                <div className="card-body text-center">
                                                    {
                                                        product.imageName &&
                                                        <img src={`Images` + `/${product.imageName}`} alt="product" className="img-fluid productImage" />
                                                    }
                                                    {
                                                        !product.imageName &&
                                                        <img src={AddProduct} alt="product" className="img-fluid productImage" />
                                                    }
                                                    <div className="card-title"> <h5>{product.name}</h5> </div>

                                                    <div className="card-title"> <h6>{product.description}</h6> </div>

                                                    <div className="card-text">
                                                        <h5>{product.price} &#8377;</h5>
                                                        <hr />
                                                        {/* {
                                                            isFound===true &&
                                                                <button onClick={() => {onRemoveFromCart(product)}} className="btn btn-danger">Remove from Cart</button>
                                                        } */}
                                                        {
                                                            isFound === false &&
                                                            <button onClick={() => { onAddToCart(product) }} className="btn btn-success" >Add To Cart</button>
                                                        }

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>
                    {
                        // product.length > 0 &&
                        <div >
                            {/* <h4 className="text-center">Please Login to proceed</h4> */}
                            <Scrolling />
                            {/* <span className="vertical-aligner"></span> */}
                            {/* <h4 className="text-center">Please Login to proceed</h4> */}
                        </div>
                    }


                </div>
            </div>

        </div>
    )
}

export default ProductsScreen