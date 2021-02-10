<template>
  <div class="footer">
      <footer class="text-center bg-dark text-white py-3">
          <h4>&copy; {{year}} - Canver</h4>
      </footer>
  </div>
</template>

<script>
export default {
    data: () => ({
        year: new Date().getFullYear(),
    })
}
</script>

<style>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>