<template>
  <TopBanner v-if="isDesktop" :title="title" />
  <TopBannerMobile v-else :title="title" />

  <div class="small-banner">
    <div class="filtering">
      <div id="filter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M22.0238 7.14285H8.92857M6.54762 7.14285H2.97619M22.0238 19.0476H8.92857M6.54762 19.0476H2.97619M16.0714 13.0952H2.97619M22.0238 13.0952H18.4524M7.7381 4.7619C8.05383 4.7619 8.35663 4.88733 8.57989 5.11058C8.80315 5.33384 8.92857 5.63664 8.92857 5.95238V8.33333C8.92857 8.64906 8.80315 8.95187 8.57989 9.17512C8.35663 9.39838 8.05383 9.52381 7.7381 9.52381C7.42236 9.52381 7.11956 9.39838 6.8963 9.17512C6.67304 8.95187 6.54762 8.64906 6.54762 8.33333V5.95238C6.54762 5.63664 6.67304 5.33384 6.8963 5.11058C7.11956 4.88733 7.42236 4.7619 7.7381 4.7619V4.7619ZM7.7381 16.6667C8.05383 16.6667 8.35663 16.7921 8.57989 17.0153C8.80315 17.2386 8.92857 17.5414 8.92857 17.8571V20.2381C8.92857 20.5538 8.80315 20.8566 8.57989 21.0799C8.35663 21.3031 8.05383 21.4286 7.7381 21.4286C7.42236 21.4286 7.11956 21.3031 6.8963 21.0799C6.67304 20.8566 6.54762 20.5538 6.54762 20.2381V17.8571C6.54762 17.5414 6.67304 17.2386 6.8963 17.0153C7.11956 16.7921 7.42236 16.6667 7.7381 16.6667ZM17.2619 10.7143C17.5776 10.7143 17.8804 10.8397 18.1037 11.063C18.327 11.2862 18.4524 11.589 18.4524 11.9048V14.2857C18.4524 14.6014 18.327 14.9042 18.1037 15.1275C17.8804 15.3508 17.5776 15.4762 17.2619 15.4762C16.9462 15.4762 16.6434 15.3508 16.4201 15.1275C16.1969 14.9042 16.0714 14.6014 16.0714 14.2857V11.9048C16.0714 11.589 16.1969 11.2862 16.4201 11.063C16.6434 10.8397 16.9462 10.7143 17.2619 10.7143V10.7143Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Filter</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M18.6667 22.1667C17.7384 22.1667 16.8482 21.7979 16.1918 21.1416C15.5354 20.4852 15.1667 19.5949 15.1667 18.6667C15.1667 17.7384 15.5354 16.8482 16.1918 16.1918C16.8482 15.5354 17.7384 15.1667 18.6667 15.1667C19.5949 15.1667 20.4852 15.5354 21.1415 16.1918C21.7979 16.8482 22.1667 17.7384 22.1667 18.6667C22.1667 19.5949 21.7979 20.4852 21.1415 21.1416C20.4852 21.7979 19.5949 22.1667 18.6667 22.1667ZM9.33334 22.1667C8.40508 22.1667 7.51484 21.7979 6.85846 21.1416C6.20208 20.4852 5.83334 19.5949 5.83334 18.6667C5.83334 17.7384 6.20208 16.8482 6.85846 16.1918C7.51484 15.5354 8.40508 15.1667 9.33334 15.1667C10.2616 15.1667 11.1518 15.5354 11.8082 16.1918C12.4646 16.8482 12.8333 17.7384 12.8333 18.6667C12.8333 19.5949 12.4646 20.4852 11.8082 21.1416C11.1518 21.7979 10.2616 22.1667 9.33334 22.1667ZM18.6667 12.8333C17.7384 12.8333 16.8482 12.4646 16.1918 11.8082C15.5354 11.1518 15.1667 10.2616 15.1667 9.33334C15.1667 8.40509 15.5354 7.51485 16.1918 6.85847C16.8482 6.20209 17.7384 5.83334 18.6667 5.83334C19.5949 5.83334 20.4852 6.20209 21.1415 6.85847C21.7979 7.51485 22.1667 8.40509 22.1667 9.33334C22.1667 10.2616 21.7979 11.1518 21.1415 11.8082C20.4852 12.4646 19.5949 12.8333 18.6667 12.8333ZM9.33334 12.8333C8.40508 12.8333 7.51484 12.4646 6.85846 11.8082C6.20208 11.1518 5.83334 10.2616 5.83334 9.33334C5.83334 8.40509 6.20208 7.51485 6.85846 6.85847C7.51484 6.20209 8.40508 5.83334 9.33334 5.83334C10.2616 5.83334 11.1518 6.20209 11.8082 6.85847C12.4646 7.51485 12.8333 8.40509 12.8333 9.33334C12.8333 10.2616 12.4646 11.1518 11.8082 11.8082C11.1518 12.4646 10.2616 12.8333 9.33334 12.8333Z"
          fill="black"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z"
          fill="black"
        />
      </svg>
      <p v-if="currentPage < totalPages" id="border">
        Showing {{ startIndex + 1 }} – {{ endIndex }} of
        {{ filteredItems.length }} results
      </p>
      <p v-if="currentPage === totalPages" id="border">
        Showing {{ startIndex + 1 }} – {{ filteredItems.length }} of
        {{ filteredItems.length }} results
      </p>
    </div>
    <div class="showing">
      <p>Show</p>
      <select v-model="show" @change="updatePage" id="dropdown-show">
        <option value="16">16</option>
        <option value="24">24</option>
        <option value="32">32</option>
      </select>
      <p>Sort by</p>
      <select v-model="sortOption" @change="updateSort" id="dropdown-sort">
        <option value="default">Default</option>
        <option value="new">New</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  </div>

  <div class="section-shop">
    <div class="list-product">
      <Product v-for="(item, index) in sortedItems" :key="index" :item="item" />
    </div>

    <div class="page-number">
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        id="btn-next"
      >
        Prev
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :disabled="currentPage === page"
      >
        {{ page }}
      </button>
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        id="btn-next"
      >
        Next
      </button>
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
  name: "Shop",
};

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

const show = ref(16);
const currentPage = ref(1);
const startIndex = ref(0);
const endIndex = ref(0);
const sortOption = ref("default");
let filteredItems = [...item];
const totalPages = ref(Math.ceil(filteredItems.length / show.value));

const sortedItems = computed(() => {
  filteredItems = [...item];

  if (sortOption.value === "new") {
    filteredItems = filteredItems.filter((item) => item.new == true);
  } else if (sortOption.value === "discount") {
    filteredItems = filteredItems.filter((item) => item.discount !== null);
  }

  startIndex.value = (currentPage.value - 1) * show.value;
  endIndex.value = startIndex.value + parseInt(show.value);

  return filteredItems.slice(startIndex.value, endIndex.value);
});

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updatePage() {
  currentPage.value = 1;
  totalPages.value = Math.ceil(filteredItems.length / show.value);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateSort() {
  currentPage.value = 1;
  totalPages.value = Math.ceil(filteredItems.length / show.value);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

watchEffect(() => {
  totalPages.value = Math.ceil(filteredItems.length / show.value);
});
</script>

<style lang="scss" scoped>
@media (min-width: 900px) {
  .small-banner {
    display: flex;
    justify-content: space-between;
    padding: 22px 100px;
    margin-bottom: 63px;
    background: #f9f1e7;
    & p {
      margin: 0;
    }
    & .filtering {
      display: flex;
      gap: 24px;
      align-items: center;
      & #filter {
        display: flex;
        gap: 12px;
        align-items: center;
        & p {
          font-size: 20px;
        }
      }
      & #border {
        height: 37px;
        border-left: #9f9f9f solid 2px;
        padding-left: 34px;
        margin-left: 6px;
        line-height: 37px;
      }
    }
    & .showing {
      display: flex;
      align-items: center;
      gap: 17px;
      & p:first-child,
      & p:nth-child(3) {
        font-size: 20px;
      }
      & #dropdown-show,
      & #dropdown-sort {
        color: #9f9f9f;
        font-size: 20px;
        background: #fff;
        height: 55px;
        line-height: 55px;
        border: none;
      }
      & #dropdown-show {
        width: 55px;
        text-align: center;
        margin-right: 12px;
      }
      & #dropdown-sort {
        width: 158px;
        padding-left: 30px;
      }
    }
  }

  .section-shop {
    & .list-product {
      display: grid;
      grid-template-columns: repeat(4, 285px);
      justify-content: center;
      gap: 32px;
      margin: 0;
    }
    & .page-number {
      margin: 70px 0 85px;
      display: flex;
      justify-content: center;
      & button {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        border: none;
        background: #f9f1e7;
        font-size: 20px;
        margin-right: 38px;
        cursor: pointer;
      }
      & button:disabled {
        background: #b88e2f;
        color: #fff;
      }
      & #btn-next {
        width: 98px;
      }
    }
  }
}

@media (max-width: 430px) and (min-width: 300px) {
  .small-banner {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    margin-bottom: 63px;
    background: #f9f1e7;
    & p {
      margin: 0;
    }
    & .filtering {
      display: flex;
      gap: 15px;
      align-items: center;
      justify-content: center;
      padding-bottom: 15px;
      border-bottom: 1px solid #9f9f9f;
      & #filter {
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 14px;
      }
      & #border {
        height: 37px;
        border-left: #9f9f9f solid 2px;
        padding-left: 15px;
        line-height: 37px;
        font-size: 14px;
      }
    }
    & .showing {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      & p:first-child,
      & p:nth-child(3) {
        font-size: 14px;
      }
      & #dropdown-show,
      & #dropdown-sort {
        color: #9f9f9f;
        font-size: 14px;
        background: #fff;
        height: 50px;
        line-height: 50px;
        border: none;
      }
      & #dropdown-show {
        width: 50px;
        text-align: center;
        margin-right: 10px;
      }
      & #dropdown-sort {
        width: 150px;
        padding-left: 20px;
      }
    }
  }

  .section-shop {
    & .list-product {
      display: flex;
      flex-direction: column;
      gap: 32px;
      align-items: center;
    }
    & .page-number {
      margin: 70px 0;
      display: flex;
      justify-content: space-around;
      & button {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        border: none;
        background: #f9f1e7;
        font-size: 18px;
        cursor: pointer;
      }
      & button:disabled {
        background: #b88e2f;
        color: #fff;
      }
      & #btn-next {
        width: 78px;
      }
    }
  }
}
</style>