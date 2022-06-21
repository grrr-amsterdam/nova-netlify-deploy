<template>
    <Card class="flex flex-col items-center justify-center">
        <deploy-status />
    </Card>
</template>

<script>
import DeployStatus from "../components/DeployStatus.vue";
export default {
    components: {
        DeployStatus,
    },
    props: ["card"],

    mounted() {
        //
    },
};
</script>
