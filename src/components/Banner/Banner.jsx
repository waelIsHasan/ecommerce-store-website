import "./Banner.css";
import img1 from "../../assets/slides/1.png"
import img2 from "../../assets/slides/4.png"
import img3 from "../../assets/slides/5.png"

export default function Banner({img}) {

  return (
    <div className={`banner`} >
      <div className="glass-effect"></div>
      <img src={img} alt="" />
      <div className="banner-info">
      </div>
    </div>
  );
}

export function GroupBanner() {

  // if (error) {
  //   return <Error message={error}/>;
  // }
  // if (loading) {
  //   return (
  //   <div className={className} style={{height:"300px"}}>
  //           <Skeleton  width="30%" sx={{ bgcolor: 'grey.600', height: '100%' , padding :'0' , width : '30%'}} />
  //           <Skeleton width="30%" sx={{ bgcolor: 'grey.600', height: '100%' , padding :'0' , width : '30%'}}/>
  //           <Skeleton width="30%" sx={{ bgcolor: 'grey.600', height: '100%' , padding :'0' , width : '30%'}}/>
  //   </div>);
  // }

  return (
    <div className="group-banner">
     <Banner img={img1}/>
     <Banner img={img2}/>
     <Banner img={img3}/>
    </div>
  );
}
