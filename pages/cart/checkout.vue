<template>
  <TopBanner v-if="isDesktop" :title="title" />
  <TopBannerMobile v-else :title="title" />

  <div class="section-checkout">
    <div class="billing-detail">
      <h1>Billing details</h1>
      <div id="name">
        <div id="input">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div id="input">
          <label>Last Name</label>
          <input type="text" />
        </div>
      </div>
      <div id="input">
        <label>Company Name (Optional)</label>
        <input type="text" />
      </div>
      <div id="input">
        <label>Country / Region</label>
        <input type="text" placeholder="Sri Lanka" />
      </div>
      <div id="input">
        <label>Street address</label>
        <input type="text" />
      </div>
      <div id="input">
        <label>Town / City</label>
        <input type="text" />
      </div>
      <div id="input">
        <label>Province</label>
        <input type="text" placeholder="Western Province" />
      </div>
      <div id="input">
        <label>ZIP code</label>
        <input type="text" />
      </div>
      <div id="input">
        <label>Phone</label>
        <input type="text" />
      </div>
      <div id="input">
        <label>Email address</label>
        <input type="text" />
      </div>
      <div id="input">
        <label></label>
        <input type="text" placeholder="Additional information" />
      </div>
    </div>
    <div class="place-order">
      <div class="receipt">
        <div class="product">
          <h2>Product</h2>
          <div
            v-for="item in useCartStore().items"
            :key="item.id"
            id="product-name-quantity"
          >
            <p>{{ item.name }}</p>
            <p>x</p>
            <p>{{ item.quantity }}</p>
          </div>
          <p id="subtotal">Subtotal</p>
          <p>Total</p>
        </div>
        <div class="subtotal" id="subtotal-container">
          <h2>Subtotal</h2>
          <div
            v-for="item in useCartStore().items"
            :key="item.id"
            id="price-container"
          >
            <p>
              Rp.
              {{
                formatNumber(
                  parseFloat(item.price.replace(/,/g, "")) * item.quantity
                )
              }}
            </p>
          </div>
          <p id="subtotal">Rp {{ calculateTotal }}</p>
          <p id="total">Rp {{ calculateTotal }}</p>
        </div>
      </div>
      <div class="payment-method">
        <div class="selected-method">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <circle cx="7" cy="7" r="7" fill="black" />
          </svg>
          Direct Bank Transfer
        </div>
        <p id="bank-transfer">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
        <div class="method">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <circle cx="7" cy="7" r="6.5" stroke="#9F9F9F" />
          </svg>
          Direct Bank Transfer
        </div>
        <div class="method">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <circle cx="7" cy="7" r="6.5" stroke="#9F9F9F" />
          </svg>
          Cash On Delivery
        </div>
        <p id="policy">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span style="font-weight: 600">privacy policy.</span>
        </p>
        <div id="btn"><button>Place Order</button></div>
      </div>
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
  name: "Checkout",
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
  .section-checkout {
    display: flex;
    justify-content: center;
    gap: 144px;
    margin: 63px 0 123px;
    & .billing-detail {
      & h1 {
        font-size: 36px;
        margin: 35px 0 0;
      }
      & #name {
        display: flex;
        gap: 30px;
        & #input {
          & input {
            width: 211px;
          }
        }
      }
      & #input {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        font-weight: 500;
        gap: 22px;
        margin-top: 36px;
        & input {
          width: 453px;
          height: 75px;
          border-radius: 10px;
          border: 1px solid #9f9f9f;
        }
        & input::placeholder {
          color: #9f9f9f;
          font-size: 16px;
          padding-left: 30px;
        }
      }
    }
    & .place-order {
      & p {
        margin: 0;
      }
      & .receipt {
        display: flex;
        justify-content: space-between;
        margin-top: 87px;
        & h2 {
          font-weight: 500;
          margin: 0 0 14px;
        }
        & .product {
          & #product-name-quantity {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 12px;
            font-weight: 500;
            & p:first-child {
              color: #9f9f9f;
              font-size: 16px;
              font-weight: 400;
            }
          }
          & #subtotal {
            margin: 22px 0;
          }
        }
        & .subtotal {
          text-align: right;
          padding-bottom: 33.5px;
          & p {
            font-weight: 300;
          }
          & #price-container {
            padding-right: 4px;
          }
          & #subtotal {
            margin: 22px 0 16px;
          }
          & #total {
            width: auto;
            color: #b88e2f;
            font-size: 24px;
            font-weight: 700;
          }
        }
      }
      & .payment-method {
        width: 528px;
        padding-top: 22.5px;
        border-top: #d9d9d9 solid 1px;
        & .selected-method,
        & .method {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 11px;
        }
        & .method {
          color: #9f9f9f;
          font-weight: 500;
        }
        & .method:nth-child(4) {
          margin-bottom: 25px;
        }
        & #bank-transfer,
        & #policy {
          text-align: justify;
          font-weight: 300;
          margin: 0 0 39px;
        }
        & #bank-transfer {
          color: #9f9f9f;
          margin: 0 0 25px;
        }
        & #btn {
          display: flex;
          justify-content: center;
          & button {
            width: 318px;
            height: 64px;
            background: none;
            border-radius: 15px;
            border: 1px solid #000;
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media (max-width: 430px) and (min-width: 300px) {
  .section-checkout {
    margin: 63px 0 123px;
    & .billing-detail {
      display: flex;
      flex-direction: column;
      align-items: center;
      & h1 {
        font-size: 32px;
        margin: 35px 0 0;
      }
      & #name {
        display: flex;
        gap: 30px;
        & #input {
          & input {
            width: 150px;
          }
        }
      }
      & #input {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        font-weight: 500;
        gap: 22px;
        margin-top: 36px;
        & input {
          width: 370px;
          height: 65px;
          border-radius: 10px;
          border: 1px solid #9f9f9f;
          padding-left: 30px;
        }
        & input::placeholder {
          color: #9f9f9f;
          font-size: 16px;
        }
      }
    }
    & .place-order {
      & p {
        margin: 0;
      }
      & .receipt {
        display: flex;
        justify-content: space-around;
        margin-top: 87px;
        & h2 {
          font-weight: 500;
          margin: 0 0 14px;
        }
        & .product {
          & #product-name-quantity {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 12px;
            font-weight: 500;
            & p:first-child {
              color: #9f9f9f;
              font-size: 16px;
              font-weight: 400;
            }
          }
          & #subtotal {
            margin: 22px 0;
          }
        }
        & .subtotal {
          text-align: right;
          padding-bottom: 33.5px;
          & p {
            font-weight: 300;
          }
          & #price-container {
            padding-right: 4px;
          }
          & #subtotal {
            margin: 22px 0 16px;
          }
          & #total {
            width: auto;
            color: #b88e2f;
            font-size: 24px;
            font-weight: 700;
          }
        }
      }
      & .payment-method {
        margin: 0 20px;
        padding-top: 22.5px;
        border-top: #d9d9d9 solid 1px;
        & .selected-method,
        & .method {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 11px;
        }
        & .method {
          color: #9f9f9f;
          font-weight: 500;
        }
        & .method:nth-child(4) {
          margin-bottom: 25px;
        }
        & #bank-transfer,
        & #policy {
          text-align: justify;
          font-weight: 300;
          margin: 0 0 39px;
        }
        & #bank-transfer {
          color: #9f9f9f;
          margin: 0 0 25px;
        }
        & #btn {
          display: flex;
          justify-content: center;
          & button {
            width: 318px;
            height: 64px;
            background: none;
            border-radius: 15px;
            border: 1px solid #000;
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>