import React from 'react';

const Home = () => (
  <div className="content-container">
    <div className="content-title-group">
      <h2 className="title">My Shopping List</h2>
      <p>
        Manage your shopping list! Become a preferred customer and gain access
        to discount codes, too.
      </p>
      <p>Log in to start enjoying your benefits.</p>
      <br />
      <div class="button-group">
        <button class="button" aria-label="My List" tabindex="0">
          <a href="/products">
            <i class="fas fa-clipboard-list"></i>
            My List
          </a>
        </button>
        <button class="button" aria-label="My Discounts">
          <a href="/discounts">
            <i class="fas fa-money-bill-alt"></i>
            My Discounts
          </a>
        </button>
        <button class="button" aria-label="My Discounts">
          <a href="https://github.com/johnpapa/b20" target="_blank">
            <i class="fab fa-github"></i>
            Code in GitHub
          </a>
        </button>
      </div>{' '}
    </div>
  </div>
);

export default Home;
