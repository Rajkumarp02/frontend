import BDE from "../../Assests/Ourservice/video.png";
const VideoEdit  = () => {
  return (
    <div className="row  mt-5 mt-md-0 mx-5" data-aos="fade-up">
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Video Editing</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Transform your vision into captivating visual stories with our professional video editing services. From corporate videos and promotional content to social media clips and event highlights, we'll work closely with you to understand your goals and create videos that exceed your expectations. With state-of-the-art editing software and a keen eye for detail, 
            we'll enhance your footage with dynamic transitions, compelling graphics, and professional-grade effects.
            </p>
        </div>
    </div>
</div>
  );
};

export default VideoEdit ;
