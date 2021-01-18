import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import MessageContainer from './Containers/MessageContainer';
import ProductsContainer from './Containers/ProductsContainer';
import CartContainer from './Containers/CartCointainer';
import Footer from './Components/Footer';



class App extends Component {
  state = {  }
  render() { 
    return ( 

        
      <div className="App">
          <div>

        <Header />
        <main id="mainContainer">
            <div className="container">
               
                <ProductsContainer />
                <MessageContainer />
                <CartContainer />
              
             
            </div>
        </main>
        <Footer/>
       
    </div>
      </div>
     );
  }
}
 
export default App;