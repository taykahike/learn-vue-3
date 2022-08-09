// Assignments.js
import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
  <div class="space-y-6">
<assignment-list :assignments="filters.inProgress" title="In Progress Assignments"></assignment-list>
<assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>
<assignment-create @add="add"></assignment-create>

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
    };
  },
  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },
  computed: {
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
