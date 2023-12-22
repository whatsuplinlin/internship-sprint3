<template>
  <TopBanner v-if="isDesktop" :title="title" />
  <TopBannerMobile v-else :title="title" />

  <div class="section-cart">
    <div class="product-detail">
      <div id="bar">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <div
        v-for="(item, index) in useCartStore().items"
        :key="item.id"
        id="product-in-cart"
      >
        <div id="product-name">
          <img
            v-if="item.id === 0"
            src="~/assets/product/img-asgaardsofa.png"
          />
          <img v-if="item.id === 1" src="~/assets/product/img-syltherine.png" />
          <img v-if="item.id === 2" src="~/assets/product/img-leviosa.png" />
          <img v-if="item.id === 3" src="~/assets/product/img-lolito.png" />
          <img v-if="item.id === 4" src="~/assets/product/img-respira.png" />
          <img v-if="item.id === 5" src="~/assets/product/img-grifo.png" />
          <img v-if="item.id === 6" src="~/assets/product/img-muggo.png" />
          <img v-if="item.id === 7" src="~/assets/product/img-pingky.png" />
          <img v-if="item.id === 8" src="~/assets/product/img-potty.png" />
          <p>{{ item.name }}</p>
        </div>
        <p>Rp. {{ item.price }}</p>
        <p>{{ item.quantity }}</p>
        <p>
          Rp.
          {{
            formatNumber(
              parseFloat(item.price.replace(/,/g, "")) * item.quantity
            )
          }}
        </p>
        <svg
          @click="useCartStore().removeItem(index)"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z"
            fill="#B88E2F"
          />
        </svg>
      </div>
    </div>
    <div class="cart-total">
      <h1>Cart Totals</h1>
      <div v-for="item in useCartStore().items" :key="item.id" id="sub-total">
        <p>Subtotal</p>
        <p>
          Rp
          {{
            formatNumber(
              parseFloat(item.price.replace(/,/g, "")) * item.quantity
            )
          }}
        </p>
      </div>
      <div id="total-container">
        <div id="total">
          <p>Total</p>
          <p>Rp {{ calculateTotal }}</p>
        </div>
      </div>
      <button><NuxtLink to="/cart/checkout">Check Out</NuxtLink></button>
    </div>
  </div>

  <BottomBanner v-if="isDesktop" />
  <BottomBannerMobile v-else />
</template>

<script setup>
const isDesktop = ref(false);
const isMobile = ref(false);

const updateWindowSize = () => {
  const screenWidth = window.innerWidth;
  isDesktop.value = screenWidth > 1279;
  isMobile.value = screenWidth <= 767;
};

onMounted(() => {
  if (process.client) {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
  }
});

const title = {
  name: "Cart",
};

function formatNumber(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

const calculateTotal = computed(() => {
  let total = 0;
  for (let i = 0; i < useCartStore().items.length; i++) {
    const subtotal =
      Number(useCartStore().items[i].price.replace(/,/g, "")) *
      useCartStore().items[i].quantity;
    total += subtotal;
  }
  return formatNumber(total);
});
</script>

<style lang="scss" scoped>
@media (min-width: 900px) {
  .section-cart {
    margin: 72px 0 63px;
    display: flex;
    gap: 30px;
    justify-content: center;
    & .product-detail {
      display: flex;
      flex-direction: column;
      & #bar {
        height: 55px;
        background: #f9f1e7;
        display: grid;
        grid-template-columns: 177px 177px 106px 215px;
        padding-left: 142px;
        & p {
          font-weight: 500;
        }
      }
      & #product-in-cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 55px 0;
        & #product-name {
          display: flex;
          align-items: center;
          gap: 34px;
          width: 250px;
          & img {
            width: 105px;
            height: 105px;
            border-radius: 10px;
            background: rgba(184, 142, 47, 0.22);
          }
          & p {
            color: #9f9f9f;
          }
        }
        & p:nth-child(2) {
          color: #9f9f9f;
        }
        & p:nth-child(3) {
          width: 32px;
          height: 32px;
          border-radius: 5px;
          border: 1px solid #9f9f9f;
          text-align: center;
          line-height: 32px;
        }
        & svg {
          margin-right: 25px;
          cursor: pointer;
        }
      }
    }
    & .cart-total {
      width: 393px;
      background: #f9f1e7;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      & h1 {
        margin: 15px 0 61px;
      }
      & #sub-total {
        width: 270px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        & p:first-child {
          font-weight: 500;
          margin: 0;
        }
        & p:last-child {
          color: #9f9f9f;
          margin: 0;
        }
      }
      & #total {
        width: 270px;
        display: flex;
        justify-content: space-between;
        & p:first-child {
          font-weight: 500;
          margin: 0;
        }
        & p:last-child {
          color: #b88e2f;
          font-size: 20px;
          font-weight: 500;
          margin: 0;
        }
      }
      & button {
        width: 222px;
        height: 58px;
        border-radius: 15px;
        border: 1px solid #000;
        background: none;
        font-size: 20px;
        margin: 42px 0 80px;
        cursor: pointer;
        & a {
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
}

@media (max-width: 430px) and (min-width: 300px) {
  .section-cart {
    margin: 72px 0 63px;
    & .product-detail {
      display: flex;
      flex-direction: column;
      & #bar {
        display: none;
        // height: 55px;
        // background: #f9f1e7;
        // display: flex;
        // align-items: center;
        // justify-content: space-between;
        // & p {
        //   font-weight: 500;
        //   font-size: 14px;
        // }
      }
      & #product-in-cart {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 30px 0;
        font-size: 13px;
        & #product-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          & img {
            margin: 0 10px;
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background: rgba(184, 142, 47, 0.22);
          }
          & p {
            margin: 0;
            color: #9f9f9f;
          }
        }
        & p:nth-child(2) {
          color: #9f9f9f;
        }
        & p:nth-child(3) {
          width: 32px;
          height: 32px;
          border-radius: 5px;
          border: 1px solid #9f9f9f;
          text-align: center;
          line-height: 32px;
        }
        & svg {
          margin-right: 5px;
          cursor: pointer;
        }
      }
    }
    & .cart-total {
      width: 393px;
      margin: 50px auto;
      background: #f9f1e7;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      & h1 {
        margin: 15px 0 61px;
      }
      & #sub-total {
        width: 270px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        & p:first-child {
          font-weight: 500;
          margin: 0;
        }
        & p:last-child {
          color: #9f9f9f;
          margin: 0;
        }
      }
      & #total {
        width: 270px;
        display: flex;
        justify-content: space-between;
        & p:first-child {
          font-weight: 500;
          margin: 0;
        }
        & p:last-child {
          color: #b88e2f;
          font-size: 20px;
          font-weight: 500;
          margin: 0;
        }
      }
      & button {
        width: 222px;
        height: 58px;
        border-radius: 15px;
        border: 1px solid #000;
        background: none;
        font-size: 20px;
        margin: 42px 0 80px;
        cursor: pointer;
        & a {
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
}
</style>