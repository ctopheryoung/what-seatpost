<template>
  <main>
    <h2>Enter Dropperpost Measurements</h2>
    <section>
      <h3>Routing Style</h3>
      <button>Internal</button>
      <button>External</button>
    </section>
  
    <section>
      <h3>Seatpost Diameter</h3>
      <button>27.2</button>
      <button>30.9</button>
      <button>31.6</button>
      <button>34.9</button>
    </section>
  
    <section>
      <h3>Max Extension</h3>
      <p>With you current saddle fully extended (aka seated and pedaling up a hill), measure the distance from the top of your seat collar to the center of the saddle rails. Be careful! If you choose a length that is too long, you won't be able to set the extended height low enough.</p>
      <input type="text" name="maxExtension"> mm
    </section>
  
    <section>
      <h3>Max Insertion</h3>
      <p>Measure the distance from top of you seat collar down to any obstruction that would limit how far into the frame you could insert the post.</p>
      <input type="text" name="maxInsertion"> mm
    </section>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
  }
</style>