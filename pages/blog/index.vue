<template>
  <TopBanner v-if="isDesktop" :title="title" />
  <TopBannerMobile v-else :title="title" />

  <div class="section-blog">
    <div class="post">
      <div v-if="isDesktop">
        <Blog v-for="(blog, index) in blog" :key="index" :blog="blog" />
      </div>
      <div v-else>
        <BlogMobile v-for="(blog, index) in blog" :key="index" :blog="blog" />
      </div>

      <div class="page-number">
        <button disabled>1</button>
        <button>2</button>
        <button>3</button>
        <button id="btn-next">Next</button>
      </div>
    </div>

    <div class="blog-menu">
      <div class="search-bar">
        <input type="text" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div class="categories">
        <h2>Categories</h2>
        <Category
          v-for="(category, index) in category"
          :key="index"
          :category="category"
        />
      </div>

      <div class="recent-posts">
        <h2>Recent Posts</h2>
        <RecentPost v-for="(post, index) in post" :key="index" :post="post" />
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
  name: "Blog",
};

const blog = [
  {
    key: 1,
    title: "Going all-in with millennial design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit ibero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    key: 2,
    title: "Exploring new ways of decorating",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit ibero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    key: 3,
    title: "Handmade pieces that took time to make",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit ibero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
];

const category = [
  {
    title: "Crafts",
    count: 2,
  },
  {
    title: "Design",
    count: 8,
  },
  {
    title: "Handmade",
    count: 7,
  },
  {
    title: "Interior",
    count: 1,
  },
  {
    title: "Wood",
    count: 6,
  },
];

const post = [
  {
    key: 1,
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
  },
  {
    key: 2,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
  },
  {
    key: 3,
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
  },
  {
    key: 4,
    title: "Modern home in Milan",
    date: "03 Aug 2022",
  },
  {
    key: 5,
    title: "Colorful office redesign",
    date: "03 Aug 2022",
  },
];
</script>

<style lang="scss" scoped>
@media (min-width: 900px) {
  .section-blog {
    display: flex;
    gap: 71px;
    justify-content: center;
    margin: 106px 0 58px;
    & .page-number {
      display: flex;
      justify-content: center;
      margin: 0;
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
        margin: 0;
      }
    }
    & .search-bar {
      position: relative;
      & input {
        width: 311px;
        height: 58px;
        border-radius: 10px;
        border: 1px solid #9f9f9f;
      }
      & svg {
        position: absolute;
        top: 19px;
        right: 10px;
      }
    }
    & .categories {
      margin-left: 36px;
      & h2 {
        font-weight: 500;
        margin: 43px 0 33px;
      }
    }
    & .recent-posts {
      & h2 {
        font-weight: 500;
        margin: 77px 0 26px;
      }
    }
  }
}

@media (max-width: 767px) {
  .section-blog {
    margin: 106px 0 58px;
    & .page-number {
      display: flex;
      justify-content: center;
      margin: 0 0 80px;
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
        width: 78px;
        margin: 0;
      }
    }
    & .search-bar {
      margin: 30px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      & input {
        width: 311px;
        height: 58px;
        border-radius: 10px;
        border: 1px solid #9f9f9f;
      }
    }
    & .categories {
      display: flex;
      flex-direction: column;
      align-items: center;
      & h2 {
        font-weight: 500;
        margin: 43px 0 33px;
      }
    }
    & .recent-posts {
      display: flex;
      flex-direction: column;
      align-items: center;
      & h2 {
        font-weight: 500;
        margin: 77px 0 26px;
      }
    }
  }
}
</style>