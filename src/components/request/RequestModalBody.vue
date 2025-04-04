<template>
    <form>
        <div class="form-control">
            <label for=""><strong>ФИО:</strong></label>
            <input type="text">
        </div>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.form-control {
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

input {
    padding: 5px;
    width: 200px;
    border-radius: 10px;
    border: 1px solid rgb(190, 184, 184);
}
</style>
