import React from 'react';
import Axios from 'axios'

import {Header} from './components'; // Если папка Header то ищет index.jsx
import {setPizzas as setPizzasAction} from './redux/actions/pizzas'

import {Home,Cart} from './pages'; // Если папка Header то ищет index.jsx
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import store from './redux/store';

// function App() {
//   // const [pizzas,setPizzas] = React.useState([]);

//   // const OnLoadPizzas=(data)=>{
//   //   setPizzas(data)
//   // }

//   // React.useEffect(()=>{
//   //   Axios.get('http://localhost:3000/db.json').then(({data})=>{
//   //     OnLoadPizzas(data.pizzas);
//   //   });
//   // },[]);
  
//   return (
//         <div className="wrapper">
//           <Header></Header>
//           <div className="content">
//             <Route path = "/" render = {()=>(<Home items={pizzas}/>)} exact />
//             <Route path = "/cart" component = {Cart} exact/>
//           </div>
//         </div>
//   );
// }

class App extends React.Component{
  componentDidMount(){
    Axios.get('http://localhost:3000/db.json').then(({data})=>{
      //store.dispatch(setPizzas(data.pizzas))
    this.props.setPizzas(data);
    });
  }

  render(){
    {var a=null+undefined;console.log(a)}
    return(
    <div className="wrapper">
  <Header></Header>
  <div className="content">
    <Route path = "/" render = {()=>(<Home items={this.props.items}/>)} exact />
    <Route path = "/cart" component = {Cart} exact/>
  </div>
</div>);
  }
}

const mapStateToProps = (state) => {
  return{
    items: state.pizzas.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    setPizzas:(items)=>dispatch(setPizzasAction(items)),
  }
};

// const mapDispatchToProps ={ Или setPizzasAction на setPizzas
//   setPizzas
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
