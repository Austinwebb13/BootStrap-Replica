
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


  function ImgCard (){
    return (
      
      <Card style={{ paddingLeft: '0rem' }}>
      <Card.Img style= {{ height: '18rem', width: '18rem'}} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" />
      <Card.Body>
        <Card.Title>Order groceries for delivery or pickup today</Card.Title>
        <Card.Text>
        Whatever you want from local stores, brought right to your door.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   
)
}

export default ImgCard 