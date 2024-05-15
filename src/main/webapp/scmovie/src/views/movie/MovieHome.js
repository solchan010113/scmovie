import React from "react";
import classNames from "classnames";
import "../../assets/scss/movie/movieHome.scss";
import MovieItem from "../../components/movie/MovieItem";
import Slider from "react-slick";

const MovieHome = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />, // 화살표 버튼을 커스텀해서 사용
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <h2>박스오피스</h2>
      <Slider {...settings}>
        <MovieItem
          src="https://s.pstatic.net/movie.phinf/20240222_175/1708609058134r4oaq_JPEG/movie_image.jpg?type=w320_r145"
          title="test"
          star="5.2"
        />
        <MovieItem
          src="https://s.pstatic.net/movie.phinf/20240222_175/1708609058134r4oaq_JPEG/movie_image.jpg?type=w320_r145"
          title="test"
          star="5.2"
        />
        <MovieItem
          src="https://s.pstatic.net/movie.phinf/20240222_175/1708609058134r4oaq_JPEG/movie_image.jpg?type=w320_r145"
          title="test"
          star="5.2"
        />
        <MovieItem
          src="https://s.pstatic.net/movie.phinf/20240222_175/1708609058134r4oaq_JPEG/movie_image.jpg?type=w320_r145"
          title="test"
          star="5.2"
        />
        <MovieItem
          src="https://s.pstatic.net/movie.phinf/20240222_175/1708609058134r4oaq_JPEG/movie_image.jpg?type=w320_r145"
          title="test"
          star="5.2"
        />
        <MovieItem
          src="https://s.pstatic.net/movie.phinf/20240222_175/1708609058134r4oaq_JPEG/movie_image.jpg?type=w320_r145"
          title="test"
          star="5.2"
        />
      </Slider>
      s
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  // props로 onClick을 전달해줘야 한다.
  return <button onClick={onClick} type="button" className={classNames("slickArrow nextButton")} />;
};

const PrevArrow = ({ onClick }) => {
  return <button onClick={onClick} type="button" className={classNames("slickArrow prevButton")} />;
};

export default MovieHome;
