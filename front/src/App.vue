<template>
    <div id="app">
        <b-container>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">XML Feed Handler 2</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-navbar-nav>
                        <b-nav-item to="/home">
                                Home
                        </b-nav-item>
                        <b-nav-item href="#" disabled>Disabled</b-nav-item>
                    </b-navbar-nav>

                <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
                    <a href class="navbar-brand" @click.prevent>XML Feed Handler</a>
                    <div class="navbar-nav mr-auto">
                        <li class="nav-item">
                        <router-link to="/home" class="nav-link">
                            <font-awesome-icon icon="home" />Home
                        </router-link>
                        </li>
                    </div>
                </nav> -->
            </b-navbar>
            <div class="container">
                <router-view />
            </div>
        </b-container>
    </div>
</template>
