<template>
  <div class="section1">
    <div>
      <label>New Arrival</label>
      <h1>Discover Our New Collection</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <button>BUY NOW</button>
    </div>
  </div>

  <div class="section2">
    <div id="title">
      <h1>Browse The Range</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="range">
      <div>
        <img src="/assets/home/img-home-section2-dining.png" />
        <label>Dining</label>
      </div>
      <div>
        <img src="/assets/home/img-home-section2-living.png" />
        <label>Living</label>
      </div>
      <div>
        <img src="/assets/home/img-home-section2-bedroom.png" />
        <label>Bedroom</label>
      </div>
    </div>
  </div>

  <div class="section3">
    <h1>Our Products</h1>
    <div class="list-product">
      <Product v-for="(item, index) in item" :key="index" :item="item" />
    </div>
    <div id="show-more">
      <button @click="this.$router.push('/shop')">Show More</button>
    </div>
  </div>

  <div class="section4">
    <div id="title">
      <h1>50+ Beautiful rooms inspiration</h1>
      <p>
        Our designer already made a lot of beautiful prototipe of rooms that
        inspire you
      </p>
      <button>Explore More</button>
    </div>

    <Carousel
      :itemsToShow="itemToShow"
      :wrapAround="true"
      snapAlign="start"
      @init="handleInit"
      @slide-end="handleSlideStart"
    >
      <Slide v-for="(slide, index) in slide" :key="index" :slide="slide">
        <div class="carousel__item">
          <img
            v-if="slide.key === 1"
            src="@/assets/home/img-home-slideshow1.png"
          />
          <img
            v-if="slide.key === 2"
            src="@/assets/home/img-home-slideshow2.png"
          />
          <img
            v-if="slide.key === 3"
            src="@/assets/home/img-home-slideshow3.png"
          />
          <div v-if="checkCurrent === index">
            <div id="slide-name">
              <p>{{ slide.name }}</p>
              <h1>{{ slide.description }}</h1>
            </div>
            <div id="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 12H3M21 12L15 6M21 12L15 18"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>

  <div class="section5">
    <div id="title">
      <p>Share your setup with</p>
      <h1>#FuniroFurniture</h1>
    </div>
    <div class="image-list">
      <div class="column">
        <div class="grid">
          <img
            src="/assets/home/img-home-section5-1.png"
            @click.stop="handleImgPreview(1)"
          />
          <img
            src="/assets/home/img-home-section5-2.png"
            @click.stop="handleImgPreview(2)"
          />
        </div>
        <div class="grid">
          <img
            src="/assets/home/img-home-section5-6.png"
            @click.stop="handleImgPreview(3)"
          />
          <img
            src="/assets/home/img-home-section5-7.png"
            width="344px"
            height="242px"
            @click.stop="handleImgPreview(4)"
          />
        </div>
      </div>
      <div class="column">
        <img
          src="/assets/home/img-home-section5-3.png"
          @click.stop="handleImgPreview(5)"
        />
      </div>
      <div class="column">
        <div class="grid">
          <img
            src="/assets/home/img-home-section5-4.png"
            @click.stop="handleImgPreview(6)"
          />
          <img
            src="/assets/home/img-home-section5-5.png"
            @click.stop="handleImgPreview(7)"
          />
        </div>
        <div class="grid">
          <img
            src="/assets/home/img-home-section5-8.png"
            @click.stop="handleImgPreview(8)"
          />
          <img
            src="/assets/home/img-home-section5-9.png"
            width="258px"
            height="196px"
            @click.stop="handleImgPreview(9)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide } from "vue3-carousel"
import { v3ImgPreviewFn } from 'v3-img-preview'

const isDesktop = ref(false);
const isMobile = ref(false);

const updateWindowSize = () => {
  const screenWidth = window.innerWidth;
  isDesktop.value = screenWidth > 1279;
  isMobile.value = screenWidth <= 767;
  if (isDesktop.value) {
    itemToShow.value = Number(2.3)
  } else {
    itemToShow.value = Number(1)
  }
};

onMounted(() => {
  if (process.client) {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
  }
});

const itemToShow = ref(2.3)

const item = [
  {
    key: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    originPrice: "3.500.000",
    new: false,
    discount: 30,
  },
  {
    key: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "2.500.000",
    originPrice: null,
    new: false,
    discount: null,
  },
  {
    key: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "7.000.000",
    originPrice: "14.000.000",
    new: false,
    discount: 50,
  },
  {
    key: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "500.000",
    originPrice: null,
    new: true,
    discount: null,
  },
  {
    key: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "1.500.000",
    originPrice: null,
    new: false,
    discount: null,
  },
  {
    key: 6,
    name: "Muggo",
    description: "Small mug",
    price: "150.000",
    originPrice: null,
    new: true,
    discount: null,
  },
  {
    key: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "7.000.000",
    originPrice: "14.000.000",
    new: false,
    discount: 50,
  },
  {
    key: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "500.000",
    originPrice: null,
    new: true,
    discount: null,
  },
];

const slide = [
  {
    key: 1,
    name: "01 --- Bed Room",
    description: "Inner Peace",
  },
  {
    key: 2,
    name: "02 --- Home",
    description: "Inner Peace",
  },
  {
    key: 3,
    name: "03 --- Bed Room",
    description: "Inner Peace",
  },
];

const linkImg = [
'https://cdn.discordapp.com/attachments/1088358270659477525/1185053966350942338/Rectangle_36.png?ex=658e3682&is=657bc182&hm=6808bcc50012805f86729f2eccabc7e4f802a73f6a80cb40c492a70a0bd0a3e3&',
'https://cdn.discordapp.com/attachments/1088358270659477525/1185053967013662760/img-home-section5-2.png?ex=658e3682&is=657bc182&hm=2a8afa923535c4a956672ece70ed77c79dc329e7acafd4670fbf5025b27a2f23&',
'https://cdn.discordapp.com/attachments/1088358270659477525/1185053966682308658/Rectangle_37.png?ex=658e3682&is=657bc182&hm=c1463284600ff96e7070f602a7dc9aed39d01409341974a7ed8f7149b4c957ee&',
'https://cdn.discordapp.com/attachments/1088358270659477525/1185053968393568337/img-home-section5-7.png?ex=658e3683&is=657bc183&hm=f8780417778f001ed1a35c520f1b7acf1e38dc2c84280d6b66e3d30cbfe8edf8&',
'https://cdn.discordapp.com/attachments/1088358270659477525/1185055236365226134/img-home-section5-3.png?ex=658e37b1&is=657bc2b1&hm=99e25384d24366534915b14f0559191b663b25c64a422d2562d05d22e24face6&',
'https://cdn.discordapp.com/attachments/1088358270659477525/1185053967361769492/img-home-section5-4.png?ex=658e3683&is=657bc183&hm=b673cb862f8b161dda3de0bae9a9218d00dacdae06514facff1246dc550c85f2&',
'https://cdn.discordapp.com/attachments/1088358270659477525/1185055497586483261/Rectangle_45.png?ex=658e37ef&is=657bc2ef&hm=d68bff7fd1673897b2c6c3baccd3a41696e231cef72dbc5d217f839f42893c29&',
'https://cdn.discordapp.com/attachments/1088358270659477525/1185053968674603079/img-home-section5-8.png?ex=658e3683&is=657bc183&hm=1a6ee38a40f2e549024f4a00a115abd22379949030fdcfa3f72230be8c202346&',
'https://cdn.discordapp.com/attachments/1088358270659477525/1185053968947236924/img-home-section5-9.png?ex=658e3683&is=657bc183&hm=bccc86167f082f329cf45f4e53e6088907aa881688a575bcc726449b87656d0e&'
]

const checkCurrent = ref(0)

const showInfo = ref(false)

watch(() => checkCurrent, (val) => {
  console.log(val, 'fe');
})

if (checkCurrent.data) {
  console.log(checkCurrent.data, 'checkCurrent')
}

function handleInit() {
  // console.log('created')
}

function handleSlideStart(data) {
  showInfo.value = true
  checkCurrent.value = data.currentSlideIndex
}

function handleImgPreview(val) {
  switch (val) {
    case 1:
      return v3ImgPreviewFn(linkImg[0])

    case 2:
      return v3ImgPreviewFn(linkImg[1])

    case 3:
      return v3ImgPreviewFn(linkImg[2])

    case 4:
      return v3ImgPreviewFn(linkImg[3])

    case 5:
      return v3ImgPreviewFn(linkImg[4])

    case 6:
      return v3ImgPreviewFn(linkImg[5])

    case 7:
      return v3ImgPreviewFn(linkImg[6])

    case 8:
      return v3ImgPreviewFn(linkImg[7])

    case 9:
      return v3ImgPreviewFn(linkImg[8])

    default:
      return
  }
}
</script>


<style lang="scss" scoped>
@media (min-width: 900px) {
  .section1 {
    background-image: url("/assets/home/img-home-background.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 716px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 58px;

    & div {
      width: 560px;
      height: 340px;
      padding: 60px 40px 40px;
      border-radius: 10px;
      background: #fff3e3;

      & label {
        color: #333;
        font-weight: 600;
        letter-spacing: 3px;
        margin: 0;
      }

      & h1 {
        width: 400px;
        color: #b88e2f;
        font-size: 52px;
        line-height: 65px;
        margin: 4px 0 17px;
      }

      & p {
        width: 546px;
        color: #333;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        margin: 0;
      }

      & button {
        width: 222px;
        color: #fff;
        background: #b88e2f;
        font-size: 16px;
        font-weight: 700;
        padding: 25px 72px;
        margin-top: 46px;
        border: none;
        cursor: pointer;
      }
    }
  }

  .section2 {
    margin: 60px 0;
    & #title {
      text-align: center;
      & h1 {
        color: #333;
        margin: 0;
      }
      & p {
        color: #666;
        font-size: 20px;
        margin: 0;
      }
    }
    & .range {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      & div {
        cursor: pointer;
        & img {
          border-radius: 10px;
          margin: 60px 0 20px;
        }
        & label {
          display: block;
          color: #333;
          text-align: center;
          font-size: 24px;
          font-weight: 600;
        }
      }
    }
  }

  .section3 {
    margin: 60px 0;
    & h1 {
      color: #3a3a3a;
      text-align: center;
      font-size: 40px;
      line-height: 120%;
      margin: 0;
    }
    & .list-product {
      display: grid;
      grid-template-columns: repeat(4, 285px);
      justify-content: center;
      gap: 32px;
      margin: 32px 0;
    }
    & #show-more {
      display: flex;
      justify-content: center;
      & button {
        width: 245px;
        height: 48px;
        border: 1px solid #b88e2f;
        background: #fff;
        color: #b88e2f;
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
        cursor: pointer;
      }
    }
  }

  .section4 {
    padding: 44px 0;
    background: #fcf8f3;
    display: flex;
    gap: 42px;
    justify-content: center;
    align-items: center;
    & #title {
      & h1 {
        width: 422px;
        color: #3a3a3a;
        font-size: 40px;
        line-height: 120%;
        margin: 0;
      }
      & p {
        width: 368px;
        color: #616161;
        font-weight: 500;
        line-height: 150%;
        margin: 7px 0 25px;
      }
      & button {
        width: 176px;
        height: 48px;
        background: #b88e2f;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        border: none;
        cursor: pointer;
      }
    }
    & .carousel__item {
      position: relative;
      & #slide-name {
        position: absolute;
        left: 24px;
        bottom: 31px;
        padding: 32px;
        padding-right: 17px;
        background: rgba(255, 255, 255, 0.72);
        backdrop-filter: blur(1.5px);
        text-align: left;
        & p {
          width: 142px;
          color: #616161;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          margin: 0 0 8px;
        }
        & h1 {
          color: #3a3a3a;
          font-size: 28px;
          line-height: 120%;
          margin: 0;
        }
      }
      & #arrow {
        position: absolute;
        left: 239px;
        bottom: 31px;
        width: 48px;
        height: 48px;
        background: #b88e2f;
        & svg {
          margin: 12px;
        }
      }
    }
  }

  .carousel {
    width: 876px;
  }

  .carousel__slide {
    transform: rotateY(-20deg) scale(0.87);
    transform-origin: top center;
    transition: transform 0.3s ease;
  }

  .carousel__slide--active {
    transform: rotateY(0) scale(1);
  }

  .section5 {
    margin: 60px 0;
    & #title {
      & p {
        color: #616161;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin: 0;
      }
      & h1 {
        color: #3a3a3a;
        text-align: center;
        font-size: 40px;
        line-height: 120%;
        margin: 0;
        padding-top: 8px;
      }
    }
    & .image-list {
      display: flex;
      justify-content: center;
      gap: 16px;
      & .column:first-child {
        display: grid;
        grid-template-rows: 382px 323px;
        gap: 16px;
      }
      & .column:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      & .column:last-child {
        display: grid;
        grid-template-rows: 433px 242px;
        gap: 16px;
      }
      & .grid {
        display: flex;
        gap: 16px;
      }
      & .grid:first-child {
        align-items: flex-end;
      }
      & img {
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 430px) and (min-width: 300px) {
  .section1 {
    // background-image: url("/assets/home/img-home-background.png");
    // background-repeat: no-repeat;
    // display: flex;
    & div {
      height: 340px;
      padding: 40px;
      background: #fff3e3;
      & label {
        color: #333;
        font-weight: 600;
        letter-spacing: 3px;
        margin: 0;
      }
      & h1 {
        color: #b88e2f;
        line-height: 45px;
        margin: 15px 0;
      }
      & p {
        color: #333;
        font-weight: 500;
        line-height: 24px;
        margin: 0;
      }
      & button {
        width: 220px;
        color: #fff;
        background: #b88e2f;
        font-size: 16px;
        font-weight: 700;
        padding: 25px;
        margin-top: 45px;
        border: none;
        cursor: pointer;
      }
    }
  }

  .section2 {
    margin: 60px 0;
    & #title {
      text-align: center;
      & h1 {
        color: #333;
        margin: 0;
      }
      & p {
        color: #666;
        font-size: 18px;
        margin: 0;
      }
    }
    & .range {
      display: flex;
      flex-direction: column;
      align-items: center;
      & div {
        cursor: pointer;
        & img {
          border-radius: 10px;
          margin: 60px 0 10px;
        }
        & label {
          display: block;
          color: #333;
          text-align: center;
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }

  .section3 {
    margin: 60px 0;
    & h1 {
      color: #3a3a3a;
      text-align: center;
      line-height: 120%;
      margin: 0;
    }
    & .list-product {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      margin: 32px 0;
    }
    & #show-more {
      display: flex;
      justify-content: center;
      & button {
        width: 245px;
        height: 48px;
        border: 1px solid #b88e2f;
        background: #fff;
        color: #b88e2f;
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
        cursor: pointer;
      }
    }
  }

  .section4 {
    padding: 44px 0;
    background: #fcf8f3;
    // display: flex;
    // gap: 42px;
    // justify-content: center;
    // align-items: center;
    & #title {
      margin: 30px;
      & h1 {
        color: #3a3a3a;
        font-size: 36px;
        line-height: 120%;
        margin: 0;
      }
      & p {
        color: #616161;
        font-weight: 500;
        line-height: 150%;
        margin: 7px 0 25px;
      }
      & button {
        width: 176px;
        height: 48px;
        background: #b88e2f;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        border: none;
        cursor: pointer;
      }
    }
    & .carousel__item {
      position: relative;
      & #slide-name {
        position: absolute;
        left: 24px;
        bottom: 31px;
        padding: 32px;
        padding-right: 17px;
        background: rgba(255, 255, 255, 0.72);
        backdrop-filter: blur(1.5px);
        text-align: left;
        & p {
          width: 142px;
          color: #616161;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          margin: 0 0 8px;
        }
        & h1 {
          color: #3a3a3a;
          font-size: 28px;
          line-height: 120%;
          margin: 0;
        }
      }
      & #arrow {
        position: absolute;
        left: 239px;
        bottom: 31px;
        width: 48px;
        height: 48px;
        background: #b88e2f;
        & svg {
          margin: 12px;
        }
      }
    }
  }

  .carousel {
    width: 400px;
    margin: auto;
  }

  .carousel__slide {
    // visibility: hidden;
    transform: rotateY(-20deg) scale(0.87);
    transform-origin: top center;
    transition: transform 0.3s ease;
  }

  .carousel__slide--active {
    visibility: visible;
    transform: rotateY(0) scale(1);
  }

  .section5 {
    margin: 60px 0;
    & #title {
      & p {
        color: #616161;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
      }
      & h1 {
        color: #3a3a3a;
        text-align: center;
        font-size: 36px;
        line-height: 120%;
        margin: 0;
        padding-top: 8px;
      }
    }
    & .image-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      & .grid {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      & img {
        max-width: 250px;
        margin: 10px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>