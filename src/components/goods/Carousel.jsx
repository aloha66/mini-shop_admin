import React, { Component } from "react";
import { Button, Swiper, previewImage } from "zent";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.currentSwiper = 0;
  }

  handlePreview = e => {
    const { images } = this.props;
    previewImage({
      images: images,
      showRotateBtn: false,
      index: images.indexOf(e.target.src),
      parentComponent: this,
      scaleRatio: 3
    });
  };

  handleAddPage = () => {
    const { images,flag } = this.props;
    const lastItem = "https://jdc.jd.com/img/200";
    const newimages = [...images];
    newimages.length
      ? newimages.splice(this.currentSwiper + 1, 0, lastItem)
      : newimages.push(lastItem);
      this.props.onImageChange(flag,newimages);
  };

  handleRemovePage = () => {
    const { images,flag } = this.props;
    const newimages = [...images];
    newimages.splice(this.currentSwiper, 1);
    this.props.onImageChange(flag,newimages);
  };

  handleSwiperChange = current => {
    this.currentSwiper = current;
  };
  render() {
    const { images, h2 } = this.props;
    return (
      <div>
        <h2 className="gd_h2">{h2}</h2>
        <Swiper
          className="gd-swiper"
          dotsColor="#fc0"
          dotsSize="small"
          onChange={this.handleSwiperChange}
          newimagesows
          arrows
        >
          {images.map((item, index) => {
            return (
              <div className="gd-swiper_h" key={index}>
                <img
                className="gd-swiper_img"
                  src={item}
                  key={index}
                  onClick={this.handlePreview}
                  alt=""
                />
                )
              </div>
            );
          })}
        </Swiper>
        <div>
          <p>
            点击图片可以预览；按两侧翻页箭头可翻页；新增在当前图片追加一张新图片；移除当前图片
          </p>
          <Button type="primary" onClick={this.handleAddPage}>
            增加
          </Button>
          <Button type="primary" outline onClick={this.handleRemovePage}>
            移除
          </Button>
        </div>
      </div>
    );
  }
}

export default Carousel;
