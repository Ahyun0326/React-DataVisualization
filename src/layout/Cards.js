import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <>
      <div className='row'>    
        {/*부트 스트랩에서는 한 줄의 크기를 12로 본다!
          lg : 화면이 클 경우 크기 3(4개씩)
          md : 화면이 중간일 경우 크기 6 (2개씩)
        */} 
         <div className='col-lg-4 col-md-6'> 
          <div className='card' style={{ width: '18rem' }}>
            <img src='img/barIcon.svg' className='card-image' />
            <div className='card-body'>
              <h5 className='card-title'>Bar Chart</h5>
              <p className='card-text'> Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href='/' className='btn btn-primary'>Go somewhere</a>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='card' style={{ width: '18rem' }}>
            <img src='img/lineIcon.svg' className='card-image' />
            <div className='card-body'>
              <h5 className='card-title'>Line Chart</h5>
              <p className='card-text'> Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href='/' className='btn btn-primary'>Go somewhere</a>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='card' style={{ width: '18rem' }}>
            <img src='img/pieIcon.svg' className='card-image' />
            <div className='card-body'>
              <h5 className='card-title'>Pie Chart</h5>
              <p className='card-text'> Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href='/' className='btn btn-primary'>Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='img/lineIcon.svg' />
        <Card.Body>
          <Card.Title>Line Chart</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='img/pieIcon.svg' />
        <Card.Body>
          <Card.Title>Pie Chart</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
   
    </>

  );
}

export default Cards;