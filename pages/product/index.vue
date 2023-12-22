<template>
  <div class="location-banner">
    <p>Home</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
    </svg>
    <p>Shop</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
    </svg>
    <p>Asgaard sofa</p>
  </div>

  <div class="section-product">
    <div class="product-image-list">
      <div id="img-container">
        <img src="~/assets/product-detail/img-product-small1.png" />
      </div>
      <div id="img-container">
        <img src="~/assets/product-detail/img-product-small2.png" />
      </div>
      <div id="img-container">
        <img src="~/assets/product-detail/img-product-small3.png" />
      </div>
      <div id="img-container">
        <img src="~/assets/product-detail/img-product-small4.png" />
      </div>
    </div>
    <div class="product-image">
      <img
        src="~/assets/product-detail/img-product-main.png"
        id="product-img"
      />
    </div>
    <div class="product-information">
      <h1 id="product-name">Asgaard sofa</h1>
      <p id="price">Rp 250,000.00</p>
      <div id="review">
        <div id="star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
              fill="#FFC700"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
              fill="#FFC700"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
              fill="#FFC700"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
              fill="#FFC700"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.1563 7.0125L0.800049 7.9375L5.40005 12.4188L4.31255 18.75L10 15.7625V1.25L7.1563 7.0125Z"
              fill="#FFC700"
            />
          </svg>
        </div>
        <p>5 Customer Review</p>
      </div>
      <p id="explanation">
        Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which boasts
        a clear midrange and extended highs for a sound.
      </p>
      <p id="size">Size</p>
      <div id="size-list">
        <div>L</div>
        <div>XL</div>
        <div>XS</div>
      </div>
      <p id="color">Color</p>
      <div id="color-list">
        <div id="purple"></div>
        <div id="black"></div>
        <div id="brown"></div>
      </div>
      <div id="buttons">
        <div id="quantity">
          <button @click="decrease">-</button>
          <p id="product-quantity">{{ count }}</p>
          <button @click="increase">+</button>
        </div>
        <button id="add-to-cart" @click="addToCart()">Add To Cart</button>
        <button id="compare">+ Compare</button>
      </div>
      <div id="details">
        <div>
          <p>SKU</p>
          <p>Category</p>
          <p>Tags</p>
          <p>Share</p>
        </div>
        <div>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>
        <div>
          <p>SS001</p>
          <p>Sofas</p>
          <p>Sofa, Chair, Home, Shop</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_117_920)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_117_920">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_117_924)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.833252 2.365C0.833252 1.95877 0.994624 1.56919 1.28187 1.28195C1.56911 0.994702 1.9587 0.83333 2.36492 0.83333H17.6333C17.8346 0.833001 18.034 0.872383 18.22 0.949219C18.4061 1.02606 18.5752 1.13884 18.7176 1.28111C18.8601 1.42338 18.973 1.59235 19.0501 1.77834C19.1271 1.96433 19.1667 2.16368 19.1666 2.365V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5753 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5754 1.02653 18.4065 0.949604 18.2206C0.87268 18.0346 0.833143 17.8354 0.833252 17.6342V2.365ZM8.08992 7.82333H10.5724V9.07C10.9308 8.35333 11.8474 7.70833 13.2249 7.70833C15.8658 7.70833 16.4916 9.13583 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82333ZM3.50659 16.4925H6.17992V7.70833H3.50659V16.4917V16.4925ZM6.56242 4.84333C6.56746 5.07222 6.52673 5.29982 6.44262 5.51276C6.35851 5.7257 6.23271 5.91969 6.07261 6.08336C5.91251 6.24702 5.72133 6.37706 5.5103 6.46584C5.29926 6.55461 5.07262 6.60035 4.84367 6.60035C4.61472 6.60035 4.38808 6.55461 4.17704 6.46584C3.966 6.37706 3.77483 6.24702 3.61473 6.08336C3.45463 5.91969 3.32883 5.7257 3.24472 5.51276C3.16061 5.29982 3.11988 5.07222 3.12492 4.84333C3.13481 4.39404 3.32024 3.96649 3.64149 3.65224C3.96274 3.33798 4.39427 3.16201 4.84367 3.16201C5.29307 3.16201 5.7246 3.33798 6.04585 3.65224C6.3671 3.96649 6.55253 4.39404 6.56242 4.84333Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_117_924">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM17.7563 9.80713C17.7637 9.92188 17.7637 10.0415 17.7637 10.1587C17.7637 13.7427 15.0342 17.8711 10.0464 17.8711C8.5083 17.8711 7.08252 17.4243 5.88135 16.6553C6.10107 16.6797 6.31104 16.6895 6.53565 16.6895C7.80518 16.6895 8.97217 16.2598 9.90234 15.5322C8.71094 15.5078 7.70996 14.7266 7.36816 13.6523C7.78564 13.7134 8.16162 13.7134 8.59131 13.6035C7.97785 13.4789 7.42645 13.1457 7.0308 12.6606C6.63515 12.1755 6.41964 11.5684 6.4209 10.9424V10.9082C6.77979 11.1108 7.20215 11.2354 7.64404 11.2524C7.27256 11.0049 6.96792 10.6695 6.75711 10.276C6.5463 9.88244 6.43585 9.443 6.43555 8.99658C6.43555 8.49121 6.56738 8.02979 6.8042 7.62939C7.48511 8.46762 8.33479 9.15318 9.29801 9.64152C10.2612 10.1299 11.3164 10.41 12.395 10.4639C12.0117 8.62061 13.3887 7.12891 15.0439 7.12891C15.8252 7.12891 16.5283 7.45605 17.0239 7.9834C17.6367 7.86865 18.2227 7.63916 18.7451 7.33154C18.5425 7.95898 18.1177 8.48877 17.5537 8.82324C18.1006 8.76465 18.6279 8.61328 19.1162 8.40088C18.7476 8.94287 18.2861 9.42383 17.7563 9.80713Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section-description">
    <div class="title">
      <h1>Description</h1>
      <h1>Additional Information</h1>
      <h1>Reviews [5]</h1>
    </div>
    <p>
      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
      active stereo speaker takes the unmistakable look and sound of Marshall,
      unplugs the chords, and takes the show on the road.
    </p>
    <p>
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage
      styled engineering. Setting the bar as one of the loudest speakers in its
      class, the Kilburn is a compact, stout-hearted hero with a well-balanced
      audio which boasts a clear midrange and extended highs for a sound that is
      both articulate and pronounced. The analogue knobs allow you to fine tune
      the controls to your personal preferences while the guitar-influenced
      leather strap enables easy and stylish travel.
    </p>
    <div id="image-row">
      <div id="image-container">
        <img src="~/assets/product-detail/img-product-description1.png" />
      </div>
      <div id="image-container">
        <img src="~/assets/product-detail/img-product-description2.png" />
      </div>
    </div>
  </div>

  <div class="related-products">
    <h1>Related Products</h1>
    <div id="product-list">
      <Product v-for="(item, index) in item" :key="index" :item="item" />
    </div>
    <div id="show-more">
      <button @click="this.$router.push('/shop')">Show More</button>
    </div>
  </div>
</template>

<script setup>
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
];

const count = ref(1);

function decrease() {
  if (count.value > 0) {
    count.value--;
  }
}

function increase() {
  count.value++;
}

function addToCart() {
  const quantity = count.value;
  const existingIndex = useCartStore().items.findIndex(
    (product) => product.name === "Asgaard sofa"
  );

  if (existingIndex !== -1) {
    useCartStore().items[existingIndex].quantity =
      parseInt(useCartStore().items[existingIndex].quantity) +
      parseInt(quantity);
  } else {
    const itemToAdd = {
      id: 0,
      name: "Asgaard sofa",
      price: "250,000.00",
      quantity: quantity,
    };
    useCartStore().addItem(itemToAdd);
  }

  console.log(useCartStore());
  useRouter().push("/cart");
}
</script>

<style lang="scss" scoped>
@media (min-width: 900px) {
  .location-banner {
    height: 100px;
    padding-left: 100px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: #f9f1e7;
    & p {
      color: #9f9f9f;
    }
    & p:last-child {
      color: #000;
      height: 37px;
      line-height: 37px;
      border-left: 2px solid #9f9f9f;
      padding-left: 20px;
    }
  }

  .section-product {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 35px 0 55px;
    & .product-image-list {
      display: flex;
      flex-direction: column;
      gap: 32px;
      & #img-container {
        width: 76px;
        height: 80px;
        border-radius: 10px;
        background: #f9f1e7;
        display: flex;
        align-items: center;
      }
    }
    & .product-image {
      width: 423px;
      height: 500px;
      border-radius: 10px;
      background: #f9f1e7;
      display: flex;
      align-items: center;
      margin-right: 75px;
    }
    & .product-information {
      & h1 {
        font-size: 42px;
        font-weight: 400;
        margin: 0;
      }
      & #price {
        color: #9f9f9f;
        font-size: 24px;
        font-weight: 500;
        line-height: normal;
      }
      & #review {
        display: flex;
        align-items: center;
        gap: 18px;
        margin: 10px 0;
        & #star {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        & p {
          color: #9f9f9f;
          font-size: 13px;
          margin: 0;
          border-left: 1px solid #9f9f9f;
          padding-left: 22px;
          line-height: 30px;
        }
      }
      & #explanation {
        width: 424px;
        font-size: 13px;
        margin: 0;
      }
      & #size,
      & #color {
        color: #9f9f9f;
        font-size: 14px;
        margin: 22px 0 12px;
      }
      & #size-list {
        display: flex;
        gap: 16px;
        & div {
          width: 30px;
          line-height: 30px;
          font-size: 13px;
          border-radius: 5px;
          background: #f9f1e7;
          text-align: center;
        }
        & div:first-child {
          background: #b88e2f;
          color: #fff;
        }
      }
      & #color-list {
        display: flex;
        gap: 16px;
        & div {
          width: 30px;
          height: 30px;
          border-radius: 50px;
          background: #816dfa;
        }
        & #black {
          background: #000;
        }
        & #brown {
          background: #b88e2f;
        }
      }
      & #buttons {
        margin: 32px 0 60px;
        display: flex;
        gap: 18px;
        & #quantity {
          width: 123px;
          height: 64px;
          border-radius: 10px;
          border: 1px solid #9f9f9f;
          display: flex;
          justify-content: space-around;
          align-items: center;
          & button {
            border: none;
            background: none;
            font-size: 16px;
            font-weight: 500;
          }
        }
        & #add-to-cart,
        & #compare {
          width: 215px;
          height: 64px;
          background: none;
          border-radius: 15px;
          border: 1px solid #000;
          font-size: 20px;
          cursor: pointer;
        }
      }
      & #details {
        display: flex;
        gap: 16px;
        color: #9f9f9f;
        border-top: 1px solid #d9d9d9;
        padding-top: 29px;
        & p {
          margin: 12px 0;
        }
        & div:last-child div {
          display: flex;
          gap: 25px;
          align-items: center;
        }
      }
    }
  }

  .section-description {
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    padding: 48px 0;
    color: #9f9f9f;
    & .title {
      display: flex;
      gap: 52px;
      justify-content: center;
      & h1 {
        font-size: 24px;
        font-weight: 500;
        margin: 0 0 37px;
      }
      & h1:first-child {
        color: #000;
      }
    }
    & p {
      width: 1026px;
      text-align: justify;
      margin: 0 auto 30px;
    }
    & #image-row {
      display: flex;
      justify-content: center;
      gap: 29px;
      & #image-container {
        width: 605px;
        height: 348px;
        border-radius: 10px;
        background: #f9f1e7;
      }
    }
  }

  .related-products {
    margin: 55px 0 92px;
    & h1 {
      font-size: 36px;
      font-weight: 500;
      margin: 0;
      text-align: center;
    }
    & #product-list {
      display: flex;
      justify-content: center;
      gap: 32px;
      margin: 26px 0 44px;
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
}

@media (max-width: 430px) and (min-width: 300px) {
  .location-banner {
    height: 100px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    background: #f9f1e7;
    & p {
      color: #9f9f9f;
    }
    & p:last-child {
      color: #000;
      height: 37px;
      line-height: 37px;
      border-left: 2px solid #9f9f9f;
      padding-left: 15px;
    }
  }

  .section-product {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 35px 0 55px;
    & .product-image-list {
      display: flex;
      gap: 30px;
      & #img-container {
        width: 76px;
        height: 80px;
        border-radius: 10px;
        background: #f9f1e7;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    & .product-image {
      width: 423px;
      height: 500px;
      border-radius: 10px;
      background: #f9f1e7;
      display: flex;
      align-items: center;
    }
    & .product-information {
      margin: 0 30px;
      & h1 {
        font-size: 36px;
        font-weight: 400;
        margin: 0;
      }
      & #price {
        color: #9f9f9f;
        font-size: 22px;
        font-weight: 500;
        line-height: normal;
      }
      & #review {
        display: flex;
        align-items: center;
        gap: 18px;
        margin: 10px 0;
        & #star {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        & p {
          color: #9f9f9f;
          font-size: 13px;
          margin: 0;
          border-left: 1px solid #9f9f9f;
          padding-left: 22px;
          line-height: 30px;
        }
      }
      & #explanation {
        font-size: 13px;
        margin: 0;
      }
      & #size,
      & #color {
        color: #9f9f9f;
        font-size: 14px;
        margin: 22px 0 12px;
      }
      & #size-list {
        display: flex;
        gap: 16px;
        & div {
          width: 30px;
          line-height: 30px;
          font-size: 13px;
          border-radius: 5px;
          background: #f9f1e7;
          text-align: center;
        }
        & div:first-child {
          background: #b88e2f;
          color: #fff;
        }
      }
      & #color-list {
        display: flex;
        gap: 16px;
        & div {
          width: 30px;
          height: 30px;
          border-radius: 50px;
          background: #816dfa;
        }
        & #black {
          background: #000;
        }
        & #brown {
          background: #b88e2f;
        }
      }
      & #buttons {
        margin: 32px 0 60px;
        display: flex;
        gap: 18px;
        & #quantity {
          width: 90px;
          height: 64px;
          border-radius: 10px;
          border: 1px solid #9f9f9f;
          display: flex;
          justify-content: space-around;
          align-items: center;
          & button {
            border: none;
            background: none;
            font-size: 16px;
            font-weight: 500;
          }
        }
        & #add-to-cart,
        & #compare {
          width: 130px;
          height: 64px;
          background: none;
          border-radius: 15px;
          border: 1px solid #000;
          font-size: 16px;
          cursor: pointer;
        }
      }
      & #details {
        display: flex;
        gap: 16px;
        color: #9f9f9f;
        border-top: 1px solid #d9d9d9;
        padding-top: 29px;
        & p {
          margin: 12px 0;
        }
        & div:last-child div {
          display: flex;
          gap: 25px;
          align-items: center;
        }
      }
    }
  }

  .section-description {
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    padding: 48px 0;
    color: #9f9f9f;
    margin: 0 20px;
    & .title {
      display: flex;
      gap: 32px;
      justify-content: center;
      & h1 {
        font-size: 17px;
        text-align: center;
        font-weight: 500;
        margin: 0 0 37px;
      }
      & h1:first-child {
        color: #000;
      }
    }
    & p {
      text-align: justify;
      margin: 0 0 30px;
    }
    & #image-row {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 29px;
      & #image-container {
        width: 405px;
        height: 250px;
        border-radius: 10px;
        background: #f9f1e7;
        & img {
          width: 400px;
        }
      }
    }
  }

  .related-products {
    margin: 55px 0 92px;
    & h1 {
      font-size: 32px;
      font-weight: 500;
      margin: 0;
      text-align: center;
    }
    & #product-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      margin: 26px 0 44px;
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
}
</style>