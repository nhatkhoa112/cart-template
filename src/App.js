import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Message from './Components/Message';
import ProductsContainer from './Containers/ProductsContainer';
import Cart from './Components/Cart';
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
                <Message/>
                <Cart />
              
             
            </div>
        </main>
        <Footer/>
       
    </div>
      </div>
     );
  }
}
 
export default App;