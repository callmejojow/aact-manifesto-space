<template>
  <div class="p-10">
    <h1 class="text-2xl font-medium">Artists</h1>
    <p class="text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare
      vestibulum massa, vel gravida ante efficitur in. Sed euismod velit id
      justo hendrerit, a tristique ligula faucibus. Sed varius ex ac mauris
      facilisis, id consequat metus tristique. Aliquam erat volutpat.
      Vivamus placerat semper orci, id bibendum lacus dictum at.
    </p>
  </div>
</template>

<script>
export default {
  name: "ArtistPage",
  // todo: different visuals for different artist categories?
  // todo: best way to store artist data?

  data() {
    return {
      artists: [
        {
          name: "Artist 1",
          image: "https://picsum.photos/200/300",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare vestibulum massa, vel gravida ante efficitur in. Sed euismod velit id justo hendrerit, a tristique ligula faucibus. Sed varius ex ac mauris facilisis, id consequat metus tristique. Aliquam erat volutpat. Vivamus placerat semper orci, id bibendum lacus dictum at."
        },
      ]
    }
  },
}
</script>