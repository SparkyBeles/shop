import { useNavigate } from 'react-router-dom';
import Menu from "../components/Menu";

function Checkout() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Generera slumpmässigt ordernummer (6 siffror)
    const orderNumber = Math.floor(100000 + Math.random() * 900000);


    // Navigera till Confirm-sidan och skicka med ordernumret
    navigate('/confirm', { state: { orderNumber } });
  };

  return (
    <>
      <h2>Checkout</h2>
      
      <button onClick={handleCheckout}>Slutför köp</button>
    </>
  );

}

export default Checkout;
