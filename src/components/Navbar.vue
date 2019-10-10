<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">Titulo Provisional</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="get">Get</b-nav-item>
            <b-nav-item href="delete">Delete</b-nav-item>
            <b-nav-item href="#">Link 3</b-nav-item>
            <b-nav-item href="#">Link 4</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            </b-nav-form>

            <b-nav-item-dropdown text="Idioma" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                <em>Usuario</em>
            </template>
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            <b-dropdown-item to="singIn">Sign In</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>