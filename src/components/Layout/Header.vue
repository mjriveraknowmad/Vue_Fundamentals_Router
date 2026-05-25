<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Product
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/products">Product List</router-link></li>
              <li><router-link class="dropdown-item" to="/product/1">Product Detail 1</router-link></li>
              <li><router-link class="dropdown-item" to="/product/2">Product Detail 2</router-link></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <router-link class="nav-link" to="/login">Login</router-link>
        </form>
      </div>
    </div>
  </nav>
</template>
