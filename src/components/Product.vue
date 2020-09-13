<template>
<div>
  <header>
    <nav class="navbar navbar-light bg-dark">
      <form class="form-inline">
        <a class="navbar-brand text-white pl-5 pl-5" href="#">Productos</a>
        <a class="navbar-brand text-white pl-5 pl-5" href="#">Carrito</a>
      </form>
    </nav>
  </header>
  <body>
    <div class="container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-4">
            <div class="card mt-5" style="width: 18rem;">
              <img src="../assets/image/dinamiteAcme.png" alt="Card image cap" height="300" />
              <div class="card-body">
                <h5 class="card-title">Dinamita marca ACME</h5>
                <p
                  class="card-text"
                >Usada para explotar todo tipo de cosas.</p>
                <label>$20.00/Un</label><hr>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>

            <div class="card mt-5" style="width: 18rem;">
              <img src="../assets/image/tornadoKit.jpg" alt="Card image cap" height="300" />
              <div class="card-body">
                <h5 class="card-title">Tornado marca ACME</h5>
                <p
                  class="card-text"
                >Usada para crear tornados en cualquier situación.</p>
                <label>$200.00/Un</label><hr>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card mt-5" style="width: 18rem;">
              <img src="../assets/image/anvil.jpg" alt="Card image cap" height="300" />
              <div class="card-body">
                <h5 class="card-title">Yunke marca ACME</h5>
                <p
                  class="card-text"
                >Utilizada para golpear en la cabeza al coyote.</p>
                <label>$100.00/Un</label><hr>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>

            <div class="card mt-5" style="width: 18rem;">
              <img src="../assets/image/unycicle.png" alt="Card image cap" height="300" />
              <div class="card-body">
                <h5 class="card-title">Mono-Ciclo marca ACME</h5>
                <p
                  class="card-text"
                >Usada para viajes extremadamente rápidos.</p>
                <label>$100.00/Un</label><hr>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card mt-5" style="width: 18rem;">
              <img src="../assets/image/magnet.jpg" alt="Card image cap" height="300" />
              <div class="card-body">
                <h5 class="card-title">Iman marca ACME</h5>
                <p
                  class="card-text"
                >Iman magnitico, atrae todo tipo de cosas metalicas.</p>
                <label>$50.00/Un</label><hr>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div class="card mt-5" style="width: 18rem;">
              <img src="../assets/image/tonic.png" alt="Card image cap" height="300" />
              <div class="card-body">
                <h5 class="card-title">Tonico de velocidad marca ACME</h5>
                <p
                  class="card-text"
                >Usada para hacerte correr extremadamente rápido.</p>
                <label>$50.00/Un</label><hr>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>