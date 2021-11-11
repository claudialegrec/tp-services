<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <img src="../assets/logo-example.png" style="width:2%; margin-right:15px">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio</a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Usuario
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Mi información</a>
          <a class="dropdown-item" href="#">Mis citas</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Cerrar sesión</a>
        </div>
      </li>
    </ul>

    <ul class="nav navbar-nav navbar-right">
      <li>
        <a class="nav-link">
          <font-awesome-icon :icon="['fa', 'user']" style="margin-right:5px" />
          Sign Up
        </a>
      </li>
      <li class="nav-link"><a>|</a></li>
      <li>
        <a class="nav-link" style="margin-right:40px">
          <font-awesome-icon :icon="['fa', 'sign-in-alt']" style="margin-right:5px" />
          Login
        </a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>