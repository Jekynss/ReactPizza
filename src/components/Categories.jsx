import React from 'react';
import classNames from 'classnames'

function Categories({items,onClickItem}){
  const [state,setstate] = React.useState(null);
  const onSelectItem = (index) =>{
    setstate(index);
  }
        return(
        <div className="categories">
              <ul>
                <li onClick={()=>onSelectItem(null)} className={state === null ? 'active':''}>Все</li>
                {items && items.map(( item, index) => (<li className={state === index ? 'active':''} onClick = {()=>onSelectItem(index)} key={`${item}_${index}`}>{item}</li>))}
              </ul>
        </div>);
}

export default Categories;