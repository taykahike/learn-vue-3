// AssignmentCreate.js
export default {
  template: `
  <form @submit.prevent="add">
  <div class="border border-gray-600 rounded text-black">
  <input v-model="newAssignment" placeholder="New assignment..." class="p-2 rounded"/>
  <button type="Submit" class="bg-white p-2 ml-1 rounded">Add</button>
  </div>
  </form>
    `,
  data() {
    return {
      newAssignment: "",
    };
  },
  methods: {
    add(e) {
      this.$emit("add", this.newAssignment);
      this.newAssignment = "";
    },
  },
};
