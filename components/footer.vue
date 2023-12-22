<template>
  <div class="footer">
    <div>
      <h3>Funiro.</h3>
      <p id="address">
        400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA
      </p>
    </div>
    <div>
      <h5>Links</h5>
      <p id="link">Home</p>
      <p id="link">Shop</p>
      <p id="link">About</p>
      <p id="link">Contact</p>
      <p id="link">Blog</p>
    </div>
    <div>
      <h5>Help</h5>
      <p id="link">Payment Options</p>
      <p id="link">Returns</p>
      <p id="link">Privacy Policies</p>
    </div>
    <div>
      <h5>Newsletter</h5>
      <div>
        <input type="text" placeholder="Enter Your Email Address" />
        <p>SUBSCRIBE</p>
      </div>
    </div>
  </div>

  <div class="copyright">2023 furino. All rights reverved</div>
</template>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.17);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 48px 0;
  & div {
    & h3 {
      font-size: 24px;
      margin: 0;
    }
    & h5 {
      color: #9f9f9f;
      font-size: 16px;
      font-weight: 500;
      margin: 0 0 55px;
    }
    & p {
      font-weight: 500;
      margin: 0 0 46px;
    }
    & #address {
      width: 285px;
      color: #9f9f9f;
      margin: 50px 0;
      font-weight: 400;
    }
    & p:last-child {
      margin: 0;
    }
    & #link:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    & div {
      display: flex;
      gap: 10px;
      & input {
        width: 200px;
        color: #9f9f9f;
        font-size: 14px;
        font-weight: 400;
        height: 20px;
        border: none;
        border-bottom: solid 1px black;
        padding-bottom: 3px;
      }
      & p {
        font-size: 14px;
        text-decoration: underline;
        text-underline-offset: 9px;
      }
    }
  }
}

.copyright {
  width: 1240px;
  border-top: solid 1px #d9d9d9;
  padding: 35px 0;
  margin: auto;
}
</style>