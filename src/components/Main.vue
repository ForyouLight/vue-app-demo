<template>
    <div id="main">
        <div id="main-head">
                <p id="title-text">Peony OS</p>
                <p id="title-text1"><span id="p1">{{str2}}</span></p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            str: 'China Open Source System',
            i: 0,
            timer: 0,
            str2: "",
            
        }
    },
    methods: {
        typing() {
            if (this.i <= this.str.length) {
                    this.str2 = this.str.slice(0, this.i++) + '_';
                        this.timer = setTimeout(() => {
                            this.typing();
                        }, 100);
                    } else {
                        clearTimeout(this.timer)
                    }
                }
            },
            mounted() {
                this.typing();
            }
    }

</script>
<style>
#main-head{
    background-image: url("../assets/lcamFWetlMgLkLmDUgmZ.png");
    width: 100%;
    height: 614px;
    overflow: hidden;
}
#title-text{
    width: 100%;
    height: 100px;
    margin-top: 200px;
    margin-bottom: 0px;
    font-size: 80px;
    text-align: center;
    color: black;
}
#title-text1{
    width: 100%;
    height: 100px;
    font-size: 60px;
    text-align: center;
}
#p1{
    color: brown;
}
#p2{
    color: blueviolet;
}
#p3{
    color:fuchsia;
}
</style>
