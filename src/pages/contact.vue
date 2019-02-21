<template>
  <div id="contactContainer">
    <div class="github">
      <h3>GitHub</h3>
      <h4>Personal</h4>
      <a href="https://github.com/colinmcneil" target="_blank">
        githhub.com/colinmcneil
      </a>
      <h4>Professional</h4>
      <a href="https://github.com/squaredlabs" target="_blank">
        github.com/squaredlabs
      </a>
    </div>
    <div class="email">
      <h3>Email</h3>
      <p><a href="mailto://colinmcneil@gmail.comnp, ">colinmcneil@gmail.com</a></p>
    </div>
    <div class="location">
      <h3>Location</h3>
      <p><a href="https://maps.google.com/?q=Hartford,CT" target="_blank" noopener>Hartford, CT Area</a></p>
    </div>
  </div>
</template>
<style scoped>
#contactContainer {
  font-size: 1.7em;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
#contactContainer * {
  margin: 0.5em;
  flex-basis: 30%;
  max-width: 30%;
  min-width: 300px;
}
a {
  display: block; 
}
a {
  font-weight: bold;  
}
</style>
