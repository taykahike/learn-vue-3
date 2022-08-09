// Assignments.js
import AssignmentList from "./AssignmentList.js";
export default {
  components: { AssignmentList },
  template: `
  <div class="space-y-6">
<assignment-list :assignments="filters.inProgress" title="In Progress Assignments"></assignment-list>
<assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>

<form @submit.prevent="add">
<div class="border border-gray-600 rounded text-black">
<input v-model="newAssignment" placeholder="New assignment" class="p-2 rounded"/>
<button type="Submit" class="bg-white p-2 ml-1 rounded">Add</button>
</div>
</form>
</div>
`,
  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1 },
        { name: "Read chapter four", complete: false, id: 2 },
        { name: "Turn in homework", complete: false, id: 3 },
        { name: "Get groceries", complete: false, id: 4 },
        { name: "Go to bank", complete: false, id: 5 },
      ],
      newAssignment: "",
    };
  },
  methods: {
    add(e) {
      this.assignments.push({
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1,
      });
      this.newAssignment = "";
    },
  },
  computed: {
    completedAssignments() {
      return this.assignments.filter((assignment) => assignment.complete);
    },
    inProgressAssignments() {
      return this.assignments.filter((assignment) => !assignment.complete);
    },
    filters() {
      return {
        completed: this.assignments.filter((assignment) => assignment.complete),
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
      };
    },
  },
};
