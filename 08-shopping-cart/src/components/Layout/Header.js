import classes from './Header.module.css';
import mealsImage from '../../assests/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>

      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Delcious table full of food!"/>
      </div>
    </>
  );
}

export default Header;