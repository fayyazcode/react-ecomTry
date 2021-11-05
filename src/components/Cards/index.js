import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import DeliveryImg from '../../assets/images/deliveryimg.png'
import './css/index.css'
function MyCard (){
    return (
<CardGroup className="mt-30">
  <Card className='ml-20'>
    <Card.Img className="card-img" variant="top" src={DeliveryImg} />
    <Card.Body>
      <Card.Title>Fast Delivery</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className='ml-20'>
  <Card.Img className="card-img" variant="top" src='https://seeklogo.com/images/1/24-7-emergency-services-logo-28F8465D48-seeklogo.com.png'/>
    <Card.Body>
      <Card.Title>24 Hour Online Service</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className='ml-20'>
  <Card.Img className="card-img" variant="top" src="https://us.evocdn.io/dealer/1116/content/media/Content_Pages/EasyReturnssmall.png" />
    <Card.Body>
      <Card.Title>Easy Refund Policy</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content.
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>
)}

export default MyCard ;