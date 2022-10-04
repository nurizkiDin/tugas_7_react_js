import { 
  Container, Row, Col, Alert, Image, Media,
  Badge, Button, Breadcrumb, Card, ButtonGroup
} from "react-bootstrap";

function App() {
  return (
    <Container fluid style={{margin: "0", padding: "0"}}>
      <Row>
        <Col>
          <Media style={{backgroundColor: "#000"}}>
            <Media.Body>
              <br/>
            </Media.Body>
          </Media>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col xs={6} md={4}>
          <Alert variant="primary">
            Website React Bootstrap
          </Alert>
        </Col>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
          <ButtonGroup>
            <Button variant="primary">
              Notifications <Badge bg="light" style={{color: "#000", backgroundColor: "#fff"}}>9</Badge>
            </Button>
            <Button variant="primary">
              Message <Badge style={{color: "#000", backgroundColor: "#fff"}}>19</Badge>
            </Button>
          </ButtonGroup>
          &emsp;
          <Image 
            width="20"
            height="20"
            roundedCircle
            src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
          />
          &emsp;
          <b>Andreas</b>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
        </Col>
        <Col xs={6} md={4} style={{backgroundColor: "#ccc"}}>
          <Breadcrumb>
            <Breadcrumb.Item href="/"><b>Home</b></Breadcrumb.Item>
            <Breadcrumb.Item href="/"><b>Berita</b></Breadcrumb.Item>
            <Breadcrumb.Item href="/" active><b>Bola</b></Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row className="justify-content-md-center">
        <Card style={{width:"300px", padding:"0"}}>
          <Card.Img 
            variant="top" 
            src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"
          />
          <Card.Body>
            <Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
            <Card.Text>
              Godin sekarang menjadi pemain Uruguay dengan caps terbanyak setelah 
              membantu negaranya melibas Thailand di final Piala Tiongkok. Diego 
              Godin boleh berbangga setelah resmi menjadi.
            </Card.Text>
            <Button variant="primary"><b>Read More</b></Button>
          </Card.Body>
        </Card>
        <Card style={{width:"300px", padding:"0"}}>
          <Card.Img 
            variant="top" 
            src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
          />
          <Card.Body>
            <Card.Title>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</Card.Title>
            <Card.Text>
              Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan madrid. 
              Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak 
              bersama kampiun Ligue 1 Prancis, demikian kata ayahnya.
            </Card.Text>
            <Button variant="primary"><b>Read More</b></Button>
          </Card.Body>
        </Card>
        <Card style={{width:"300px", padding:"0"}}>
          <Card.Img 
            variant="top" 
            src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
          />
          <Card.Body>
            <Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
            <Card.Text>
              Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat 
              optimistis. Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk 
              bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini.
            </Card.Text>
            <Button variant="primary"><b>Read More</b></Button>
          </Card.Body>
        </Card>
        <Card style={{width:"300px", padding:"0"}}>
          <Card.Img 
            variant="top" 
            src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
          />
          <Card.Body>
            <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</Card.Title>
            <Card.Text>
              Gelandang tim nasional &#40;timnas&#41; Indonesia U-23 Sani Rizki Fauzi, menegaskan 
              kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim akan 
              bentrok pada laga pemungkas grup K.
            </Card.Text>
            <Button variant="primary"><b>Read More</b></Button>
          </Card.Body>
        </Card>
      </Row>
      <br/>
    </Container>
  );
}

export default App;
