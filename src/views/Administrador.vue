<template>
  <div class="administrador">
    <header class="masthead">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1>Administrador</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Administrador"
};
</script>

<style lang="scss" scoped></style>
