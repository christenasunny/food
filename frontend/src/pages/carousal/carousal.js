import img from '../../components/images/biriyani.avif';
import './carousal.css';

export default function Carousal() {
  return (
    <div className='foodcarousal'>
  <h2 className='mb-3' style={{ color: 'green', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textAlign: 'center', fontSize: '35px', letterSpacing: '1px' }}>
  Best selling Foods
</h2>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false" data-touch="true">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner"style={{borderRadius:"20px"}} >
          <div className="carousel-item active">
            <img className="d-block w-100"  src={img} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <b><h2 style={{marginBottom:"30px"}}>Biriyani</h2></b> 
              <p style={{marginBottom:"60px"}}>Tasty and Deliciouse</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" style={{ objectFit: "cover", height: "100%" }} src={img} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <b><h2 style={{marginBottom:"30px"}}>Biriyani</h2></b> 
              <p style={{marginBottom:"60px"}}>Tasty and Deliciouse</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" style={{ objectFit: "cover", height: "100%" }} src={img} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <b><h2 style={{marginBottom:"30px"}}>Biriyani</h2></b> 
              <p style={{marginBottom:"60px"}}>Tasty and Deliciouse</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev"  href="#carouselExampleIndicators" role="button" data-slide="prev" style={{ width: "5%", opacity: "0.5" }}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only" >Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style={{ width: "5%", opacity: "0.5" }}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
