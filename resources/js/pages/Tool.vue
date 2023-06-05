<template>
    <div>
        <Head title="Publish a new Netlify build" />
        <div class="mb-6 w-60">
            <Card>
                <deploy-status @load="onStatusLoaded" />
            </Card>
        </div>
        <p class="mb-6" v-if="error">
            Error: <strong>{{ error }}</strong>
        </p>

        <p class="mb-6">
            Publish your website to Netlify to make the latest changes visible
            to the public.
        </p>

        <default-button @click="publish()" :disabled="!!publishing">
            Publish website
        </default-button>
    </div>
</template>

<script>
import DeployStatus from "../components/DeployStatus.vue";

export default {
    components: {
        DeployStatus,
    },
    mounted() {},
    data() {
        return {
            error: "",
            publishing: true,
        };
    },
    methods: {
        onStatusLoaded(deployStatus) {
            this.error = deployStatus.error_message =
                deployStatus.error_message || "";
            this.publishing = this.isPublishing(deployStatus.state);
        },
        publish() {
            this.publishing = true;
            Nova.request()
                .post("/nova-vendor/netlify-deploy-tool/deploy")
                .then((response) => {})
                .catch((error) => {
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
