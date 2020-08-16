<template>
    <div class="test">
        <div class="img-box"></div>

        {{ testMsg }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            testMsg: 'Test Mag'
        }
    }
}
</script>

// <style lang="scss">
    // .img-box {
    //     max-width: 300px;
    //     min-height: 300px;
    //     margin-right: auto;
    //     margin-left: auto;
    //     background-image: url('../../images/layers-2x.png');
    //     background-repeat: no-repeat;

    //     > img {
    //         width: 100%;
    //     }
    // }
// </style>