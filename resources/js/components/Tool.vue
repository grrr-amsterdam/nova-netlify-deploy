<template>
    <div>
        <div class="mb-6 w-1/3">
            <card class="flex flex-col items-center justify-center card-panel">
                <netlify-deploy-status
                    @load="onStatusLoaded"
                ></netlify-deploy-status>
            </card>
        </div>

        <p class="mb-6" v-if="error">
            Error: <strong>{{ error }}</strong>
        </p>

        <p class="mb-6">
            Publish your website to Netlify to make the latest changes visible
            to the public.
        </p>

        <button
            v-on:click="publish()"
            :disabled="!!publishing"
            z
            class="btn btn-default btn-primary mb-6"
        >
            Publish website
        </button>
    </div>
</template>

<script>
export default {
    metaInfo() {
        return {
            title: "Publish a new Netlify build",
        };
    },
    props: {
        publishing: {
            type: Boolean,
            default: true,
        },
        error: String,
    },
    methods: {
        onStatusLoaded(deployStatus) {
            if (deployStatus.error_message) {
                this.error = deployStatus.error_message;
            }
            this.publishing = this.isPublishing(deployStatus.state);
        },
        publish() {
            this.publishing = true;
            axios
                .post("/nova-vendor/netlify-deploy/deploy")
                .then((response) => {})
                .catch((error) => {
                    console.log(error);
                    this.error = error.response.data.message;
                    this.publishing = false;
                });
        },
        formatDate(date) {
            return new Intl.DateTimeFormat("en-EN", {
                dateStyle: "long",
                timeStyle: "long",
            }).format(new Date(date));
        },
        isPublishing(state) {
            return (
                state === "new" || state === "building" || state === "enqueued"
            );
        },
    },
};
</script>
