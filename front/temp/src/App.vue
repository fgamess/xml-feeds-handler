<template>
  <div id="app">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">XML Feed Handler 2</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-nav>
          <b-nav-item to="/"> Home </b-nav-item>
          <b-nav-item to="/feed-form">Feeds</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>
