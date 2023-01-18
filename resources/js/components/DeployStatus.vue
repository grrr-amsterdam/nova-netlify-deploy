<template>
  <div>
    <div
      v-if="deployStatus"
      class="px-3 py-4 flex flex-col items-center no-underline text-80"
    >
      <h2 class="text-center text-3xl text-80 font-light mb-3">
        Publication status
      </h2>
      <svg
        v-if="deployStatus.state === 'ready'"
        class="fill-current icon-ok w-8 h-8 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
        />
      </svg>
      <svg
        v-else-if="isPublishing(deployStatus.state)"
        class="fill-current icon-building w-8 h-8 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
        />
      </svg>
      <svg
        v-else
        class="fill-current icon-error w-8 h-8 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
        />
      </svg>

      <p class="text-center mt-4 mb-1">
        {{ getStatusDescription(deployStatus.state) }}
      </p>
      <p class="text-center font-light text-sm text-80">
        {{ formatDate(deployStatus.updated_at) }}
      </p>
    </div>
    <div
      v-else-if="requestError"
      class="px-3 py-4 flex flex-col items-center no-underline text-80"
    >
      <p>
        <strong>{{ requestError.message }}</strong>
      </p>
    </div>
    <div
      v-else
      class="px-3 py-4 flex flex-col items-center no-underline text-80"
    >
      <p>Loading publication status...</p>
    </div>
  </div>
</template>

<style scoped>
.icon-ok {
  color: #21b978;
}
.icon-building {
  color: #3490dc;
}
.icon-error {
  color: #e74444;
}
</style>

<script>
export default {
  emits: ["load"],
  methods: {
    fetchDeployStatus() {
      axios
        .get("/nova-vendor/netlify-deploy/status")
        .then((response) => {
          this.deployStatus = response.data;
          this.$emit("load", response.data);
          // Update every 5 seconds.
          setTimeout(() => this.fetchDeployStatus(), 5000);
        })
        .catch((error) => {
          this.requestError = error.response.data;
        });
    },
    getStatusDescription(state) {
      if (state === "ready") {
        return "Publication successful";
      }
      if (this.isPublishing(state)) {
        return "Publication in progress";
      }
      return "Publication failed";
    },
    formatDate(date) {
      return new Intl.DateTimeFormat("en-EN", {
        dateStyle: "long",
        timeStyle: "long",
      }).format(new Date(date));
    },
    isPublishing(state) {
      return state !== "ready";
    },
  },
  data() {
    return {
      deployStatus: null,
      requestError: null,
    };
  },
  mounted() {
    this.fetchDeployStatus();
  },
};
</script>
