<template>
  <div class="center">
    <div id="appp">
      <h2 class="h2">{{ my }}</h2>

      <div class="main">
        <input
          class="maininput"
          v-model="todoincludes"
          type="text"
          placeholder="addTodo"
        />
        <button class="mainbutton" @click="addTodo">+</button>
      </div>
      <span v-show="todoList.length >= 1" class="span"
        >Количество задач {{ todoList.length }}</span
      >
      <div v-for="(todoincludes, index) in todoList" :key="index">
        <p class="divp">
          <span class="todo__id">{{ index + 1 }}.</span>
          <span class="todo__text" v-bind:class="{ active: isActive }">{{
            todoincludes
          }}</span>
          <!-- <input  class="todo__checkbox" type="checkbox" /> -->
          <span @click="deleteElem(index)" class="todo__krest">×</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",

  data() {
    return {
      todoList: [],
      my: "TODOLIST (Vue.js)",
      todoincludes: " ",
      doIS: false,
      id: 1,
      isActive: false,
      object: [10, 20, 30, 40, 50, 60],
    };
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todoincludes);
      this.todoincludes = " ";
      return;
    },
    deleteElem(index) {
      this.todoList.splice(index, 1);
    },
    checkboxChang() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
  background: rgb(55, 94, 202);
  text-align: center;
  width: 100%;
  height: 100%;
}

.span {
  font-size: 30px;
  font-weight: bold;
  color: black;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.h2 {
  display: block;
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  color: black;
  margin-top: 35px;
  margin-bottom: 35px;
}
.maininput {
  width: 700px;
  padding: 20px 0px 20px 10px;
  border: 2px solid black;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: rgb(55, 94, 202);
  font-weight: bold;
  &:focus {
    border: 2px solid rgb(148, 148, 48);
  }
}

.mainbutton {
  padding: 20px;
  width: 80px;
  cursor: pointer;
  font-size: 24px;
  color: black;
  color: white;
  background: rgb(55, 94, 202);
}

#appp {
  display: block;
  align-items: flex-start;
  position: relative;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  width: 800px;
  height: 800px;
  background: white;
}
.todo {
  &__id {
    font-size: 24px;
    font-weight: 500;
    color: black;

    margin-left: 15px;
    margin-right: 15px;
    display: block;
  }

  &__text {
    font-size: 24px;
    font-weight: 500;
    color: black;
    padding: 20px;
    width: 620px;
    text-align: start;
    display: block;
  }

  &__krest {
    color: black;
    display: block;
    font-size: 64px;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
  }
  &__checkbox {
    cursor: pointer;
    display: block;
    width: 30px;
    height: 30px;
    margin: 0px 20px;
  }
}
.active {
  text-decoration: line-through;
}
.delete {
  font-size: 70px;
  color: black;

  margin-left: 10px;
  font-weight: bold;
  display: block;
  cursor: pointer;
}
.main {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px;
  margin-bottom: 20px;
}
.divp {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: -1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: white;
  transition: all 0.3s linear 0s;
  &:hover {
    background: rgb(21, 119, 211);
    transition: all 0.3s linear 0s;
  }
}
</style>
